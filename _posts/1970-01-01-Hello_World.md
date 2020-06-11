---
title: "Hello world collections"
category: "Technology"
tags: ["Hello World"]
date: 19700101T000000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0011.jpg'
---
"Hello World" is the first program one usually writes when learning a new programming language. Having first been mentioned in Brian Kernighan's [tutorial to the B programming language](https://www.bell-labs.com/usr/dmr/www/bintro.html), it became widely known through Kernighan & Ritchie's 1978 book that introduced "[The C Programming Language](http://en.wikipedia.org/wiki/The_C_Programming_Language_(book))", where it read like this:

```c
main() {
    printf("hello, world\n");
}
```

Since then, Hello World has been implemented in just about every programming language on the planet. This collection includes 600 Hello World programs in as many more-or-less well known programming languages, plus [78 human languages](#Human).

{% include image_frame.html image='/assets/images/posts/helloworld/qrcode.png' %}

# #

## قلب

```shell
Hello world in قلب

(قول "مرحبا يا عالم!")
```

## μλ

```shell
// Hello world in μλ

>  EEEEEEEΔΔΘς       v
v  ςΘΔEEEEEEEEEE     <
>  EEEEEEEEEEEδδΘς   v
v  ΘδδEEEEEEEEEEEς   <
>  ς EEEEEEEEEEEΔΘ   v
v  ΘΔΔΔΔEEEEς        <
>  ςEEEΔΔΘ           v
v  ΘδEEEEEEEEEEEEς   <
>  ςEEEEEEEEEEEΔΘ    v
v  ΘΔΔΔΔEEEEEEEEEEEς <
>  ςEEEEEEEEEEEδδΘ   v
v  ΘEEEEEEEEEEς      <
>  ςEEEΔΔΔΘ          λ
```

## 1C-Enterprise

```shell
// Hello World in 1C:Enterprise built-in script language

Message("Hello, World!");
```

## 4D

```shell
// Hello world in 4D, formerly known as 4th Dimension

ALERT("Hello World!")
```

## 4Test

```shell
// Hello World in 4Test

testcase printHelloWorld()
print("Hello World!")

```

## 8th

```shell
\ Hello world in 8th

"Hello, world!
" .
```

# A

## ABAP4

```shell
REPORT ZHB00001.
*Hello world in ABAP/4 *
WRITE: 'Hello world'.

```

## ABC

```shell
\ Hello world in ABC

WRITE "Hello, World!" /
```

## ACPI Source Language

```shell
// Hello world in ACPI Source Language

Scope(\) {
	Method(_WAK) {
		Store ("Hello World", Debug)
		Return(Package(2){0x00000000,0})
	}
}
```

## ACS

```shell
// Hello world in Action Code Script (scripting language for the Hexen/Doom game engine)

#include "zcommon.acs"

script 1 ENTER
{
    print(s:"Hello World!");
}
```

## Action!

```shell
; Hello world in Action! programming language for the Atari 8-Bit computers

PROC Main()
  PrintE("Hello World!")
RETURN
```

## Actionscript (Flash 5)

```shell
// Hello World in Actionscript (up to Flash 5, IDE only)

trace ("Hello World");

```

## ActionScript (Flash 8)

```shell
// Hello World in ActionScript 2.0 (Flash 8)
class HelloWorld
{
    private var helloWorldField:TextField;

    public function HelloWorld( mc:MovieClip )
    {
        mc.helloWorldField = mc.createTextField("helloWorldField", mc.getNextHighestDepth(), 0, 0, 100, 100);
        mc.helloWorldField.autoSize = "left";
	mc.helloWorldField.html = true;
        mc.helloWorldField.htmlText = '<font size="20" color="#0000FF">Hello World!</font>';
    }
}

// on a frame
import HelloWorld;
var hw:HelloWorld = new HelloWorld( this );
```

## Actionscript (Flash MX)

```shell
// Hello World in Actionscript (Flash MX onwards)


_root.createTextField("mytext",1,100,100,300,100);
mytext.multiline = true;
mytext.wordWrap = true;
mytext.border = false;

myformat = new TextFormat();
myformat.color = 0xff0000;
myformat.bullet = false;
myformat.underline = true;

mytext.text = "Hello World!";
mytext.setTextFormat(myformat);

```

## ActionScript 3.0

```shell
// Hello World in ActionScript 3. Place code in the first frame Actions.
var t:TextField=new TextField();
t.text="Hello World!";
addChild(t);
```

## Ada

```shell
-- Hello World in Ada

with Text_IO;
procedure Hello_World is

begin
  Text_IO.Put_Line("Hello World!");
end Hello_World;

```

## ADVPL

```shell
// Hello World in ADVPL

User Function Hello()
Local cMsg := "Hello, world!"
conout(cMsg)
MsgInfo(cMsg)
Return

```

## Agda

```shell
-- Hello world in Agda

module hello where
  open import IO
  main = run (putStrLn "Hello, World!")
```

## aheui

Hello world in aheui. This language has no comments.

```shell
밤밣따빠밣밟따뿌
빠맣파빨받밤뚜뭏
돋밬탕빠맣붏두붇
볻뫃박발뚷투뭏붖
뫃도뫃희멓뭏뭏붘
뫃봌토범더벌뿌뚜
뽑뽀멓멓더벓뻐뚠
뽀덩벐멓뻐덕더벅
```

## Algol-60

```shell
'BEGIN'
  'COMMENT' Hello World in Algol 60;
  OUTPUT(4,'(''('Hello World!')',/')')
'END'

```

## Algol-68

```shell
( ## Hello World in Algol 68 # print(("Hello World!",newline)))

```

## Alpha-Five-Xbasic

```shell
' Hello World in Alpha Five Xbasic

ui_msg_box("The 'Hello World' Collection", "Hello World", UI_ATTENTION_SYMBOL)

```

## Amazon States Language

```shell
{
    "Comment": "Hello world in Amazon States Language",
    "StartAt": "Hello World",
    "States": {
    "Hello World": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:HelloWorld",
      "End": true
    }
  }
}
```

## amharic

```html
Hello World in amharic (in JavaScript)


<%@ language="javascript" %>
<html><body>
<%
Response.Write('Hello World!');
%>
</body></html>

```

## Amiga-E

```shell
-> Hello World in Amiga-E

PROC main() IS WriteF('Hello World
')

```

## AMOS

```shell
Rem Hello world in AMOS

Print "Hello world!"
```

## Andl

```shell
// Hello world in Andl

'Hello world!'

```

## AngelScript

```shell
// Hello world in AngelScript

void main() { print("Hello world
"); }
```

## Anguish

{% include alert.html type='success' title='Link' msg='Hello world in Anguish.' iframe='http://blogs.perl.org/users/zoffix_znet/2016/05/anguish-invisible-programming-language-and-invisible-data-theft.html' %}

## Ante

```shell
Hello world in Ante. This language has no comments.

9♦8♥J♦A♦2♣3♥7♠J♦A♦7♦J♦J♦A♦3♦J♦5♥6♦4♥J♥A♥6♠6♠J♥A♦8♦J♦A♦8♠J♦A♦3♦J♦A♦6♠J♦A♦8♠J♦A♥3♦2♠J♥A♥2♣6♠J♥
```

## APC

```shell
// Hello World in the APC language for probes

probe program
{
    on_entry log ("Hello, world!\n");
}
```

## APL

```shell
⍝ Hello World in APL

⎕←\'Hello World\'
```

## AppleScript

```applescript
-- "Hello World" in AppleScript:

display dialog "Hello World"

```

## Arduino

```shell
// Hello world in the Arduino programming language

void setup()
{
Serial.begin(9600);
Serial.println("Hello, world!");
}

void loop()
{

}
```

## Arena

```shell
// Hello world in Arena

print("Hello World!");
```

## Arendelle

```shell
// Hello world in Arendelle

"Hello, World!"
```

## Argh!

```shell
Hello World in Argh!. No comment character exists.

j       world
lppppppPPPPPPsrfj
hello,      *  j
					qPh
```

## ArnoldC

```shell
# Hello world in ArnoldC

IT'S SHOWTIME
TALK TO THE HAND "Hello World"
YOU HAVE BEEN TERMINATED
```

## AsciiDots

```shell
`` Hello world in AsciiDots

.-$"Hello, World!"
```

## ASP (C♯)

```shell
<!-- Hello World for ASP.NET using C# -->
<% @ Page Language="C#" %>
<% ="Hello World!" %>
```

## ASP (JavaScript)

```html
Hello World for Microsoft ASP (in JavaScript)

<%@ language="javascript" %>
<html><body>
<%
Response.Write('Hello World!');
%>
</body></html>

```

## ASP (VBE)

```html
<!-- Hello World in ASP-VBE (Visual Basic Script Encided) -->
<html>
<script language="VBScript.Encode">#@~^HQAAAA==@#@&HdTAK6PrCsVKP    WMV[Zr@#@&HwcAAA==^#~@</script>
</html>

```

## ASP (VBS)

```html
Hello World for Microsoft ASP (in VBScript)


<%@ language="vbscript" %>
<html><body>
<%
Response.write "Hello World!"
%>
</body></html>

```

## ASP.NET

```shell
<!-- Hello World in ASP.NET -->
<%= "Hello World!" %>
```

## Assembler (6502, Apple II)

```shell
**********************************
*                                *
*      HELLO WORLD FOR 6502      *
*    APPLE ][, MERLIN ASSEMBLER  *
*                                *
**********************************

STROUT 	EQU	$DB3A ;OUTPUTS AY-POINTED NULL TERMINATED STRING
	LDY	#>HELLO
	LDA	#<HELLO
	JMP	STROUT

HELLO	ASC	"HELLO WORLD!",00
```

## Assembler (6502, C64)

```shell
; Hello World for 6502 Assembler (C64)

ldy #0
beq in
loop:
jsr $ffd2
iny
in:
lda hello,y
bne loop
rts
hello: .tx "Hello World!"
	 .by 13,10,0

```

## Assembler (68000, Amiga)

```shell
; Hello World in 68000 Assembler for dos.library (Amiga)

		move.l  #DOS
		move.l  4.w,a6
		jsr     -$0198(a6)      ;OldOpenLibrary
		move.l  d0,a6
		beq.s   .Out
		move.l  #HelloWorld,d1

A)      moveq   #13,d2
		jsr     -$03AE(a6)      ;WriteChars

B)      jsr     -$03B4          ;PutStr

		move.l  a6,a1
		move.l  4.w,a6
		jsr     -$019E(a6)      ;CloseLibrary
.Out    rts

DOS          dc.b    'dos.library',0
HelloWorld   dc.b    'Hello World!',$A,0

```

## Assembler (68000, Atari ST)

```shell
; Hello World in 68000 Assembler (Atari ST)

     move.l #helloworld,-(A7)
     move   #9,-(A7)
     trap   #1
     addq.l #6,A7
     move   #0,-(A7)
     trap   #1
helloworld:
     dc.b "Hello World!",$0d,$0a,0
```

## Assembler (68008)

```shell
; Hello World in 68008 Assembler (Sinclar QL)

     move.l #0,a0
     lea.l  mess,a1
     move.w $d0,a2
     jsr    (a2)
     rts
mess dc.w   12
     dc.b   'Hello World!',10
     end
```

## Assembler (8051)

```shell
-- Hello World in Assembler for the Intel 8051 (MSC51)

 Org 0

   mov dptr,#msg
   mov R0,#30h  
loop:
   clr a
   movc a,@a+dptr
   jz end
   mov @R0,a
   inc R0
   inc dptr
   sjmp  loop

end:
    jmp $

msg:
    db 'Hello World",0
```

## Assembler (ARM, Android)

```shell
/* Hello world in ARM assembly (Android devices) */

.data

msg:
.ascii      "Hello, World!
"
len = . - msg

.text

.globl _start
_start:
mov     %r0, $1
ldr     %r1, =msg
ldr     %r2, =len
mov     %r7, $4
swi     $0
mov     %r0, $0
mov     %r7, $1
swi     $0
```

## Assembler (ARM, RISC OS)

```shell
; Hello World in ARM code assembler, with RISC OS software interrupt

SWI "OS_WriteS"
EQUS "Hello World!"
EQUB 0
ALIGN
MOV PC,R14

```

## Assembler (DG-Nova)

```shell
										.TITL HELLO
02                      ; "HELLO, WORLD" FOR NOVA RUNNING RDOS
03                      ; USES PCHAR SYSTEM CALL
04                      .NREL
05                      .ENT START
06
07              START:
08 00000'022424 DOCHAR: LDA 0,@PMSG     ; LOAD AC0 WITH NEXT CHARACTER,
09 00001'101015         MOV# 0,0,SNR    ; TEST AC0;
10 00002'000412          JMP DONE ; SKIPPED IF NONZERO
11 00003'006017         .SYSTM
12 00004'010000         .PCHAR          ; PRINT FIRST
13 00005'000413          JMP ER ; SKIPPED IF OK
14 00006'101300         MOVS 0,0        ; SWAP BYTES
15 00007'006017         .SYSTM
16 00010'010000         .PCHAR          ; PRINT SECOND
17 00011'000407          JMP ER ; SKIPPED IF OK
18 00012'010412         ISZ PMSG        ; POINT TO NEXT WORD
19 00013'000765         JMP DOCHAR      ; GO AROUND AGAIN
20
21 00014'006017 DONE:   .SYSTM          ; NORMAL EXIT
22 00015'004400         .RTN
23 00016'000402          JMP ER
24 00017'063077         HALT
25 00020'006017 ER:     .SYSTM          ; ERROR EXIT
26 00021'006400         .ERTN
27 00022'063077          HALT
28 00023'063077         HALT
29
30 00024'000025'PMSG:   .+1     ; ADDRESS OF FIRST WORD OF TEXT
31                      ; NOTE BYTES ARE PACKED RIGHT-TO-LEFT BY DEFAULT
32 00025'042510         .TXT /HELLO, WORLD!<15><12>/ ; THAT'S CR LF
33       046114
34       026117
35       053440
36       051117
37       042114
38       006441
39       000012
40 00035'000000         0 ; FLAG WORD TO END STRING
41
42                      .END START

```

## Assembler (HLA)

```shell
; Hello World for Intel compatible High Level Assembler

program HELLO;
	 #include( "stdlib.hhf" );
begin HELLO;
	 stdout.put("Hello World",nl);
end HELLO;

```

## Assembler (HP-85)

```shell
010 ! Hello world in Assembler for the HP-85
020         NAM HELLO
030         DEF RUNTIM
040         DEF TOKENS
050         DEF PARSE
060         DEF ERMSG
070         DEF INIT
100 PARSE   BYT 0,0
110 RUNTIM  BYT 0,0,377,377
120 TOKENS  BYT 377
130 ERMSG   BYT 377
140 !
150 INIT    LDM R26,=MSG
160         ADMD R26,=BINTAB
170         LDM R36,=12D,0
180         JSB =OUTSTR
190         RTN
200 MSG     ASC "Hello World!"
210 BINTAB  DAD 101233
220 OUTSTR  DAD 35052
300         FIN
```

## Assembler (IBM 370)

```shell
ITLE 'Hello World for IBM Assembler/370 (VM/CMS)'
HELLO    START
BALR  12,0
USING *,12
*
WRTERM 'Hello World!'
*
SR    15,15
BR    14
*
END   HELLO

```

## Assembler (Intel)

```shell
; Hello World for Intel Assembler (MSDOS)

mov ax,cs
mov ds,ax
mov ah,9
mov dx, offset Hello
int 21h
xor ax,ax
int 21h

Hello:
db "Hello World!",13,10,"$"

```

## Assembler (Itanium)

```shell
/* Hello world for IA64 (Itanium) Assembly */

.HW:
		stringz "Hello World"
		.text
		.align 16
		.global main#
		.proc main#
main:
		.prologue 14, 32
		.save ar.pfs, r33
		alloc r33 = ar.pfs, 0, 4, 1, 0
		.vframe r34
		mov r34 = r12
		adds r12 = -16, r12
		mov r35 = r1
		.save rp, r32
		mov r32 = b0
		.body
		addl r14 = @ltoffx(.HW), r1
		;;
		ld8.mov r14 = [r14], .HW
		;;
		st8 [r34] = r14
		ld8 r36 = [r34]
		br.call.sptk.many b0 = puts#
		mov r1 = r35
		;;
		mov ar.pfs = r33
		mov b0 = r32
		.restore sp
		mov r12 = r34
		br.ret.sptk.many b0

```

## Assembler (MIPS)

```shell
## Hello Word in Assemlber for the MIPS Architecture

.globl main

main:   jal hwbody              #call Hello Word Procedure
	 trap 10                 #exit

hwbody: addi $30, $30,-4        #we need to preserve
	 sw $4, 0($30)           #existing values in register 4

	 addi $4,$0,72           # H
	 trap 101
	 addi $4,$0,101          # e
	 trap 101
	 addi $4,$0,108          # l
	 trap 101
	 trap 101                # l
	 addi $4,$0,111          # o
	 trap 101
	 addi $4,$0,32           # <space>
	 trap 101
	 addi $4,$0,87           # W
	 trap 101
	 addi $4,$0,111          # o
	 trap 101
	 addi $4,$0,114          # r
	 trap 101
	 addi $4,$0,108          # l
	 trap 101
	 addi $4,$0,100          # d
	 trap 101
	 addi $4,$0,33           # !
	 trap 101
	 addi $4,$0,10           #

	 trap 101

done:   lw $4, 0($30)           #restore values
	 addi $30, $30, 4        #in register 4
	 jr $31                  #return to the main

```

## Assembler (MMIX)

```shell
*	Hello World in Assembler
*	for the MMIX Computer

       LOC   #100
Main   GETA  $255,String
       TRAP  0,Fputs,StdOut
       TRAP  0,Halt,0
String BYTE  "Hello, world!",#a,0
```

## Assembler (PA-RISC)

```shell
// Hello World written in PA-RISC 2.0 assembly code

    .LEVEL  2.0N

    .SPACE  $TEXT$,SORT=8
    .SUBSPA $CODE$,QUAD=0,ALIGN=4,ACCESS=0x2c,CODE_ONLY,SORT=24
main
    .PROC
    .CALLINFO CALLER,FRAME=16,SAVE_RP,ORDERING_AWARE
        .ENTRY
        STW     %r2,-20(%r30)   ;offset 0x0
        LDO     64(%r30),%r30   ;offset 0x4
        ADDIL   LR'M$3-$global$,%r27,%r1        ;offset 0x8
        LDO     RR'M$3-$global$(%r1),%r1        ;offset 0xc
        STW     %r1,-56(%r30)   ;offset 0x10
        ADDIL   LR'M$3-$global$+16,%r27,%r1     ;offset 0x14
        LDO     RR'M$3-$global$+16(%r1),%r26    ;offset 0x18
        LDW     -56(%r30),%r25  ;offset 0x1c
        LDIL    L'printf,%r31   ;offset 0x20
        .CALL   ARGW0=GR,ARGW1=GR,RTNVAL=GR     ;in=25,26;out=28;
        BE,L    R'printf(%sr4,%r31),%r31        ;offset 0x24
        COPY    %r31,%r2        ;offset 0x28
        LDW     -84(%r30),%r2   ;offset 0x2c
        BVE     (%r2)   ;offset 0x30
        .EXIT
        LDO     -64(%r30),%r30  ;offset 0x34
    .PROCEND    ;


    .SPACE  $TEXT$
    .SUBSPA $CODE$
    .SPACE  $PRIVATE$,SORT=16
    .SUBSPA $DATA$,QUAD=1,ALIGN=8,ACCESS=0x1f,SORT=16
M$3
    .ALIGN  8
    .STRINGZ    "Hello World"
    .BLOCK  4
    .STRINGZ    "%s\n"
    .IMPORT $global$,DATA
    .SPACE  $TEXT$
    .SUBSPA $CODE$
    .EXPORT main,ENTRY,PRIV_LEV=3,LONG_RETURN
    .IMPORT printf,CODE
    .END
```

## Assembler (PDP-11)

```shell
;       Hello World in Assembler for the DEC PDP-11 with the
;	RSX-11M-PLUS operating system
;
		.title Hello
		.ident /V0001A/
		.mcall qiow$s, exit$s
		.psect $code,ro,i
start:  qiow$s #5,#5,,,,<#str, #len, #40>

		exit$s
		.psect $data,ro,d
str:    .ascii / Hello World!/
		len=.-str
		.end start

```

## Assembler (PDP-8)

```shell
/ Hello World in Assembler for the DEC PDP-8
*200
hello,    cla cll
		tls            / tls to set printer flag.
		tad charac    / set up index register
		dca ir1        / for getting characters.
		tad m6        / set up counter for
		dca count    / typing characters.
next,    tad i ir1    / get a character.
		jms type    / type it.
		isz count    / done yet?
		jmp next    / no: type another.
		hlt

type,    0            / type subroutine
		tsf
		jmp .-1
		tls
		cla
		jmp i type
charac,    .            / used as initial value of ir1
		310 / H
		305 / E
		314 / L
		314 / L
		317 / O
		254 / ,
		240 /
		327 / W
		317 / O
		322 / R
		314 / L
		304 / D
		241 / !
m6,        -15
count,    0
ir1 = 10
$

```

## Assembler (PPC, Darwin)

```shell
; Hello World in Assembler for the Darwin Power-PC

.data
.cstring
.align 2
msg:
.asciz "Hello world!
"
len = . - msg
.text
.align 2
.globl _start
_start:
li r0,4
li r3,1
lis r4,ha16(msg)
ori r4,r4,lo16(msg)
li r5,len
sc
li r0,1
li r3,0
sc

```

## Assembler (SPARC)

```shell
! Hello world in SPARC Assembly Language

	.section			".data1"
	.align		4
.L16:
	.ascii   "hello world\n\0"

	.section  ".text"
	.global  main
main:
	save  %sp,-96,%sp
	set  .L16,%o0
	call  printf,1
	nop
	restore
```

## Assembler (TAS)

```shell
-- Hello world in TAS Assembler for the TR 440 --

HELLO.=SEGM,XBA VB616, SSR 6 16,
FB616=R&ENDE,

VB616=FB616/AG, 3/H, TEXT/AG, 3/H,
TEXT=''*020Hello World!'',
ENDE,
```

## Assembler (VP)

```shell
; Hello World in VP Assembler for intent (Amiga Anywhere)

.include 'tao'

tool 'home/hello',VP,TF_MAIN,8192,0
	ent (-:-)
		qcall lib/print,(hello_world.p : i~)
		ret ()
	entend

	data

hello_world:
	dc.b "Hello World!",ASCII_LF,0

toolend
```

## Assembler (Win32)

```shell
; Hello world in Assembler for the Win32 architecture

TITLE Hello world in win32. Tasm

VERSION T310
Model use32 Flat,StdCall

start_code segment byte public 'code' use32
begin:
Call MessageBox, 0, offset sHallo, offset caption, 0
Call ExitProcess, 0
start_code Ends

start_data segment byte public 'data' use32

sHallo  db 'Hello world',0
caption	db "Hi",0

start_data Ends
End begin

```

## Assembler (X1)

Hello world in Assembler for the Electrologica X1 (ca. 1958).

Line numbers and comments are removed by the human who punches the source text.

```shell
							dp zz 0 x 5

							da 0 zz 0   di
		0   2b 1       a		       set address increment to 1
3->  1   2a 4 zz 0  c p	       load next character to A
		2   6y 2 xp    		       print it
		3 y 2t 1 zz 0  a		       loop if not last char
		4   7p   	  		       and halt
		5 dn + 19			       lower case
		6	  + 28			       h
		7	  + 25			       e
		8	  + 32			       l
		9	  + 32			       l
	 10	  + 35			       o
	 11	  + 15			       comma
	 12	  + 20			       space
	 13   + 43			       w
	 14	  + 35			       o
	 15	  + 38			       r
	 16	  + 32			       l
	 17	  + 24			       d
	 18	  - 52			       clrf, negative = last char

							de 0 zz 0
```

## Assembler (X8)

```shell
" Hello world in Assembler for the Electrologica X8 (ca. 1965)

'BEGIN' TEL='1 000 000',  TTY=8
M[24]:
        GOTO(:START)
M[(64+TTY*4)]:
TAR:
M[(64+38*4)]:
TPAR:

M['400']:

START:
        A=:HELLO DESCR                  " point to I/O descriptor
        TAR[0]=A                        " set address of string
        TAR[1]=-A                       " set IFT = -1
        A=D18
        TAR[2]=A
        AFON(TTY)                       " send the message
LOOP:   GOTO(:LOOP)                     " spin (since there is no halt)

D18:    '001 000 000'

HELLO DESCR:
        0
        (17*TEL + :DAG[-1])
        0

DAG:    37                              " letters, red print
        5                               " H
        16                              " E
        9                               " L
        9                               " L
        3                               " O
        27                              " figures
        6                               " comma
        31                              " letters
        4                               " space
        25                              " W
        3                               " O
        10                              " R
        9                               " L
        18                              " D
        2                               " cr
        8                               " nl
```

## Assembler (z390)

```shell
; Hello World for z390 IBM compatible mainframe assembler

HELLO CSECT
     USING *,15
     WTO 'Hello World'
     BR 14
     END
```

## Assembler (Z80 Console)

```shell
; This is a "Hello World" program for Z80 and TMS9918 / TMS9928 / TMS9929 /
; V9938 or V9958 VDP.
; That means that this should work on SVI, MSX, Colecovision, Memotech,
; and many other Z80 based home computers or game consoles.
;
; Because we don't know what system is used, we don't know where RAM
; is, so we can't use stack in this program.
;
; This version of Hello World was written by Timo "NYYRIKKI" Soilamaa
; 17.10.2001
;
;----------------------------------------------------------------------
; Configure this part:

DATAP: EQU #98 ; VDP Data port #98 works on all MSX models
; (TMS9918/TMS9929/V9938 or V9958)
; #80 works on SVI
; (for other platforms you have to figure this out by your self)

CMDP: EQU #99 ; VDP Command port #99 works on all MSX models
; (TMS9918/TMS9929/V9938 or V9958)
; #81 works on SVI
; (for other platforms you have to figure this out by your self)
;-----------------------------------------------------------------------
; Program starts here:

ORG 0 ; Z80 starts always from here when power is turned on
DI ; We don't know, how interrupts works in this system, so we disable them.

; Let's set VDP write address to #0000
XOR A
OUT (CMDP),A
LD A,#40
OUT (CMDP),A

; Now let's clear first 16Kb of VDP memory
LD B,0
LD HL,#3FFF
LD C,DATAP
CLEAR:
OUT (C),B
DEC HL
LD A,H
OR L
NOP ; Let's wait 8 clock cycles just in case VDP is not quick enough.
NOP
JR NZ,CLEAR

; Now it is time to set up VDP registers:
;----------------------------------------
; Register 0 to #0
;
; Set mode selection bit M3 (maybe also M4 & M5) to zero and
; disable external video & horizontal interrupt
LD C,CMDP
LD E,#80

OUT (C),A
OUT (C),E
;----------------------------------------
; Register 1 to #50
;
; Select 40 column mode, enable screen and disable vertical interrupt

LD A,#50
INC E
OUT (C),A
OUT (C),E
;----------------------------------------
; Register 2 to #0
;
; Set pattern name table to #0000

XOR A
INC E
OUT (C),A
OUT (C),E
;----------------------------------------
; Register 3 is ignored as 40 column mode does not need color table
;
INC E
;----------------------------------------
; Register 4 to #1
; Set pattern generator table to #800

INC A
INC E

OUT (C),A
OUT (C),E
;----------------------------------------
; Registers 5 (Sprite attribute) & 6 (Sprite pattern) are ignored
; as 40 column mode does not have sprites

INC E
INC E
;----------------------------------------
; Register 7 to #F0
; Set colors to white on black

LD A,#F0
INC E
OUT (C),A
OUT (C),E
;----------------------------------------

; Let's set VDP write address to #808 so, that we can write
; character set to memory
; (No need to write SPACE it is clear char already)
LD A,8
OUT (C),A
LD A,#48
OUT (C),A

; Let's copy character set
LD HL,CHARS
LD B, CHARS_END-CHARS
COPYCHARS:
LD A,(HL)
OUT (DATAP),A
INC HL
NOP ; Let's wait 8 clock cycles just in case VDP is not quick enough.
NOP
DJNZ COPYCHARS

; Let's set write address to start of name table
XOR A
OUT (C),A
LD A,#40
OUT (C),A

; Let's put characters to screen
LD HL,ORDER
LD B,ORDER_END-ORDER
COPYORDER:
LD A,(HL)
OUT (DATAP),A
INC HL

JR OVERNMI
NOP
NOP

; Here is address #66, that is entry for NMI
RETN ;Return from NMI

OVERNMI:
DJNZ COPYORDER

; The end
HALT

; Character set:
; --------------
ORDER:
DEFB 1,2,3,3,4,0,5,4,6,3,7
ORDER_END:

CHARS:

; H
DEFB %10001000
DEFB %10001000
DEFB %10001000
DEFB %11111000
DEFB %10001000
DEFB %10001000
DEFB %10001000
DEFB %00000000
; e
DEFB %00000000
DEFB %00000000
DEFB %01110000
DEFB %10001000
DEFB %11111000
DEFB %10000000
DEFB %01110000
DEFB %00000000
; l
DEFB %01100000
DEFB %00100000
DEFB %00100000
DEFB %00100000
DEFB %00100000
DEFB %00100000
DEFB %01110000
DEFB %00000000
; o
DEFB %00000000
DEFB %00000000
DEFB %01110000
DEFB %10001000
DEFB %10001000
DEFB %10001000
DEFB %01110000
DEFB %00000000
; W
DEFB %10001000
DEFB %10001000
DEFB %10001000
DEFB %10101000
DEFB %10101000
DEFB %11011000
DEFB %10001000
DEFB %00000000

; r
DEFB %00000000
DEFB %00000000
DEFB %10110000
DEFB %11001000
DEFB %10000000
DEFB %10000000
DEFB %10000000
DEFB %00000000
; d
DEFB %00001000
DEFB %00001000
DEFB %01101000
DEFB %10011000
DEFB %10001000
DEFB %10011000
DEFB %01101000
DEFB %00000000
chars_end:
```

## Assembler (Z80, CP/M)

```shell
; Hello world in Z80Assembly for CP/M

BDOS    equ     05h
WRTLINE equ     09h
;
		org     0100h
		lxi     d,sHello
		mvi     c,WRTLINE
		call    BDOS
		ret
;
sHello  db      'Hello, World!$'
```

## Assembler (ZX81)

```shell
; Hello World in Assembler for the ZX81 (Zilog Z80)

			CALL SPRINT
			DEFM HELLO WORLD.
			DEFB FF
			RET
SPRINT    POP HL
			LD A,(HL)
			INC HL
			PUSH HL
			CP FF
			RET Z
			CALL PRINT
			JR SPRINT

```

## Asterisk

```shell
;; Hello world in Asterisk

exten => s,1,NoOp(Hello World)
```

## ATS

```shell
// Hello world in ATS

implement main () = begin
  print ("Hello, world!"); print_newline ()
end
```

## AutoHotkey

```shell
; Hello World in AutoHotkey

Msgbox Hello, World!

```

## AutoIT3

```shell
;Hello, World for AutoIT3  http://www.autoitscript.com

msgbox(0,"Hello World",0)

```

## Automator

Hello world for Mac OS X Automator.

![Automator]({{ site.url }}{{ site.path.images }}/posts/helloworld/automator.png)

## AviSynth

```shell
# Hello World for AviSynth video editor
BlankClip()
Subtitle("Hello, world!")

```

## AWK

```awk
# Hello world in AWK

BEGIN {
  print "Hello World!"
}
```

# B

## B

```shell
/* Hello World in B */

main() {
extern a, b, c;
putchar (a); putchar (b); putchar (c); putchar ('!*n');
}

a 'hell' ;
b 'o, w' ;
c 'orld' ;

```

## BAL

```shell

Hello World in IBM mainframe Basic Assembler Language (BAL)

HELLO    CSECT
		 STM   R14,R12,12(R13)
		 LR    R12,R15
		 USING HELLO,R12
		 LA    R10,SAVEAREA
		 ST    R13,4(R10)
		 ST    R10,8(R13)
		 LR    R13,R10
*
		 WTO   'HELLO WORLD',ROUTCDE=1
*
		 L     R13,4(R13)
		 LM    R14,R12,12(R13)
		 SR    R15,R15
		 BCR   B'1111',R14
*
SAVEAREA DS    18F
		 LTORG
R0       EQU   0
R1       EQU   1
R2       EQU   2
R3       EQU   3
R4       EQU   4
R5       EQU   5
R6       EQU   6
R7       EQU   7
R8       EQU   8
R9       EQU   9
R10      EQU   10
R11      EQU   11
R12      EQU   12
R13      EQU   13
R14      EQU   14
R15      EQU   15
		 END   HELLO

```

## BASIC-PICAXE

```shell
' Hello World in PICAXE BASIC
Symbol TX_PIN = 0
Symbol TX_BAUD = N2400
SerOut TX_PIN, TX_BAUD, ( "Hello World", CR, LF )
```

## BASIC

```shell
10 REM Hello World in BASIC
20 PRINT "Hello World!"

```

## Bato

```shell
# Hello world in Bato

mag_print "Hello World!"
```

## Batsh

```shell
// Hello world in Batsh

println("Hello world!");
```

## bc

```shell
#!/usr/bin/bc -q
# Hello World for the Unix "bc" calculator

print "Hello World!
"

```

## BCPL

```shell
// Hello world in BCLP
GET "libhdr"

LET start() = VALOF
$( writes("Hello world*N")
   RESULTIS 0
$)
```

## BeanShell

```shell
// Hello World in BeanShell

print ("Hello World!");
```

## Beef

```shell
// Hello world in Beef

using System;

namespace HelloWorld
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, world!");
        }
    }
}
```

## Befunge

```shell
v Hello World in Befunge

>"dlroW olleH",,,,,,,,,,,@

```

## Beta

```shell
Back to index

{ *** Hello World in BETA ***}
(#
do
   'Hello World!'->putLine
#)

```

## BibTex

```shell
%Hello world in BibTex

ENTRY{author}{}{}

FUNCTION {hello.world}
{
  "Hello World!" write$ newline$
}

READ
EXECUTE {hello.world}
```

## BIT

Hello world in BIT. No comments are possible in this language.

```shell
LINENUMBERZEROCODEPRINTZEROGOTOONELINENUMBERONECODEPRINTONEGOTOONEZEROLINENUMBE
RONEZEROCODEPRINTZEROGOTOONEONELINENUMBERONEONECODEPRINTZEROGOTOONEZEROZEROLINE
NUMBERONEZEROZEROCODEPRINTONEGOTOONEZEROONELINENUMBERONEZEROONECODEPRINTZEROGOT
OONEONEZEROLINENUMBERONEONEZEROCODEPRINTZEROGOTOONEONEONELINENUMBERONEONEONECOD
EPRINTZEROGOTOONEZEROZEROZEROLINENUMBERONEZEROZEROZEROCODEPRINTZEROGOTOONEZEROZ
EROONELINENUMBERONEZEROZEROONECODEPRINTONEGOTOONEZEROONEZEROLINENUMBERONEZEROON
EZEROCODEPRINTONEGOTOONEZEROONEONELINENUMBERONEZEROONEONECODEPRINTZEROGOTOONEON
EZEROZEROLINENUMBERONEONEZEROZEROCODEPRINTZEROGOTOONEONEZEROONELINENUMBERONEONE
ZEROONECODEPRINTONEGOTOONEONEONEZEROLINENUMBERONEONEONEZEROCODEPRINTZEROGOTOONE
ONEONEONELINENUMBERONEONEONEONECODEPRINTONEGOTOONEZEROZEROZEROZEROLINENUMBERONE
ZEROZEROZEROZEROCODEPRINTZEROGOTOONEZEROZEROZEROONELINENUMBERONEZEROZEROZEROONE
CODEPRINTONEGOTOONEZEROZEROONEZEROLINENUMBERONEZEROZEROONEZEROCODEPRINTONEGOTOO
NEZEROZEROONEONELINENUMBERONEZEROZEROONEONECODEPRINTZEROGOTOONEZEROONEZEROZEROL
INENUMBERONEZEROONEZEROZEROCODEPRINTONEGOTOONEZEROONEZEROONELINENUMBERONEZEROON
EZEROONECODEPRINTONEGOTOONEZEROONEONEZEROLINENUMBERONEZEROONEONEZEROCODEPRINTZE
ROGOTOONEZEROONEONEONELINENUMBERONEZEROONEONEONECODEPRINTZEROGOTOONEONEZEROZERO
ZEROLINENUMBERONEONEZEROZEROZEROCODEPRINTZEROGOTOONEONEZEROZEROONELINENUMBERONE
ONEZEROZEROONECODEPRINTONEGOTOONEONEZEROONEZEROLINENUMBERONEONEZEROONEZEROCODEP
RINTONEGOTOONEONEZEROONEONELINENUMBERONEONEZEROONEONECODEPRINTZEROGOTOONEONEONE
ZEROZEROLINENUMBERONEONEONEZEROZEROCODEPRINTONEGOTOONEONEONEZEROONELINENUMBERON
EONEONEZEROONECODEPRINTONEGOTOONEONEONEONEZEROLINENUMBERONEONEONEONEZEROCODEPRI
NTZEROGOTOONEONEONEONEONELINENUMBERONEONEONEONEONECODEPRINTZEROGOTOONEZEROZEROZ
EROZEROZEROLINENUMBERONEZEROZEROZEROZEROZEROCODEPRINTZEROGOTOONEZEROZEROZEROZER
OONELINENUMBERONEZEROZEROZEROZEROONECODEPRINTONEGOTOONEZEROZEROZEROONEZEROLINEN
UMBERONEZEROZEROZEROONEZEROCODEPRINTONEGOTOONEZEROZEROZEROONEONELINENUMBERONEZE
ROZEROZEROONEONECODEPRINTZEROGOTOONEZEROZEROONEZEROZEROLINENUMBERONEZEROZEROONE
ZEROZEROCODEPRINTONEGOTOONEZEROZEROONEZEROONELINENUMBERONEZEROZEROONEZEROONECOD
EPRINTONEGOTOONEZEROZEROONEONEZEROLINENUMBERONEZEROZEROONEONEZEROCODEPRINTONEGO
TOONEZEROZEROONEONEONELINENUMBERONEZEROZEROONEONEONECODEPRINTONEGOTOONEZEROONEZ
EROZEROZEROLINENUMBERONEZEROONEZEROZEROZEROCODEPRINTZEROGOTOONEZEROONEZEROZEROO
NELINENUMBERONEZEROONEZEROZEROONECODEPRINTZEROGOTOONEZEROONEZEROONEZEROLINENUMB
ERONEZEROONEZEROONEZEROCODEPRINTONEGOTOONEZEROONEZEROONEONELINENUMBERONEZEROONE
ZEROONEONECODEPRINTZEROGOTOONEZEROONEONEZEROZEROLINENUMBERONEZEROONEONEZEROZERO
CODEPRINTZEROGOTOONEZEROONEONEZEROONELINENUMBERONEZEROONEONEZEROONECODEPRINTZER
OGOTOONEZEROONEONEONEZEROLINENUMBERONEZEROONEONEONEZEROCODEPRINTZEROGOTOONEZERO
ONEONEONEONELINENUMBERONEZEROONEONEONEONECODEPRINTZEROGOTOONEONEZEROZEROZEROZER
OLINENUMBERONEONEZEROZEROZEROZEROCODEPRINTZEROGOTOONEONEZEROZEROZEROONELINENUMB
ERONEONEZEROZEROZEROONECODEPRINTONEGOTOONEONEZEROZEROONEZEROLINENUMBERONEONEZER
OZEROONEZEROCODEPRINTONEGOTOONEONEZEROZEROONEONELINENUMBERONEONEZEROZEROONEONEC
ODEPRINTONEGOTOONEONEZEROONEZEROZEROLINENUMBERONEONEZEROONEZEROZEROCODEPRINTZER
OGOTOONEONEZEROONEZEROONELINENUMBERONEONEZEROONEZEROONECODEPRINTONEGOTOONEONEZE
ROONEONEZEROLINENUMBERONEONEZEROONEONEZEROCODEPRINTONEGOTOONEONEZEROONEONEONELI
NENUMBERONEONEZEROONEONEONECODEPRINTONEGOTOONEONEONEZEROZEROZEROLINENUMBERONEON
EONEZEROZEROZEROCODEPRINTZEROGOTOONEONEONEZEROZEROONELINENUMBERONEONEONEZEROZER
OONECODEPRINTONEGOTOONEONEONEZEROONEZEROLINENUMBERONEONEONEZEROONEZEROCODEPRINT
ONEGOTOONEONEONEZEROONEONELINENUMBERONEONEONEZEROONEONECODEPRINTZEROGOTOONEONEO
NEONEZEROZEROLINENUMBERONEONEONEONEZEROZEROCODEPRINTONEGOTOONEONEONEONEZEROONEL
INENUMBERONEONEONEONEZEROONECODEPRINTONEGOTOONEONEONEONEONEZEROLINENUMBERONEONE
ONEONEONEZEROCODEPRINTONEGOTOONEONEONEONEONEONELINENUMBERONEONEONEONEONEONECODE
PRINTONEGOTOONEZEROZEROZEROZEROZEROZEROLINENUMBERONEZEROZEROZEROZEROZEROZEROCOD
EPRINTZEROGOTOONEZEROZEROZEROZEROZEROONELINENUMBERONEZEROZEROZEROZEROZEROONECOD
EPRINTONEGOTOONEZEROZEROZEROZEROONEZEROLINENUMBERONEZEROZEROZEROZEROONEZEROCODE
PRINTONEGOTOONEZEROZEROZEROZEROONEONELINENUMBERONEZEROZEROZEROZEROONEONECODEPRI
NTONEGOTOONEZEROZEROZEROONEZEROZEROLINENUMBERONEZEROZEROZEROONEZEROZEROCODEPRIN
TZEROGOTOONEZEROZEROZEROONEZEROONELINENUMBERONEZEROZEROZEROONEZEROONECODEPRINTZ
EROGOTOONEZEROZEROZEROONEONEZEROLINENUMBERONEZEROZEROZEROONEONEZEROCODEPRINTONE
GOTOONEZEROZEROZEROONEONEONELINENUMBERONEZEROZEROZEROONEONEONECODEPRINTZEROGOTO
ONEZEROZEROONEZEROZEROZEROLINENUMBERONEZEROZEROONEZEROZEROZEROCODEPRINTZEROGOTO
ONEZEROZEROONEZEROZEROONELINENUMBERONEZEROZEROONEZEROZEROONECODEPRINTONEGOTOONE
ZEROZEROONEZEROONEZEROLINENUMBERONEZEROZEROONEZEROONEZEROCODEPRINTONEGOTOONEZER
OZEROONEZEROONEONELINENUMBERONEZEROZEROONEZEROONEONECODEPRINTZEROGOTOONEZEROZER
OONEONEZEROZEROLINENUMBERONEZEROZEROONEONEZEROZEROCODEPRINTONEGOTOONEZEROZEROON
EONEZEROONELINENUMBERONEZEROZEROONEONEZEROONECODEPRINTONEGOTOONEZEROZEROONEONEO
NEZEROLINENUMBERONEZEROZEROONEONEONEZEROCODEPRINTZEROGOTOONEZEROZEROONEONEONEON
ELINENUMBERONEZEROZEROONEONEONEONECODEPRINTZEROGOTOONEZEROONEZEROZEROZEROZEROLI
NENUMBERONEZEROONEZEROZEROZEROZEROCODEPRINTZEROGOTOONEZEROONEZEROZEROZEROONELIN
ENUMBERONEZEROONEZEROZEROZEROONECODEPRINTONEGOTOONEZEROONEZEROZEROONEZEROLINENU
MBERONEZEROONEZEROZEROONEZEROCODEPRINTONEGOTOONEZEROONEZEROZEROONEONELINENUMBER
ONEZEROONEZEROZEROONEONECODEPRINTZEROGOTOONEZEROONEZEROONEZEROZEROLINENUMBERONE
ZEROONEZEROONEZEROZEROCODEPRINTZEROGOTOONEZEROONEZEROONEZEROONELINENUMBERONEZER
OONEZEROONEZEROONECODEPRINTONEGOTOONEZEROONEZEROONEONEZEROLINENUMBERONEZEROONEZ
EROONEONEZEROCODEPRINTZEROGOTOONEZEROONEZEROONEONEONELINENUMBERONEZEROONEZEROON
EONEONECODEPRINTZEROGOTOONEZEROONEONEZEROZEROZEROLINENUMBERONEZEROONEONEZEROZER
OZEROCODEPRINTZEROGOTOONEZEROONEONEZEROZEROONELINENUMBERONEZEROONEONEZEROZEROON
ECODEPRINTZEROGOTOONEZEROONEONEZEROONEZEROLINENUMBERONEZEROONEONEZEROONEZEROCOD
EPRINTONEGOTOONEZEROONEONEZEROONEONELINENUMBERONEZEROONEONEZEROONEONECODEPRINTZ
EROGOTOONEZEROONEONEONEZEROZEROLINENUMBERONEZEROONEONEONEZEROZEROCODEPRINTZEROG
OTOONEZEROONEONEONEZEROONELINENUMBERONEZEROONEONEONEZEROONECODEPRINTZEROGOTOONE
ZEROONEONEONEONEZEROLINENUMBERONEZEROONEONEONEONEZEROCODEPRINTZEROGOTOONEZEROON
EONEONEONEONELINENUMBERONEZEROONEONEONEONEONECODEPRINTONE
```

## BitZ

Hello world in BitZ. The source code is the BMP file shown below.

![BitZ]({{ site.url }}{{ site.path.images }}/posts/helloworld/BitZ.bmp)

## Blender

```shell
# Hello World as a 3D object in Blender

import Blender
from Blender import Scene, Text3d

txt = Text3d.New("Text")
txt.setText('Hello, world!')
Scene.GetCurrent().objects.new(txt)
Blender.Redraw()
```

## BlitzMax

```shell
' Hello World for BlitzMax

Graphics 640,480,16
While Not KeyHit(KEY_ESCAPE)
    Cls
    DrawText "Hello World",0,0
    Flip
EndWhile
```

## BlitzPlus

```shell
; Hello World in Blitz Plus (graphical mode)

Graphics 800,600,0,1
Text 790, 600, "Hello World"
WaitKey

```

## BMC Remedy

```shell
char-set: windows-1252
#
#  Hello World in BMC Remedy 7.0
#  File exported Thu May  8 09:36:46 2008
#
begin active link
   name           : Remedy_HelloWorld
   timestamp      : 1210249958
   export-version : 9
   owner          : Demo
   last-changed   : Demo
   actlink-order  : 0
   wk-conn-type   : 1
   schema-name    : _1
   actlink-mask   : 16
   enable         : 1
   permission     : 0
   action {
      message-type: 0
      message-num : 10000
      message-pane: 1
      message-text: Hello World!!
   }
   object-prop    : 2\60016\4\1\0\60017\4\1\0\
end
```

## Boo

```shell
# Hello World in Boo
print "Hello World"

```

## Brainfuck

```shell
Hello World in Brainfuck

++++++++++[>+++++++>++++++++++>+++<<<-]>++.>+.+++++++
..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.
```

## BrightScript

```shell
' Hello world in BrightScript

sub Main()
port = CreateObject("roMessagePort")
screen = CreateObject("roTextScreen")
screen.SetText("Hello World")
screen.setMessagePort(port)
screen.Show()
while true
  msg = wait(0, port)
  if(msg.isScreenClosed())
    return -1
  end if
end while
end sub
```

## BS2000

```shell
/BEGIN-PROCEDURE LOGGING=N
/REMARK "HELLO WORLD" IN BS2000 (SDF)
/ASSIGN-SYSDTA TO-FILE=*SYSCMD
/WRITE-TEXT 'HELLO WORLD!'
/SET-JOB-STEP
/ASSIGN-SYSDTA TO-FILE=*PRIMARY
/END-PROCEDURE
```

## BSP

```html
<!— Hello World in  SAP Business Server Pages (BSP)
<%@page language="abap"%>
<%@extension name="htmlb" prefix="htmlb"%>
<html><body>
<%
  CONSTANTS lv_hworld TYPE string VALUE `Hello World!`.
%>
<%=lv_hworld%>">
</body>
</html>
```

## BuddyScript

```shell
# Hello World in BuddyScript

+ =AnythingPerfect

- Hello, world!

```

## Buzz

```shell
# Hello world in Buzz

log("Hello World!")
```

## Byte Syze

Hello World in Byte Syze.

No comments possible.

The following is actually a hexdump of the binary source code.

```shell
c7 3c 2a 3c 2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c 3c
28 5c 2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c 3c 28 5c
2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c 3c 28 5c 2a 2b
2a 5c 3c 28 5c 2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c
3c 28 5c 2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c 3c 28
5c 2a 2b 2a 5c 3c 28 5c 2a 2b 2a 5c 3c 28 5c 2a
2b 2a 00 00 01 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 64 48 65 6c 6c 6f 2c 20 57
6f 72 6c 64 21 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

# C

## C*

```shell
/* Hello world in C* */

#include <stdio.h>

main()
{
    printf("Hello World!\n");
}
```

## C/AL

```shell
OBJECT Codeunit 50000 HelloWorld
{
  PROPERTIES
  {
    OnRun=BEGIN
            //Hello World in C/AL (Microsoft Business Solutions-Navision)
            MESSAGE(Txt001);
          END;
  }
  CODE
  {
    VAR
      Txt001@1000000000 : TextConst 'ENU=Hello World';
    BEGIN
    END.
  }
}
```

## C♯

```csharp
////Hello World in C#
class HelloWorld
{
    static void Main()
    {
        System.Console.WriteLine("Hello, World!");
    }
}
```

## C (Amiga Anywhere)

```c
/* Hello World in C for Amiga Anywhere 2 (AA2) */

#include <aa.h>

int aaMain(int argc, char **argv)
{
   aaOpenDisplay(200, 200, 16, "Hello World", FAA_DISPLAY_WINDOW);
   aaDrawString(AA_DISPLAY_PIXMAP, "Hello, world!", 20, 20, AA_DEFAULT_FONT, 0xffff00, 0, FAA_FONT_INK, -1);
   aaUpdate();
   aaWaitInput();
   return 0;
}
```

## C (ANSI)

```c
/* Hello World in C, Ansi-style */

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  puts("Hello World!");
  return EXIT_SUCCESS;
}
```

## C (Curses)

```c
/* Hello World in C for Curses */

