# TextField（文本框）

JavaFX TextField 控件使 JavaFX 应用程序的用户能够输入文本，然后应用程序可以读取这些文本。JavaFX TextField 控件由 `javafx.scene.control.TextField` 类表示。

A JavaFX TextField control enables users of a JavaFX application to enter text which can then be read by the application. The JavaFX TextField control is represented by the class `javafx.scene.control.TextField`.

## 创建 `TextField`

您可以通过创建 `TextField` 类的实例来创建 TextField 控件。这是一个 JavaFX `TextField` 实例化的示例：

You create a TextField control by creating an instance of the `TextField` class. Here is a JavaFX `TextField` instantiation example:

```java
TextField textField = new TextField();
```

## 将 `TextField` 添加到场景图中

要使 JavaFX `TextField` 可见，必须将 `TextField` 对象添加到场景图中。这意味着将其添加到 `Scene` 对象，或作为附加到 `Scene` 对象的布局组件的子节点。

For a JavaFX `TextField` to be visible the `TextField` object must be added to the scene graph. This means adding it to a `Scene` object, or as child of a layout which is attached to a `Scene` object.

这是一个将 JavaFX `TextField` 附加到场景图的示例：

Here is an example that attaches a JavaFX `TextField` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class TextFieldExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        TextField textField = new TextField();

        HBox hbox = new HBox(textField);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

运行上述 JavaFX `TextField` 示例的结果如下所示：

The result of running the above JavaFX `TextField` example is an application that looks like this:

![A JavaFX TextField component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-textfield-1.png)

## 获取 `TextField` 中的文本

你可以使用它的 `getText()` 方法获取输入到 `TextField` 中的文本，该方法返回一个字符串类型。这是一个完整的示例，它显示了一个 `TextField` 和一个 `Button`，并在单击按钮时读取输入到 `TextField` 中的文本：

You can get the text entered into a `TextField` using its `getText()` method which returns a `String`. Here is a full example that shows a `TextField` and a `Button` and which reads the text entered into the `TextField` when the button is clicked:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class TextFieldExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        TextField textField = new TextField();

        Button button = new Button("Click to get text");

        button.setOnAction(action -> {
            System.out.println(textField.getText());
        });

        HBox hbox = new HBox(textField, button);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

## 设置 `TextField` 的文本

您可以使用 `setText()` 方法设置 `TextField` 的文本。当您需要为作为表单一部分的文本框设置初始值时，这通常很有用。例如，编辑现有对象或记录。下面是一个设置 JavaFX `TextField` 文本的简单示例：

You can set the text of a `TextField` using its `setText()` method. This is often useful when you need to set the initial value for a text field that is part of a form. For instance, editing an existing object or record. Here is a simple example of setting the text of a JavaFX `TextField`:

```java
textField.setText("Initial value");
```
