# HBox（水平盒子）

JavaFX HBox 组件是一个布局组件，它将其所有子节点（组件）放置在水平行中。Java HBox 组件由 `javafx.scene.layout.HBox` 类表示。

The JavaFX HBox component is a layout component which positions all its child nodes (components) in a horizontal row. The Java HBox component is represented by the class `javafx.scene.layout.HBox`.

## 创建 `HBox`

您可以使用它的构造器创建一个 `HBox`，如下所示：

You create an `HBox` using its constructor like this:

```java
HBox hbox = new HBox();
```

`HBox` 还有一个构造器接受一个可变长度的它应该布局的组件列表。以下是如何执行此操作的示例：

`HBox` also has a constructor which takes a variable length list of components it should layout. Here is an example of how to do that:

```java
Button button1 = new Button("Button Number 1");
Button button2 = new Button("Button Number 2");

HBox hbox = new HBox(button1, button2);
```

这个 `HBox` 示例将两个 [Button（按钮）](../basic-control/button.md)实例在水平行中彼此相邻布置。

This `HBox` example will layout the two [Button](../basic-control/button.md) instances next to each other in a horizontal row.

## 在场景图中添加 `HBox`

要使 `HBox` 可见，必须将其添加到场景图中。这意味着将其添加到 `Scene` 对象，或作为附加到 `Scene` 对象的布局组件的子节点。

For an `HBox` to be visible it must be added to the scene graph. This means adding it to a `Scene` object, or as child of a layout which is attached to a `Scene` object.

这是一个将带有两个 `Button` 实例的 JavaFX `HBox` 附加到场景图的示例：

Here is an example that attaches a JavaFX `HBox` with the two `Button` instances to the scene graph:

```java
package com.jenkov.javafx.layouts;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class HBoxExperiments extends Application  {

  @Override
  public void start(Stage primaryStage) throws Exception {
    primaryStage.setTitle("HBox Experiment 1");

    Button button1 = new Button("Button Number 1");
    Button button2 = new Button("Button Number 2");

    HBox hbox = new HBox(button1, button2);

    Scene scene = new Scene(hbox, 200, 100);
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    Application.launch(args);
  }

}
```

运行上述 JavaFX `HBox` 示例的结果是一个如下所示的应用程序：

The result of running the above JavaFX `HBox` example is an application that looks like this:

![A JavaFX HBox component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-hbox-1.png)

请注意，即使没有足够的空间以首选的宽度完全显示它们，两个 `Button` 控件也会保持在同一水平行上。按钮不会“换行”到下一行。

Notice that the two `Button` controls are kept on the same horizontal row even if there is not enough space to show them in their fully preferred widths. The buttons do not "wrap" down on the next line.

## 子节点间距

在前面的示例中，`HBox` 将节点（按钮控件）放置在彼此相邻的位置。您可以通过在 `HBox` 构造器中提供间隙大小来使 `HBox` 在其嵌套控件之间插入一些空格。下面是在 `HBox` 中设置嵌套的控件之间的空间的示例：

In the earlier example the `HBox` positioned the nodes (button controls) right next to each other. You can make the `HBox` insert some space between its nested controls by providing the space in the `HBox` constructor. Here is an example of setting the space between nested controls in an `HBox`:

```java
HBox hbox = new HBox(20, button1, button2);
```

此示例将 `HBox` 布局组件中的控件之间的间距设置为 20。

This example sets the spacing between the controls in the `HBox` layout component to 20.

您还可以使用 `setSpacing()` 方法设置嵌套控件之间的空间，如下所示：

You can also set the space between the nested controls using the `setSpacing()` meethod, like this:

```java
hbox.setSpacing(50);
```

此示例将嵌套控件之间的间距设置为 50。

This example will set the spacing between nested controls to 50.

## 子节点边距

您可以使用静态 `setMargin()` 方法为 JavaFX HBox 的子节点设置边距。下面是一个使用 `setMargin()` 方法设置 [Button（按钮）](../basic-control/button.md)边距的示例：

You can set the margin for child nodes of a JavaFX HBox using the static `setMargin()` method. Here is an example of setting the margin around a [Button](../basic-control/button.md) using the `setMargin()` method:

```java
Button button1 = new Button("Button 1");

HBox hbox = new HBox(button1);

HBox.setMargin(button1, new Insets(10, 10, 10, 10));
```

此示例将 HBox 内 Button 周围的边距设置为每边 10。

This example sets the margin around the Button inside the HBox to 10 on each side.

## 子节点对齐方式

由于 JavaFX HBox 是一个容器组件，这意味着它包含其它 JavaFX 组件。您可以指定 HBox 如何对齐它包含的组件。可以通过 HBox `setAlignment()` 方法执行此操作。下面是为 JavaFX HBox 设置子节点对齐方式的示例：

Since the JavaFX HBox is a container component, meaning it contains other JavaFX components, you can specify how the HBox is to align the components it contains. You do so via the HBox `setAlignment()` method. Here is an example of setting the alignment of child nodes for a JavaFX HBox:

```java
hbox.setAlignment(Pos.BASELINE_CENTER);
```

此示例将使 HBox 在垂直方向上沿着基线、水平方向上居中定位其子节点。

This example will make the HBox position its child nodes along the baseline (vertically) of the vertical line, and from the center of the line and out (horizontally).

JavaFX HBox 控件支持以下对齐方式：

The JavaFX HBox control supports the following alignment options:

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

## 子节点水平增长

您可以指定 HBox 的子节点是否应水平增长以填充 HBox 内的任何可用空间。您可以通过 HBox `setHgrow()` 静态方法执行此操作。您必须指定为哪个子节点设置规则。您可以通过将子节点作为参数传递给 `setHgrow()` 来实现，同时还必须将水平扩展策略作为参数传递给 `setHgrow()`。下面是一个示例，如果 HBox 内有可用空间，则告诉子 Button 水平扩展：

You can specify whether a child node of an HBox should grow horizontally to fill any available space available inside the HBox. You do so via the HBox `setHgrow()` static method. You have to specify which child node the rule is set for. You do so by passing the child node as parameter to `setHgrow()`. You also have to pass the horizontal expansion policy as parameter to `setHgrow()`. Here is an example of telling that a child Button to expand horizontally if space is available inside the HBox:

```java
Button button1 = new Button("Button 1");

HBox hbox = new HBox(button1);

HBox.setHgrow(button1, Priority.ALWAYS);
```

Priority 类包含以下常量，可用于设置扩展策略：

The Priority class contains the following constants you can use to set the expansion policy:

- `Policy.ALWAYS`
- `Policy.SOMETIMES`
- `Policy.NEVER`

请记住，只有当 HBox 比其子项的首选宽度之和宽时，HBox 才会有额外的水平空间可用。

Please keep in mind that the HBox will only have extra horizontal space available if the HBox is wider than the sum of the preferred widths of its children.

## `HBox` 首选高度

HBox 的默认首选高度设置为与其任何子节点的最大首选高度相同的值。

The default preferred height of an HBox is set to the same value as the largest preferred height of any of its child nodes.

## 填充高度

JavaFX HBox `fillHeight` 属性可用于告诉 HBox 控件是否应该扩展其子项的高度以填充 HBox 的整个高度，或者将其子项保持在其首选高度。

The JavaFX HBox `fillHeight` property can be used to tell the HBox control whether it should expand the height of its children to fill out the whole height of the HBox, or keep its children at their preferred heights.

`fillHeight` 属性只影响高度可以实际改变的子组件。例如，默认情况下 Button 不会更改其高度。它的最大高度设置为其首选高度。但是，您可以通过将 Button 或要嵌套在 HBox 内的任何其它组件的最大高度设置为与其首选值不同的值来覆盖它。

The `fillHeight` property only affects child components which heights can actually change. For instance, a Button does not change its height by default. It's max height is set to its preferred height. However, you can override that by setting the max height of the Button, or any other component you want to nest inside the HBox, to a value different than its preferred value.

下面是一个展示 `fillHeight` 属性如何工作的示例：

Here is an example showing how the `fillHeight` property works:

```java
Button button1 = new Button("Button 1");
button1.setMaxHeight(99999.0D); // or Double.MAX_VALUE;

HBox hbox = new HBox(button1);

hbox.setFillHeight(true);
```