#include <curses.h>
main()
{
  initscr();
  addstr("Hello World!\n");
  refresh();
  endwin();
  return 0;
}
```

## C (GEM)

```c
/* Hello World for C with GEM */

#include <aes.h>
main()
{
  appl_init();
  form_alert(1,"[0][Hello World!][Ok]");
  appl_exit();
  return 0;
}
```

## C (Intuition)

```c
/* Hello World in C for Intution (Amiga GUI) */

#include <intuition/intuition.h>

struct IntuitionBase *IntuitionBase = NULL;

struct IntuiText hello_text = {-1,-1,JAM1,0,0,NULL,"Hello World!",NULL };
struct IntuiText ok_text    = {-1,-1,JAM1,0,0,NULL,"Ok",NULL };

void main(void)
{
   IntuitionBase = (struct IntuitionBase *)
                   OpenLibrary("intuition.library", 0);
   AutoRequest(NULL, &hello_text, NULL, &ok_text, NULL, NULL, 100, 50);
   CloseLibrary(IntuitionBase);
}
```

## C (K&R)

```c
/* Hello World in C, K&R-style */

main()
{
  puts("Hello World!");
  return 0;
}
```

## C (OpenGL)

```c
/* "Hello World" in C using OGL - Open Graphics Library */

#include <GL/glut.h>
#define font GLUT_BITMAP_HELVETICA_18
#define tx "Hello World!"

