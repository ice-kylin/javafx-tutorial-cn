# 网格窗格（GridPane）

::: details 目录

[[toc]]

:::

_JavaFX 网格窗格_ 是一个布局组件，它在网格中布置其子组件。网格中单元格的大小取决于网格窗格中显示的组件，但有一些规则 —— 同一行中的所有单元格将具有相同的高度，并且同一列中的所有单元格将具有相同的宽度；不同的行可以有不同的高度，不同的列可以有不同的宽度。

A _JavaFX GridPane_ is a layout component which lays out its child components in a grid. The size of the cells in the grid depends on the components displayed in the GridPane, but there are some rules. All cells in the same row will have the same height, and all cells in the same column will have the same width. Different rows can have different heights and different columns can have different widths.

JavaFX GridPane 与 [TilePane](http://tutorials.jenkov.com/javafx/tilepane.html) 的不同之处在于 `GridPane` 允许不同大小的单元格，而 `TilePane` 使所有单元格大小相同。

The JavaFX GridPane is different from the [TilePane](http://tutorials.jenkov.com/javafx/tilepane.html) in that a `GridPane` allows different size of cells, whereas a `TilePane` makes all tiles the same size.

`GridPane` 中的行数和列数取决于添加到其中的组件。当您将组件添加到 `GridPane` 时，您将会指定组件应该插入到哪个单元格（行、列）中，以及组件应该跨越多少行和多少列。

The number of rows and columns in a `GridPane` depends on the components added to it. When you add a component to a `GridPane` you tell in what cell (row, column) the component should be inserted, and how many rows and columns the component should span.

JavaFX 网格窗格布局组件由 `javafx.scene.layout.GridPane` 类表示。

The JavaFX GridPane layout component is represented by the class `javafx.scene.layout.GridPane`.

## 创建一个 `GridPane`

您可以通过其构造器创建一个 JavaFX `GridPane`。这是一个 JavaFX `GridPane` 实例化的示例：

You create a JavaFX `GridPane` via its constructor. Here is a JavaFX `GridPane` instantiation example:

```java
GridPane gridPane = new GridPane();
```

## 将子节点添加到 GridPane

您可以通过多种方式将子节点添加到 JavaFX `GridPane`。最简单的方法是使用 `GridPane` 的 `add()` 方法。这是一个将 6 个按钮添加到 `GridPane` 的示例：

You can add children to a JavaFX `GridPane` in several ways. The easiest way is to use the `add()` of the `GridPane`. Here is an example of adding 6 buttons to a `GridPane`:

```java
Button button1 = new Button("Button 1");
Button button2 = new Button("Button 2");
Button button3 = new Button("Button 3");
Button button4 = new Button("Button 4");
Button button5 = new Button("Button 5");
Button button6 = new Button("Button 6");

GridPane gridPane = new GridPane();

gridPane.add(button1, 0, 0, 1, 1);
gridPane.add(button2, 1, 0, 1, 1);
gridPane.add(button3, 2, 0, 1, 1);
gridPane.add(button4, 0, 1, 1, 1);
gridPane.add(button5, 1, 1, 1, 1);
gridPane.add(button6, 2, 1, 1, 1);
```

`add()` 方法的第一个参数是要添加到 `GridPane` 的组件（节点）。

The first parameter of the `add()` method is the component (node) to add to the `GridPane`.

`add()` 方法的第二个和第三个参数是应该显示组件的单元格的列索引和行索引。 列和行索引从 0 开始。

The second and third parameter of the `add()` method is the column index and row index of the cell in which the component should be displayed. Column and row indexes start from 0.

`add()`方法的第四个和第五个参数是组件的列跨度和行跨度，意思是组件应该扩展到多少行和多少列。列跨度和行跨度的工作方式类似于 HTML 表格中的 `colspan` 和 `rowspan`。

The fourth and fifth parameter of the `add()` method are the column span and row span of the component, meaning how many rows and columns the component should extend to. Column span and row span works similarly to `colspan` and `rowspan` in an HTML table.

## 向场景图中添加 `GridPane`

要使 JavaFX `GridPane` 可见，您必须将其添加到 JavaFX 场景图中。为此，您必须将 `GridPane` 实例添加到 `Scene` 对象，或将 `GridPane` 添加到一个添加到 `Scene` 对象的布局组件中。

To make a JavaFX `GridPane` visible you must add it to the JavaFX scene graph. To do so you must add the `GridPane` instance to a `Scene` object, or add the `GridPane` to a layout component which is added to a `Scene` object.

这是将 JavaFX `GridPane` 添加到场景图中的示例：

Here is an example of adding a JavaFX `GridPane` to the scene graph:

```java{32}
package com.jenkov.javafx.layouts;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;


public class GridPaneExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("GridPane Experiment");

        Button button1 = new Button("Button 1");
        Button button2 = new Button("Button 2");
        Button button3 = new Button("Button 3");
        Button button4 = new Button("Button 4");
        Button button5 = new Button("Button 5");
        Button button6 = new Button("Button 6");

        GridPane gridPane = new GridPane();

        gridPane.add(button1, 0, 0, 1, 1);
        gridPane.add(button2, 1, 0, 1, 1);
        gridPane.add(button3, 2, 0, 1, 1);
        gridPane.add(button4, 0, 1, 1, 1);
        gridPane.add(button5, 1, 1, 1, 1);
        gridPane.add(button6, 2, 1, 1, 1);

        Scene scene = new Scene(gridPane, 240, 100);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

此代码生成的应用程序类似于以下屏幕截图：

The application resulting from this application looks like the following screen shots:

![A JavaFX GridPane added to the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-gridpane-1.png)

## 跨越多行和多列

要了解如何使组件跨越多个列和行，请查看修改之后的添加到 `GridPane` 的 6 个按钮的示例：

To see how to make a component span multiple columns and rows, look at this modification of the 6 buttons added to the `GridPane`:

```java{1}
gridPane.add(button1, 0, 0, 2, 2);
gridPane.add(button2, 2, 0, 1, 1);
gridPane.add(button3, 2, 1, 1, 1);
gridPane.add(button4, 0, 2, 1, 1);
gridPane.add(button5, 1, 2, 1, 1);
gridPane.add(button6, 2, 2, 1, 1);
```

注意添加的第一个按钮的列跨度和行跨度是 2。注意其余按钮是如何添加到左上角的 2 x 2 列之外的。这些设置产生的布局如下所示：

Notice how the first button added is given a column span and row span of 2. Notice how the rest of the buttons are added outside of the top left 2 x 2 columns. The layout resulting from these settings looks like this:

![A JavaFX GridPane with a component with column span of 2 and row span of 2.](http://tutorials.jenkov.com/images/java-javafx/javafx-gridpane-3.png)

## 水平和垂直间距

您可以使用其 `setHGap()` 和 `setVGap()` 方法设置 JavaFX `GridPane` 中显示的组件之间的水平和垂直间距。下面是一个示例，展示了如何在 `GridPane` 中设置组件之间的水平和垂直间隙：

You can set the horizontal and vertical spacing between the components shown inside a JavaFX `GridPane` using its `setHGap()` and `setVGap()` methods. Here is an example that shows how to set the horizontal and vertical gap between components in a `GridPane`:

```java
gridPane.setHgap(10);
gridPane.setVgap(10);
```

当添加到前面的示例中时，生成的应用程序将如下所示：

When added to the example earlier, the resulting application would look like this:

![A JavaFX GridPane with horizontal and vertical gaps between components.](http://tutorials.jenkov.com/images/java-javafx/javafx-gridpane-2.png)

注意按钮之间的水平和垂直间隙。如果在 `GridPane` 上没有设置间隙，则按钮将彼此相邻放置。

Notice the horizontal and vertical gaps between the buttons. If there were no gaps set on the `GridPane` the buttons would have been positioned next to each other.
