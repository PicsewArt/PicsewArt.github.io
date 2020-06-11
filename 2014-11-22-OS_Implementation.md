---
category: "Other"
cave: true
hero:
  format: 'jpeg'
  url: 'post/other.jpg'
quote: true
title:  "OS Implementation"
tags: [OS, System, Quote]
summary: "OS Implementation"
---
### Bootloader

我们知道计算机启动是从BIOS开始，再由BIOS决定从哪个设备启动以及启动顺序，比如先从DVD启动再从硬盘启动等。计算机启动后，BIOS根据配置找到启动设备，并读取这个设备的第0个扇区，把这个扇区的内容加载到0x7c00,之后让CPU从0x7c00开始执行，这时BIOS已经交出了计算机的控制权，由被加载的扇区程序接管计算机。

这第一个扇区的程序就叫Boot，它一般做一些准备工作，把操作系统内核加载进内存，并把控制权交给内核。由于Boot只能有一个扇区大小，即512字节，它所能做的工作很有限，因此它有可能不直接加载内核，而是加载一个叫Loader的程序，再由Loader加载内核。因为Loader不是BIOS直接加载的，所以它可以突破512字节的程序大小限制 (在实模式下理论上可以达到1M) 。如果Boot没有加载Loader而直接加载内核，我们可以把它叫做Bootloader。

Bootloader加载内核就要读取文件，在实模式下可以用BIOS的INT 13h中断。内核文件放在哪里，怎么查找读取，这里牵涉到文件系统，Bootloader要从硬盘 (软盘) 的文件系统中查找内核文件，因此Bootloader需要解析文件系统的能力。GRUB是一个专业的Bootloader，它对这些提供了很好的支持。

对于一个Toy操作系统来说，可以简单处理，把内核文件放到Bootloader之后，即从软盘的第1个扇区开始，这样我们可以不需要支持文件系统，直接读取扇区数据加载到内存即可。

### 实模式到保护模式

我们知道Intel x86系列CPU有实模式和保护模式，实模式从8086开始就有，保护模式从80386开始引入。为了兼容，Intel x86系列CPU都支持实模式。现代操作系统都是运行在保护模式下 (Intel x86系列CPU) 。计算机启动时，默认的工作模式是实模式，为了让内核能运行在保护模式下，Bootloader需要从实模式切换到保护模式，切换步骤如下：

准备好GDT(Global Descriptor Table)
关中断
加载GDT到GDTR寄存器
开启A20，让CPU寻址大于1M
开启CPU的保护模式，即把cr0寄存器第一个bit置1
跳转到保护模式代码
GDT是Intel CPU保护模式运行的核心数据结构，所有保护模式操作的数据都从GDT表开始查找，这里有GDT的详细介绍。

GDT中的每一个表项由8字节表示，如下图：

