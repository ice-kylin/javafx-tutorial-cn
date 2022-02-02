# Properties（属性）

::: details 目录

[[toc]]

:::

JavaFX _属性（Properties）_ 是 JavaFX 控件的一种特殊类型的成员变量。JavaFX 属性通常用于表示控件的一些属性，例如 X 和 Y 位置、宽度和高度、文本、子节点和 JavaFX 控件的其它核心属性。您可以将更改侦听器附加到 JavaFX 属性，以便其它组件可以在属性值更改时收到通知，并且您可以将属性相互绑定，以便当一个属性值更改时，另一个也会更改。在这个 JavaFX 属性教程中，我将解释 JavaFX 属性是如何工作的，以及如何使用它们。

A JavaFX _Property_ is a special kind member variable of JavaFX controls. JavaFX properties are typically used to contain control properties such as X and Y position, width and height, text, children and other central properties of JavaFX controls. You can attach change listeners to JavaFX properties so other components can get notified when the value of the property changes, and you can bind properties to each other so when one property value changes, so does the other. In this JavaFX property tutorial I will explain how JavaFX properties work, and how to use them.

## Property 示例

这是一个 JavaFX GUI 示例，展示了如何访问 [窗格（Pane）](http://tutorials.jenkov.com/javafx/pane.html) 的 `widthProperty` 和 `prefWidthProperty` 属性，以及向这两个属性附加更改侦听器。请注意，其中一个更改侦听器的实现方法为使用 Java 匿名（实现 / 子）类，另一个是使用 Java Lambda 表达式。这只是为了向您展示实现将事件侦听器附加到 JavaFX 属性的两种不同方法。

Here is a JavaFX GUI example showing how to access the `widthProperty` and `prefWidthProperty` of a [Pane](http://tutorials.jenkov.com/javafx/pane.html), as well as adding a change listener to both. Notice how one of the change listeners is implemented as an anonymous Java class, and the other as a Java Lambda Expression. This is just to show you two different ways of achieving the same goal of attaching an event listener to a JavaFX property.

```java{21-30,34-40}
import javafx.application.Application;
import javafx.beans.property.DoubleProperty;
import javafx.beans.property.ReadOnlyDoubleProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class PropertyExample extends Application {

  public static void main(String[] args) {
    launch(args);
  }

  public void start(Stage primaryStage) {

    Pane pane = new Pane();

    ReadOnlyDoubleProperty widthProperty = pane.widthProperty();
    widthProperty.addListener( new ChangeListener<Number> (){
      @Override
      public void changed(
        ObservableValue<? extends Number> observableValue,
        Number oldVal, Number newVal) {

          System.out.println("widthProperty changed from "
            + oldVal.doubleValue() + " to " + newVal.doubleValue());
      }
    }); // 使用 Java 匿名实现类的方式附加更改侦听器


    DoubleProperty prefWidthProperty = pane.prefWidthProperty();
    prefWidthProperty.addListener(
      (ObservableValue<? extends Number> prop,
        Number oldVal, Number newVal) -> {

        System.out.println("prefWidthProperty changed from "
          + oldVal.doubleValue() + " to " + newVal.doubleValue());
    }); // 使用 Java Lambda 表达式的方式附加更改侦听器

    prefWidthProperty.set(123);

    Scene scene = new Scene(pane, 1024, 800, true);
    primaryStage.setScene(scene);
    primaryStage.setTitle("2D Example");

    primaryStage.show();
  }
}
```

当代码 `prefWidthProperty.set(123);` 执行时，将调用 `prefWidthProperty` 属性的更改侦听器。此外，每次调整 UI 大小时，窗格大小也会改变，所以会调用 `widthProperty` 属性的更改侦听器。

When the instruction `prefWidthProperty.set(123);` is called, the prefWidthProperty change listener will get called. Additionally, every time the UI is resized then the Pane is resized too, and the widthProperty change listener will get called.
