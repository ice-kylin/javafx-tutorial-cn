# RadioButton（单选按钮）

JavaFX RadioButton 是一个要么选择、要么不选择的按钮。`RadioButton` 与 [ToggleButton（开关按钮）](./togglebutton.md)非常相似，但区别在于一旦选择 `RadioButton` 就不能“取消选择”。如果 `RadioButton` 是 `ToggleGroup` 的一部分，那么一旦第一次选择了 `RadioButton`，则在 `ToggleGroup` 中始终会有一个 `RadioButton` 被选中（不一定是一开始选择的那个）。

A JavaFX RadioButton is a button that can be selected or not selected. The `RadioButton` is very similar to the [ToggleButton](./togglebutton.md), but with the difference that a `RadioButton` cannot be "unselected" once selected. If `RadioButton`s are part of a `ToggleGroup` then once a `RadioButton` has been selected for the first time, there must be one `RadioButton` selected in the `ToggleGroup`.

JavaFX RadioButton 由 `javafx.scene.control.RadioButton` 类表示。`RadioButton` 类是 `ToggleButton` 类的子类。

The JavaFX RadioButton is represented by the class `javafx.scene.control.RadioButton`. The `RadioButton` class is a subclass of the `ToggleButton` class.

## 创建一个 `RadioButton`

您使用其构造器创建一个 JavaFX `RadioButton`。这是一个 JavaFX `RadioButton` 实例化的示例：

You create a JavaFX `RadioButton` using its constructor. Here is a JavaFX `RadioButton` instantiation example:

```java
RadioButton radioButton1 = new RadioButton("Left");
```

作为参数传递给 `RadioButton` 构造器的字符串将显示在 `RadioButton` 旁边。

The String passed as parameter to the `RadioButton` constructor is displayed next to the `RadioButton`.

## 将 `RadioButton` 添加到场景图中

要使 `RadioButton` 可见，您必须将其添加到 JavaFX 应用程序的场景图中。这意味着将 `RadioButton` 添加到 `Scene` 中，或者作为添加到 `Scene` 对象的布局组件的子节点。

To make a `RadioButton` visible you must add it to the scene graph of your JavaFX application. This means adding the `RadioButton` to a `Scene`, or as child of a layout which is attached to a `Scene` object.

这是一个将 JavaFX `RadioButton` 添加到场景图的示例：

Here is an example that attaches a JavaFX `RadioButton` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.RadioButton;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class RadioButtonExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        RadioButton radioButton1 = new RadioButton("Left");

        HBox hbox = new HBox(radioButton1);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

运行此示例生成的应用程序如下所示：

The application resulting from running this example looks like this:

![A JavaFX RadioButton displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-radiobutton-1.png)

## 读取选定状态

`RadioButton` 类有一个名为 `isSelected` 的方法，可让您确定是否选择了 `RadioButton`。`isSelected()` 方法返回一个 `boolean` 类型的返回值。如果选择了 `RadioButton`，则返回值为 `true`，否则返回 `false`。这是一个例子：

The `RadioButton` class has a method named `isSelected` which lets you determine if the `RadioButton` is selected or not. The `isSelected()` method returns a `boolean` with the value `true` if the `RadioButton` is selected, and `false` if not. Here is an example:

```java
boolean isSelected = radioButton1.isSelected();
```

## 开关组（ToggleGroup）

您可以将 JavaFX `RadioButton` 实例分组到 `ToggleGroup`。`ToggleGroup` 允许在任何时候最多选择一个 `RadioButton`。

You can group JavaFX `RadioButton` instances into a `ToggleGroup`. A `ToggleGroup` allows at most one `RadioButton` to be selected at any time.

这是一个 JavaFX `ToggleGroup` 的示例：

Here is a JavaFX `ToggleGroup` example:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class RadioButtonExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        RadioButton radioButton1 = new RadioButton("Left");
        RadioButton radioButton2 = new RadioButton("Right");
        RadioButton radioButton3 = new RadioButton("Up");
        RadioButton radioButton4 = new RadioButton("Down");

        ToggleGroup radioGroup = new ToggleGroup();

        radioButton1.setToggleGroup(radioGroup);
        radioButton2.setToggleGroup(radioGroup);
        radioButton3.setToggleGroup(radioGroup);
        radioButton4.setToggleGroup(radioGroup);

        HBox hbox = new HBox(radioButton1, radioButton2, radioButton3, radioButton4);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

运行此示例生成的应用程序如下所示：

The application resulting from running this example looks like this:

![Four JavaFX RadioButton instances in a ToggleGroup displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-radiobutton-2.png)

## 读取 `ToggleGroup` 的选定状态

您可以使用 `getSelectedToggle()` 方法读取 `ToggleGroup` 的哪个 `RadioButton` 被选中，如下所示：

You can read which `RadioButton` of a `ToggleGroup` is selected using the `getSelectedToggle()` method, like this:

```java
RadioButton selectedRadioButton =
        (RadioButton) toggleGroup.getSelectedToggle();
```

如果没有被选择的 `RadioButton`，`getSelectedToggle()` 方法将返回 `null`。

If no `RadioButton` is selected the `getSelectedToggle()` method returns `null`.