* ![GDT Descriptor](https://wiki.osdev.org/images/f/f3/GDT_Entry.png)

其中Access Byte和Flags如下图：

* ![GDT bits](https://wiki.osdev.org/images/1/1b/Gdt_bits.png)

这里是详细说明。

GDTR是一个6字节的寄存器，有4字节表示GDT表的基地址，2字节表示GDT表的大小，即最大65536 (实际值是65535，16位最大值是65535) ，每个表项8字节，那么GDT表最多可以有8192项。

实模式的寻址总线是20bits，为了让寻址超过1M，需要开启A20，可以通过以下指令开启：

```c
	in al, 0x92
	or al, 2
	out 0x92, al
```

把上述步骤完成之后，我们就进入保护模式了。在保护模式下我们要使用GDT通过GDT Selector完成，它是GDT表项相对于起始地址的偏移，因此它的值一般是0x0 0x8 0x10 0x18等。

### ELF文件

Bootloader程序是原始可执行文件，如果程序由汇编写成，汇编编译器编译生成的文件就是原始可执行文件，也可以使用C语言编写，编译成可执行文件之后通过objcopy转换成原始可执行文件，这篇文章介绍了用C语言写Bootloader。

那么内核文件是什么格式的呢？跟Bootloader一样的当然可以。内核一般使用C语言编写，每次编译链接完成之后调用objcopy是可以的。我们也可以支持通用的可执行文件格式，ELF(Executable and Linkable Format)即是一种通用的格式，它的维基百科。

ELF文件有两种视图 (View) ，链接视图和执行视图，如下图：

* ![ELF Views](https://airtrack.me/images/elf_views.jpg)

链接视图通过Section Header Table描述，执行视图通过Program Header Table描述。Section Header Table描述了所有Section的信息，包括所在的文件偏移和大小等；Program Header Table描述了所有Segment的信息，即Text Segment, Data Segment和BSS Segment，每个Segment中包含了一个或多个Section。

对于加载可执行文件，我们只需关注执行视图，即解析ELF文件，遍历Program Header Table中的每一项，把每个Program Header描述的Segment加载到对应的虚拟地址即可，然后从ELF header中取出Entry的地址，跳转过去就开始执行了。对于ELF格式的内核文件来说，这个工作就需要由Bootloader完成。Bootloader支持ELF内核文件加载之后，用C语言编写的内核编译完成之后就不需要objcopy了。

从 Bootloader 开始到内核载入使用的都是平坦内存，即所有地址对应实际的物理地址。现代操作系统都使用分页来管理内存，分页可以让每个进程都有完整的虚拟地址空间，进程间的虚拟地址空间相互隔离以提供页层级的保护。另外分页可以让物理内存少于虚拟地址空间，同时可以使用磁盘存储暂时未使用的内存页，提供更多的「内存」。

### 分页

分页通过 CPU 的 MMU(Memory Management Unit) 完成，MMU 通过当前的分页表完成虚拟地址到物理地址的转换。在 x86 下 MMU 通过两级分页表 (也可以开启三级) 完成地址转换，这两级分别是页目录(Page Directory)和页表(Page Table)。在 x86 下，由 cr3 寄存器存储页目录的地址 (物理地址) ，页目录和页表都包含 1024 项，每项 4 字节，因此页目录和页表大小为 4KB ，按照 4KB 一页的话，刚好占用一页。

MMU 将虚拟地址转换成物理地址的方式是，取虚拟地址的 22~31bits 表示页目录的下标，获得页目录项定位到页表，再取 12~21bits 表示页表的下标，获得页表项定位到页，最后取 0~11bits 表示页偏移。页目录项和页表项的下标分别用 10bits 表示，刚好最大 1024 项，页内偏移用 12bits 表示，刚好 4KB。

页目录项结构如下：

* ![Page Directory](https://wiki.osdev.org/images/9/94/Page_dir.png)

其中 S 表示页大小是 4KB 还是 4MB，P 表示页表是否在内存中，如果在内存中，那么 12～31 bits 存储了 4KB 对齐的页表地址 (同样是物理地址) ，其它 bit 的含义请参考这里。

页表项结构如下：

* ![Page Table](https://wiki.osdev.org/images/9/9b/Page_table.png)

同样的，P 表示此页是否在内存中，如果在内存中，12~31 bits 存储了页的地址。

我们知道了页目录和页表的结构，准备好页目录和页表，就可以开启分页了，开启分页只需把页目录地址放到 cr3 寄存器中，并把 cr0 的最高 bit 置 1。通过页目录项，我们可以发现页表不需要都存在内存当中，当访问一个虚拟地址，它对应的页表或者页不存在内存中时会触发 Page Fault 异常，我们可以在异常处理函数中完成页表或者页的分配，理论上开启分页只需要准备好页目录。

### 分页前后

准备好页目录页表，设置 cr3 和 cr0，开启了分页之后，内核的所有地址都变成了虚拟地址，所有的地址都要通过 MMU 映射到物理地址再访问内存。这一变化是需要小心注意的，开启分页前，访问的所有地址是物理地址，开启分页之后，所有的地址都变成了虚拟地址，因此，如果分页由内核来完成，那么内核就需要考虑到前后的变化，即有一部分代码运行在物理地址下，其它代码都运行在虚拟地址下；如果分页由 Bootloader 完成，那么 Bootloader 需要注意这个变化，并正确跳转到内核，让内核完整运行在虚拟地址下。

上一篇我把内核展开到从 0x100000 开始的物理内存中，编译链接内核的时候也把代码段的地址指定到 0x100000 的地址。开启分页之后，内核一般运行在高地址 (比如 Linux 内核地址从 0x80000000 开始，Windows 从 0xC0000000 开始) ，而内核同样是展开到从 0x100000 开始的物理内存中。我选择把内核的虚拟地址链接到从 0xC0100000 开始，并把这个虚拟地址映射到 0x100000 的物理地址，开启分页之前运行的代码，凡是涉及到地址的操作，我都会把虚拟地址调整为物理地址再操作，开启分页之后，所有虚拟地址就可以正常运行了。

### 物理内存管理

操作系统采用分页方式管理内存，因此物理内存的管理也需按照页的方式管理，在 Page Fault 异常触发时，在异常处理函数中分配新的物理页并把它映射到分页表中。这里牵涉到空闲物理内存页的分配和释放，我们很容易想到一种直观的方法，把所有空闲内存页用链表串联起来，分配释放一页只需对链表进行操作。这种方式管理对进程的物理页分配简单有效，但是对内核本身使用的内存分配释放会导致内存利用率不高，因为这种方式管理的最大连续内存是一页，而内核中经常会分配大对象，连续多页的物理内存有更好的利用率。Linux 采用 Buddy memory allocation 方式管理物理内存，使用 Slab/Slub 管理内核对象的分配释放。

我的实现也采用 Buddy 方式管理物理内存，把空闲内存页用多层级的 Buddy 方式管理，分别是 order 0 ~ order 10，表示 2^order 页连续内存页块，即 order 0 管理单页的空闲内存块，order 10 管理连续 1024 页的空闲内存块。分配内存时，算出最佳的 order，在相应的 order 层级里分配一块内存块，如果当前 order 中没有可用的空闲内存块，就向 order + 1 层级中借一块，并把借来的空闲内存块平分成 2 块 order 层级的空闲内存块，其中一块当作分配结果返回，另一块放入到 order 层级中待以后分配使用。当第 order 块的内存使用完释放时，把这块释放的内存块放入 order 层级时，判断与它相连的同样大小的内存块是否在 order 层级中，如果存在，把它和它的 Buddy 合并成一个 order + 1 的内存块放入到 order + 1的层级中。

### 内存管理器初始化之前

在内存管理初始化之前，内核没有动态内存分配能力，因此很多时候我们需要使用静态全局变量。内存管理器初始化时，可能会使用到动态内存分配，这就出现鸡与蛋的问题，为了解决这个问题，通常会实现一个简单的 Boot Allocator 用在内存管理器初始化之前分配动态内存。我的实现是从内核展开的末尾位置开始建立一个只分配不释放的 Boot Allocator，等到内存管理器初始化完成之后，Boot Allocator 的使命便完成了。

另外还有一个问题，我们管理物理内存，需要知道安装了多少物理内存，因此我们要探测安装了多少物理内存，这里介绍了几种探测方法，我使用的是 BIOS 的 INT 0x15, EAX = 0xE820 函数，它由 Bootloader 调用完成，最后通过参数把它传递给操作系统内核。

前面提到当访问的页表和页不在内存中时会触发 Page Fault 异常，操作系统需要在异常处理函数中分配内存页并设置好相应的分页表项。异常是一种中断类型，注册异常处理函数就是注册中断处理函数，中断处理函数注册在一个叫 IDT(Interrupt Descriptor Table) 的地方。

### IDT

中断处理函数在实模式下注册在 IVT(Interrput Vector Table) 中，在保护模式下注册在 IDT(Interrupt Descriptor Table) 。IDT是包含 256 项的表，表项的结构如下：

```c
	struct idt_entry
	{
	    uint16_t offset_0;
	    uint16_t selector;
	    uint8_t zero;
	    uint8_t type_attr;
	    uint16_t offset_1;
	};
```

其中 selector 是 GDT 的代码段选择器，offerset_0 和 offset_1 分别表示中断处理函数 offset 地址的 0~15bits 和 16~31bits ，type_attr 的结构如下：

	  7                           0
	+---+---+---+---+---+---+---+---+
	| P |  DPL  | S |    GateType   |
	+---+---+---+---+---+---+---+---+

P表示是否存在，DPL 表示描述符的最低调用权限，GateType 定义了中断类型，32 位的中断类型分别是：

* Task Gate
* Interrupt Gate
* Trap Gate

Interrupt Gate 和 Trap Gate 相似，区别在前者执行中断处理函数前后会自动关闭和开启中断。

准备好 IDT ，设置好 IDTR 寄存器就把 IDT 都设置好了。IDTR 寄存器结构如下：

```c
struct idtr
{
		uint16_t limit;
		struct idt_entry *base;
};
```

limit 是整个表的大小 -1 字节，base 指向 IDT 表，设置 IDTR 寄存器的指令是 lidt。

###异常和硬件中断

了解 IDT 的结构了之后，我们可以设置异常和硬件中断的 ISR(Interrupt Service Routine)。对于异常，我们只要知道有哪些异常会触发，触发的逻辑是什么样，实现合适的异常处理函数即可 (这里是异常列表) 。对于硬件中断，需要通过一个硬件完成—— PIC(Programmable Interrupt Controller)。

PIC 分为 Master 和 Slave ，每个 PIC 都有一个命令端口和一个数据端口，通过这两个端口可以读写 PIC 的寄存器。每个 PIC 都可连 8 个输入设备，x86下 Slave 需要通过 line 2 连接到 Master 上才能响应输入设备，连接的输入设备有中断请求的时候会产生 IRQ(Interrupt Request)，Master 产生 IRQ 0 ~ IRQ 7，Slave 产生 IRQ 8 ~ IRQ 15。保护模式下可以设定 PIC 产生的中断对应的 ISR 所在 IDT 中的 offset，通常设置为从 0x20 开始，到 0x2F 结束 (0x0 到 0x1F 被异常占用) 。

* PIC 的端口号如下表：

<table border="1" class="table table-bordered table-striped table-condensed">
<tr><th>PIC</th><th>IO Port</th></tr>
<tr><th>`Master Command`</th><th>`0x20`</th></tr>
<tr><th>`Master Data`</th><th>`0x21`</th></tr>
<tr><th>`Slave Command`</th><th>`0xA0`</th></tr>
<tr><th>`Slave Data`</th><th>`0xA1`</th></tr>
</table>

* PIC 产生的标准 IRQ 如下表：

<table border="1" class="table table-bordered table-striped table-condensed">
<tr><th>IRQ</th><th>Description</th></tr>
<tr><th>0</th><th>`Programmable Interrupt Timer Interrupt`</th></tr>
<tr><th>1</th><th>`Keyboard Interrupt`</th></tr>
<tr><th>2</th><th>`Cascade (used internally by the two PICs. never raised)`</th></tr>
<tr><th>3</th><th>`COM2 (if enabled)`</th></tr>
<tr><th>4</th><th>`COM1 (if enabled)`</th></tr>
<tr><th>5</th><th>`LPT2 (if enabled)`</th></tr>
<tr><th>6</th><th>`Floppy Disk`</th></tr>
<tr><th>7</th><th>`LPT1 / Unreliable "spurious" interrupt (usually)`</th></tr>
<tr><th>8</th><th>`CMOS real-time clock (if enabled)`</th></tr>
<tr><th>9</th><th>`Free for peripherals / legacy SCSI / NIC`</th></tr>
<tr><th>10</th><th>`Free for peripherals / SCSI / NIC`</th></tr>
<tr><th>11</th><th>`Free for peripherals / SCSI / NIC`</th></tr>
<tr><th>12</th><th>`PS2 Mouse`</th></tr>
<tr><th>13</th><th>`FPU / Coprocessor / Inter-processor`</th></tr>
<tr><th>14</th><th>`Primary ATA Hard Disk`</th></tr>
<tr><th>15</th><th>`Secondary ATA Hard Disk`</th></tr>
</table>

PIC 初始化的时候，要设置 Master 和 Slave 通过 line 2 相连，同时设置好 IRQ 对应的 ISR 在 IDT 中的起始中断号。PIC 提供一个 IMR(Interrupt Mask Register) 寄存器来标识中断是否屏蔽，设置 bit 位会屏蔽对应的 IRQ。当 IMR 未设置，并且 CPU 的中断打开，如果有设备中断请求发生，那么 ISR 将会执行。ISR 执行完毕之后要通知 PIC 中断处理完成，需要向 PIC 的命令端口写入一个 EOI(End Of Interrupt) 命令(0x20)，中断请求如果来自 Slave，那么需要先往 Slave 命令端口写入 EOI，再向 Master 命令端口写入 EOI。

### Spurious IRQs

由于 CPU 与 PIC 之间的竞争条件可能会产生 IRQ 7 (Master 产生)  和 IRQ 15 (Slave 产生)  的 Spurious IRQs。为了处理这种情况，我们要知道什么时候是无效的 IRQ，通过判断 IRR(Interrupt Request Register) 寄存器的值可以获知哪些 IRQ 发生了，这个寄存器的每个 bit 表示相应的 IRQ 是否发生。在 IRQ 7 和 IRQ 15 的 ISR 中先读取 IRR，然后判断对应的 bit 位是否被设置，如果没有设置，那么表示当前是一个 Spurious IRQ，不需要处理，也不需要写入 EOI，直接返回即可 (如果是 Slave PIC 产生的，需要往 Master PIC 写入 EOI，由于 Master 不知道 Slave 产生的 IRQ 是不是 Spurious 的) 。

### PIT

现代操作系统都有抢占式多任务能力，通常是通过设置一个硬件 Timer，一个进程的执行时间到了之后切换成另一个进程执行，这个硬件 Timer 是 PIT(Programmable Interval Timer)。PIT 有多个 channel 和多种工作 mode，其中 channel 0 连接到 PIC 会产生 IRQ 0，mode 2 和 mode 3 是常用的工作模式。操作系统初始化的时候设置好 PIT，同时设置好 PIT 产生的 IRQ 0 的 ISR，在这个 ISR 中操作系统就可以执行多任务的调度。

### 中断处理结束

IDT 中设置的 ISR 返回时不能使用普通的函数返回指令 ret，需要使用一条特殊的返回指令 iret。在了解了这些之后，我们有了响应外部设备的能力，可以接入外部输入设备了，下一步接入键盘。
