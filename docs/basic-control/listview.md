# ListView（列表视图）

JavaFX ListView 控件使用户能够从预定义的选项列表中选择一个或多个选项。JavaFX ListView 控件由 `javafx.scene.control.ListView` 类表示。这个 JavaFX ListView 教程将解释如何使用 `ListView` 类。

The JavaFX ListView control enables users to choose one or more options from a predefined list of choices. The JavaFX ListView control is represented by the class `javafx.scene.control.ListView` . This JavaFX ListView tutorial will explain how to use the `ListView` class.

## 创建 `ListView`

您只需通过创建 `ListView` 类的新实例来创建 `ListView`。这是一个 JavaFX `ListView` 实例化的示例：

You create a `ListView` simply by creating a new instance of the `ListView` class. Here is a JavaFX `ListView` instantiation example:

```java
ListView listView = new ListView();
```

## 将项目添加到 `ListView`

您可以通过获取其项目集合并向其添加项目来将项目（选项）添加到 `ListView`。这是一个将项目添加到 JavaFX `ListView` 的示例：

You can add items (options) to a `ListView` by obtaining its item collection and add items to it. Here is an example that adds items to a JavaFX `ListView`:

```java
listView.getItems().add("Item 1");
listView.getItems().add("Item 2");
listView.getItems().add("Item 3");
```

## 将 `ListView` 添加到场景图中

要使 `ListView` 可见，您必须将其添加到场景图中。这意味着您必须将 `ListView` 添加到 `Scene` 对象或某些布局组件，然后将其附加到 `Scene` 对象。

To make a `ListView` visible you must add it to the scene graph. This means that you must add the `ListView` to a `Scene` object or to some layout component which is then attached to the `Scene` object.

下面是一个示例，展示了如何将 JavaFX `ListView` 添加到场景图中：

Here is an example showing how to add a JavaFX `ListView` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ListView;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class ListViewExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ListView Experiment 1");

        ListView listView = new ListView();

        listView.getItems().add("Item 1");
        listView.getItems().add("Item 2");
        listView.getItems().add("Item 3");

        HBox hbox = new HBox(listView);

        Scene scene = new Scene(hbox, 300, 120);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

运行此示例生成的应用程序将类似于此屏幕截图：

The application resulting from running this example would look similar to this screenshot:

![A JavaFX ListView added.](http://tutorials.jenkov.com/images/java-javafx/javafx-listview-1.png)

注意 `ListView` 默认是如何显示多个选项的。您可以为 `ListView` 设置高度和宽度，但不能明确设置应该可见的项目数。高度根据显示的每个项目的高度确定。

Notice how the `ListView` shows multiple options by default. You can set a height and width for a `ListView`, but you cannot set explicitly how many items should be visible. The height determines that based on the height of each item displayed.

如果 `ListView` 中的项目超出其可见区域，则 `ListView` 将添加滚动条，以便用户可以在项目上上下滚动。

If there are more items in the `ListView` than can fit into its visiible area, the `ListView` will add scroll bars so the user can scroll up and down over the items.

## 读取选定的值

您可以通过其 `SelectionModel` 读取 `ListView` 的选定索引。下面是一个示例，展示了如何读取 JavaFX `ListView` 的选定索引：

You can read the selected indexes of a `ListView` via its `SelectionModel`. Here is an example showing how to read the selected indexes of a JavaFX `ListView`:

```java
ObservableList selectedIndices =
    listView.getSelectionModel().getSelectedIndices();
```

`OberservableList` 将包含 `Integer` 对象，表示所有 `ListView` 中所选项目的索引。

The `OberservableList` will contain `Integer` objects representing the indexes of the selected items in the `ListView`.

这是一个完整的 JavaFX 示例。它添加了一个按钮，单击该按钮会读取 `ListView` 的选定项：

Here is a full JavaFX example with a button added which reads the selected items of the `ListView` when clicked:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ListView;
import javafx.scene.control.SelectionMode;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class ListViewExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ListView Experiment 1");

        ListView listView = new ListView();

        listView.getItems().add("Item 1");
        listView.getItems().add("Item 2");
        listView.getItems().add("Item 3");


        Button button = new Button("Read Selected Value");

        button.setOnAction(event -> {
            ObservableList selectedIndices = listView.getSelectionModel().getSelectedIndices();

            for(Object o : selectedIndices){
                System.out.println("o = " + o + " (" + o.getClass() + ")");
            }
        });


        VBox vBox = new VBox(listView, button);

        Scene scene = new Scene(vBox, 300, 120);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

## 允许选择多个项目

要允许选择 `ListView` 中的多个项目，您需要在 `ListView` 选择模型上设置相应的选择模式。下面是在 JavaFX `ListView` 上设置选择模式的示例：

To allow multiple items in the `ListView` to be selected you need to set the corresponding selection mode on the `ListView` selection model. Here is an example of setting the selection mode on the JavaFX `ListView`:

```java
listView.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE);
```

在 `ListView` 选择模型上设置 `SelectionMode.MULTIPLE` 后，用户可以在选择第一个选定项目之后通过按住 `SHIFT` 或 `CTRL` 在 `ListView` 中选择多个其它项目。

Once you have set the `SelectionMode.MULTIPLE` on the `ListView` selection model, the user can select multiple items in the `ListView` by holding down `SHIFT` or `CTRL` when selecting additional items after the first selected item.

这是一个完整的 JavaFX 示例，展示了如何将 `ListView` 设置为多选模式。此外还添加了一个按钮，单击该按钮将向控制台输出 `ListView` 中所选项目的索引：

Here is a full JavaFX example that shows how to set a `ListView` into multiple selection mode, including a button which when clicked will write out the indices of the selected items in the `ListView`:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ListView;
import javafx.scene.control.SelectionMode;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class ListViewExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ListView Experiment 1");

        ListView listView = new ListView();

        listView.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE);

        listView.getItems().add("Item 1");
        listView.getItems().add("Item 2");
        listView.getItems().add("Item 3");


        Button button = new Button("Read Selected Value");

        button.setOnAction(event -> {
            ObservableList selectedIndices = listView.getSelectionModel().getSelectedIndices();

            for(Object o : selectedIndices){
                System.out.println("o = " + o + " (" + o.getClass() + ")");
            }
        });


        VBox vBox = new VBox(listView, button);

        Scene scene = new Scene(vBox, 300, 120);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```
