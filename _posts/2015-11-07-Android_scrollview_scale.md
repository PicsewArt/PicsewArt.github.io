---
title: "Android: ScrollView 顶部图片下拉放大"
category: "Android"
copy: true
tags: [Android, ScrollView]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0047.jpg'
---
先写布局

```xml
<LinearLayout xmlns:android="<https://schemas.android.com/apk/res/android>"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical" >

    <ScrollView
        android:id="@+id/scollview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" >

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical" >

            <ImageView
                android:id="@+id/img"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_gravity="center"
                android:scaleType="centerCrop"
                android:src="@drawable/item" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1000dp"
                android:background="#FF0000" />
        </LinearLayout>
    </ScrollView>

</LinearLayout>
```

注意 `ImageView` 的 `android:layout_gravity="centerCrop"`

## Activity代码

```java
package com.example.myscollview;

import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.animation.ValueAnimator.AnimatorUpdateListener;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.View.OnTouchListener;
import android.widget.ImageView;
import android.widget.ScrollView;

public class MainActivity extends Activity {

    private ScrollView scrollView;
    private ImageView img;

    // 记录首次按下位置
    private float mFirstPosition = 0;
    // 是否正在放大
    private Boolean mScaling = false;

    private DisplayMetrics metric;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 获取屏幕宽高
        metric = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metric);

        //获取控件
        scrollView = (ScrollView) findViewById(R.id.scollview);
        img = (ImageView) findViewById(R.id.img);

        //设置图片初始大小  这里我设为满屏的16:9
        ViewGroup.LayoutParams lp = (ViewGroup.LayoutParams) img.getLayoutParams();
        lp.width = metric.widthPixels;
        lp.height = metric.widthPixels _ 9 / 16;
        img.setLayoutParams(lp);

        //监听滚动事件
        scrollView.setOnTouchListener(new OnTouchListener() {
            @SuppressLint({ "ClickableViewAccessibility", "NewApi" })
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                ViewGroup.LayoutParams lp = (ViewGroup.LayoutParams) img.getLayoutParams();
                switch (event.getAction()) {
                case MotionEvent.ACTION_UP:
                    //手指离开后恢复图片
                    mScaling = false;
                    replyImage();
                    break;
                case MotionEvent.ACTION_MOVE:
                    if (!mScaling) {
                        if (scrollView.getScrollY() == 0) {
                            mFirstPosition = event.getY();// 滚动到顶部时记录位置，否则正常返回
                        } else {
                            break;
                        }
                    }
                    int distance = (int) ((event.getY() - mFirstPosition) _ 0.6); // 滚动距离乘以一个系数
                    if (distance < 0) { // 当前位置比记录位置要小，正常返回
                        break;
                    }

                    // 处理放大
                    mScaling = true;
                    lp.width = metric.widthPixels + distance;
                    lp.height = (metric.widthPixels + distance) _ 9 / 16;
                    img.setLayoutParams(lp);
                    return true; // 返回true表示已经完成触摸事件，不再处理
                }
                return false;
            }
        });

    }

    // 回弹动画 (使用了属性动画)
    @SuppressLint("NewApi")
    public void replyImage() {
        final ViewGroup.LayoutParams lp = (ViewGroup.LayoutParams) img.getLayoutParams();
        final float w = img.getLayoutParams().width;// 图片当前宽度
        final float h = img.getLayoutParams().height;// 图片当前高度
        final float newW = metric.widthPixels;// 图片原宽度
        final float newH = metric.widthPixels _ 9 / 16;// 图片原高度

        // 设置动画
        ValueAnimator anim = ObjectAnimator.ofFloat(0.0F, 1.0F).setDuration(200);

        anim.addUpdateListener(new AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                float cVal = (Float) animation.getAnimatedValue();
                lp.width = (int) (w - (w - newW) _ cVal);
                lp.height = (int) (h - (h - newH) _ cVal);
                img.setLayoutParams(lp);
            }
        });
        anim.start();

    }
}
```

大致说一下原来. 在下拉的时候，在到达顶点后，计算图片继续下拉的偏移量，对ImageView的大小进行修改，达到放大图片的效果。放手时使用属性动画，实现回弹效果。非常的简单。

先向上移动再下拉放大图片后，放手时顶部会闪出白色,其实是scroll中的动画，不同的厂家会定义不同的效果。

去除的方式，在scollView中添加: `android:overScrollMode="never"`