void text(void)
{
 char *p, tex[] = tx;
 p = tex;
 glColor3d(1.0, 1.0, 0.0);
 glRasterPos2d(-.5, 0.);
 while(*p) glutBitmapCharacter(font, *p++);
}

void display()
{
 glClear(GL_COLOR_BUFFER_BIT);
 text();
 glFlush();
}

void reshape(int width, int height)
{
 glViewport(0, 0, width, height);
 glMatrixMode(GL_PROJECTION);
 glLoadIdentity();
 glOrtho(-1, 1, -1, 1, -1, 1);
 glMatrixMode(GL_MODELVIEW);
 display();
}

int main(int argc, char **argv)
{
 glutInit(&argc, argv);
 glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
 glutInitWindowPosition(50, 50);
 glutInitWindowSize(500, 500);
 glutCreateWindow("Hello World OpenGL");
 glClearColor(0,0,0,0);
 glutDisplayFunc(display);
 glutReshapeFunc(reshape);
 glutMainLoop();
 return 0;
}
```

## C (PresentationManager)

```c
/* Hello World for C with PresentationManager / OS/2 2.11  */

#define INCL_WIN

#include <os2.h>

int main( void )
{
   HMQ   hmq;

   hmq = WinCreateMsgQueue( 0, 0 );

   WinMessageBox( HWND_DESKTOP, HWND_DESKTOP, (PSZ)"Hello World!",
      (PSZ)"", 0, MB_OK );

   WinDestroyMsgQueue( hmq );

   return 0;
}
```

## C (Windows)

```c
/* Hello world in C for MS-Windows */

#include <windows.h>

int PASCAL WinMain(HINSTANCE hInstance,
  HINSTANCE hPrevInstance, LPSTR CmdLine, int Show)
{
  MessageBox(GetActiveWindow(), "Hello World!", "Hello Windows World", MB_OK);
  return 0;
}
```

## C (X11 Athena)

```c
/* Hello World in C with X11 using Athena widgets */

#include <X11/Intrinsic.h>
#include <X11/StringDefs.h>
#include <X11/Xaw/Label.h>

main(int argc,char **argv)
{
  XtAppContext app_context;
  Widget toplevel,hello;

  toplevel = XtVaAppInitialize(&app_context,"XHello",NULL,0,
    &argc,argv,NULL,NULL);
  hello = XtVaCreateManagedWidget("Hello World!",labelWidgetClass,
    toplevel,(void*)0);

  XtRealizeWidget(toplevel);

  XtAppMainLoop(app_context);
  return 0;
}
```

## C++

```cpp
// Hello World in C++ (pre-ISO)

#include <iostream.h>

main()
{
    cout << "Hello World!" << endl;
    return 0;
}
```

## C++ (.NET CLI)

```cpp
// Hello World in C++/CLI for .NET

using namespace System;

void main()
{
    Console::WriteLine("Hello World");
}
```

## C++ (Epoc)

```cpp
// Hello World in C++, Epoc style (for Symbian OS)

#include <eikapp.h>
#include <eikdoc.h>
#include <eikappui.h>

class CHelloWorldAppUi;
class CEikApplication;
class CHelloWorldAppView;

class CHelloWorldApplication : public CEikApplication
    {
        public:
            TUid AppDllUid() const;
        protected:
            CApaDocument* CreateDocumentL();
    };

class CHelloWorldDocument : public CEikDocument
    {
        public:
            static CHelloWorldDocument* NewL(CEikApplication& aApp);
            static CHelloWorldDocument* NewLC(CEikApplication& aApp);
            ~CHelloWorldDocument(){};
        public:
            CEikAppUi* CreateAppUiL();
        private:
            void ConstructL() {};
            CHelloWorldDocument(CEikApplication& aApp){};
    };

class CHelloWorldAppUi : public CEikAppUi
    {
        public:
                void ConstructL();
                CHelloWorldAppUi(){};
                ~CHelloWorldAppUi(){};
    };

static const TUid KUidHelloWorldApp = {0x10005B91};

GLDEF_C TInt E32Dll(TDllReason )
    {
    return KErrNone;
    }

EXPORT_C CApaApplication* NewApplication()
    {
    return (new CHelloWorldApplication);
    }

CApaDocument* CHelloWorldApplication::CreateDocumentL()
    {  
    CApaDocument* document = CHelloWorldDocument::NewL(*this);
    return document;
    }

TUid CHelloWorldApplication::AppDllUid() const
    {
    return KUidHelloWorldApp;
    }

CHelloWorldDocument* CHelloWorldDocument::NewL(CEikApplication& aApp)
    {
    CHelloWorldDocument* self = NewLC(aApp);
    CleanupStack::Pop(self);
    return self;
    }

CHelloWorldDocument* CHelloWorldDocument::NewLC(CEikApplication& aApp)
    {
    CHelloWorldDocument* self = new (ELeave) CHelloWorldDocument(aApp);
    CleanupStack::PushL(self);
    self->ConstructL();
    return self;
    }

CEikAppUi* CHelloWorldDocument::CreateAppUiL()
    {
    CEikAppUi* appUi = new (ELeave) CHelloWorldAppUi;
    return appUi;
    }

void CHelloWorldAppUi::ConstructL()
    {
    BaseConstructL();

    _LIT(message,"Hello!");
    CAknInformationNote* informationNote = new (ELeave) CAknInformationNote;
    informationNote->ExecuteLD(message);
    }
```

## C++ (FLTK)

```cpp
// Hello World in C++-FLTK

#include <FL/Fl.H>
#include <FL/Fl_Window.H>
#include <FL/Fl_Box.H>

int main(int argc, char **argv) {
   Fl_Window *ventana = new Fl_Window(300,180);
   ventana->begin();
   Fl_Box *box = new Fl_Box(20,40,260,100,"Hello World!");
   box->labelsize(50);
   ventana->end();
   ventana->show(argc, argv);
   return Fl::run();
}
```

## C++ (Gtk++)

```cpp
// Hello World in C++ for the Gtk+ toolkit

#include <gtkmm/main.h>
#include <gtkmm/button.h>
#include <gtkmm/window.h>
#include <iostream>

void button_clicked()
{
	std::cout << "Hello, World !" << std::endl;
}

int main (int argc, char *argv[])
{
	Gtk::Main kit(argc, argv);
	Gtk::Window hello_window;
	Gtk::Button hello_button("Hello World");

	hello_window.set_border_width(10);
	hello_window.add(hello_button);
	hello_button.signal_clicked().connect(sigc::ptr_fun(&button_clicked));
	hello_button.show();

	Gtk::Main::run(hello_window);
	return 0;
}
```

## C++ (ISO)

```cpp
// Hello World in ISO C++

#include <iostream>

int main()
{
    std::cout << "Hello World!" << std::endl;
}
```

## C++ (MFC)

```cpp
// Hello World in C++ for Microsoft Foundation Classes
// (Microsoft Visual C++).

#include <afxwin.h>

class CHello : public CFrameWnd
{
public:
    CHello()
    {
        Create(NULL,_T("Hello World!"),WS_OVERLAPPEDWINDOW,rectDefault);
    }
};

class CHelloApp : public CWinApp
{
public:
    virtual BOOL InitInstance();
};

BOOL CHelloApp::InitInstance()
{
    m_pMainWnd = new CHello();
    m_pMainWnd->ShowWindow(m_nCmdShow);
    m_pMainWnd->UpdateWindow();
    return TRUE;
}

CHelloApp theApp;
```

## C++ (Qt)

```cpp
// Hello World in C++ for the Qt framework

#include <qapplication.h>
#include <qlabel.h>

int main(int argc, char *argv[])
{
  QApplication a(argc, argv);
  QLabel l("Hello World!", 0);
  l.setCaption("Test");
  l.setAlignment(Qt::AlignCenter);
  l.resize(300, 200);
  a.setMainWidget(&l);
  l.show();
  return(a.exec());
}
```

## CA-Easytrieve Plus

```shell
* Hello world in CA-Easytrieve Plus

JOB
    DISPLAY 'HELLO, WORLD!'
```

## Caché; Object Script

```shell
HelloWorld	;Hello World in Caché Object Script
Start	;
    Write "Hello world"
    Quit
```

## CAML-Light

```shell
(* Hello World in CAML Light *)

let hello =
  print_string "Hello World!";
;;

```

## Carp

```shell
;; Hello world in Carp

(println "hello world")
```

## Casio BASIC

```shell
'Hello World in Casio-Basic. <i>[new line symbol here (press EXE)]</i>
"Hello World!"
```

## CDuce

```shell
(* Hello World in CDuce *)

print "Hello World!
";;

```

## Centura

```shell
! Hello World in Centura

Function: HelloWorld
Description:
Returns
Parameters
Static Variables
Local variables
Actions
  Call SalMessageBox( 'Hello World','Message',MB_Ok)

```

## Ceylon

```ceylon
// Hello world in Ceylon

print("Hello, World!");
```

## ChaiScript

```shell
// Hello world in ChaiScript

#include <chaiscript/chaiscript.hpp>

std::string helloWorld(const std::string &t_name) {
  return "Hello " + t_name + "!";
}

int main() {
  chaiscript::ChaiScript chai;
  chai.add(chaiscript::fun(&helloWorld), "helloWorld");

  chai.eval(R"(
    puts(helloWorld("World"));
  )");
}
```

## Chef

```shell
Hello World Souffle.

This recipe prints the immortal words "Hello world!", in a basically brute force
way. It also makes a lot of food for one person.

Ingredients.
72 g haricot beans
101 eggs
108 g lard
111 cups oil
32 zucchinis
119 ml water
114 g red salmon
100 g dijon mustard
33 potatoes

Method.
Put potatoes into the mixing bowl. Put dijon mustard into the mixing bowl. Put
lard into the mixing bowl. Put red salmon into the mixing bowl. Put oil into
the mixing bowl. Put water into the mixing bowl. Put zucchinis into the mixing
bowl. Put oil into the mixing bowl. Put lard into the mixing bowl. Put lard
into the mixing bowl. Put eggs into the mixing bowl. Put haricot beans into
the mixing bowl. Liquefy contents of the mixing bowl. Pour contents of the
mixing bowl into the baking dish.

Serves 1.

```

## Chicken

Hello world in Chicken. This language has no comments.

```shell
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken
chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

```

## CICS-COBOL

```shell
-- Hello World in CICSCOBOL

