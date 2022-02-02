# ImageView（图像视图）

::: details 目录

[[toc]]

:::

JavaFX ImageView 控件可以在 JavaFX GUI 中显示图像。ImageView 控件必须添加到场景图中才能可见。JavaFX ImageView 控件由类 `javafx.scene.image.ImageView` 表示。

The JavaFX ImageView control can display an image inside a JavaFX GUI. The ImageView control must be added to the scene graph to be visible. The JavaFX ImageView control is represented by the class `javafx.scene.image.ImageView`.

## 创建一个 `ImageView`

您可以通过创建 `ImageView` 类的实例来创建 ImageView 控件实例。`ImageView` 类的构造器需要一个 `javafx.scene.image.Image` 的实例作为参数。`Image` 对象代表 `ImageView` 控件要显示的图像。

You create an ImageView control instance by creating an instance of the `ImageView` class. The constructor of the `ImageView` class needs an instance of a `javafx.scene.image.Image` as parameter. The `Image` object represents the image to be displayed by the `ImageView` control.

这是一个 JavaFX ImageView 实例化的示例：

Here is a JavaFX ImageView instantiation example:

```java
FileInputStream input = new FileInputStream("resources/images/iconmonstr-home-6-48.png");
Image image = new Image(input);
ImageView imageView = new ImageView(image);
```

首先创建一个 `FileInputStream`，它指向要显示的图像的图像文件。

First a `FileInputStream` is created which points to the image file of the image to display.

其次，创建一个 `Image` 实例，将 `FileInputStream` 作为参数传递给 `Image` 的构造器。这样，`Image` 类就知道从哪里加载图像文件了。

Second an `Image` instance is created, passing the `FileInputStream` as parameter to the `Image` constructor. This way the `Image` class knows where to load the image file from.

最后 `ImageView` 实例被创建，将 `Image` 实例作为参数传递给 `ImageView` 的构造器。

Third an `ImageView` instance is created, passing the `Image` instance as parameter to the `ImageView` constructor.

## 将 `ImageView` 添加到场景图中

要使 `ImageView` 可见，您必须将其添加到场景图中。这意味着将其添加到 `Scene` 对象中。由于 `ImageView` 不是 `javafx.scene.Parent` 的子类，它不能直接添加到场景图中。 它必须嵌套在另一个组件中，例如布局组件。

To make the `ImageView` visible you must add it to the scene graph. This means adding it to a `Scene` object. Since `ImageView` is not a subclass of `javafx.scene.Parent` it cannot be added directly to the scene grahp. It must be nested inside another component, for instance a layout component.

这是一个示例，它通过将 JavaFX `ImageView` 嵌套在 `HBox` 布局组件中来将其添加到场景图：

Here is an example that attaches a JavaFX `ImageView` to the scene graph by nesting it inside a `HBox` layout component:

```java{23,25}
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

import java.io.FileInputStream;

public class ImageViewExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ImageView Experiment 1");

        FileInputStream input = new FileInputStream("resources/images/iconmonstr-home-6-48.png");
        Image image = new Image(input);
        ImageView imageView = new ImageView(image);

        HBox hbox = new HBox(imageView);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

运行上述 JavaFX `ImageView` 示例的结果是一个如下所示的应用程序：

The result of running the above JavaFX `ImageView` example is an application that looks like this:

![A JavaFX ImageView component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-imageview-1.png)

## 标签和按钮中的 `ImageView`

可以在 JavaFX `Label` 和 `Button` 中使用 `ImageView`。这将使 `Label` 或 `Button` 的文字左侧显示 `ImageView`。请参阅有关 [JavaFX 标签](http://tutorials.jenkov.com/javafx/label.html) 和 [JavaFX 按钮](http://tutorials.jenkov.com/javafx/button.html) 的内容以了解做法。

It is possible to use an `ImageView` in both a JavaFX `Label` and `Button`. This will cause the `Label` and `Button` to display the `ImageView` to the left of the text in the `Label` or `Button`. See the texts about [JavaFX Label](http://tutorials.jenkov.com/javafx/label.html) and [JavaFX Button](http://tutorials.jenkov.com/javafx/button.html) for information about how to do that.
