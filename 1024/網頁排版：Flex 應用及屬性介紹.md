## Flex 容器屬性介紹

需要將某個元素定義為 flex 容器，這樣它的子元素才能遵循 Flexbox 布局。

```css
.container {
  display: flex;
  ...
}
```

### flex-direction 排列方向

定義子元素在容器中的主軸方向（橫向或縱向）。

* `row`：子元素從左到右排列（預設值）。
* `row-reverse`：子元素從右到左排列。
* `column`：子元素從上到下排列。
* `column-reverse`：子元素從下到上排列。

### justify-content 主軸對齊

控制子元素在主軸（通常是水平軸）上的對齊方式。

* `flex-start`：子元素在主軸起點對齊。
* `flex-end`：子元素在主軸終點對齊。
* `center`：子元素在主軸上居中。
* `space-between`：子元素之間平均分布，首尾兩側沒有空隙。
* `space-around`：子元素之間和兩側都有相等的空隙。

### align-items 交叉軸對齊

控制子元素在交叉軸（通常是垂直軸）上的對齊方式。

* `stretch`：子元素拉伸以填充容器（預設值）。
* `flex-start`：子元素與交叉軸的起點對齊。
* `flex-end`：子元素與交叉軸的終點對齊。
* `center`：子元素在交叉軸上居中。
* `baseline`：子元素基線對齊。

### flex-wrap 換行

定義子元素是否應該換行。

* `nowrap`：所有子元素在一行上（預設值）。
* `wrap`：子元素超出容器寬度時換行。
* `wrap-reverse`：子元素換行但排列順序顛倒。

### align-content 多行內容對齊

在多行情況下，控制行與行之間的對齊方式（僅在使用 flex-wrap 時生效）。

* `flex-start`各行對齊交叉軸的起點。
* `flex-end`：各行對齊交叉軸的終點。
* `center`：各行在交叉軸上居中。
* `space-between`：各行之間平均分布。
* `space-around`：各行之間有均勻的空隙。
* `stretch`：各行拉伸以填充容器。