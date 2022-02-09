# TextArea（文本区域）

JavaFX TextArea 控件使 JavaFX 应用程序的用户能够输入跨越多行的文本，然后应用程序可以读取这些文本。JavaFX TextArea 控件由 `javafx.scene.control.TextArea` 类表示。

A JavaFX TextArea control enables users of a JavaFX application to enter text spanning multiple lines, which can then be read by the application. The JavaFX TextArea control is represented by the class `javafx.scene.control.TextArea`.

## 创建 `TextArea`

您可以通过创建 `TextArea` 类的实例来创建 TextArea 控件。 这是一个 JavaFX `TextArea` 实例化的示例：

You create a TextArea control by creating an instance of the `TextArea` class. Here is a JavaFX `TextArea` instantiation example:

```java
TextArea textArea = new TextArea();
```

## 在场景图中添加 `TextArea`

要使 JavaFX `TextArea` 可见，必须将 `TextArea` 对象添加到场景图中。这意味着将其添加到 `Scene` 对象，或作为附加到 `Scene` 对象的布局组件的子节点。

For a JavaFX `TextArea` to be visible the `TextArea` object must be added to the scene graph. This means adding it to a `Scene` object, or as child of a layout which is attached to a `Scene` object.

这是一个将 JavaFX `TextArea` 附加到场景图的示例：

Here is an example that attaches a JavaFX `TextArea` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.TextArea;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class TextAreaExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("TextArea Experiment 1");

        TextArea textArea = new TextArea();

        VBox vbox = new VBox(textArea);

        Scene scene = new Scene(vbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

运行上述 JavaFX `TextArea` 示例的结果如下所示：

The result of running the above JavaFX `TextArea` example is an application that looks like this:

![A JavaFX TextArea component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-textarea-1.png)

## 读取 `TextArea` 的文本

您可以通过 `getText()` 方法读取输入到 `TextArea` 中的文本。下面是一个通过 `getText()` 方法读取 JavaFX `TextArea` 控件文本的示例：

You can read the text entered into a `TextArea` via its `getText()` method. Here is an example of reading text of a JavaFX `TextArea` control via its `getText()` method:

```java
String text = textArea.getText();
```

这是一个完整的示例，它显示了一个 `TextArea` 和一个 `Button`，并在单击按钮时读取输入到 `TextArea` 中的文本：

Here is a full example that shows a `TextArea` and a `Button` and which reads the text entered into the `TextArea` when the button is clicked:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class TextAreaExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("TextArea Experiment 1");

        TextArea textArea = new TextArea();

        Button button = new Button("Click to get text");
        button.setMinWidth(50);

        button.setOnAction(action -> {
            System.out.println(textArea.getText());

            textArea.setText("Clicked!");
        });

        VBox vbox = new VBox(textArea, button);

        Scene scene = new Scene(vbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

## 设置 `TextArea` 的文本

您可以通过 `setText()` 方法设置 `TextArea` 控件的文本。下面是通过 `setText()` 设置 `TextArea` 控件的文本的示例：

You can set the text of a `TextArea` control via its `setText()` method. Here is an example of setting the text of a `TextArea` control via `setText()`:

```java
textArea.setText("New Text");
```
