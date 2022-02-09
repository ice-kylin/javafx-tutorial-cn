# Separator（分隔符）

JavaFX _分隔符_ 组件显示了组件组之间的可视分隔符 —— 例如在 [VBox（垂直盒子）](../layout/vbox.md) 或 [HBox（水平盒子）](../layout/hbox.md)内的控件组之间。 JavaFX 分隔符由 `javafx.scene.control.Separator` 类表示。这是一个 JavaFX 应用程序的屏幕截图，其中包含两个被分隔符分隔的两个标签的 VBox：

The JavaFX _Separator_ component shows a visual divider between groups of components - e.g. between groups of controls inside a [VBox](../layout/vbox.md) or [HBox](../layout/hbox.md). The JavaFX Separator is represented by the class `javafx.scene.control.Separator`. Here is a screenshot of a JavaFX application containing a VBox with a Label, a Separator and a Label:

![JavaFX Separator screenshot.](http://tutorials.jenkov.com/images/java-javafx/javafx-separator-1.png)

## 完整的 JavaFX 分隔符示例

这是一个完整的 JavaFX `Separator` 示例，让您了解如何在代码中使用它：

Here is a full JavaFX `Separator` example to give you an idea about how using it looks in code:

```java
import javafx.application.Application;
import javafx.geometry.Orientation;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.Separator;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class SeparatorExample extends Application {

  public static void main(String[] args) {
    launch(args);
  }

  public void start(Stage primaryStage) {

    Label label1 = new Label("Component 1");
    Label label2 = new Label("Component 2");

    Separator separator = new Separator(Orientation.HORIZONTAL);

    VBox vBox = new VBox(label1, separator, label2);
    Scene scene = new Scene(vBox);

    primaryStage.setScene(scene);
    primaryStage.setTitle("JavaFX App");

    primaryStage.show();
  }

}
```

注意 `Separator` 如何在第一个和第二个 `Label` 之间作为第二个参数传递给 `VBox` 组件。

Notice how the `Separator` is passed as second parameter to the `VBox` component, between the first and second `Label`.

## 分隔符方向

您可以指定 JavaFX `Separator` 应该是垂直的还是水平的。您可以通过将参数传递给 `Separator` 构造器来实现。下面是两个示例，它们将创建的 `Separator` 的方向设置为水平和垂直：

You can specify whether the JavaFX `Separator` is supposed to be vertical or horizontal. You do so by passing a parameter to the `Separator` constructor. Here are two examples that set the orientation of the `Separator` created to horizontal and vertical:

```java
Separator separator = new Separator(Orientation.HORIZONTAL);

Separator separator = new Separator(Orientation.VERTICAL);
```
