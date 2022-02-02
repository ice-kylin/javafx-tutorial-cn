# Label（标签）

::: details 目录

[[toc]]

:::

_JavaFX 标签_ 控件可以在 JavaFX GUI 中显示文本或图像标签。标签控件必须添加到场景图中才能可见。JavaFX 标签控件由 `javafx.scene.control.Label` 类表示。

The _JavaFX Label_ control can display a text or image label inside a JavaFX GUI. The label control must be added to the scene graph to be visible. The JavaFX Label control is represented by the class `javafx.scene.control.Label`.

## 创建 `Label`

您可以通过创建 `Label` 类的实例来创建标签控件的实例。这是一个 JavaFX 标签实例化的示例：

You create a label control instance by creating an instance of the `Label` class. Here is a JavaFX Label instantiation example:

```java
Label label = new Label("My Label");
```

如您所见，标签中显示的文本将作为参数传递给 `Label` 构造器。

As you can see, the text to display in the label is passed as parameter to the `Label` constructor.

## 为场景图添加 `Label`

要使 `Label` 可见，您必须将其添加到场景图中。这意味着将其添加到 `Scene` 对象，或者作为附加到 `Scene` 对象的布局组件的子节点。

To make the `Label` visible you must add it to the scene graph. This means adding it to a `Scene` object, or as child of a layout which is attached to a `Scene` object.

这是一个将 JavaFX `Label` 添加到场景图的示例：

Here is an example that attaches a JavaFX `Label` to the scene graph:

```java{16}
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class LabelExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        Label label = new Label("My Label");

        Scene scene = new Scene(label, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

请注意，`Label` 被直接添加到 `Scene` 对象中。通常，您会将 `Label` 嵌套在某种布局组件中。为了使示例简单，我将其省略了。请参阅有关布局组件的教程以了解它们是如何工作的。

Notice that the `Label` is added directly to the `Scene` object. Normally you would nest the `Label` inside a layout component of some kind. I have left that out here to keep the example simple. See the tutorials about layout components to see how they work.

运行上述 JavaFX `Label` 示例的结果如下所示：

The result of running the above JavaFX `Label` example is an application that looks like this:

![A JavaFX Label component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-label-1.png)

## 在 `Label` 中显示图像

可以在标签中的文本旁边显示图像。JavaFX `Label` 类包含一个可以将 `Node` 作为额外参数的构造函数。这是一个 JavaFX 标签示例，它使用 [JavaFX ImageView](./basic-control/imageview.md) 组件向标签内添加图像：

It is possible to display an image inside a label next to the label text. The JavaFX `Label` class contains a constructor that can take a `Node` as extra parameter. Here is a JavaFX label example that adds an image to the label using an [JavaFX ImageView](http://tutorials.jenkov.com/javafx/imageview.html) component:

```java{19-21,23}
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;

import java.io.FileInputStream;


public class LabelExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        FileInputStream input = new FileInputStream("resources/images/iconmonstr-home-6-48.png");
        Image image = new Image(input);
        ImageView imageView = new ImageView(image);

        Label label = new Label("My Label", imageView);

        Scene scene = new Scene(label, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

运行上述 JavaFX `Label` 示例的结果如下所示：

The result of running the above JavaFX `Label` example is an application that looks like this:

![A JavaFX Label component with an image embedded.](http://tutorials.jenkov.com/images/java-javafx/javafx-label-2.png)

## 更改 `Label` 的文本

您可以使用其 `setText()` 方法更改标签的文本。这可以在应用程序运行时完成。下面是一个设置 JavaFX 标签文本的示例：

You can change the text of a label using its `setText()` method. This can be done while the application is running. Here is an example of setting the text of a JavaFX Label:

```java
label.setText("New label text");
```

有关单击按钮时更改标签文本的示例，请参阅 [JavaFX Button（按钮）](./basic-control/button.md)。

See the [JavaFX Button](./basic-control/button.md) for an example that changes the text of a label when a button is clicked.

## 设置 `Label` 字体

您可以通过调用其 `setFont()` 方法来更改 JavaFX `Label` 使用的字体。如果您需要更改文本的大小或想要使用不同的文本样式，这很有用。 您可以在 [JavaFX Fonts（字体）](./other-concept/fonts.md) 教程中阅读有关如何创建 JavaFX 字体的更多信息。下面是设置 JavaFX `Label` 字体的示例：

You can change the font used by a JavaFX `Label` by calling its `setFont()` method. This is useful if you need to change the size of the text, or want to use a different text style. You can read more about how to create JavaFX fonts in [JavaFX Fonts](./other-concept/fonts.md) tutorial. Here is an example of setting the font of a JavaFX `Label`:

```java
Label label = new Label("A label with custom font set.");

label.setFont(new Font("Arial", 24));
```

这个例子告诉 `Label` 使用 24 号大小的 `Arial` 字体。

This example tells the `Label` to use the `Arial` font with a size of 24.
