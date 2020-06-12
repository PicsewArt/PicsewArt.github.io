---
title: "Android : ScrollView 联动"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0039.jpg'
tags: [Android,ScrollView]
---
ScrollView 联动，就是指多个 ScrollView 中有一个滚动时其它 ScrollView 也随同滚动的效果。并不是什么复杂的事情，最近自己在写一些东西时用到了，所以顺便分享一下。

与 iOS 不同的是，在 Android 并没有提供获取 ScrollView 滚动距离的方法，也没有提供监听方法。但幸运的是，Android 是开源的，查看源代码可以找到这样一个方法:

```java

protected void onScrollChanged(int x, int y, int oldx, int oldy)

```

的确是个好消息，但你也可能留意到了，这一个 protected 方法。那么，我们自己实现一个 ObservableScrollView 吧:

```java

package cn.meniny.scrollviewObserve;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ScrollView;

public class ObservableScrollView extends ScrollView {
	
	private ScrollViewListener scrollViewListener = null;
	
	public ObservableScrollView(Context context) {
		super(context);
	}
	
	public ObservableScrollView(Context context, AttributeSet attrs, int defStyle) {
		super(context, attrs, defStyle);
	}
	
	public ObservableScrollView(Context context, AttributeSet attrs) {
		super(context, attrs);
	}
	
	/**
	 * 监听方法
	 */
	public void setOnScrollViewListener(ScrollViewListener scrollViewListener) {
		this.scrollViewListener = scrollViewListener;
	}
	
	@Override
	protected void onScrollChanged(int x, int y, int oldx, int oldy) {
		super.onScrollChanged(x, y, oldx, oldy);
		if (null !=scrollViewListener) {
			scrollViewListener.onScrollChanged(this, x, y, oldx, oldy);
		}
	}
}

```

做好布局:

```xml

<package cn.meniny.scrollviewObserve.ObservableScrollView
	android:id="@+id/sv1"
	android:layout_width="fill_parent"
	android:layout_height="fill_parent"
	android:layout_weight="1.0"
	android:background="#ffffff" >
</package cn.meniny.scrollviewObserve.ObservableScrollView>

```


然后，定义一个 interface:

```java

package cn.meniny.scrollviewObserve;

public interface ScrollViewListener {
	void onScrollChanged(ObservableScrollView scrollView, int x, int y, int oldx, int oldy);
}

```

现在，只需要来到 Activity 中，实现接口:

```java

package cn.meniny.scrollviewObserve;

import android.os.Bundle;
import android.view.Window;
import android.app.Activity;

public class MainActivity extends Activity implements ScrollViewListener {
	// 两个 ScrollView
	private ObservableScrollView sv1, sv2;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.activity_main);
		
		sv1 = (ObservableScrollView) findViewById(R.id.sv1);
		sv1.setOnScrollViewListener(this);
		
		sv2 = (ObservableScrollView) findViewById(R.id.sv2);
		sv2.setOnScrollViewListener(this);
	}
	
	@Override
	public void onScrollChanged(ObservableScrollView scrollView, int x, int y, int oldx, int oldy) {
		if (scrollView == sv1) {
			sv2.scrollTo(x, y);
		} else if (scrollView == sv2) {
			sv1.scrollTo(x, y);
		}
	}
}

```






