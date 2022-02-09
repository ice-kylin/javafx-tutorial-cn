# CheckBox（复选框）

JavaFX CheckBox 是一个按钮，它可以处于三种不同的状态：选中、未选中和未知（不确定）。JavaFX CheckBox 控件由 `javafx.scene.control.CheckBox` 类表示。

A JavaFX CheckBox is a button which can be in three different states: Selected, not selected and unknown (indeterminate). The JavaFX CheckBox control is represented by the class `javafx.scene.control.CheckBox`.

## 创建 `CheckBox`

您可以通过 `CheckBox` 类的构造器创建 JavaFX CheckBox 控件。这是一个 JavaFX `CheckBox` 实例化的示例：

You create a JavaFX CheckBox control via the `CheckBox` constructor. Here is a JavaFX `CheckBox` instantiation example:

```java
CheckBox checkBox1 = new CheckBox("Green");
```

传递给 `CheckBox` 构造函数的字符串显示在 `CheckBox` 控件旁边。

The String passed to the `CheckBox` constructor is displayed next to the `CheckBox` control.

## 在场景图中添加 `CheckBox`

要使 JavaFX `CheckBox` 控件可见，您必须将其添加到 JavaFX 应用程序的场景图中。这意味着将 `CheckBox` 控件添加到 `Scene` 对象，或添加到自身添加到 `Scene` 对象的某些布局组件。

To make a JavaFX `CheckBox` control visible you must add it to the scene graph of your JavaFX application. That means adding the `CheckBox` control to a `Scene` object, or to some layout component which is itself added to a `Scene` object.

下面是一个示例，展示了如何将 `CheckBox` 添加到场景图中：

Here is an example showing how to add a `CheckBox` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.CheckBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class CheckBoxExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("CheckBox Experiment 1");

        CheckBox checkBox1 = new CheckBox("Green");

        HBox hbox = new HBox(checkBox1);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

运行此代码生成的应用程序如下所示：

The application resulting from running this code looks like this:

![A JavaFX CheckBox displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-checkbox-1.png)

## 读取选定状态

您可以通过其方法 `isSelected()` 读取 `CheckBox` 的选定状态。下面是调用 `isSelected()` 的示例：

You can read the selected state of a `CheckBox` via its method `isSelected()`. Here is an example of how calling `isSelected()` looks:

```java
boolean isSelected = checkBox1.isSelected();
```

## 允许未知状态

如前所述，JavaFX `CheckBox` 可以处于 _未知状态_，这意味着它既未被选中，也未被选中。用户只是还没有与 `CheckBox` 进行交互。

As mentioned earlier a JavaFX `CheckBox` can be in an _indeterminate state_ which means that is is neither selected, nor not selected. The user simply has not interacted with the `CheckBox` yet.

默认情况下，`CheckBox` 不允许处于未知状态。您可以使用方法 `setAllowIndeterminate()` 设置是否允许 `CheckBox` 处于不确定状态。 这是一个允许 `CheckBox` 处于未知状态的示例：

By default a `CheckBox` is not allowed to be in the indeterminate state. You can set if a `CheckBox` is allowed to be in an indeterminate state using the method `setAllowIndeterminate()`. Here is an example of allowing the indeterminate state for a `CheckBox`:

```java
checkBox1.setAllowIndeterminate(true);
```

## 读取未知状态

您可以通过其 `isIndeterminate()` 方法读取 `CheckBox` 是否处于未知状态。下面是一个检查 `CheckBox` 是否处于未知状态的示例：

You can read if a `CheckBox` is in the indeterminate state via its `isIndeterminate()` method. Here is an example of checking if a `CheckBox` is in the indeterminate state:

```java
boolean isIndeterminate = checkBox1.isIndeterminate();
```

请注意，如果 `CheckBox` 不处于未知状态，则它要么被选中，要么未被选中，这可以通过前面显示的 `isSelected()` 方法看到。

Note, that if a `CheckBox` is not in the indeterminate state, it is either selected or not selected, which can be seen via its `isSelected()` method shown earlier.
