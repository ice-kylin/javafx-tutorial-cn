# Pane（窗格）

JavaFX _窗格_ 类是一个布局容器，可以在内部包含其它 JavaFX 组件，并对其进行布局。实际上，JavaFX Pane 类实际上并不提供任何布局算法。Pane 类只是简单的在组件自身想要显示的位置显示它。换句话说，Pane 类使用其子组件指定的 `layoutX` 和 `layoutY` 来确定在哪里显示它们。

The JavaFX _Pane_ class is a layout container which can contain other JavaFX components internally, and lay them out. Actually, the JavaFX Pane class does not actually provide any layout algorithm. The Pane class simply displays the components it contains at the locations the components themselves want to be located. In other words, the Pane class uses the `layoutX` and `layoutY` specified by its child components to determine where to display them.

JavaFX Pane 类 —— `javafx.scene.layout.Pane` 是 [JavaFX Region](http://tutorials.jenkov.com/javafx/region.html) 类的子类，因此它继承了所有 Region 类功能。这包括边框、填充、背景设置等功能。

The JavaFX Pane class, `javafx.scene.layout.Pane`, is a subclass of the [JavaFX Region](http://tutorials.jenkov.com/javafx/region.html) class, so it inherits all of the Region class functionality. That includes functionality like borders, padding, background settings etc.

## 创建一个 `Pane`

您只需通过其标准的空参构造器即可创建 JavaFX 窗格。下面是创建 JavaFX 窗格实例的示例：

You create a JavaFX Pane simply via its standard no-arg constructor. Here is an example of creating a JavaFX Pane instance:

```java
Pane pane = new Pane();
```

## 将组件添加到 `Pane`

您可以通过 `getChildren()` 方法获取其子节点列表，然后将项目添加到该列表中以添加项目到 JavaFX 窗格。以下是将 [Label（标签）](../basic-control/label.md)添加到 JavaFX 窗格的示例：

You add items to JavaFX Pane by obtaining its list of children via `getChildren()`, and then add the items to that list. Here is an example of adding a [Label](../basic-control/label.md) to a JavaFX Pane:

```java
Pane  pane  = new Pane();

pane.getChildren().add(new Label("Hello Pane"));
```

如果多次重复最后一行，则会将多个 Label 实例添加到窗格中。请记住，除非您更改添加标签的 layoutX 和 / 或 layoutY 属性，否则所有 Label 实例都将显示在相同的 X 和 Y 坐标位置 —— 意味着彼此重叠。

If you repeat the last line multiple times, you will add multiple Label instances to the Pane. Just keep in mind, that unless you change the layoutX and / or layoutY properties of the added Labels, all the Label instances will be displayed in the same X and Y position - meaning on top of each other.

## 将 `Pane` 添加到场景图中

这是将 JavaFX 窗格添加到 JavaFX 场景图的示例 —— 通过将窗格设置为 [Scene（场景）](../core/scene.md#在-stage-上设置-scene)的根节点：

Here is an example of adding a JavaFX Pane to the JavaFX scene graph - by setting the Pane as the root node of a [Scene](../core/scene.md#在-stage-上设置-scene):

```java{16}
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class PaneExample extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) {
        Pane pane = new Pane();

        pane.getChildren().add(new Label("Hello Pane"));

        Scene scene = new Scene(pane);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```
