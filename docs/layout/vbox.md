# VBox（垂直盒子）

JavaFX VBox 组件是一个布局组件，它将其所有子节点（组件）放置在垂直的一列中 —— 彼此上下排布。JavaFX VBox 组件由 `javafx.scene.layout.VBox` 类表示。在这个 JavaFX VBox 教程中，我将深入 VBox 组件用于控件布局的各种选项。

The JavaFX VBox component is a layout component which positions all its child nodes (components) in a vertical column - on top of each other. The JavaFX VBox component is represented by the class `javafx.scene.layout.VBox` . In this JavaFX VBox tutorial I will take a deeper look at the various options the VBox component has for the layout of controls.

## 创建 `VBox`

要使用 JavaFX VBox 组件，您必须首先创建 VBox 类的实例。您可以使用它的构造器创建一个 `VBox` 实例，如下所示：

To use the JavaFX VBox component you must first create an instance of the VBox class. You create a `VBox` instance using its constructor like this:

```java
VBox vbox = new VBox();
```

`VBox` 还有一个构造器接受一个可变长度的它应该布局的组件列表。以下是如何执行此操作的示例：

`VBox` also has a constructor which takes a variable length list of components it should layout. Here is an example of how to do that:

```java
Button button1 = new Button("Button Number 1");
Button button2 = new Button("Button Number 2");

VBox vbox = new VBox(button1, button2);
```

这个 `VBox` 示例将两个 [Button（按钮）](../basic-control/button.md)实例在一列中垂直排布。

This `VBox` example will layout the two [Button](../basic-control/button.md) instances one on top of the other in a vertical column.

## 向场景图中添加 `VBox`

要使 `VBox` 实例可见，必须将其添加到场景图中。这意味着将其添加到 `Scene` 对象，或者作为附加到 `Scene` 对象的另一个布局组件的子组件。

For a `VBox` instance to be visible it must be added to the scene graph. This means adding it to a `Scene` object, or as child of another layout component which is attached to a `Scene` object.

这是一个将带有两个 `Button` 实例的 JavaFX `VBox` 附加到场景图的示例：

Here is an example that attaches a JavaFX `VBox` with the two `Button` instances to the scene graph:

```java
package com.jenkov.javafx.layouts;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class VBoxExperiments extends Application{

  @Override
  public void start(Stage primaryStage) throws Exception {
    primaryStage.setTitle("VBox Experiment 1");

    Button button1 = new Button("Button Number 1");
    Button button2 = new Button("Button Number 2");

    VBox vbox = new VBox(button1, button2);

    Scene scene = new Scene(vbox, 200, 100);
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    Application.launch(args);
  }

}
```

运行上述 JavaFX `VBox` 示例的结果如下所示：

The result of running the above JavaFX `VBox` example is an application that looks like this:

![A JavaFX VBox component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-vbox-1.png)

## 子节点间距

在前面的示例中，`VBox` 将节点（按钮控件）定位在另一个节点的正下方。您可以通过在 `VBox` 构造器中提供间隙大小来使 `VBox` 在其嵌套控件之间插入一些空格。 这是一个在 `VBox` 中设置嵌套控件之间的空间的示例：

In the earlier example the `VBox` positioned the nodes (button controls) right under the other. You can make the `VBox` insert some space between its nested controls by providing the space in the `VBox` constructor. Here is an example of setting the space between nested controls in an `VBox`:

```java
VBox vbox = new VBox(20, button1, button2);
```

此示例将 `VBox` 布局组件中的控件之间的间距设置为 20。

This example sets the spacing between the controls in the `VBox` layout component to 20.

您还可以使用 `setSpacing()` 方法设置嵌套控件之间的空间，如下所示：

You can also set the space between the nested controls using the `setSpacing()` method, like this:

```java
vbox.setSpacing(50);
```

此示例将嵌套控件之间的间距设置为 50。

This example will set the spacing between nested controls to 50.

## 子节点边距

您可以使用静态 `setMargin()` 方法为 JavaFX VBox 的子节点设置边距。下面是一个使用 `setMargin()` 方法设置 [Button（按钮）](../basic-control/button.md)边距的示例：

You can set the margin for child nodes of a JavaFX VBox using the static `setMargin()` method. Here is an example of setting the margin around a [Button](../basic-control/button.md) using the `setMargin()` method:

```java
Button button = new Button("Button 1");

VBox vbox = new VBox(button);

VBox.setMargin(button, new Insets(10, 10, 10, 10));
```

此示例将 VBox 内 Button 周围的边距设置为每边 10。

This example sets the margin around the Button inside the VBox to 10 on each side.

## 子节点对齐方式

由于 JavaFX VBox 是一个容器组件，这意味着它包含其它 JavaFX 组件，您可以指定 VBox 如何对齐它包含的组件。您可以通过 VBox `setAlignment()` 方法来实现。下面是为 JavaFX VBox 设置子节点对齐方式的示例：

Since the JavaFX VBox is a container component, meaning it contains other JavaFX components, you can specify how the VBox is to align the components it contains. You do so via the VBox `setAlignment()` method. Here is an example of setting the alignment of child nodes for a JavaFX VBox:

```java
vbox.setAlignment(Pos.BASELINE_CENTER);
```

此示例将使 VBox 在垂直方向上沿着基线、水平方向上居中定位其子节点。

This example will make the VBox position its child nodes along the baseline (vertically) of the vertical line, and from the center of the line and out (horizontally).

JavaFX VBox 控件支持以下对齐方式：

The JavaFX VBox control supports the following alignment options:

|         参数          | 垂直对齐方式 | 水平对齐方式 |
| :-------------------: | :----------: | :----------: |
|  `Pos.BASELINE_LEFT`  |     基线     |     靠左     |
| `Pos.BASELINE_CENTER` |     基线     |     居中     |
| `Pos.BASELINE_RIGHT`  |     基线     |     靠右     |
|   `Pos.BOTTOM_LEFT`   |     底部     |     靠左     |
|  `Pos.BOTTOM_CENTER`  |     底部     |     居中     |
|  `Pos.BOTTOM_RIGHT`   |     底部     |     靠右     |
|   `Pos.CENTER_LEFT`   |     居中     |     靠左     |
|     `Pos.CENTER`      |     居中     |     居中     |
|  `Pos.CENTER_RIGHT`   |     居中     |     靠右     |
|    `Pos.TOP_LEFT`     |     顶部     |     靠左     |
|   `Pos.TOP_CENTER`    |     顶部     |     居中     |
|    `Pos.TOP_RIGHT`    |     顶部     |     靠右     |

### 水平居中

您可以使用子节点对齐功能将 VBox 的子节点水平居中。下面是一个示例，展示了如何将 VBox 的子节点水平居中：

You can use the child node alignment features to horizontally center the child nodes of a VBox. Here is an example showing how to center the child nodes of a VBox horizontally:

```java
vbox.setAlignment(Pos.BASELINE_CENTER);
```

## 子节点垂直增长

您可以指定 VBox 的子节点是否应垂直增长以填充 VBox 内的任何可用空间。您可以通过 VBox `setVgrow()` 静态方法执行此操作。您必须指定为哪个子节点设置规则。您可以通过将子节点作为参数传递给 `setVgrow()` 来实现，同时还必须将垂直扩展策略作为参数传递给`setVgrow()`。下面是一个示例，如果 VBox 内有可用空间，则告诉子 Button 垂直扩展：

You can specify whether a child node of a VBox should grow vertically to fill any available space available inside the VBox. You do so via the VBox `setVgrow()` static method. You have to specify which child node the rule is set for. You do so by passing the child node as parameter to `setVgrow()`. You also have to pass the vertical expansion policy as parameter to `setVgrow()`. Here is an example of telling that a child Button to expand vertically if space is available inside the VBox:

```java
Button button = new Button("Button 1");

VBox vbox = new VBox(button);

VBox.setVgrow(button, Priority.ALWAYS);
```

Priority 类包含以下常量，可用于设置扩展策略：

The Priority class contains the following constants you can use to set the expansion policy:

- `Policy.ALWAYS`
- `Policy.SOMETIMES`
- `Policy.NEVER`

请记住，只有当 VBox 比其子项的首选高度之和高时，VBox 才会有额外的垂直空间可用。

Please keep in mind that the VBox will only have extra vertical space available if the child nodes do not have the same preferred height, or if you explicitly set a preferred height on the VBox that is larger than the preferred height of its child nodes.

## 填充宽度

JavaFX VBox `fillWidth` 属性可用于告诉 VBox 控件是否应该扩展其子项的宽度以填充 VBox 的整个宽度，或者将其子项保持在其首选宽度。

The JavaFX VBox `fillWidth` property can be used to tell the VBox control whether it should expand the width of its children to fill out the whole width of the VBox, or keep its children at their preferred widths.

`fillWidth` 属性只影响宽度可以实际改变的子组件。例如，默认情况下 Button 不会更改其宽度。它的最大宽度设置为其首选宽度。 但是，您可以通过将 Button 或要嵌套在 VBox 内的任何其它组件的最大宽度设置为与其首选值不同的值来覆盖它。

The `fillWidth` property only affects child components which widths can actually change. For instance, a Button does not change its width by default. It's max width is set to its preferred width. However, you can override that by setting the max width of the Button, or any other component you want to nest inside the VBox, to a value different than its preferred value.

下面是一个展示 `fillWidth` 属性如何工作的示例：

Here is an example showing how the `fillWidth` property works:

```java
Button button = new Button("Button 1");
button.setMaxWidth(99999.0D); // or Double.MAX_VALUE;

VBox vbox = new VBox(button);

vbox.setFillWidth(true);
```

## VBox CSS 样式

像许多其它 JavaFX 控件一样，VBox 组件可以通过 CSS 设置样式。您可以通过其 `setStyle()` 方法设置 JavaFX VBox 组件的 CSS 样式。[CSS 样式](../core/css-styling.md)中更详细地介绍了通过 CSS 设置 JavaFX 控件的样式，但我将在此处简要说明如何设置 JavaFX VBox 的 CSS 样式。下面是设置 JavaFX VBox 组件的 CSS 样式的示例：

Like many other JavaFX controls the VBox component can be styled via CSS. You set the CSS styles of the JavaFX VBox component via its `setStyle()` method. Styling JavaFX controls via CSS is covered in more detail in the [CSS Styling](../core/css-styling.md), but I will briefly explain how to style a JavaFX VBox here. Here is an example of setting the CSS styles of a JavaFX VBox component:

```java
vbox.setStyle("-fx-padding: 16;");
```

VBox 组件支持以下 CSS 属性：

The VBox component supports the following CSS properties:

|      CSS 属性       |                                                                  描述                                                                   |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|    `-fx-padding`    | 设置 VBox 边缘和最外层子节点边缘之间的内边距（Sets the padding between the edge of the VBox and the edge of the outermost child nodes） |
| `-fx-border-style`  |     设置 VBox 的边框样式，使一个可见的边框围绕它（Sets the border style of the VBox, in case you want a visible border around it）      |
| `-fx-border-width`  |                                                  设置边框宽度（Sets the border width）                                                  |
| `-fx-border-insets` |                                                 设置边框插图（Sets the border insets）                                                  |
| `-fx-border-radius` |                                             设置圆角（Sets the border radius (of corners)）                                             |
| `-fx-border-color`  |                                                  设置边框颜色（Sets the border color）                                                  |
