# ChoiceBox（选择框）

JavaFX ChoiceBox 控件使用户能够从预定义的选项列表中选择一个选项。JavaFX ChoiceBox 控件由 `javafx.scene.control.ChoiceBox` 类表示。这个 JavaFX ChoiceBox 教程将解释如何使用 `ChoiceBox` 类。

The JavaFX ChoiceBox control enables users to choose an option from a predefined list of choices. The JavaFX ChoiceBox control is represented by the class `javafx.scene.control.ChoiceBox` . This JavaFX ChoiceBox tutorial will explain how to use the `ChoiceBox` class.

## 创建一个 `ChoiceBox`

您只需通过创建 `ChoiceBox` 类的新实例来创建 `ChoiceBox`。这是一个 JavaFX `ChoiceBox` 实例化的示例：

You create a `ChoiceBox` simply by creating a new instance of the `ChoiceBox` class. Here is a JavaFX `ChoiceBox` instantiation example:

```java
ChoiceBox choiceBox = new ChoiceBox();
```

## 将选项添加到 `ChoiceBox`

您可以通过获取其选项集合并向其添加项目来将选项添加到 `ChoiceBox`。这是一个向 JavaFX `ChoiceBox` 添加选项的示例：

You can add choices to a `ChoiceBox` by obtaining its item collection and add items to it. Here is an example that adds choices to a JavaFX `ChoiceBox`:

```java
choiceBox.getItems().add("Choice 1");
choiceBox.getItems().add("Choice 2");
choiceBox.getItems().add("Choice 3");
```

## 向场景图中添加 `ChoiceBox`

要使 `ChoiceBox` 可见，您必须将其添加到场景图中。这意味着您必须将 `ChoiceBox` 添加到 `Scene` 对象或某些布局组件，然后将其附加到 `Scene` 对象。

To make a `ChoiceBox` visible you must add it to the scene graph. This means that you must add the `ChoiceBox` to a `Scene` object or to some layout component which is then attached to the `Scene` object.

下面是一个示例，展示了如何将 JavaFX `ChoiceBox` 添加到场景图中：

Here is an example showing how to add a JavaFX `ChoiceBox` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ChoiceBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class ChoiceBoxExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ChoiceBox Experiment 1");

        ChoiceBox choiceBox = new ChoiceBox();

        choiceBox.getItems().add("Choice 1");
        choiceBox.getItems().add("Choice 2");
        choiceBox.getItems().add("Choice 3");

        HBox hbox = new HBox(choiceBox);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

运行此示例生成的应用程序将类似于以下内容：

The application resulting from running this example would look similar to this:

![A JavaFX ChoiceBox displayed via the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-choicebox-1.png)

## 读取选定的值

您可以通过 `getValue()` 方法读取 `ChoiceBox` 的选定值。如果未选择任何选项，则 `getValue()` 方法将返回 `null`。以下是调用 `getValue()` 的示例：

You can read the selected value of a `ChoiceBox` via its `getValue()` method. If no choice is selected, the `getValue()` method returns `null`. Here is an example of calling `getValue()`:

```java
String value = (String) choiceBox.getValue();
```

## 侦听选择

可以通过其 `setOnAction()` 方法在 ChoiceBox 上设置一个动作侦听器来侦听 JavaFX ChoiceBox 中选择的更改。下面是在 ChoiceBox 上设置动作侦听器的示例，该侦听器读取在 ChoiceBox 中选择的值：

It is possible to listen for selection changes in a JavaFX ChoiceBox by setting an action listener on the ChoiceBox via its `setOnAction()` method. Here is an example of setting an action listener on a ChoiceBox which reads what value was selected in the ChoiceBox:

```java
ChoiceBox choiceBox = new ChoiceBox();

choiceBox.getItems().add("Choice 1");
choiceBox.getItems().add("Choice 2");
choiceBox.getItems().add("Choice 3");

choiceBox.setOnAction((event) -> {
    int selectedIndex = choiceBox.getSelectionModel().getSelectedIndex();
    Object selectedItem = choiceBox.getSelectionModel().getSelectedItem();

    System.out.println("Selection made: [" + selectedIndex + "] " + selectedItem);
    System.out.println("   ChoiceBox.getValue(): " + choiceBox.getValue());
});
```
