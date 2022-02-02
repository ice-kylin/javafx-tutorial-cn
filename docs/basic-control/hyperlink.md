# Hyperlink（超链接）

::: details 目录

[[toc]]

:::

_JavaFX 超链接_ 控件是一个和按钮功能类似的文本。这意味着您可以配置一个超链接以在用户单击它时执行某些操作，就像网页中的超链接一样。 _JavaFX Hyperlink_ 控件由 `javafx.scene.control.Hyperlink` 类表示。

The _JavaFX Hyperlink_ control is a text that functions as a button, meaning you can configure a Hyperlink to perform some action when the user clicks it. Just like a hyperlink in a web page. The _JavaFX Hyperlink_ control is represented by the class `javafx.scene.control.Hyperlink`.

这是展示 JavaFX `Hyperlink` 外观的屏幕截图：

Here is a screenshot showing how a JavaFX `Hyperlink` looks:

![JavaFX Hyperlink screenshot](http://tutorials.jenkov.com/images/java-javafx/javafx-hyperlink-1.png)

## `Hyperlink` 示例

这是一个完整的 _JavaFX 超链接_ 示例：

Here is a full _JavaFX Hyperlink_ example:

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Hyperlink;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class HyperlinkExample extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX App");

        Hyperlink link = new Hyperlink("Click Me!");

        VBox vBox = new VBox(link);
        Scene scene = new Scene(vBox, 960, 600);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

}
```

此示例是一个完整的 JavaFX 应用程序，它创建一个 `Hyperlink`，将其插入到 [JavaFX VBox](http://tutorials.jenkov.com/javafx/vbox.html) 中，然后将其添加到 [JavaFX Scene（场景）](./core/scene.md)。然后将 `Scene` 添加到 [JavaFX Stage（舞台）](./core/stage.md)，最后使其可见。

This example is a full JavaFX application that creates a `Hyperlink`, inserts it into a [JavaFX VBox](http://tutorials.jenkov.com/javafx/vbox.html) which is then added to a [JavaFX Scene](./core/scene.md). The `Scene` is then added to a [JavaFX Stage](./core/stage.md) which is then made visible.

## 创建 `Hyperlink`

为了使用 JavaFX `Hyperlink` 控件，您必须首先创建一个 `Hyperlink` 的实例。以下是创建 JavaFX `Hyperlink` 实例的示例：

In order to use a JavaFX `Hyperlink` control you must first create a `Hyperlink` instance. Here is an example of creating a JavaFX `Hyperlink` instance:

```java
Hyperlink link = new Hyperlink("Click me!");
```

## 设置 `Hyperlink` 文本

可以通过其 `setText()` 方法更改 JavaFX 超链接的文本。以下是更改 JavaFX 超链接文本的示例：

It is possible to change the text of a JavaFX Hyperlink via its `setText()` method. Here is an example of changing the text of a JavaFX Hyperlink:

```java
Hyperlink link = new Hyperlink("Click me!");

link.setText("New link text");
```

## 设置 `Hyperlink` 字体

可以通过其 `setFont()` 方法更改 JavaFX 超链接的字体。您可以在 [JavaFX Fonts（字体）](./other-concept/fonts.md) 教程中阅读有关创建字体的更多信息。下面是设置 JavaFX 超链接字体的示例：

It is possible to change the font of a JavaFX Hyperlink via its `setFont()` method. You can read more about creating fonts in [JavaFX Fonts](./other-concept/fonts.md) tutorial. Here is an example of setting the font of a JavaFX Hyperlink:

```java
Hyperlink link = new Hyperlink("Click Me!");

Font courierNewFontBold36 = Font.font("Courier New", FontWeight.BOLD, 36);

link.setFont(courierNewFontBold36);
```

## 设置 `Hyperlink` 动作

要响应对 JavaFX `Hyperlink` 的点击，您需要在 `Hyperlink` 实例上设置一个动作侦听器。下面是在 JavaFX `Hyperlink` 实例上设置动作侦听器的示例：

To respond to clicks on a JavaFX `Hyperlink` you set an action listener on the `Hyperlink` instance. Here is an example of setting an action listener on a JavaFX `Hyperlink` instance:

```java{3-5}
Hyperlink link = new Hyperlink("Click me!");

link.setOnAction(e -> {
    System.out.println("The Hyperlink was clicked!");
});
```
