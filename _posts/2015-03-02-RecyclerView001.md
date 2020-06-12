---
title: "Android: RecyclerView 基本使用"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0006.jpg'
tags: [Android, Java, RecyclerView]
---

RecyclerView 是 V7 包新增用来替代 ListView 的控件，本文主要介绍它的基本用法。

* `gradle` 包引用

(与 `CardView` 配合使用)。

```xml

compile 'com.android.support:cardview-v7:21.0.3'
compile 'com.android.support:recyclerview-v7:21.0.3'

```

* 在 `XML` 中使用

```xml

<android.support.v7.widget.recyclerview
   xmlns:android="https://schemas.android.com/apk/res/android"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   android:id="@+id/recycler_view"
   android:layout_centervertical="true"
   android:layout_centerhorizontal="true">
   </android.support.v7.widget.recyclerview>

```

* `Activity` 中设置

```java

public class MainActivity extends ActionBarActivity {
  @InjectView(R.id.recycler_view)
  RecyclerView mRecyclerView;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  	super.onCreate(savedInstanceState);
  	setContentView(R.layout.activity_main);
  	ButterKnife.inject(this);
  	mRecyclerView.setLayoutManager(new LinearLayoutManager(this));//这里用线性显示 类似于listview
  // mRecyclerView.setLayoutManager(new GridLayoutManager(this, 2));//这里用线性宫格显示 类似于grid view
  // mRecyclerView.setLayoutManager(new StaggeredGridLayoutManager(2, OrientationHelper.VERTICAL));//这里用线性宫格显示 类似于瀑布流
  	mRecyclerView.setAdapter(new NormalRecyclerViewAdapter(this));
  }
  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
  	getMenuInflater().inflate(R.menu.menu_main, menu);
  	return true;
  }
  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
  	int id = item.getItemId();
  	if (id == R.id.action_settings) {
  		return true;
  	}
  	return super.onOptionsItemSelected(item);
  }
}

```

* 适配器代码

```java

public class NormalRecyclerViewAdapter extends RecyclerView.Adapter<normalrecyclerviewadapter.normaltextviewholder> {
  private final LayoutInflater mLayoutInflater;
  private final Context mContext;
  private String[] mTitles;
  public NormalRecyclerViewAdapter(Context context) {
  	mTitles = context.getResources().getStringArray(R.array.titles);
  	mContext = context;
  	mLayoutInflater = LayoutInflater.from(context);
  }
  @Override
  public NormalTextViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
  	return new NormalTextViewHolder(mLayoutInflater.inflate(R.layout.item_text, parent, false));
  }
  @Override
  public void onBindViewHolder(NormalTextViewHolder holder, int position) {
  	holder.mTextView.setText(mTitles[position]);
  }
  @Override
  public int getItemCount() {
  	return mTitles == null ? 0 : mTitles.length;
  }

  public static class NormalTextViewHolder extends RecyclerView.ViewHolder {
    @InjectView(R.id.text_view)
    TextView mTextView;
    NormalTextViewHolder(View view) {
    	super(view);
    	ButterKnife.inject(this, view);
    	view.setOnClickListener(new View.OnClickListener() {
    				@Override
    				public void onClick(View v) {
    				        Log.d("NormalTextViewHolder", "onClick--> position = " + getPosition());
    				}
    			});
    }
  }
}</normalrecyclerviewadapter.normaltextviewholder>

```





