---
category: "MFC"
title:  "MFC: 对话框添加背景图片"
cave: true
hero:
  format: 'jpeg'
  url: 'post/mfc.jpg'
tags: [MFC,C++]
summary: "MFC: 对话框添加背景图片"
---
有两种实现方法，分别是:

* 插入一个 `Bitmap` 的资源图片，假设资源名称为 `IDC_BITMAP1`
* 在 `CXXXDialog::OnPaint()` 中实现:

```cpp
void CMyDialogDlg::OnPaint() {

    if (IsIconic()) {

        CPaintDC dc(this); // 用于绘制的设备上下文

        SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

        // 使图标在工作区矩形中居中

        int cxIcon = GetSystemMetrics(℠_CXICON);

        int cyIcon = GetSystemMetrics(℠_CYICON);

        CRect rect;

        GetClientRect(&rect);

        int x = (rect.Width() - cxIcon + 1) / 2;

        int y = (rect.Height() - cyIcon + 1) / 2;

        // 绘制图标

        dc.DrawIcon(x, y, m_hIcon);

    } else {

        //

        // 给窗体添加背景

        //

        CPaintDC dc(this);

        CRect rc;

        GetClientRect(&rc);

        CDC dcMem;

        dcMem.CreateCompatibleDC(&dc);

        CBitmap bmpBackground;

        bmpBackground.LoadBitmap(IDB_BITMAP1);

        BITMAP bitmap;

        bmpBackground.GetBitmap(&bitmap);

        CBitmap* pbmpPri = dcMem.SelectObject(&bmpBackground);

        dc.StretchBlt(0,0,rc.Width(), rc.Height(), &dcMem,0,0,bitmap.bmWidth, bitmap.bmHeight, SRCCOPY);
    }
}
```
