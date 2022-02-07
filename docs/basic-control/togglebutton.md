# ToggleButton（开关按钮）

JavaFX _ToggleButton_ 是一个要么被选择、要么不被选择的按钮。就像一个开关，当你按下它时它会凹进去（表示按下），而当你下次按下它时它又会弹出来 —— 以表示被选择或未选择。JavaFX ToggleButton 由 `javafx.scene.control.ToggleButton` 类表示。

A JavaFX _ToggleButton_ is a button that can be selected or not selected. Like a button that stays in when you press it, and when you press it the next time it comes out again. Toggled - not toggled. The JavaFX ToggleButton is represented by the class `javafx.scene.control.ToggleButton`.

## 创建一个 `ToggleButton`

您可以通过创建 `ToggleButton` 类的实例来创建 JavaFX ToggleButton。下面是创建 JavaFX `ToggleButton` 实例的示例：

You create a JavaFX ToggleButton by creating an instance of the `ToggleButton` class. Here is an example of creating a JavaFX `ToggleButton` instance:

```java
ToggleButton toggleButton1 = new ToggleButton("Left");
```

此示例创建一个带有文本 `Left` 的 `ToggleButton`。

This example creates a `ToggleButton` with the text `Left` on.

## 在场景图中添加 `ToggleButton`

要使 `ToggleButton` 可见，您必须将其添加到 JavaFX 场景图中。这意味着将其添加到 `Scene`，或作为附加到 `Scene` 对象的布局组件的子节点。

To make a `ToggleButton` visible you must add it to the JavaFX scene graph. This means adding it to a `Scene`, or as child of a layout which is attached to a `Scene` object.

这是一个将 JavaFX `ToggleButton` 添加到场景图的示例：

Here is an example that attaches a JavaFX `ToggleButton` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ToggleButton;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class ToggleButtonExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");


        ToggleButton toggleButton1 = new ToggleButton("Left");

        HBox hbox = new HBox(toggleButton1);


        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

以下两个屏幕截图展示了运行上述示例代码所产生的应用程序。第一个屏幕截图显示了一个未按下的 `ToggleButton`，第二个屏幕截图显示了相同的 `ToggleButton` 被按下（代表其被选择、激活等）：

The application resulting from running the above example code is illustrated in the following two screenshots. The first screenshot shows a `ToggleButton` which is not pressed, and the second screenshot shows the same `ToggleButton` pressed (selected, activated etc.):

![A JavaFX ToggleButton which is not pressed.](http://tutorials.jenkov.com/images/java-javafx/javafx-togglebutton-1.png)

![A JavaFX ToggleButton which is pressed.](http://tutorials.jenkov.com/images/java-javafx/javafx-togglebutton-2.png)

## `ToggleButton` 文本

您可以通过其 `setText()` 方法设置或更改 JavaFX ToggleButton 的文本。下面是通过 `setText()` 更改 JavaFX ToggleButton 文本的示例：

You can set or change the text of a JavaFX ToggleButton via its `setText()` method. Here is an example of changing the text of a JavaFX ToggleButton via `setText()`:

```java
ToggleButton toggleButton = new ToggleButton("Toggle This!");

toggleButton.setText("New Text");
```

## `ToggleButton` 字体

您可以通过其 `setFont()` 方法设置用于呈现 JavaFX ToggleButton 按钮文本的字体。您可以在 [Fonts（字体）](../other-concept/fonts.md)教程中阅读有关创建字体的更多信息。 下面是设置 JavaFX ToggleButton 字体的示例：

You can set the font to use to render the button text of a JavaFX ToggleButton via its `setFont()` method. You can read more about creating fonts in [Fonts](../other-concept/fonts.md) tutorial. Here is an example of setting the font of a JavaFX ToggleButton:

```java
ToggleButton toggleButton = new ToggleButton("Toggle This!");

Font arialFontBold36  = Font.font("Arial", FontWeight.BOLD, 36);

toggleButton.setFont(arialFontBold36);
```

## 读取选定状态

`ToggleButton` 类有一个名为 `isSelected` 的方法，可让您确定是否选择（按下）了 `ToggleButton`。如果 `ToggleButton` 被选中，`isSelected()` 方法返回一个值为 `true` 的布尔类型，否则返回 `false`。这是一个例子：

The `ToggleButton` class has a method named `isSelected` which lets you determine if the `ToggleButton` is selected (pressed) or not. The `isSelected()` method returns a `boolean` with the value `true` if the `ToggleButton` is selected, and `false` if not. Here is an example:

```java
boolean isSelected = toggleButton1.isSelected();
```

## 开关组（ToggleGroup）

您可以将 JavaFX `ToggleButton` 实例分组到 `ToggleGroup` 中。`ToggleGroup` 最多允许在任何时候切换（按下）一个 `ToggleButton`。因此，`ToggleGroup` 中的 `ToggleButton` 实例的功能类似于单选按钮。

You can group JavaFX `ToggleButton` instances into a `ToggleGroup`. A `ToggleGroup` allows at most one `ToggleButton` to be toggled (pressed) at any time. The `ToggleButton` instances in a `ToggleGroup` thus functions similarly to radio buttons.

这是一个 JavaFX `ToggleGroup` 的示例：

Here is a JavaFX `ToggleGroup` example:

```java
ToggleButton toggleButton1 = new ToggleButton("Left");
ToggleButton toggleButton2 = new ToggleButton("Right");
ToggleButton toggleButton3 = new ToggleButton("Up");
ToggleButton toggleButton4 = new ToggleButton("Down");

ToggleGroup toggleGroup = new ToggleGroup();

toggleButton1.setToggleGroup(toggleGroup);
toggleButton2.setToggleGroup(toggleGroup);
toggleButton3.setToggleGroup(toggleGroup);
toggleButton4.setToggleGroup(toggleGroup);
```

这是一个完整的示例，它将 4 个 `ToggleButton` 实例添加到 `ToggleGroup`，并将它们添加到场景图中：

Here is a full example that adds the 4 `ToggleButton` instances to a `ToggleGroup`, and adds them to the scene graph too:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ToggleButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class ToggleButtonExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");


        ToggleButton toggleButton1 = new ToggleButton("Left");
        ToggleButton toggleButton2 = new ToggleButton("Right");
        ToggleButton toggleButton3 = new ToggleButton("Up");
        ToggleButton toggleButton4 = new ToggleButton("Down");

        ToggleGroup toggleGroup = new ToggleGroup();

        toggleButton1.setToggleGroup(toggleGroup);
        toggleButton2.setToggleGroup(toggleGroup);
        toggleButton3.setToggleGroup(toggleGroup);
        toggleButton4.setToggleGroup(toggleGroup);

        HBox hbox = new HBox(toggleButton1, toggleButton2, toggleButton3, toggleButton4);


        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

生成的应用程序如下所示：

The resulting applications looks like this:

![Four JavaFX ToggleButton instances in a ToggleGroup.](http://tutorials.jenkov.com/images/java-javafx/javafx-togglebutton-3.png)

## 读取 `ToggleGroup` 的选定状态

您可以使用 `getSelectedToggle()` 方法读取 `ToggleGroup` 的哪个 `ToggleButton` 被选中（按下），如下所示：

You can read which `ToggleButton` of a `ToggleGroup` is selected (pressed) using the `getSelectedToggle()` method, like this:

```java
ToggleButton selectedToggleButton =
        (ToggleButton) toggleGroup.getSelectedToggle();
```

如果没有 `ToggleButton` 被选中，则 `getSelectedToggle()` 方法返回 `null`。

If no `ToggleButton` is selected the `getSelectedToggle()` method returns `null` .