000100        IDENTIFICATION DIVISION.                           
000200        PROGRAM-ID. HELLO.                                 
000300       * HELLO WORLD IN CICS COBOL.                        
000400        AUTHOR. ROBERT GOSLING.                            
000500        ENVIRONMENT DIVISION.                              
000600        DATA DIVISION.                                     
000700        WORKING-STORAGE SECTION.                           
000800        01 WS-DATA-AREA PIC X(80) VALUE "HELLO WORLD!".    
000900        PROCEDURE DIVISION.                                
001000            EXEC CICS SEND FROM (WS-DATA-AREA) END-EXEC.   
001100            EXEC CICS RETURN END-EXEC.
```

## Clarion

```shell
!Hello World in Clarion

  PROGRAM

 MAP
 END

 CODE

 MESSAGE('Hello World!')

 RETURN
```

## Clean

```shell
// Hello World in Clean

module hello

Start :: String
Start = "Hello World!
"

```

## Clipper

```shell
// Hello World in Clipper

? "Hello World"
```

## Clojure

```clojure
; Hello world in Clojure

(defn hello []
  (println "Hello world!"))

(hello)
```

## CLP

```shell
/* Hello World in CLP for the IBM AS/400 */
PGM
SNDPGMMSG  MSG('Hello World !') MSGTYPE(*COMP)

ENDPGM

```

## CMake

```cmake
# Hello World in CMake

message(STATUS "Hello World!")

```

## COBOL

```shell
			 * Hello World in COBOL

*****************************
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO.
ENVIRONMENT DIVISION.
DATA DIVISION.
PROCEDURE DIVISION.
MAIN SECTION.
DISPLAY "Hello World!"
STOP RUN.
****************************
```

## Cobra

```shell
"""Hello world in Cobra"""

class Hello

  def main
  		print 'Hello, world.'
```

## Cocoa

```objc
// Hello World in Cocoa Obj-C (OS X)

#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    NSLog(@"Hello, World!");
    [pool release];
    return 0;
}
```

## Coconut

```shell
# Hello world in Coconut

"hello, world!" |> print
```

## CoDScript

```shell
// Hello world in CoDScript

main(){
  iPrintLnBold("Hello World!");
}
```

## CoffeeScript

```coffeescript
// Hello world in CoffeeScript

alert "Hello, World!"
```

## ColdFusion

```shell
<!---Hello world in ColdFusion--->

<cfset message = "Hello World">
<cfoutput> #message#</cfoutput>

```

## CommandScript

```shell
#Hello World in Command Script 3.1
#Meta.Name: "Hello World"

#Block(Main).Start
    echo "Hello World!"
#Block(Main).End
```

## Common Lisp

```shell
;;; Hello world in Common Lisp

(print "Hello World")
```

## Console Postscript

```shell
%% Hello World in Console PostScript

serverdict begin 0 exitserver
/Courier findfont
48 scalefont setfont
22 22 moveto
(Hello World!) show
showpage

%% End

```

## ConTeXt

```shell
% Hello world in ConTeXt

\starttext
Hello World!
\stoptext
```

## Cool

```shell
-- Hello World in Cool

class Main inherits IO{
    main():Object{
    out_string("Hello, world!\n")
    };
};
```

## CoolBasic

```shell
' Hello World in CoolBasic

print "hello world"
wait key

```

## cpl

```shell
title 'Hello world in cpl on a Warrex Centurion'
system zhelloworld      (main,exp=d)
;
file crt:sysipt,class=0,seq
;
define m00:'hello world'
format f00:c132
;
entrypoint crt
;
entry
;
open io crt
;
write (crt, f00) m00
stop 0
;
end
```

## Crystal

```crystal
# Hello world in Crystal

puts "Hello World"
```

## CSS

```css
/* Hello World in CSS */
body:before {
  content: "Hello World";
}

```

## CUDA

```c
// Hello world in CUDA

#include <stdio.h>

const int N = 16;
const int blocksize = 16;

__global__
void hello(char *a, int *b)
{
	a[threadIdx.x] += b[threadIdx.x];
}

int main()
{
	char a[N] = "Hello \0\0\0\0\0\0";
	int b[N] = {15, 10, 6, 0, -11, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

	char *ad;
	int *bd;
	const int csize = N*sizeof(char);
	const int isize = N*sizeof(int);

	printf("%s", a);

	cudaMalloc( (void**)&ad, csize );
	cudaMalloc( (void**)&bd, isize );
	cudaMemcpy( ad, a, csize, cudaMemcpyHostToDevice );
	cudaMemcpy( bd, b, isize, cudaMemcpyHostToDevice );

	dim3 dimBlock( blocksize, 1 );
	dim3 dimGrid( 1, 1 );
	hello<<<dimGrid, dimBlock>>>(ad, bd);
	cudaMemcpy( a, ad, csize, cudaMemcpyDeviceToHost );
	cudaFree( ad );
	cudaFree( bd );

	printf("%s\n", a);
	return EXIT_SUCCESS;
}
```

## CWEB

```html
\def\title{<a href="/showArticle.jhtml?documentID=cuj9505wittenbe&pgno=1">Listing 1</a>}

@*A Simple Example.
This is a trivial example of a \.{CWEB} program.
It is, of course, the classic "hello, world"
program we all know and love:

@c
@<Header files needed by the program@>@;
@#
main(void)
{
 @<Print the message |"hello, world"|@>@;
}

@ Naturally, we use |printf| to do the dirty work:

@<Print the message |"hello, world"|@>=
printf("hello, world\n");

@ The prototype for |printf| is in the standard
header, \.{<stdio.h>}.

@<Header files needed by the program@>=
#include <stdio.h>

@*Index.
```

## CYBOL

```xml
<!-- Hello World in Cybernetics Oriented Language (CYBOL) -->
<model>
    <part name="send_message" channel="inline" abstraction="operation" model="send">
        <property name="channel" channel="inline" abstraction="character" model="shell"/>
        <property name="message" channel="inline" abstraction="character" model="Hello, World!"/>
    </part>
    <part name="exit_application" channel="inline" abstraction="operation" model="exit"/>
</model>
```

# D

## D

```d
// Hello World in D

import std.stdio;

void main()
{
  writefln("Hello World!");
}

```

## D4

```shell
// Hello World as a relation-variable in D4

select row { "Hello World" AMessage }
```

## Dafny

```shell
// Hello world in Dafny


method Main() {
  print "Hello, World!
";
}
```

## Darkbasic

```shell
` Hello World in Darkbasic

print "Hello World!"
wait key

```

## Dart

```dart
// Hello world in Dart

main() {
  print('Hello world!');
}
```

## Databasic

```shell
PROGRAM HELLO.B
# Hello World in Databasic
CRT "HELLOW WORLD"
END

```

## Dataflex

```shell
// Hello World in Dataflex Procedural

/tela

Hello world

/*

clearscreen

page tela

```

## dBase

```shell
* Hello World in dBase IV

? "Hello World!"

```

## dc

```shell
#!/usr/bin/dc
# Hello world! in dc (Unix desk calculator)
[Hello world!]p

```

## DCL

```shell
$! Hello world in Digital/Compaq/HP DCL (Digital Command Language)
$ write sys$output "Hello World"

```

## Delphi

```shell
// Hello World in Delphi
Program Hello_World;

{$APPTYPE CONSOLE}

Begin
  WriteLn('Hello World');
End.

```

## Dialect

```shell
# Hello World in Dialect

print "Hello World"

```

## DM

```shell
// Hello World in DM (Dream Maker)

mob
Login()
		..()

		world << "Hello World!"

```

## DML

```shell
! Hello World in DML (Gembase database language)

PROCEDURE_FORM MAIN
		PRINT/NOWAIT ("Hello world")
END_FORM

```

## Draco

```shell
/* Hello world in Draco */

proc main()void:
  writeln("Hello world!");
corp;
```

## DWIM

Hello World in [DWIM](http://en.wikipedia.org/wiki/DWIM) ("Do what I mean"). Comments are not needed in this language.

```shell
DWIM
```

## Dylan

```shell
module:			hello-world
author:			Homer
copyright:		(c) 1994 Homer
version:		1.0

// Hello World in DYLAN

define method main (#rest args)
princ("Hello world!");
end;

main();

```

## DynaMorph

```html
<<!! Hello World in DynaMorph >>
<#setString foo {Hello World!}#>
<html>
<head>
	<title>DynaMorph</title>
</head>
<body>
<#getString foo#>
</body>
</html>
```

# E

## E

```shell
# Hello World in E

println("Hello, world!")

```

## easm

```shell
// Hello World in easm (Win32).

subsystem cui

section imports

    from msvcr70.dll import printf
    from kernel32.dll import ExitProcess

section data

    string pszOutput = "Hello World!"

section code

    call printf (&pszOutput)
    call ExitProcess (00h)
```

## Ecstatic

Hello world in Ecstatic. No comments are possible in this language.

```shell
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
```

> (followed by another 24,866,256,684,781,338,733,321,022,194,929,619,017,923,951,399,467,222,375,071,721,694,990,877,932,162,871,254,860,704 exclamation points)

## Eiffel

```shell
note "Hello World in Eiffel"
class HELLO
create run
feature run
	 do
					 print ("Hello World!%N")
	 end
end

```

## Elan

```shell
(* Hello World in ELAN *)

putline ("Hello World!");

```

## ELENA 3.0

```shell
// Hello world in ELENA 3.0

program =
[
console writeLine:"Hello world!".
].
```

## ELENA 4.0

```shell
// Hello world in ELENA 4.0

public program()
{
  console.writeLine("Hello world!")
}

```

## Elixir

```shell
# Hello world in Elixir

defmodule HelloWorld do
IO.puts "Hello, World!"
end
```

## Elliott

```shell
:: Hello World in Elliott Autocode
SETF PUNCH
SETR 1
1)TELEPRINTER
LINE
TITLE Hello World.;
STOP
START 1

```

## Elm

```shell
-- Hello world in Elm

import Text

main = Text.plainText "Hello, world!"
```

## Emojicode

```shell
👴 Hello world in Emojicode

🐇 🐼 🍇
  🐇🐖 🏁 ➡️ 🚂 🍇
    😀 🔤Hello world!🔤
    🍎 0
  🍉
🍉
```

## Emoticon

```shell
** Hello world in Emoticon **

hello world :-Q S:-P :-Q
```

## EOS 2

```shell
// Hello world in EOS 2

Fenster:Fenster
Text:Textfeld

Fenster.zeichne(Text)
Text.zeileHinzufügen("Hello, World!")

```

## Erlang

```shell
%% Hello World in Erlang

-module(hello).

-export([hello/0]).

hello() ->
   io:format("Hello World!~n", []).
```

## ERRE

```shell
! Hello world in ERRE

PROGRAM HELLO
BEGIN
  PRINT("Hello World!")
END PROGRAM
```

## Eta

```shell
-- Hello world in Eta

main = putStrLn $ "Hello World!"
```

## Euphoria

```shell
-- Hello World in Euphoria

puts(1, "Hello World!
")

```

## Eve

```shell
# Hello world in Eve

bind @browser
[tag: "div", text: "Hello, world"]
```


## Ezhil

```shell
# Hello world in Ezhil

பதிப்பி "வணக்கம்!"
பதிப்பி "உலகே வணக்கம்"
பதிப்பி "******* நன்றி!. *******"
exit()
```

# F

## F#

```shell
(* Hello World in F# *)

printf "Hello World!
"
```

## F

```shell
! Hello world in F

program hello
print *, "Hello world!"
end program hello
```

## Falcon

```shell
// Hello World in Falcon

> "Hello World!"
```

## FALSE

```shell
{ Hello World in FALSE }
"Hello world!
"

```

## Felix

```shell
// Hello world in Felix

println$ "Hello World";
```

## Fennel

```shell
// Hello world in Fennel

(print "Hello world!")
```

## Ferite

```shell
/**
*   start script -- Hello world in Ferite ( www.ferite.org )
*/
uses "console";
Console.println("Hello World");
/* end script */

```

## Fetlang

```shell
(Hello world in Fetlang)

Make slave scream "Hello World!"
```

## Filemaker

```shell
#Hello World in Filemaker Script
Show Custom Dialog ["Hello World" ; "Hello World"]

```

## Fjölnir

```shell
;; Hello World in Fjölnir (Icelandic programming language)

"hello" < main
{
   main ->
   stef(;)
   stofn
       skrifastreng(;"Halló Veröld!"),
   stofnlok
}
*
"GRUNNUR"
;
```

## Flaming Thunder

```shell
# Write "Hello world" in Flaming Thunder.

Write "Hello world".

```

## Focal

```shell
1.01 COMMENT HELLO WORLD IN FOCAL
1.02 TYPE "HELLO WORLD", !
1.03 QUIT

```

## FOCUS

```shell
-* Hello World in FOCUS

-TYPE Hello world

```

## Folders

Hello world in Folders.

No comments possible. The source code of the program is the structure of nested folders in the Windows file system depicted here.

![picture of folder structure]({{ site.url }}{{ site.path.images }}/posts/helloworld/Folders.png)

## Forth

```shell
' Hello world in Forth

." Hello World" CR
```

## Fortran

```shell
C     Hello World in Fortran

	PROGRAM HELLO
	WRITE (*,100)
	STOP
100 FORMAT (' Hello World! ' /)
	END

```

## Fortran77

```shell
C     Hello World in Fortran 77

	PROGRAM HELLO
	PRINT*, 'Hello World!'
	END

```

## Fortran90

```shell
! Hello World in Fortran 90 and 95

PROGRAM HelloWorld
  WRITE(*,*)  "Hello World!"
END PROGRAM

```

## FortranIV

```shell
	 PROGRAM HELLO
c
C      Hello World in Fortran IV (supposedly for a TR440)
c
	 WRITE (6,'('' Hello World!'')')
	 END

```

## Fortress

```shell
(* Hello World in Fortress *)

export Executable
run(args) = print "Hello, world!"

```

## FreeBASIC

```shell
'Hello World in FreeBASIC

print "Hello World"

```

## Frink

```shell
// Hello World in Frink

println["Hello World!"]

```

## Full Metal Jacket

// Hello world in Full Metal Jacket

![Full Metal Jacket graphical source code]({{ site.url }}{{ site.path.images }}/posts/helloworld/FullMetalJacket.png)

# G

## G-code

Hello World in G-code.

```shell
%
O1000
(PROGRAM NAME - HELLOWORLD)
(DATE=DD-MM-YY - 30-06-05 TIME=HH:MM - 19:37)
N10G20
N20G0G17G40G49G80G90
/N30G91G28Z0.
/N40G28X0.Y0.
/N50G92X0.Y0.Z0.
( 1/16 FLAT ENDMILL TOOL - 1 DIA. OFF. - 1 LEN. - 1 DIA. - .0625)
(CONTOUR)
N60T1M6
N70G0G90X0.Y1.A0.S5000M3
N80G43H1Z.5
N90Z.25
N100G1Z-.005F2.
N110Y0.F20.
N120G0Z.5
N130X.5
N140Z.25
N150G1Z-.005F2.
N160Y1.F20.
N170G0Z.5
N180Y.6106
N190Z.25
N200G1Z-.005F2.
N210X0.F20.
N220G0Z.5
N230X.6157Y.4712
N240Z.25
N250G1Z-.005F2.
N260X.6039Y.4135F20.
N270X.6Y.351
N280X1.1
N290G3X1.0098Y.6202R.4333
N300X.8941Y.6971R.2625
N310X.7255Y.6538R.1837
N320X.6157Y.4712R.332
N330G0Z.5
N340X.6Y.351
N350Z.25
N360G1Z-.005F2.
N370X.6039Y.2885F20.
N380G3X.7255Y.0481R.385
N390X.9745R.1853
N400X1.0843Y.2308R.332
N410G0Z.5
N420X1.2039Y0.
N430Z.25
N440G1Z-.005F2.
N450Y1.F20.

N460G0Z.5
N470X1.3098
N480Z.25
N490G1Z-.005F2.
N500Y0.F20.
N510G0Z.5
N520X1.4706Y.125
N530Z.25
N540G1Z-.005F2.
N550X1.502Y.0817F20.
N560G3X1.6176Y.0048R.2625
N570X1.7863Y.0481R.1837
N580X1.9118Y.351R.3957
N590X1.8216Y.6202R.4333
N600X1.7059Y.6971R.2625
N610X1.5373Y.6538R.1837
N620X1.4157Y.4135R.358
N630X1.4706Y.125R.4611
N640G0Z.5
N650X1.9853Y0.
N660Z.25
N670G1Z-.005F2.
N680X2.0422Y.1442F20.
N690G0Z.5
N700X2.5706Y1.
N710Z.25
N720G1Z-.005F2.
N730X2.6961Y0.F20.
N740X2.8216Y1.
N750X2.9451Y0.
N760X3.0706Y1.
N770G0Z.5
N780X3.2961Y.6538
N790Z.25
N800G1Z-.005F2.
N810X3.2608Y.6202F20.
N820G3X3.1745Y.2885R.4408
N830X3.2961Y.0481R.385
N840X3.5451R.1853
N850X3.6706Y.351R.3957
N860X3.5804Y.6202R.4333
N870X3.4647Y.6971R.2625
N880X3.2961Y.6538R.1837
N890G0Z.5
N900X3.7461Y.7019
N910Z.25
N920G1Z-.005F2.
N930Y0.F20.
N940G0Z.5
N950Y.3654
N960Z.25
N970G1Z-.005F2.
N980X3.7637Y.4663F20.
N990G2X3.8422Y.6587R.4948
N1000X3.9167Y.7019R.0929
N1010G1X4.0755
N1020G2X4.15Y.6587R.0929
N1030X4.1951Y.5769R.246
N1040G0Z.5
N1050X4.3255Y1.
N1060Z.25
N1070G1Z-.005F2.
N1080Y0.F20.
N1090G0Z.5
N1100X4.9275
N1110Z.25
N1120G1Z-.005F2.
N1130Y1.F20.
N1140G0Z.5
N1150X5.0314
N1160Z.25
N1170G1Z-.005F2.
N1180Y.2981F20.
N1190G0Z.5
N1200X4.9275Y.274
N1210Z.25
N1220G1Z-.005F2.
N1230X4.8941Y.1731F20.
N1240G2X4.7627Y.0192R.3255
N1250X4.5529Y.0481R.1862
N1260X4.4314Y.2885R.358
N1270X4.5176Y.6202R.4408
N1280X4.6333Y.6971R.2625
N1290X4.802Y.6538R.1837
N1300X4.8941Y.5288R.3457
N1310G1X4.9275Y.4279
N1320G0Z.5
N1330X5.0314Y.149
N1340Z.25
N1350G1Z-.005F2.
N1360Y0.F20.
N1370G0Z.5
N1380M5
N1390G91G28Z0.
N1400G28X0.Y0.A0.
N1410M30
%
```

![Preiview]({{ site.url }}{{ site.path.images }}/posts/helloworld/gcode.jpg)

## Gambas

```shell
'************************************
' Hello world in Gambas
'************************************
PUBLIC SUB Main()

  PRINT "Hello World"

END

```

## GameMonkey Script

```shell
// Hello World in GameMonkey Script

print("Hello World");

```

## Genero BDL

```shell
-- Hello world in Genero BDL

main
  display "hello world"
end main
```

## Genie

```shell
// Hello world in Genie

init
  print "Hello world!"

```

## Gentee-simple

```shell
// Hello World in Gentee (simple version)

func hello<main> : @"Hello, World!"

```

## Gentee

```shell
// Hello World in Gentee

func hello <main>
{
   print( "Hello, World!" )
   getch()
}
```

## GLBasic

```shell
// Hello World in GLBasic

PRINT "Hello World",1,1
SHOWSCREEN
MOUSEWAIT
```

## GML

```shell
// Hello World in GML (Game Maker Language)
draw_text(10,10,"Hello World")
screen_refresh()
keyboard_wait()

```

## Go

```go
// Hello world in Go

package main
import "fmt"
func main() {
  fmt.Printf("Hello World")
}
```

## Gofer

```shell
-- Hello World in Gofer
-- Simple version

helloWorld:: String
helloWorld = "Hello World!
"


-- Hello World in Gofer
-- Dialog version

helloWorld :: Dialogue
helloWorld resps = [AppendChan stdout "Hello world!"]

```

## GoogleGadgets

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!-- Hello World as a Google gadget -->

<Module>
  <ModulePrefs title="hello world example" />
  <Content type="html">
     <![CDATA[
       Hello, world!
     ]]>
  </Content>
</Module>
```

## Gosu

```shell
// Hello world in Gosu

print ( "Hello World!" )
```

## GRAMophone

```shell
//Hello World in GRAMophone

composition "Hello, World!" of "Composer"
{
 %
 player player1 {
    grammar lindenmayer
    %
    axiom->print("Hello, World!");
 }

 player player2 {
    grammar chomsky
    %
       @composition->print("Hello, World!");
 }
}
```

## Gravity

```shell
// Hello world in Gravity

func main() {
  System.print("Hello World!");
}

```

## Gri

```shell
# Hello World in Gri
show "hello world"

```

## Groovy

```groovy
// Hello World in Groovy

println "Hello World"

```

## Guile

```shell
; Hello world in Guile

(define do-hello (lambda () (display "Hello world.") (newline)))
```

## GynkoSoft

```shell
; Hello World in GynkoSoft
; Simple version
0.00 Protocol "Hello, World!"


; Hello World in GynkoSoft
; Dialog box output
0.00 Message "Hello, World!"

```

# H

## Hack

```hack
<?hh
// Hello world in Hack
echo 'Hello World';
```

## Harbour

```shell
// Hello world in Harbour

? "Hello World"
```

## Haskell

```haskell
-- Hello World in Haskell

main = putStrLn "Hello World"
```

## Have

```shell
// Hello world in Have

func main() {
    print("Hello, world!")
}
```

## Haxe

```shell
// Hello world in Haxe

class Hello {
    static public function main() {
        trace("Hello world!");
    }
}
```

## HDX

```shell
# Hello World as bdehaldia.exe external command

proc hdx_info {} {
  set ::Titel [TRA "&Hello World"]
  set ::Menu GMA
}

proc hdx_run {} {
  tk_messageBox -type ok -message [TRA "Hello World!"]
  destroy .
}
```

## HolyC

```shell
// Hello World in HolyC, the language of TempleOS

"Hello world";
```

## Hoon

```shell
:: Hello world in Hoon

!:("Hello World")
```

## HP-41C

```shell
Hello World for the HP 41C. No comment character exists.

01 LBL "HELLO"
02 "HELLO WORLD"
03 AVIEW

```

## HP-48

```shell
<<
@ Hello World for the HP-48
@ << and >> are one char each
"HELLO WORLD"
>>

```

## HQ9+

```shell
Hello World in HQ9+ and HQ9++. No comment character exists.

H

```

## HTML

```html
<HTML>
<!-- Hello World in HTML -->
<HEAD>
<TITLE>Hello World!</TITLE>
</HEAD>
<BODY>
Hello World!
</BODY>
</HTML>

```

## Hubot

```shell
# Hello world as a Hubot script

module.exports = (robot) ->
  robot.respond /hello/i, (msg) ->
    msg.send 'Hello World!'
```

## Human

Hello World in human languages.

|LANGUAGE|Hello, world!|NOTE|
|:-:|:-:|:-:|
|Afrikaans|Hallo, w&ecirc;reld!||
|Albanian|Persh&euml;ndetje Bot&euml;||
|Arabic|&#1571;&#1607;&#1604;&#1575;&#1611; &#1576;&#1575;&#1604;&#1593;&#1575;&#1604;&#1605;|(Ahlan bil 'Alam)|
|Armenian|&#1330;&#1377;&#1408;&#1381;&#1371;&#1410;, &#1377;&#1399;&#1389;&#1377;&#1408;&#1392;&#1417;|(barev ash'kharh)|
|Azeri|Salam D&#252;nya||
|Czech|Ahoj Sv&#283;te!||
|Basque/Euskara|Kaixo mundua!||
|Belarusian|&#1055;&#1088;&#1099;&#1074;&#1110;&#1090;&#1072;&#1085;&#1085;&#1077; &#1089;&#1074;&#1077;&#1090;|(Pryvitannie sviet)|
|Bemba|Shani Mwechalo!||
|Bengali|Shagatam Prithivi!||
|Bosnian|Zdravo Svijete!||
|Bulgarian|&#1047;&#1076;&#1088;&#1072;&#1074;&#1077;&#1081;, &#1089;&#1074;&#1103;&#1090;!|(Zdrav'ei svi'at)|
|Cambodian|&#6023;&#6086;&#6042;&#6070;&#6036;&#6047;&#6077;&#6042; &#6038;&#6071;&#6039;&#6038;&#6043;&#6084;&#6016;|(chomreabsuor piphoplok)|
|Catalan|Hola m&oacute;n!||
|Chinese|&#20320;&#22909;&#19990;&#30028;|(n&#464; h&#462;o sh&igrave; ji&egrave;)|
|Cherokee|&#5027;&#5071;&#5106; &#5025;&#5046;&#5039;|(O-si-yo E-lo-hi)|
|Chinook Wawa|Klahowya Hayas Klaska||
|Croatian|Bok Svijete!||
|Danish|Hej, Verden!||
|Dutch|Hallo, wereld!||
|English|Hello World!||
|Esperanto|Saluton mondo!||
|Estonian|Tere maailm!||
|Finnish|Hei maailma!||
|French|Salut le Monde!||
|Frisian|Hallo, wr&acirc;ld!||
|Galician|Ola mundo!||
|German|Hallo Welt!||
|Greek|&#915;&#949;&#953;&#945; &#963;&#959;&#965; &#954;&#972;&#963;&#956;&#949;!|(Geia soy kosme)|
|Hawaiian|Aloha Honua||
|Hebrew|&#1513;&#1500;&#1493;&#1501; &#1506;&#1493;&#1500;&#1501;|(Shalom Olam)|
|Hindi|&#2344;&#2350;&#2360;&#2381;&#2340;&#2375; &#2342;&#2369;&#2344;&#2367;&#2351;&#2366;|(namaste duniya)|
|Hmong|Nyob zoo ntiaj teb.||
|Hungarian|Hell&oacute; vil&aacute;g!||
|Icelandic|Hall&oacute; heimur!||
|Igbo|Ndewo &#7908;wa||
|Indonesian|Halo Dunia!||
|Irish|Dia dhaoibh, a dhomhain!||
|Italian|Ciao Mondo!||
|Japanese|&#12371;&#12435;&#12395;&#12385;&#12399;&#12289; &#19990;&#30028;&#65281;|(konnichiwa sekai)|
|Kannada|&#3257;&#3250;&#3275; &#3253;&#3248;&#3277;&#3250;&#3277;&#3233;&#3277;|(Hal&#333; varl&#7693;)|
|Kiswahili|Habari dunia!||
|Kikuyu|Niatia thi!||
|Klingon|nuqneH||
|Korean|&#48152;&#44049;&#45796; &#49464;&#49345;&#50500;|(bangabda, sesangah)|
|Lao|&#3754;&#3760;&#3738;&#3762;&#3725;&#3732;&#3765;,&#3778;&#3749;&#3713;|(sabaidi olk)|
|Latin|AVE MVNDE|(ave munde)|
|Latvian|Sveika, Pasaule!||
|Lithuanian|Sveikas, Pasauli||
|Lojban|coi li terdi|
|Luxembourgish|Moien Welt!||
|Malagasy|Manao ahoana ry tany!||
|Malayalam|Namaskaram, lokame||
|Maltese |Merhba lid-dinja||
|Norwegian|Hallo verden!||
|Persian|!&#1587;&#1604;&#1575;&#1605; &#1583;&#1606;&#1740;&#1575;|(Salaam Donyaa!)|
|Polish|Witaj &#347;wiecie!||
|Portuguese|Ol&aacute;, mundo!||
|Punjabi|&#2616;&#2596;&#2623; &#2616;&#2637;&#2608;&#2624; &#2565;&#2581;&#2622;&#2610; &#2598;&#2625;&#2600;&#2623;&#2566;|(Sati sr&#299; ak&#257;la duni'&#257;)|
|Romanian|Salut lume!||
|Russian|&#1047;&#1076;&#1088;&#1072;&#1074;&#1089;&#1090;&#1074;&#1091;&#1081;, &#1084;&#1080;&#1088;!|(Zdra'vstvuj mi'r)|
|Scots Gaelic|Hal&ograve;, a Shaoghail!||
|Serbian|Zdravo Svete!||
|Slovak|Ahoj, svet!||
|Slovenian|Pozdravljen svet!||
|Spanish|&iexcl;Hola mundo!||
|Swedish|Hall&aring; v&auml;rlden!||
|Tagalog|Kamusta mundo!||
|Tamil|&#3001;&#2994;&#3019; &#2953;&#2994;&#2965;&#2990;&#3021;|(Hal&#333; ulakam)|
|Telugu|&#3129;&#3122;&#3147; &#3125;&#3120;&#3122;&#3149;&#3105;&#3149;|(Hal&#333; varal&#7693;)|
|Thai|&#3626;&#3623;&#3633;&#3626;&#3604;&#3637;&#3650;&#3621;&#3585;!|(sawadee lok)|
|Turkish|Merhaba D&uuml;nya!||
|Ukrainian|&#1055;&#1088;&#1080;&#1074;i&#1090;, &#1089;&#1074;i&#1090;&#1077;!|(Pryvi't svi'te)|
|Urdu|&#1729;&#1740;&#1604;&#1608; &#1583;&#1606;&#1740;&#1575; &#1608;&#1575;&#1604;&#1608;||
|Vietnamese|Xin ch&agrave;o th&#x1EBF; gi&#x1EDB;i||
|Welsh|S'mae byd!||
|Yiddish|&#1492;&#1506;&#1500;&#1488; &#1493;&#1493;&#1506;&#1500;&#1496;|(hela velt)|
|Zulu|Sawubona Mhlaba||

## HyperTalk

```shell
-- Hello World in HyperTalk

answer "Hello, world!"

```

# I

## IBM-Exec

```shell
Hello World for IBM EXEC (under VM/CMS)

&CONTROL
*
&TYPE Hello World!
*
&EXIT 0

```


## IBM-Exec2

```shell
Hello World for IBM EXEC2 (under VM/CMS)

&TRACE OFF
*
&TYPE Hello World!
*
&EXIT 0

```

## ici

```shell
# Hello World in ici (http://www.zeta.org.au/~atrn/ici/)
printf("Hello World!
");

```

## ICL SCL

```shell
@ HELLO WORLD IN ICL SCL
BEGIN
  SEND_MESSAGE("HELLO WORLD")
END

```

## Icon

```shell
# Hello world in Icon (http://www.cs.arizona.edu/icon/)

procedure main()
  write("Hello world")
end

```

## IDC

```shell
// Hello World in IDC-script language for IDA disaasembler

#include <idc.idc>

static main(void)
{
  Message("Hello World!");
}

```

## IDL

```shell
IDL> ; Hello World in IDL (Interactive Data Language)
IDL> print, "Hello World"

```

## Idris

```shell
-- Hello world in Idris

module Main

main : IO ()
main = putStrLn "Hello world"
```

## Imba

```shell
// Hello world in Imba


console.log "hello world"

$$(body).append <h1> "Hello world"
```

## Inform

```shell
!  "Hello world" in Inform
[ Main;
  print "Hello world^";
];

```

## Informix 4GL

```shell
# Hello World in Informix 4GL

MAIN

  DISPLAY "Hello World"

END MAIN

```

## Ingres ABF

```shell
/* Hello World in Ingres ABF */
procedure hello =
begin
  message 'Hello, World' with style=popup;
end

```

## InstallScript

```shell
// Hello World in InstallScript
// (Scripting language of InstallShield, a Windows install generator)

program
MessageBox("Hello World!",INFORMATION);
endprogram

```

## Intercal

```shell
Hello World in Intercal

DO ,1 <- #13
PLEASE DO ,1 SUB #1 <- #234
DO ,1 SUB #2 <- #112
DO ,1 SUB #3 <- #112
DO ,1 SUB #4 <- #0
DO ,1 SUB #5 <- #64
DO ,1 SUB #6 <- #194
DO ,1 SUB #7 <- #48
PLEASE DO ,1 SUB #8 <- #22
DO ,1 SUB #9 <- #248
DO ,1 SUB #10 <- #168
DO ,1 SUB #11 <- #24
DO ,1 SUB #12 <- #16
DO ,1 SUB #13 <- #214
PLEASE READ OUT ,1
PLEASE GIVE UP
```

## Io

```io
// Hello World in io programming language
"Hello world!" print

```

## Iptscrae

```shell
; Hello World in Iptscrae.
; 1. from the chat prompt:

/ "Hello World!" SAY

; 2. in a cyborg:

ON OUTCHAT {
    {  "Hello World!" SAY
    } CHATSTR "say it" == IF
}

; 3. in a room script:

ON SELECT {
    "Hello World!" SAY
}
```

# J

## J

```shell
NB. Hello World in J
'Hello World' 1!:2(2)
```

## Jade

```shell
// Hello World in JADE
write "Hello World";
```

## Jako

```shell
# Hello World in Jako

use sys;

sys::print("Hello, world!
");

```

## Janet

```shell
# Hello world in Janet

(print "hello, world!")
```

## Jason

```shell
// Hello World in Jason

!greeting.
+!greeting : true <- .print("Hello World").
```

## Java

```java
// Hello World in Java

class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}

```

## Java (Mobile)

```java
// Hello World on a mobile Java device

package helloworld;

import javax.microedition.midlet.*;
import javax.microedition.lcdui.*;

public class HelloWorld extends MIDlet {

public HelloWorld()
{
  Form form = new Form("Hello World");
  form.append("Hello world!");
  Display.getDisplay(this).setCurrent(form);
}

protected void pauseApp() {  }
protected void startApp() throws
  javax.microedition.midlet.MIDletStateChangeException {  }
protected void destroyApp(boolean parm1) throws
  javax.microedition.midlet.MIDletStateChangeException {  }
}
```

## Java (Servlet)

```java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

//
// Hello World Java Servlet
//

public class HelloWorld extends HttpServlet {
  public void service(HttpServletRequest request,
    HttpServletResponse response)
    throws IOException {

    response.setContentType("text/html");
    PrintWriter out = response.getWriter();

    out.println("<html><body>");
    out.println("Hello World!");
    out.println("</body></html>");
  }
}

```

## Java (Swing)

```java
// Hello World in Java using Swing GUI

class HelloWorldSwing {
  static public void main(String args[]) {
    javax.swing.JOptionPane.showMessageDialog(null,"Hello world!");
  }
}

```

## Java Server Pages

```jsp
<!-- Hello World for Java Server Pages -->

<%@ page language='java' %>
<%="Hello World!" %>
```

## JavaScript

```js
// Hello world in JavaScript

console.log("Hello World");
```

## JCL

```shell
//HERIB    JOB  ,'HERIBERT OTTEN',PRTY=12
//* HELLO WORLD FOR MVS            
 //HALLO    EXEC PGM=IEBGENER       
 //SYSIN    DD DUMMY                
 //SYSPRINT DD SYSOUT=*             
 //SYSUT2   DD SYSOUT=T             
 //SYSUT1   DD *                    
 HELLO WORLD!                       
 /*                                 
 //
```

## Jess

```shell
; Hello World in JESS

(printout t "Hello World")
```

## Jorf

```shell
| Hello world in Jorf

Hello:Start
Msg:Add("Hello", "Ok")
  Hello World!
Return
```

## JSFuck

```shell
// Hello world in JSFuck

[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+([][[]]+[])[+[]]+([][[]]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()(([]+[])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+[]])[+[]]+(!+[]+!+[]+!+[]+!+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]])+[])+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+[[]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]([[]])+[]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(+(!+[]+!+[]+!+[]+[!+[]+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]+!+[]])+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([][[]]+[])[!+[]+!+[]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+([][[]]+[])[+[]]+([][[]]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()(([]+[])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+[]])[+[]]+(!+[]+!+[]+[+!+[]])+[])+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+([][[]]+[])[+[]]+([][[]]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()(([]+[])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+[]])[+[]]+[!+[]+!+[]+!+[]]+(+(+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+[+[]])))()
```

## JudoScript

```shell
// Hello World in JudoScript (a Java scripting layer)

. "Hello World";

```

## Julia

```shell
# Hello world in Julia

println("Hello, World!")
```

# K

## K

```shell
/ Hello world in K

"Hello world!"
```

## K3

```shell
/ Hello World in K3

`0:"Hello World!

```

## K4

```shell
/ Hello World in K4/Q/KDB

1"Hello World
"
```

## K5

```shell
/ Hello World in K5

1'"Hello World
"
```

## Kitten

```shell
// Hello world in Kitten

"Hello World!" say
```

## Kix

```shell
; Hello World in Kix

Run( "Notepad.exe" )
Sleep 1
SetFocus( "Untitled - Notepad" )
$ReturnCode = SendKeys("Hello World")
Sleep( 2 )
$ReturnCode = SendKeys("~{F4}Y")
```

## Kotlin

```shell
// Hello world in Kotlin

fun main(args : Array<String>) {
println("Hello, world!")
}
```

## Kumir

Hello world in Kumir. This language doesn't have comments.

```shell
Hello world in Kumir. This language doesn't have comments.

алг
нач
             вывод “Hello world”
кон
```

## Kylix

```shell
{Hello World in Kylix}

program Hello_World;

 uses
    QDialogs;

 begin
   ShowMessage('Hello World');
 end.
```

# L

## LöVE

```shell
-- Hello world in LöVE

function love.draw()
  love.graphics.print('Hello World!', 400, 300)
end
```

## L

```shell
// Hello World in L

namespace Hello is
class Main is
		void init is()
				IO.Std.out.println("Hello World!");
		end
end
end
```

## L33t

```shell
// Hello world in L33t

Gr34t l33tN3$$?
M3h...
iT 41n't s0 7rIckY.

l33t sP33k is U8er keWl 4nD eA5y wehn u 7hink 1t tHr0uGh.
1f u w4nn4be UB3R-l33t u d3f1n1t3lY w4nt in 0n a b4d4sS h4xX0r1ng s1tE!!! ;p
w4r3Z c0ll3cT10n2 r 7eh l3Et3r!

Qu4k3 cL4nS r 7eh bE5t tH1ng 1n teh 3nTIr3 w0rlD!!!
g4m3s wh3r3 u g3t to 5h00t ppl r 70tAl1_y w1cK1d!!
I'M teh fr4GM4stEr aN I'lL t0t41_1Ly wIpE teh phr34k1ng fL00r ***j3d1 5tYlE*** wItH y0uR h1dE!!!! L0L0L0L!
t3lEphR4gG1nG l4m3rs wit mY m8tes r34lLy k1kK$ A$$

l33t hAxX0r$ CrE4t3 u8er- k3wL 5tUff lIkE n34t pR0gR4mm1nG lAnguidGe$...
s0m3tIm3$ teh l4nGu4gES l00k jUst l1k3 rE41_ 0neS 7o mAkE ppl Th1nk th3y'r3 ju$t n0rMal lEE7 5pEEk but th3y're 5ecRetLy c0dE!!!!
n080DY unDer5tAnD$ l33t SpEaK 4p4rT fr0m j3d1!!!!!
50mE kId 0n A me$$4gEb04rD m1ghT 8E a r0xX0r1nG hAxX0r wH0 w4nT2 t0 bR34k 5tuFf, 0r mAyb3 ju5t sh0w 7eh wAy5 l33t ppl cAn 8E m0re lIkE y0d4!!! hE i5 teh u8ER!!!!
1t m1ght 8E 5omE v1rus 0r a Pl4ySt4tI0n ch34t c0dE.
1t 3v3n MiTe jUs7 s4y "H3LL0 W0RLD!!!" u ju5t cAn'T gu3s5.
tH3r3's n3v3r anY p0iNt l00KiNg sC3pT1c4l c0s th4t, be1_1Ev3 iT 0r n0t, 1s whAt th1s 1s!!!!!

5uxX0r5!!!L0L0L0L0L!!!!!!!
```

## LabVIEW

![LabVIEW]({{ site.url }}{{ site.path.images }}/posts/helloworld/labview.gif)

## Lasso

```shell
// Hello world in Lasso

Hello world!
```

## LaTeX

```shell
% Hello World! in LaTeX
\documentclass{article}
egin{document}
Hello World!
\end{document}

```

## Latino

```shell
# Hello world in Latino

escribir("Hello World!")
```

## LibertyBASIC

```shell
'hello world in Liberty BASIC
PRINT "Hello World"
END

```

## Lily

```shell
# Hello world in Lily

print("Hello World")
```

## LilyPond

```shell
% Hello World in LilyPond

\markup { Hello World! }

```

## Limbo

```shell
Hello World in Limbo.
Limbo is the programming language of the Inferno OS
(from Lucent Bell Labs).


implement Cmd;

include "sys.m";
include "draw.m";

Cmd : module {
    init : fn (ctxt : ref Draw->Context, args : list of string);
};

init(nil : ref Draw->Context, nil : list of string)
{
    sys := load Sys Sys->PATH;
    sys->print("Hello World\n");
}
```

## LIMS Basic

```shell
'Hello World in LIMS Basic
msgbox("hello world")

```

## Lingo

```shell
Hello World in Lingo (Macromedia Director)

on startmovie
  alert "Hello World"
end
```

## Linotte

```shell
// Hello World in Linotte

BonjourLeMonde:
 début
   affiche "Hello World!"
```

## Lisaac

```shell
// Hello World in Lisaac
Section Header

+ name        := HELLO_WORLD;

Section Inherit

- parent_object:OBJECT := OBJECT;

Section Public

- main <-
(
  "Hello world !\n".print;
);
```

## Lisp-Emacs

```shell
;;; Hello World in Emacs Lisp.

(defun hello-world()
  "Display the string hello world."
  (interactive)
  (message "hello world"))
```

## LiveCode

```shell
-- Hello world in LiveCode (formerly called Revolution, formerly called Transcript)

answer "Hello World!"
```

## LLVM

```shell
; Hello world in LLVM Assembly

@.str = internal constant [14 x i8] c"hello, world\0A\00"

declare i32 @printf(i8*, ...)

define i32 @main(i32 %argc, i8** %argv) nounwind {
entry:
    %tmp1 = getelementptr [14 x i8]* @.str, i32 0, i32 0
    %tmp2 = call i32 (i8*, ...)* @printf( i8* %tmp1 ) nounwind
    ret i32 0
}
```

## Logo

```shell
; Hello World in Logo

DRUCKEZEILE [Hello World!]

```

## Logo (graphical)

```shell
; Hello World in LOGO, graphical output.

go 20 , left 180,
go 40 , left 180,
go 20 , right 90,
go 20 , left 90 ,
go 20 , left 180,
go 40 , left 90 ,
go 20 , left 90 ,
go 20 , right 90 ,
go 20 , right 90 ,
go 10 , right 90 ,
go 20 , left 90 ,
go 10 , left 90 ,
go 30 , left 90 ,
go 40 , left 180,
go 40 , left 90 ,
go 20 , left 90 ,
go 40 , left 180,
go 40 , left 90 ,
go 40 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 60 , left 90 ,
go 40 , left 180,
go 40 , left 90 ,
go 20 , left 90 ,
go 20 , left 180,
go 20 , left 90 ,
go 20 , left 90 ,
go 40 , left 180,
go 40 , left 90 ,
go 40 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 40 , left 90 ,
go 20 , right 90,
go 20 , right 90,
go 5 , left 90  ,
go 5 , left 90  ,
go 25 , left 180,
go 40 , left 90 ,
go 40 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 20 , left 90 ,
go 40 , left 180,
go 40 ,

```

## LOLCODE

```shell
BTW Hello world in LOLCODE
HAI 1.2
CAN HAS STDIO?
VISIBLE "HAI WORLD!!!1!"
KTHXBYE

```

## Loli

```shell
# Hello world in Loli

sayln("Hello, world!")
```

## LOTOS

```shell
(* Hello World in LOTOS (Language Of Temporal Ordering Specifications) *)

process HelloWorld [v]: exit :=
v! "Hello World!";
exit
endproc

```

## Lotus Note Formula

```shell
REM "Lotus Note Formula Language";
@Prompt([ok];"Hi there";"Hello World");

```

## Lotus Script

```shell
' Hello World in Lotus Script
Sub Initialize
		Msgbox "Hello world", 0, "Hi there!"
End Sub

```

## LPC

```shell
// Hello World in LPC

void create()
{
	 message("info","Hello World!",this_user());
}
```

## LS-DYNA

```shell
$ "Hello World" for LS-DYNA
*KEYWORD
*PART

		 1         1         1
*SECTION_BEAM
		 1         1       1.0         2         1
	 1.0       1.0       0.0       0.0         1         1
*MAT_ELASTIC
		 1    1.0E-9    1000.0       0.3
*ELEMENT_BEAM
	 1       1       2       3       1
	 2       1       3       4       1
	 3       1       3       6       1
	 4       1       6       5       1
	 5       1       8      11       1
	 6       1      11      12       1
	 7       1      12       9       1
	 8       1       9       8       1
	 9       1       8       7       1
	10       1       7      10       1
	11       1      14      16       1
	12       1      16      15       1
	13       1      13      15       1
	14       1      15      17       1
	15       1      19      21       1
	16       1      21      20       1
	17       1      18      20       1
	18       1      20      22       1
	19       1      23      24       1
	20       1      24      26       1
	21       1      26      25       1
	22       1      25      23       1
	23       1      27      28       1
	24       1      28      29       1
	25       1      29      30       1
	26       1      30      31       1
	27       1      32      33       1
	28       1      33      35       1
	29       1      35      34       1
	30       1      34      32       1
	31       1      36      37       1
	32       1      37      38       1
	33       1      40      42       1
	34       1      42      41       1
	35       1      39      41       1
	36       1      41      43       1
	37       1      44      45       1
	38       1      45      47       1
	39       1      48      47       1
	40       1      47      46       1
	41       1      46      44       1
*NODE
	 1             0.0             0.0             1.0
	 2
	 3             0.0             2.0
	 4             0.0             4.0
	 5             2.0
	 6             2.0             2.0
	 7             3.0
	 8             3.0             1.0
	 9             3.0             2.0
	10             5.0
	11             5.0             1.0
	12             5.0             2.0
	13             6.0
	14             6.0             4.0
	15             7.0
	16             7.0             4.0
	17             8.0
	18             9.0
	19             9.0             4.0
	20            10.0
	21            10.0             4.0
	22            11.0
	23            12.0
	24            12.0             2.0
	25            14.0
	26            14.0             2.0
	27            16.0             2.0
	28            16.5
	29            17.0             1.0
	30            17.5
	31            18.0             2.0
	32            19.0
	33            19.0             2.0
	34            21.0
	35            21.0             2.0
	36            22.0
	37            22.0             2.0
	38            24.0             2.0
	39            25.0
	40            25.0             4.0
	41            26.0
	42            26.0             4.0
	43            27.0
	44            28.0
	45            28.0             2.0
	46            30.0
	47            30.0             2.0
	48            30.0             4.0
*END

```

## LSL

```shell
// Hello World in Linden Scripting Language (LSL)

default
{
state_entry()
{
		llSay(0, "Hello World");
}
}

```

## Lua

```shell
# Hello World in Lua

print "Hello world"

```

# M

## m4

```shell
# Hello World for the m4 macro processor
Hello

```

## MACRO-10

```shell
TITLE HELLO WORLD
; HELLO WORLD IN MACRO 10 FOR TOPS-10
ENTRY OUTPUT
SEARCH UUOSYM

LAB:    ASCIZ /HELLO WORLD
/
OUTPUT: OUTSTR LAB              ; OUTPUT MESSAGE
		MONRT.                  ; RETURN TO MONITOR          
		END OUTPUT

```

## MACRO-11

```shell
;       "Hello, world!" in MACRO-11 for RT-11

		.MCALL  .EXIT,.PRINT
START:  .PRINT  #$1
		.EXIT
$1:     .ASCIZ  /Hello, world!/
		.END    START

```

## Macromedia-Flex

```shell
<?xml version="1.0" encoding="utf-8"?>
<mx:Application xmlns:mx="http://www.macromedia.com/2003/mxml">
 <!-- Hello Word in Macromedia Flex -->
 <mx:Label text="Hello World"/>
</mx:Application>

```

## MAD

```shell
				 R Hello world in MAD

PRINT FORMAT HELLOW
VECTOR VALUES HELLOW=$13h0Hello, world*$
END OF PROGRAM
```

## make

```make
# Hello world as a makefile

all:
@echo "Hello world!"
```

## Malbolge

```shell
Hello World in Malbolge. No comment character exists.

(=<`$9]7<5YXz7wT.3,+O/o'K%$H"'~D|#z@b=`{^Lx8%$Xmrkpohm-kNi;gsedcba`_^]\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543s+O<oLm

```

## MAMASH

```shell
/* Hello World in MAMASH */

TQWD LGYEA NXKIA HELLO_WORLD )1(

DWLH CXBZ_YKX

ID& HELLO_WORLD YED 'HELLO WORLD' .

```

## Maple

```shell
# Hello World in Maple

>> printf("Hello World!");

```

## Marmelade

```shell
/ Hello world in Marmelade

sayln "Hello, world!"
```

## Mathematica

```mathematica
(* Hello world in Mathematica *)

Print["Hello, World!"]

```

## MATLAB

```matlab
% Hello World in MATLAB.

disp('Hello World');

```

## Matrix

```shell
| Hello world in Matrix

System:Hello_World

Type
		BaseType
				String
						Text : 12

Matrix:Model:Application
		Silo:M1:Software_Application
				Realm:Analysis_Of_Application
						Domain:Friend
								Entity:Greeting
										State
												Dataset:Hail
														Text : Message
												DynamicDataState:Display:Hail
														StateAction
																Template
																		<<|>><<#Message>>
																		<<:>>
														Transition
																EventState
																		Wave -> Display

		Silo:M0:Real_World_Objects
				RealmObject:Objects_Of_Application
						DomainObject:Friend
								EntityObject:Greeting
										Object
												| Identity | State
												ID001      : Display
										ObjectEvent
												| Identity | Event | Message
												ID001      : Wave  : "Hello World!"
```

## MAX-MSP

![MAX-MSP]({{ site.url }}{{ site.path.images }}/posts/helloworld/maxmsp.gif)

## Maxima

```shell
/*  Hello World in Maxima */

disp("hello, world");
```

## MAXScript

```shell
/*Hello World in MAXScript (the script language of 3ds Max).
Hello World is both printed as text and in full 3D.*/

Print "Hello World"
Text text:"Hello World"

```

## MCSBL

```shell
; Hello world in MCSBL

"Hello, world!" println
```

## MDM Zinc

```shell
// Hello world in MDM Zinc

mdm.Dialogs.prompt("Hello World");
mdm.Application.exit();
```

## MEL

```shell
// Hello World in MEL scripting language for Alias Maya

proc helloWorld () {
  print "Hello World!
";
}

helloWorld;

```

## MetaPost

```shell
% Hello World in MetaPost
beginfig(0);
  label("Hello, world!", (10,10));
endfig;

```

## MEX

```shell
// "Hello, World!" in MEX for Maximus BBS

void main()
{
  print(COLOR_WHITE,"Hello, World!");
}
```

## Microtik

```shell
#Hello World in Mikrotik RouterOS Scripting Host; :put ("Hello, World!");

```

## MiniScript

```shell
// Hello world in MiniScript

print "Hello world!"

```

## mIRC-Alias

```shell
;Hello World for mIRC (alias section)

helloworld: /echo -a Hello World!

```

## mIRC-Commandline

```shell
; Hello World! for mIRC (command line version)

echo Hello World!

```

## mIRC-Script

```shell
;Hello World for mIRC script

alias helloworld {
/echo -a Hello World!
}

```

## MivaScript

```shell
<MvCOMMENT>Hello World in Miva Script</MvCOMMENT>
<MvEVAL EXPR="{'Hello World'}">

```

## MML-AXE10

```shell
! Hello world program in MML for Ericsson's AXE10 telephone exchange
IOTXP:Hello World;

```

## Modula-2

```shell
(* Hello World in Modula-2 *)

MODULE HelloWorld;
FROM InOut IMPORT WriteString,WriteLn;
BEGIN
WriteString("Hello World!");
WriteLn;
END HelloWorld.

```

## Modula-3

```shell
(* Hello World in Modula-2 *)

MODULE HelloWorld;
FROM InOut IMPORT WriteString,WriteLn;
BEGIN
  WriteString("Hello World!");
  WriteLn;
END HelloWorld.
```

## MoHAA-Script

```shell
// Hello World in the Medal of Honor Allied Assault scripting language

iprintln "Hello World!"

```

## MOO

```shell
"Hello World in MOO";

player.location:announce_all("Hello, world!");
```

## Mouse

```shell
~ Hello World in Mouse

"HELLO, WORLD."
$

```

## MPD

```shell
# Hello World in MPD.

resource helloworld()
write("Hello World")
end

```

## MPLAB IDE

```shell
; Hello world in MPLAB IDE

load_HELLO_W
lfsr2,0x100
movlwd'11'
movwfPOSTINC2
movlw"H"
movwfPOSTINC2
movlw"E"
movwfPOSTINC2
movlw"L"
movwfPOSTINC2
movwfPOSTINC2
movlw"O"
movwfPOSTINC2
movlw" "
movwfPOSTINC2
movlw"W"
movwfPOSTINC2
movlw"O"
movwfPOSTINC2
movlw"R"
movwfPOSTINC2
movlw"L"
movwfPOSTINC2
movlw"D"
movwfPOSTINC2
SEND_HELLO_WORLD
lfsr1,0x100
movf    POSTINC1,w
movwfstr_length
SLmovf       POSTINC1,w
movwfTXREG
TX_wait
btfss      TXSTA,TRMT
braTX_wait
decfszstr_length,f
braSL
DONE_MESSAGE
nop
```

## MS Small Basic

```shell
' Hello World in Microsoft Small Basic

TextWindow.WriteLine("Hello, World")
```

## MSDOS

```shell
@ECHO OFF
REM Hello World for DOS batch

ECHO Hello World!

```

## MSIL

```shell
//Hello World in MSIL (.NET assembler)

.assembly helloworld {}
.class helloworld
{
 .method static void Main() cil managed
 {
  .entrypoint
  ldstr "Hello World!"
  call void [mscorlib]System.Console::WriteLine(string)
  ret
 }
}
```

## MuLisp

```shell
; Hello, World! in MuLisp

(print 'Hello\,\ world\!)
```

## Mumps

```shell
; Hello World in Mumps-M
w !,"Hello World"

```

## MySQL FUNCTION

```sql
-- Hello world in MySQL FUNCTION

DELIMITER $$
CREATE FUNCTION hello_world() RETURNS TEXT COMMENT 'Hello World'
BEGIN
  RETURN 'Hello World';
END;
$$
DELIMITER ;

SELECT hello_world();
```

## Mythryl

```shell
#!/usr/bin/mythryl
# Hello World in Mythryl
printf "Hello, world!
";
```

# N

## Natural

```shell
* Hello World in Natural (by Software AG)
Write "Hello, World!".

```

## Nemerle

```shell
// Hello World in Nemerle (a functional programming language for .NET)

System.Console.WriteLine("Hello World");

```

## newLISP

```shell
;; Hello World in newLISP

(println "Hello World")

```

## NewtonScript

```shell
// Hello World in NewtonScript

baseview :=
   {viewBounds: {left: -3, top: 71, right: 138, bottom: 137},
    viewFlags: 581,
    declareSelf: 'base,
    _proto: protoFloatNGo,
    debug: "baseview"
   };

textview := * child of baseview *
   {text: "Hello World!",
    viewBounds: {left: 33, top: 24, right: 113, bottom: 46},
    viewFlags: 579,
    _proto: protoStaticText,
    debug: "textview"
   };
```

## Nice

```shell
//Hello World in Nice

void main(String[] args){
  println("hello world");
}

```

## Nim

```nim
# Hello world in Nim

echo "Hello World"
```

## Nit

```shell
# Hello world in Nit

print "Hello, World!"
```

## Node.js

```shell
/* Hello world in Node.js */

var sys = require('sys');
sys.puts('Hello World');
```

## Noor

```shell
Hello world in Noor

اطبع "Hello World"
```

## NSIS

```shell
; Hello World in Nullsoft Software Install Script (NSIS)

Caption "Hello World!"
OutFile ".\HelloWorld.exe"
SilentInstall silent

Section ""
		MessageBox MB_OK "Hello World!"
SectionEnd

```

## NXC

```shell
/* Hello World in NXC ("Not Exactly C") */

#include "NXCDefs.h"

task main()
{
TextOut(0, LCD_LINE1, "Hello World!");
}
```

# O

## Oberon.oberon

```shell
MODULE HelloWorld;

(* Hello World in Oberon for the Oberon System *)

IMPORT Oberon, Texts;

VAR
	W: Texts.Writer;

PROCEDURE Do*;
BEGIN
		Texts.WriteString(W,"Hello World!");
				Texts.WriteLn(W);
						Texts.Append(Oberon.Log,W.buf)
							END Do;

BEGIN Texts.OpenWriter(W)
END HelloWorld.

```

## Oberon.std

```shell
(* Hello World in Oberon for standard operating systems *)

MODULE HelloWorld;
IMPORT Out;
BEGIN
  Out.String("Hello World!");
  Out.Ln;
END HelloWorld;
```

## Objective-C

```shell
/* Hello World in Objective-C.
** Since the standard implementation is identical to K&R C,
** a version that says hello to a set of people passed on
** the command line is shown here.
*/

#include <stdio.h>
#include <objpak.h>
int main(int argc,char **argv)
{
    id set = [Set new];
    argv++;while (--argc) [set add:[String str:*argv++]];
    [set do:{ :each | printf("hello, %s!\n",[each str]); }];
    return 0;
}
```

## OCaml

```ocaml
(* Hello World in OCaml *)

print_string "Hello World!
";;

```

## Occam

```shell
PROGRAM Hello
-- Hello world in Occam
#USE ioconv

SEQ
write.full.string(screen,"Hello World!")

```

## Octave

```shell
#Hello World in Octave (http://www.octave.org/)
printf("Hello World
");

```

## Omnimark

```shell
; Hello World in Omnimark


process
 output "Hello World!%n"

```

## Ook

```shell
Hello World in Ook. No comments possible.

Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.
Ook! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?
Ook! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.
Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.
Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.
Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!
Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook. Ook! Ook? Ook! Ook! Ook? Ook!
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook! Ook.

```

## OpenVMS

```shell
$! Hello World in OpenVMS DCL

$ write sys$output "Hello World"

```

## OPL.dialog

```shell
REM Hello World for OPL (Psion Organizer 3a)
REM More complex version with menues and dialog boxes

PROC HELLO:
  LOCAL M%
  DO
    REM Display menu bar
    mINIT
    mCARD "Sprache","Deutsch",%d,"English",%e
    mCARD "Extras","Beenden",%x,"Info",%i
    M%=MENU
    REM process choosen function
    IF M%=%d
      REM Display german dialog box
      REM with an ENTER button to continue
      dBOX:(" ","Hallo Welt"," ","weiter",13)
    ELSEIF M%=%e
      REM Display english dialog box
      REM with an ENTER button to continue
      dBOX:(" ","Hello World"," ","continue",13)
    ELSEIF M%=%i
      REM Display copyright information ;-)
      dBOX:("Info","(C) Klaus Müller 0196","FrankfurtMain, Germany","",13)
    ENDIF
  UNTIL M%=%x
ENDP

PROC dBOX:(Z1$,Z2$,Z3$,Z4$,BUTTON%)
  dINIT Z1$
  dTEXT ""," ",0
  dTEXT "",Z2$",$102
  dTEXT "",Z3$,$202
  dBUTTONS Z4$,BUTTON%
  DIALOG
ENDP
```

## OPL.simple

```shell
REM Hello World for OPL (Psion Organizer 3a)
REM Simple version

PROC HELLO:
  PRINT "Hello World!"
  GET
ENDP
```

## Oz

```shell
% Hello World in Oz

functor
import
  System
  Application
define
  {System.showInfo "Hello World!"}
  {Application.exit 0}
end
```

# P

## ParaSail

```shell
// Hello world in ParaSail

func Hello_World(var IO) is
  IO.Println("Hello, World");
end func Hello_World;
```

## Parser

```shell
# Hello World in Parser

Hello world!
```

## Pascal (Windows)

```shell
{ Hello World in Borland Pascal 7 for MS-Windows}

PROGRAM HelloWorld;

USES
  WinCRT;

BEGIN
  InitWinCRT;
  WriteLn('Hello World!');
  ReadLn;
  DoneWinCRT;
END.
```

## Pascal

```pascal
{Hello world in Pascal}

program HelloWorld(output);
begin
  WriteLn('Hello World!');
end.
```

## Pawn

```shell
/* Hello World in Pawn */

main()
{
  printf "Hello World!"
}

```

## PBASIC

```shell
' Hello World in PBASIC (for the Boe-Bot Robot)

' {$STAMP BS2}
' {$PBASIC 2.5}

DEBUG "Hello World!"

END

```

## PDF

```shell
%Hello World in Portable Document Format (PDF)
%PDF-1.2
1 0 obj
<<
/Type /Page
/Parent 5 0 R
/Resources 3 0 R
/Contents 2 0 R
>>
endobj
2 0 obj
<<
/Length 51
>>
stream
BT
/F1 24 Tf
1 0 0 1 260 600 Tm
(Hello World)Tj
ET
endstream
endobj
3 0 obj
<<
/ProcSet[/PDF/Text]
/Font <</F1 4 0 R >>
>>
endobj
4 0 obj
<<
/Type /Font
/Subtype /Type1
/Name /F1
/BaseFont /Arial
>>
endobj
5 0 obj
<<
/Type /Pages
/Kids [ 1 0 R ]
/Count 1
/MediaBox
[ 0 0 612 792 ]
>>
endobj
6 0 obj
<<
/Type /Catalog
/Pages 5 0 R
>>
endobj
trailer
<<
/Root 6 0 R
>>

```

## PEARL

```shell
MODULE (HELLO);
/* Hello World in PEARL (Process and Experiment Automation Realtime Language) */
SYSTEM;
TERMINAL:DIS<->SDVLS(2);
PROBLEM;
SPC TERMINAL DATION INOUT
		 ALPHIC DIM(,) TFU MAX
		 FORWARD CONTROL (ALL);
MAIN:TASK;
 DCL TEXT INV CHAR(30)
			INIT('HELLO WORLD!');
OPEN TERMINAL;
PUT TEXT TO TERMINAL;
CLOSE TERMINAL;
END;
MODEND;
```

## PeopleCode

```shell
/* Hello World in PeopleCode 8.45

&MsgText = MsgGetText(66666666, 999999999, "Hello World!");
```

## Perl

```perl
# Hello world in perl

print "Hello World!";
```

## Perl 6

```perl
# Hello world in Perl 6

say 'Hello World!';
```

## Pharo

```shell
"Hello world in Pharo"

Transcript show: 'hello world'; cr.
```

## PHP+GD

```shell
<?
// Hello World in PHP + GD library
header("Content-type: image/gif");
$rscImage    = imagecreatetruecolor(80, 25);
$intFontC    = imagecolorallocate($rscImage, 255, 255, 255);
$intBGC        = imagecolorallocate($rscImage, 0, 0, 0);
imagestring($rscImage, 2, 5, 5, "Hello World!", $intFontC);
imagegif($rscImage);
imagedestroy($rscImage);
?>

```

## PHP

```php
<?php
  // Hello world in PHP
  echo 'Hello World!';
?>
```

## Picat

```shell
% Hello world in Picat

main =>
  print("Hello, World!
").
```

## Piet

Hello World in Piet. No comment character exists.

![Piet]({{ site.url }}{{ site.path.images }}/posts/helloworld/piet.png)

## Pike

```shell
// Hello world in Pike (pike.roxen.com)

int main(){
		write("Hello World!
");
}

```

## PILOT

```shell
R:Hello world in PILOT
T:Hello World!

```

## PL-SQL

```shell
-- Hello World in Oracle PL/SQL (sqlplus)

set serveroutput on

begin
  dbms_output.enable(10000);
  dbms_output.put_line('Hello World');
end;
/
```

## PL1

```shell
/* Hello World in PL/1 */

Hello: procedure options(main);
	 put skip list('Hello World!');
end Hello;

```

## Plankalkül

Hello world in Plankalkül

```shell
R1.1(V0[:sig]) => R0
R1.2(V0[:m x sig]) => R0
0 => i | m + 1 => j
[W [ i < j -> [ R1.1(V0[i: m x sig]) => R0 | i + 1 => i ] ] ]
END
R1.3() => R0
'H';'e';'l';'l';'o';',';' ';'w';'o';'r';'l';'d';'!' => Z0[: m x sig] R1.2(Z0) => R0
END
```

## Pocket Calculator

```shell
Hello World for standard pocket calculators (7-segment display).
Type in and turn calculator upside down.

0.7734

```


## POP-11

```shell
;;; Hello World in POP-11

: vars outputtext;
: "Hello World" -> outputtext;
: outputtext =>

** Hello World

```

## Portugol

```shell
// Hello world in Portugol

algoritmo "Hello World"
var
inicio
escreva ("Hello World!")
fimalgoritmo
```

## PostgreSQL

```shell
-- Hello World in PL/pgSQL (PostgreSQL Procedural Language)
-- In old versions replace '$$' by double qoutes

CREATE FUNCTION hello_world() RETURNS text AS $$
BEGIN
RETURN 'Hello World';
END
$$ LANGUAGE plpgsql;

SELECT hello_world();

```

## Postscript

```shell
% Hello World in Postscript
%!PS
/Palatino-Roman findfont
100 scalefont
setfont
100 100 moveto
(Hello World!) show
showpage

```

## POV-Ray

```shell
// Hello World for the Persistence of Vision Raytracer.
// Click here to view the output.

#include "skies.inc"

camera{location <0,1,-5> look_at y}
light_source{<2,4,-7>,2}
sky_sphere{S_Cloud1}
plane{y 0 pigment{checker rgb 1,0} finish{reflection .5}}
text{ttf "timrom.ttf" "Hello World!" .3,0
  pigment {agate scale .2} translate -2.5*x
}

```

Output:

![POV-Ray]({{ site.url }}{{ site.path.images }}/posts/helloworld/povray.jpg)

## Powerbasic

```shell
' Hello World in Powerbasic Console Compiler

FUNCTION PBMAIN () AS LONG

  PRINT "Hello World"

END FUNCTION

```

## Powerflex

```shell
// "Hello World" in PowerFlex

showln "Hello World"
system
```

## PowerScript

```shell
// Hello World in PowerScript

MessageBox("","Hello World!")
```

## Powershell

```powershell
# Hello World in Microsoft Powershell

'Hello World!'
```

## PPL

```shell
;Hello World in PPL (PCBoard Programming Language)
PRINTLN "Hello, World!"

```

## PQN-PROC

```shell
PQN
C Hello World in PQN/PROC
O Hello World

```

## PRAAT

```praat
# Hello World in praat (www.praat.org)
echo Hello World!

```

## ProC

```c
Back to index

/* Hello World in Pro*C, the Oracle's embedded SQL environment */

#include <stdio.h>

EXEC SQL INCLUDE SQLCA;

int main() {
 char hello[15];
 char *user = "the_user";
 char *password = "the_password";
 char *sid = "the_sid";

 EXEC SQL CONNECT :user IDENTIFIED BY :password USING :sid;

 EXEC SQL
    SELECT 'Hello World' INTO :hello
    FROM DUAL;

 printf("%s\n", hello);

 EXEC SQL COMMIT RELEASE;

 return 0;
}

```

## Processing

```shell
// Hello world in Processing

println( "Hello world!" );
```

## Profan

```shell
' Hello World in Profan (http://www.profan.de/)

cls
print "Hello World!"
waitkey

```

## Prograph

![Prograph]({{ site.url }}{{ site.path.images }}/posts/helloworld/prograph.png)

## Progress

```shell
/* Hello World in Progress */

message "Hello World" view-as alert-box.

```

## Prolog

```prolog
% Hello World in Prolog

hello :- display('Hello World!') , nl .

```

## Punyforth

```shell
\ Hello world in Punyforth

println: "Hello world!"
```

## PureBasic (Console)

```shell
; Hello World in PureBasic (console program)

OpenConsole()
  ConsoleTitle ("Hello World!")
  PrintN ("Hello World!")
CloseConsole()

```

## PureBasic (Messagebox)

```shell
; Hello World in PureBasic (message box)

MessageRequester("Hello World Messagebox","Hello World!")

```

## PureBasic (Window)

```shell
; Hello World in PureBasic (Window)

If OpenWindow(0, 216, 0, 268, 133,  #PB_Window_SystemMenu | #PB_Window_TitleBar | #PB_Window_ScreenCentered , "Hello World Window")
 If CreateGadgetList(WindowID())
   TextGadget(1, 100, 60, 60, 20, "Hello World!")
 EndIf
EndIf

Repeat    ; Message Loop
Until WaitWindowEvent() = #PB_EventCloseWindow
```

## Python 2

```shell
# Hello world in Python 2

print "Hello World"
```

## Python 3

```shell
# Hello world in Python 3 (aka Python 3000)

print("Hello World")
```

# Q

## Q

```q
/* Hello world in Q */

hello            = writes "Hello, world!
";
```

## Qalb

```shell
; Hello world in قلب

(قول "مرحبا يا عالم!")
```

## QCL

```shell
// Hello world in QCL

print "Hello World";
```

## qore

```shell
#!/usr/local/bin/qore
# Hello World in qore

class HelloWorld
{
constructor()
{
background $.output("Hello, world!");
}
output($arg)
{
printf("%s
", $arg);
}
}

new HelloWorld();

```

## QuakeC

```shell
// Hello World in QuakeC. This should be put somewhere, for instance
// PutClientInServer() in Client.qc.

bprint("Hello World
");

```

## Quartz Composer

Hello World for Quartz Composer

![Screenshot of program]({{ site.url }}{{ site.path.images }}/posts/helloworld/quartz.png)

## QuickBASIC

```shell
REM Hello World in QuickBASIC
PRINT "Hello World!"
END

```

## Quorum

```shell
// Hello world in Quorum

output "Hello World!"
```

# R

## R

```r
# Hello World in R
cat("Hello world
")

```

## Racket

```racket
;; Hello world in Racket

#lang racket/base
"Hello, World!"
```

## Rapira

```shell
\ Hello world in Rapira

ПРОЦ СТАРТ()
    ВЫВОД: 'Hello World!'
КОН ПРОЦ
```

## ratfor

```shell
# hello.world.in.ratfor
print *, 'hello, world'
end

```

## Rational Rose

```shell
' Hello World in Rational Rose scripting language
Sub Main
RoseApp.WriteErrorLog "Hello, World!"
End Sub
```

## React-VR

```shell
// Hello world in React-VR

import React from 'react';
import { AppRegistry, asset, Text, View,} from 'react-vr';

export default class HelloWorld extends React.Component {
  render() { return (
      <View>
        <Text
          style={% raw %}{{transform: [{translate: [0, 0, -3]}],}}{% endraw %}>
          Hello World
        </Text>
      </View>
    );   } };
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

## REALbasic

```shell
' Hello World in REALbasic (http://www.realsoftware.com/)

msgBox "Hello World!"

```

## RealText

```xml
<window width="320" height="160">
<!-- Hello World in RealText  -->
	<font size="12" name="Arial">
	<center>Hello World!</center>
	</font>
</window>
```

## Reason

```shell
/* Hello world in Reason */

Js.log("Hello World!")

```

## Rebol-view

```shell
Hello World in Rebol-view.

rebol[]
view layout[
text "Hello World!"
]

```

## REBOL

```shell
; Hello World in REBOL

print "Hello World!"
```

## Redcode

```shell
; Hello World in Redcode
; Should work with any MARS >= ICWS-86
; (with 128x64 gfx core support, of course!)
;
Start   MOV     0,2455
		MOV     0,2458
		MOV     0,2459
		MOV     0,2459
		MOV     0,2459
		MOV     0,2459
		MOV     0,2459
		MOV     0,2460
		MOV     0,2465
		MOV     0,2471
		MOV     0,2471
		MOV     0,2471
		MOV     0,2479
		MOV     0,2482
		MOV     0,2484
		MOV     0,2484
		MOV     0,2484
		MOV     0,2486
		MOV     0,2486

		MOV     0,2486
		MOV     0,2486
		MOV     0,2488
		MOV     0,2493
		MOV     0,2493
		MOV     0,2493
		MOV     0,2493
		MOV     0,2497
		MOV     0,2556
		MOV     0,2559
		MOV     0,2560
		MOV     0,2565
		MOV     0,2570
		MOV     0,2575
		MOV     0,2578
		MOV     0,2585
		MOV     0,2588
		MOV     0,2589
		MOV     0,2592
		MOV     0,2593
		MOV     0,2596
		MOV     0,2597
		MOV     0,2603
		MOV     0,2605
		MOV     0,2608
		MOV     0,2667
		MOV     0,2670
		MOV     0,2671
		MOV     0,2676
		MOV     0,2681
		MOV     0,2686
		MOV     0,2689
		MOV     0,2696
		MOV     0,2699
		MOV     0,2700
		MOV     0,2703
		MOV     0,2704
		MOV     0,2707
		MOV     0,2708
		MOV     0,2714
		MOV     0,2716
		MOV     0,2719
		MOV     0,2778
		MOV     0,2778
		MOV     0,2778
		MOV     0,2778
		MOV     0,2778
		MOV     0,2779
		MOV     0,2779
		MOV     0,2779
		MOV     0,2782
		MOV     0,2787
		MOV     0,2792
		MOV     0,2795
		MOV     0,2802
		MOV     0,2805
		MOV     0,2806
		MOV     0,2809
		MOV     0,2810
		MOV     0,2810
		MOV     0,2810
		MOV     0,2810
		MOV     0,2812
		MOV     0,2818
		MOV     0,2820
		MOV     0,2823
		MOV     0,2882
		MOV     0,2885
		MOV     0,2886
		MOV     0,2891
		MOV     0,2896
		MOV     0,2901
		MOV     0,2904
		MOV     0,2911
		MOV     0,2912
		MOV     0,2913
		MOV     0,2914
		MOV     0,2917
		MOV     0,2918
		MOV     0,2919
		MOV     0,2922
		MOV     0,2928
		MOV     0,2930
		MOV     0,2933
		MOV     0,2992
		MOV     0,2995
		MOV     0,2996
		MOV     0,3001
		MOV     0,3006
		MOV     0,3011
		MOV     0,3014
		MOV     0,3021
		MOV     0,3022
		MOV     0,3023
		MOV     0,3024
		MOV     0,3027
		MOV     0,3028
		MOV     0,3030
		MOV     0,3032
		MOV     0,3038
		MOV     0,3040
		MOV     0,3103
		MOV     0,3106
		MOV     0,3107
		MOV     0,3107
		MOV     0,3107
		MOV     0,3107
		MOV     0,3107
		MOV     0,3108
		MOV     0,3108
		MOV     0,3108
		MOV     0,3108
		MOV     0,3108
		MOV     0,3109
		MOV     0,3109
		MOV     0,3109
		MOV     0,3109
		MOV     0,3109
		MOV     0,3111
		MOV     0,3111
		MOV     0,3111
		MOV     0,3120
		MOV     0,3121
		MOV     0,3124
		MOV     0,3124
		MOV     0,3124
		MOV     0,3126
		MOV     0,3129
		MOV     0,3130
		MOV     0,3130
		MOV     0,3130
		MOV     0,3130
		MOV     0,3130
		MOV     0,3131
		MOV     0,3131
		MOV     0,3131
		MOV     0,3131
		MOV     0,3135
		JMP     0

```

## REFAL-2

```shell
* Hello, World! in REFAL-2
start
entry go
extrn PROUT
go = <prout 'Hello, world!'>
end

```

## Refal

```shell
* Hello world in Refal

$ENTRY Go { = <Hello>;}
Hello {
= <Prout 'Hello world'>;
}
```

## Regular Expression

```shell
Hello World as a regular expression.
Replaces everything with "Hello World".
For use with vi, sed, etc.

Search String :  ^.*$
Replace String: 'Hello World'

```

## Rexx (simple)

```shell
/* Hello World in Rexx, simple version (writes to standard output) */

say 'Hello World!'
exit

```

## Rexx (window)

```shell
/* Hallo World in Rexx, opens window */

call RxFuncAdd 'SysLoadFuncs', 'RexxUtil', 'SysLoadFuncs'
call SysLoadFuncs
call RxMessageBox 'Hello World!', 'Hello World Window', 'OK', 'EXCLAMATION'
exit

```

## Rey

```shell
//beginning Hello World in Rey:

korzystaj "Konsola";

program
{
PiszLinia("Hello World");
}
//end Hello World in Rey
```

## rhine

```shell
;; Hello world in rhine

(println "Hello World")
```

## RPG IV v3-4

```shell
H* Hello world in RPG IV versions 3 and 4

D msg             S             32    inz(*blank)
D wait            S              1

C                   eval      msg = 'Hello World'

C     msg           dsply                   wait


C                   eval      *inlr = *on
```

## RPG IV v5

```shell
// Hello world in RPG IV version 5

D wait           S              1

  /Free
   dsply ( 'Hello World!') ' ' wait;

   *inlr = *on;
```

## RPG IV v7.1

```shell
// Hello world in RPG IV version 7.1

dcl-s wait char(1);

dsply ( 'Hello World!') ' ' wait;

*inlr = *on;
```

## RPL

```shell
Hello World in RPL for the HP-28, HP-48, HP-49 and HP-50 series pocket calculators. No comments possible.

<<
    "HELLO WORLD"
    1 DISP
    60 FREEZE
>>
```

## RSL

```shell
// Hello World in RSL (RS-Bank Language)

[Hello World!];

```

## Ruby

```ruby
# Hello World in Ruby
puts "Hello World!"
```

## Rust

```rust
// Hello world in Rust

fn main() {
  println!("Hello World!");
}
```

# S

## S-Plus

```shell
# Hello World for S-Plus
cat("Hello world
")

```

## SAKO

```shell
K) HELLO WORLD IN SAKO

   LINIA
   TEKST:
   HELLO WORLD
   KONIEC
```

## SAL

```shell
// Hello World in SAL

proc main()
MsgBox("Hello from SAL", "Hello, World!")
end

```

## SApp

```shell
comment: Hello World in SApp
popup "Hello ### World!" ,

```

## SAS

```shell
/* Hello world in SAS */

* Writes as output title;
TITLE "Hello World!";
* writes to the log;
data _null_;
PUT "Hello world!";
run;
```

## Sather

```shell
-- Hello World in Sather

class HELLO is
	 main is #OUT + "Hello World!
" end
end

```

## Sawzall

```shell
# Hello world in Sawzall

emit stdout <- "Hello, World!";
```

## Scala

```scala
// Hello world in Scala

object HelloWorld extends App {
println("Hello world!")
}
```

## Scheme

```scheme
; Hello World in Scheme

(display "Hello, world!")
(newline)
```

## Scilab

```shell
// Hello World in SciLab.

disp('Hello World');
```

## Scratch

Hello World in Scratch.

![Scratch]({{ site.url }}{{ site.path.images }}/posts/helloworld/scratch.png)

## Seed7

```shell
# Hello World in Seed7

$ include "seed7_05.s7i";

const proc: main is func
  begin
    writeln("Hello World!");
  end func;
```

## Self

```shell
(|  "Hello World in Self"

hello = (| | 'Hello World!' print)
|)
```

## SenseTalk

```shell
Hello World in SenseTalk.

on run put "Hello World!" end run
```

## Setl2

```shell
-- Hello World in Setl2

procedure Hello();
print "Hello World!";
end Hello;

```

## Shakespeare

```shell
The Infamous Hello World Program in Shakespeare.

Romeo, a young man with a remarkable patience.
Juliet, a likewise young woman of remarkable grace.
Ophelia, a remarkable woman much in dispute with Hamlet.
Hamlet, the flatterer of Andersen Insulting A/S.


                    Act I: Hamlet's insults and flattery.

                    Scene I: The insulting of Romeo.

[Enter Hamlet and Romeo]

Hamlet:
 You lying stupid fatherless big smelly half-witted coward!
 You are as stupid as the difference between a handsome rich brave
 hero and thyself! Speak your mind!

 You are as brave as the sum of your fat little stuffed misused dusty
 old rotten codpiece and a beautiful fair warm peaceful sunny summer's
 day. You are as healthy as the difference between the sum of the
 sweetest reddest rose and my father and yourself! Speak your mind!

 You are as cowardly as the sum of yourself and the difference
 between a big mighty proud kingdom and a horse. Speak your mind.

 Speak your mind!

[Exit Romeo]

                    Scene II: The praising of Juliet.

[Enter Juliet]

Hamlet:
 Thou art as sweet as the sum of the sum of Romeo and his horse and his
 black cat! Speak thy mind!

[Exit Juliet]

                    Scene III: The praising of Ophelia.

[Enter Ophelia]

Hamlet:
 Thou art as lovely as the product of a large rural town and my amazing
 bottomless embroidered purse. Speak thy mind!

 Thou art as loving as the product of the bluest clearest sweetest sky
 and the sum of a squirrel and a white horse. Thou art as beautiful as
 the difference between Juliet and thyself. Speak thy mind!

[Exeunt Ophelia and Hamlet]


                    Act II: Behind Hamlet's back.

                    Scene I: Romeo and Juliet's conversation.

[Enter Romeo and Juliet]

Romeo:
 Speak your mind. You are as worried as the sum of yourself and the
 difference between my small smooth hamster and my nose. Speak your
 mind!

Juliet:
 Speak YOUR mind! You are as bad as Hamlet! You are as small as the
 difference between the square of the difference between my little pony
 and your big hairy hound and the cube of your sorry little
 codpiece. Speak your mind!

[Exit Romeo]

                    Scene II: Juliet and Ophelia's conversation.

[Enter Ophelia]

Juliet:
 Thou art as good as the quotient between Romeo and the sum of a small
 furry animal and a leech. Speak your mind!

Ophelia:
 Thou art as disgusting as the quotient between Romeo and twice the
 difference between a mistletoe and an oozing infected blister! Speak
 your mind!

[Exeunt]
```

## Shen

```shell
\ Hello world in Shen

(0-) (pr "hello world")
```

## SilverBasic

```shell
//Hello World in SilverBasic

PRINT "Hello World!"

```

## SIMPLE

```shell
[::PROGRAM:Hello World program in SIMPLE
A EQL @0
MSG A
END
]
{::DATA:Data part
@0:T
Hello World$$M
$$@
}

```

## Simula

```shell
! Hello World in Simula;

BEGIN
OutText("Hello World!");
OutImage;
END

```

## SinclairBasic

```shell
10 REM Hello World in Sinclair BASIC
20 PRINT "Hello World"

```

## Skip

```shell
// Hello world in Skip

fun main(): void {
print_raw("Hello world!")
}
```

## Smalltalk (simple)

```shell
"Hello World in Smalltalk (simple version)"

Transcript show: 'Hello World!'.

```

## Smalltalk (window)

```shell
"Hello World in Smalltalk (in an own window)"
"(to be entered in a special browser)"

VisualComponent subclass: #HelloWorldView
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'test'

displayOn: aGraphicsContext

	'Hello World!' asComposedText displayOn: aGraphicsContext.

open

	|window|
	window := ScheduledWindow new.
	window label: 'Hello World Demo:'.
	window component: self new.
	window open.
```

## Smalltalk MT

```shell
"Hello World in Smalltalk MT

FrameWindow new
title: 'Hello World';
open
```

## SMIL

```xml
<!-- Hello World in SMIL -->
<smil>
 <head>
  <layout>
   <root-layout width="300" height="160" background-color="white"/>
   <region id="text_region" left="115" top="60"/>
  </layout>
 </head>
 <body>
  <text src="data:,Hello%20World!" region="text_region">
   <param name="fontFace" value="Arial"/>
  </text>
 </body>
</smil>
```

## SML

```sml
(* Hello World in SML *)

fun hello() = output(std_out, "Hello World!");

```

## Snobol

```shell
* Hello World in Snobol

		OUTPUT = "Hello World!"

```

## Spin

```shell
' Hello World in Spin

CON
_CLKMODE = XTAL1 + PLL16x
_XINFREQ = 5_000_000
TV_PIN = 12

OBJ
Tv: "TV_Text"

PUB Main
Tv.Start( TV_PIN )
Tv.Str( String( "Hello World" ) )
```

## Spiral

```shell
Hello World in Spiral. No comment character exists.

e0v ***   *eXlv**   *lX      *2X       **oXi
v * * *   *     *   * 2      * o      **   v*
* * * *   * *****   * v      * v      * *iX *
* * * *   * *       * ^      v *      * * w *
* *** *   * *****   * v      * *      * * v *
*     *   *     ^   * ^      * *      * * * *
* *** *   * ****v   * v      * *      v * * *
* * * *   * *       * *      * *      ^ * * *
* * * *   * *****   * *****  * *****  * *** *
* * * *   *     *   *     *  *     *  **   **
*** ***   *******   *****v^  *******   *****

*wX ***    **3Xp    *rX4..   d5*      qd**  
* 3 * *   **   v^   *    ..  * *      *  ***
* v * ^   * #pX v   * ..  .  * *      *    **
* *** v   * # r #   * ..  .  * *      * !q* *
* * * *   * # v #   * 54 ..  * *      * * * *
* * * *   * # * #   *   @X   * *      * * * *
* * * *   * # * #   *   v    * *      * * * *
* * * *   * # * #   * * **   * *      * * * *
*  *  *   * # * #   * ** **  * *      * *** *
*  *  *   * #v* ^   * *** *  * *****  *    **
** * **   **   *v   * * * *  *     *  *  ***
*****     *v^**    *** ***  *******  ****

```

## SPL4

```shell
HELLO: PROCEDURE OPTIONS(MAIN);
*
/* Hello World in SPL4 (Siemens) */
*
DCL PRINTC ENTRY;
*
CALL PRINTC('Hello World!', 12);
RETURN;
*
END HELLO;

```

## Splunk SPL

```shell
| makeresults `comment("Hello world in SplunkSPL")` | eval mystring="Hello, World!"
```

## Spry

```shell
# Hello world in Spry

echo "Hello World"
```

## SPSS

```shell
* SPSS Syntax
* "Hello World" title in the Output Window of SPSS via SPSS Syntax.

TITLE 'Hello World'.

```

## SQL (Advantage)

```shell
-- Hello World in SQL for Advantage Database

select 'Hello World' from system.iota

```

## SQL (DB2)

```shell
-- Hello World in SQL for DB2
VALUES('hello world')

```

## SQL (Oracle)

```shell
# Hello World in SQL for Oracle

SELECT 'Hello World' FROM dual;

```

## SQL

```sql
# Hello World in SQL

SELECT 'Hello World';

```

## sqlplus

```shell
-- Hello World in Oracle SQL*Plus

prompt Hello World!

```

## SQR

```shell
! Hello World in SQR
begin-program
print 'Hello, World.' (1,1)
end-program
```

## Squeak

```shell
"Hello world in Squeak"

Transcript show: 'Hello World'
```

## Squirrel

```shell
#!/usr/bin/squirrelsh
// Hello world in Squirrel
printl("Hello, world!");
```

## SSI

```html
<html><body><p>
<!-- Hello world as Server Side Includes, embedded in HTML. -->
<!--#set var="hello" value="Hello, world!" -->
<!--#echo var="hello" -->
</p></body></html>
```

## ST-Guide

```shell
## Hello World for ST-Guide

@node "Hello World!"

Hello World!

@endnode

```

## Stata

```shell
/* Hello world in Stata */

.program hello
1. display "Hello, World!"
2. end
.hello

```

## Sucro

```shell
Hello World in Sucro
{R}Hello World!{end}
```

## SuperCollider

```supercollider
// Hello World in SuperCollider

"Hello, world!".postln;
```

## SVG

```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<!-- Hello World in SVG -->

<svg width="240" height="100" viewBox="0 0 240 100" zoomAndPan="disable"
 xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Hello World</title>
<g>
	<text x="10" y="50">Hello World</text>
	<animate attributeName='opacity' values='0;1' dur='4s' fill='freeze' begin="0s"/>
</g>
</svg>

```

## Swift

```swift
// Hello world in Swift

println("Hello, world!")
```

## SyMAL

```shell
// Hello world in SyMAL

'Hello, world!'

```

## Symsyn

```shell
| Hello world in Symsyn

'hello world' []
```

## szl

```shell
# Hello world in szl

$global msg {Hello, world!}
```

# T

## T-SQL

```shell
-- Hello World in T-SQL
PRINT 'Hello World'

```

## T

```shell
; Hello world in T

"Hello World!"
```

## T9

```shell
How to enter Hello World on a standard T9 numeric
keypad of an SMS-enabled mobile phone.
T9 predictive text has to be off.

44 33 555 555 666 0 9 666 777 555 3 11111

```

## TACL

```shell
Comment -- Hello World for TACL (Tandem Advanced Command Language)

?tacl macro

#OUTPUT Hello world
```

## TAL

```shell
!     Hello world in Tandem TAL (Transaction Application Language)
	proc Hello^World main;
				begin
				int    .term[0:12] := [ 12 * [ "  " ] ],
.out [0:19];
				string .sout := @out << 1, .sp;

				call myterm ( term[1] );
				call open ( term[1], term );
if <> then call abend;

sout := "Hello World" -> @sp;
				call write ( term, out, @sp-@sout );
if <> then call abend;
end;

```

## Tcl

```shell
#!/usr/local/bin/tclsh
# Hello World in Tcl

puts "Hello World!"

```

## TECO

```shell
!Hello World in TECO
!The $ symbol below wouldn't actually be a printing character -
!it's the [escape] character, !
FTHello World$

```

## TeX

```shell
% Hello World in plain \TeX
\immediate\write16{Hello World!}
\end

```

## Texinfo

```shell
\input texinfo
@c Hello World for Texinfo

@setfilename hello
@settitle Hello World

@node Top, Hello, (dir), (dir)

@menu
* Hello:: Hello World
@end menu

@node Hello, , Top, Top

Hello World!

@contents
@bye

```

## Thue

Hello World in Thue. No comments possible.

```shell
a::=~Hello World!
::=
a
```

## TI BASIC

```shell
10 REM Hello World in TI BASIC
20 REM for the TI99 series computer
100 CALL CLEAR
110 PRINT "HELLO WORLD"
120 GOTO 120

```

## TI Extended BASIC

```shell
10 REM Hello World in Extended BASIC
20 REM for the TI99 series computer
100 CALL CLEAR :: DISPLAY AT(10,5):"Hello World" :: ACCEPT AT(20,4):A$

```

## TI-59

Hello world for the TI-59 with thermo printer.

Comments are not part of the source code (not entered).

```shell
	Code        Comment

	LBL A       Start of program: label A
	OP 00       Clear the four print registers
	23          "H"
	17          "E"
	OP 02       Write into print register 2
	27          "L"
	27          "L"
	32          "O"
	00          " "
	43          "W"
	OP 03       Write into print register 3
	32          "O"
	35          "R"
	27          "L"
	16          "D"
	73          "!"
	OP 04       Write into print register 4
	OP 05       Start printing
	ADV         Line feed (optional)
	R/S         End program

```

## TI-8x

```shell
Hello World for TI 8x/9x basic (tested on a TI-83)

:ClrHome
:Disp "HELLO WORLD"

```

## TinyFugue

```shell
;Hello World in TinyFugue

/_echo Hello, World!
```

## Tk

```shell
#!/usr/local/bin/wish -f
# Hello World in Tk

label .l -text "Hello World!"
pack .l

```

## Toy

```shell
# Hello World code in Toy Programming Language (generic way)

<< "Hello World";

```

## Trans

```shell
// Hello World in Trans (Transmuter Programming Language)
import Console
Console.write("Hello World!")

```

## troff

```shell
"	"Hello, world!" in troff

Hello, world!

```

## TSO CLIST

```shell
PROC 0
/* Hello World in TSO CLIST */
write Hello World!

```

## Turing Machine

```shell
Hello World as a Turing machine.

State   Read   |   Write     Step    Next state
---------------|---------------------------------
1       empty  |   H         >       2
2       empty  |   e         >       3
3       empty  |   l         >       4
4       empty  |   l         >       5
5       empty  |   o         >       6
6       empty  |   blank     >       7
7       empty  |   W         >       8
8       empty  |   o         >       9
9       empty  |   r         >       10
10      empty  |   l         >       11
11      empty  |   d         >       12
12      empty  |   !         >       STOP

```

## Turing

```shell
% Hello World in Turing
put "Hello World!"

```

## TypeScript

```shell
// Hello world in TypeScript

alert('Hello world!');
```

# U

## Ubercode

```shell
// Hello world in Ubercode

Ubercode 1 class Hello

public function main()
code
call Msgbox("Hello", "Hello World!")
end function

end class
```

## UniComal

```shell
// Hello World in UniComal

PRINT "Hello World"

```

## Unix Shell

```shell
# Hello world for the Unix shells (sh, ksh, csh, zsh, bash, fish, xonsh, ...)

echo Hello World
```

## unlambda

```shell
# Hello World in unlambda

`r```shell
```

## UnrealScript

```shell
// Hello World for UnrealScript

class HelloWorldHUD extends HudBase;

simulated function DrawHudPassC (Canvas C)
{
C.SetPos( 0.50*C.ClipX , 0.50*C.ClipY);
C.DrawText("Hello World!");
}

defaultproperties
{
}

```

## Ursala

```shell
# hello world in Ursala

#executable&

f = -[hello world]-!

```

# V

## Vala

```vala
// Hello World in Vala

using GLib;

int main(string[] args) {
stdout.printf("Hello world!
");
return 0;
}
```

## var'aq

```shell
(* Hello world in var'aq *)

"Hello, world!" cha'
```

## Vatical

```shell
+ Hello World in Vatical

LITURGY:
PRAY "Hello World!"
AMEN.

```

## VAX Macro

```shell
Hello World in VAX Macro.

		.title  helloworld
		.ident  /hello world/
;
		.library        /sys$library:lib/
		$libdef
		$lib$routinesdef


		.psect  $data,wrt,noshr,noexe,long

hello:  .ascid  /Hello World!/

		.psect  $code,nowrt,shr,exe,long

		.entry  helloworld,^m<r9,r10,r11>

		pushaq  hello                   ; output the
message
		calls   #1,g^lib$put_output     ;

		ret                             ; GTFOH
		.end    helloworld              ;

```

## VAX-11 Macro

```shell
; Hello World in VAX-11 MACRO

		.title hello
term_name:      .ascid /SYS$INPUT/
term_chan:      .blkw 1
out_iosb:       .blkq 1
msg:    .asciz  /Hello, world!/

		.entry start,0

		; establish a channel for terminal I/O
		$assign_s devnam=term_name,-
						chan=term_chan
		blbc r0,error

		; queue the I/O request
		$qio_s chan=term_chan,-
						func=#io$_writevblk,-
						iosb=out_iosb,-
						p1=msg,-
						p2=#13
		blbc r0,error

		$exit_s ; normal exit

error:  halt ; error condition

		.end start

```

## VBA (Excel)

```shell
' Hello world in Visual Basic for Applications, Excel version

Private Sub Workbook_Open()
  MsgBox "Hello world!"
End Sub
```

## VBA (Word)

```shell
' Hello world in Visual Basic for Applications, Word version

Private Sub Document_Open()
  MsgBox "Hello world!"
End Sub
```

## VBScript

```shell
' Hello World in VBScript (Windows Scripting Host)
msgbox "Hello, World!"

```

## Velato

Hello world in Velato. The source code is [this MIDI file]({{ site.url }}{{ site.path.images }}/posts/helloworld/Velato.mid), or the following score.

![Velato]({{ site.url }}{{ site.path.images }}/posts/helloworld/Velato.gif)

## Velocity

```html
<HTML>
<!-- Hello World in Velocity -->
<BODY>
  #set( $foo = "Hello World" )
  $foo
</BODY>
</HTML>
```

## Verilog

```verilog
/* Hello World in Verilog. */

module main;

initial
begin
 $display("Hello, World");
 $finish ;
end

endmodule

```

## Vexi

```xml
<!-- Hello World in Vexi. -->

<vexi xmlns:ui="vexi://ui">
<ui:box framewidth="200" frameheight="100">
		<ui:box text="Hello World!" />
		vexi.ui.frame = thisbox;
</ui:box>
</vexi>
/<
```

## VHDL

```vhdl
--Hello World in VHDL

ENTITY helloworld IS
END helloworld;

ARCHITECTURE hw OF helloworld IS

BEGIN

ASSERT FALSE
REPORT "HELLO, WORLD!"
SEVERITY NOTE;

END hw;

```

## Vim script

```shell
" Hello world in Vim script

:echom "Hello world!"
```

## Visual Basic

```vb
REM Hello World in Visual Basic for Windows

VERSION 2.00
Begin Form Form1
Caption         =   "Form1"
ClientHeight    =   6096
ClientLeft      =   936
ClientTop       =   1572
ClientWidth     =   6468
Height          =   6540
Left            =   876
LinkTopic       =   "Form1"
ScaleHeight     =   6096
ScaleWidth      =   6468
Top             =   1188
Width           =   6588
Begin Label Label1
	Caption         =   "Hello World!"
	Height          =   372
	Left            =   2760
	TabIndex        =   0
	Top             =   2880
	Width           =   972
End
End
Option Explicit

```

## Visual Basic .NET

```vb
'Hello World in Visual Basic .NET (VB.NET)

Imports System.Console

Class HelloWorld

Public Shared Sub Main()
		WriteLine("Hello, world!")
End Sub

End Class

```

## Visual Basic 6

```vb
' Hello World in Visual Basic 6

Private Sub Form_Load()
Print "Hello World"
End Sub

```

## Visual FoxPro

```shell
*Hello World in Microsoft Visual FoxPro 5-9
? "Hello World!"

```

## Visual Prolog

```shell
/* Hello World in Visual Prolog */

goal
console::init(),
stdio::write("Hello World!").

```

## VisualWorks Smalltalk

```shell
"Hello World! in VisualWorks Smalltalk"

Dialog warn: 'Hello World!'.

```

## VMS-DCL

```shell
$ ! Hello World in Digital Command Language for the VMS operating system

$ WRITE SYS$OUTPUT "Hello World!"

```

## VRML

```shell
#VRML V2.0 utf8
# Hello World in VRML

Shape
		{
		geometry Text
						{string "Hello World!"}
		}
```

## VSL

```shell
/* "hello, world" in VSL (the script language of Virtools),
to be used in a "Run VSL" building block */

void main()
{
  bc.OutputToScreen("hello, world");
}

```

## VVVV

Hello World in VVVV.

![VVVV](hellopics/vvvv.jpeg)

# W

## wenyan

```shell
注曰。「「 Hello world in wenyan 」」。
吾有一言。曰「「問天地好在。」」。書之。

```

## Whenever

```shell
/* Hello world in Whenever */

1 print("Hello world!");
```

## Whirl

Hello World in Whirl. This language has no comments.

```shell
110001100111000111110000010001111100011000000000110000011100000110000010000
011000111100000111110000011100001111100100011001110000111111100001001111100
011000000000110000011000111110001000000000000000000001001111110000111111000
100000000000000000000000000011111000100100000000111111000100000000000001001
000011111000001110000111110010001100011000000100010000011000000000000000001
100000111001111100111111000100111001111000011100010011111110000111000110000
000000000000000000000000000001000100001111100000111000011111001100011100000
111000000010001111100000111110001000000000111000110000000000000000000000000
000000100100001111100000111000011100010000000000000100010000111110001110001
111100111111000011100001100111000111000000000001111100000111000110000110110
001000000000010000001111100000111000011111000000010001110000000000000000000
000000000000100000011111000001100
```

## Whitespace

```shell
Hello #World #in #Whitespace	* # #	* # # #
+	*[Space]
+ #is #marked #with"#" # #[tab]	#with"*"	*line-feed #with #"+"	* #	*so
+it	#would
+be #easier #to #write #again... #All	*the	*non-whitespace-characters #are	*ignored...	* # #
+	*
+ # # # # #	*	* #	*	* # #
+	*
+ # # # # #	*	* #	*	*	*	*
+	*
+ # # # # #	* # # # # #
+	*
+ # # # # #	* #	* #	*	*	*
+	*
+ # # # # #	*	* #	*	*	*	*
+	*
+ # # # # #	*	*	* # #	* #
+	*
+ # # # # #	*	* #	*	* # #
+	*
+ # # # # #	*	* # #	* # #
+	*
+ # # # # #	* # # # #	*
+	*
+ # # # # #	* #	* #
+	*
+ # #
+
+
+
```

## wml

```shell
# Hello World in Wesnoth Markup Language (wml)
#define HELLOWORLD
[message]
speaker="narrator"
message=_"Hello World"
[/message]
#enddef

```

## Wolfram

```shell
(* Hello world in Wolfram Language *)

CloudDeploy["Hello World"]
```

## WSH

```shell
// Hello World for the Windows Scripting Host
WScript.Echo("Hello World!");

```

# X

## X++

```shell
// Hello World in X++ (Microsoft Axapta)

class classHelloWorld
{
}

static void main(args Args)
{
  dialog   dialog;
  ;
  dialog = new dialog();
  dialog.addText("Hello World!");
  dialog.run();
}
```

## Xbase++

```shell
Hello World in Xbase++
func Main()
  Qout("Hello World!")
return 1
```

## xblite

```shell
' Hello World in xblite, Windows GUI mode

	IMPORT "gdi32"
	IMPORT "user32"

DECLARE FUNCTION Entry ()

FUNCTION Entry ()
	MessageBoxA (0, &"Hello World!", &"Hello World Window", $$MB_OK)
END FUNCTION
END PROGRAM
```

## XHTML

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Hello World in XHTML -->
<html
 xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
 <head>
   <title>
     Hello World!
   </title>
 </head>
 <body>
   <h1>Hello World!</h1>
 </body>
</html>
```

## XLogo

```shell
#Hello World in XLogo

to helloworld
 resetall
 hideturtle
 fd 20 left 180
 fd 40 left 180
 fd 20 right 90
 fd 20 left 90
 fd 20 left 180
 fd 40 left 90
 fd 20 left 90
 fd 20 right 90
 fd 20 right 90
 fd 10 right 90
 fd 20 left 90
 fd 10 left 90
 fd 30 left 90
 fd 40 left 180
 fd 40 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 60 left 90
 fd 40 left 180
 fd 40 left 90
 fd 20 left 90
 fd 20 left 180
 fd 20 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 40 left 90
 fd 20 right 90
 fd 20 right 90
 fd 5  left 90  
 fd 5  left 90  
 fd 25 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40
end
```

## XPL0

```shell
\Hello World in XPL0
code Text=12;
Text(0, "Hello World!
")

```

## XQuery

```shell
(: Hello World with XQuery :)
let $i := "Hello World"
return $i

```

## XSL-FO

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Hello World in XSL-FO -->
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
<fo:layout-master-set>
		<fo:simple-page-master master-name="LetterPage" page-width="8.5in" page-height="11in">?
				<fo:region-body region-name="PageBody" margin="0.7in"/>
		</fo:simple-page-master>
</fo:layout-master-set>
<fo:page-sequence master-reference="LetterPage">
		<fo:flow flow-name="PageBody">
				<fo:block font-size="12pt" font-family="courier">Hello, World</fo:block>
		</fo:flow>
</fo:page-sequence>
</fo:root>

```

## XSLT

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Hello World in XSLT -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
		<xsl:text>Hello World!</xsl:text>
</xsl:template>
</xsl:stylesheet>

```

# Y

## Yacas


```shell
Hello World in Yacas

WriteString("Hello World")
```

# Z

## Zig

```shell
// Hello world in Zig

const io = @import("std").io;

pub fn main(args: [][]u8) -> %void {
    %%io.stdout.printf("Hello, world!\n");
}
```

## ZIM

```shell
% Hello World in ZIM (database and development language)

out "Hello World"

```
