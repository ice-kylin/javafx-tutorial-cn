# ChoiceBox（选择框）

JavaFX ChoiceBox 控件使用户能够从预定义的选项列表中选择一个选项。JavaFX ChoiceBox 控件由 `javafx.scene.control.ChoiceBox` 类表示。这个 JavaFX ChoiceBox 教程将解释如何使用 `ChoiceBox` 类。

The JavaFX ChoiceBox control enables users to choose an option from a predefined list of choices. The JavaFX ChoiceBox control is represented by the class `javafx.scene.control.ChoiceBox` . This JavaFX ChoiceBox tutorial will explain how to use the `ChoiceBox` class.

## Creating a ChoiceBox

You create a `ChoiceBox` simply by creating a new instance of the `ChoiceBox` class. Here is a JavaFX `ChoiceBox` instantiation example:

```
ChoiceBox choiceBox = new ChoiceBox();
```

## Adding Choices to a ChoiceBox

You can add choices to a `ChoiceBox` by obtaining its item collection and add items to it. Here is an example that adds choices to a JavaFX `ChoiceBox` :

```
choiceBox.getItems().add("Choice 1");
choiceBox.getItems().add("Choice 2");
choiceBox.getItems().add("Choice 3");
```

## Adding a ChoiceBox to the Scene Graph

To make a `ChoiceBox` visible you must add it to the scene graph. This means that you must add the `ChoiceBox` to a `Scene` object or to some layout component which is then attached to the `Scene` object.

Here is an example showing how to add a JavaFX `ChoiceBox` to the scene graph:

```
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ChoiceBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class ChoiceBoxExperiments extends Application  {

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ChoiceBox Experiment 1");

        ChoiceBox choiceBox = new ChoiceBox();

        choiceBox.getItems().add("Choice 1");
        choiceBox.getItems().add("Choice 2");
        choiceBox.getItems().add("Choice 3");

        HBox hbox = new HBox(choiceBox);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

The application resulting from running this example would look similar to this:

![A JavaFX ChoiceBox displayed via the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-choicebox-1.png)

## Reading the Selected Value

You can read the selected value of a `ChoiceBox` via its `getValue()` method. If no choice is selected, the `getValue()` method returns `null`. Here is an example of calling `getValue()`:

```
String value = (String) choiceBox.getValue();
```

## Listening for Selection

It is possible to listen for selection changes in a JavaFX ChoiceBox by setting an action listener on the ChoiceBox via its `setOnAction()` method. Here is an example of setting an action listener on a ChoiceBox which reads what value was selected in the ChoiceBox:

```
ChoiceBox choiceBox = new ChoiceBox();

choiceBox.getItems().add("Choice 1");
choiceBox.getItems().add("Choice 2");
choiceBox.getItems().add("Choice 3");

choiceBox.setOnAction((event) -> {
    int selectedIndex = choiceBox.getSelectionModel().getSelectedIndex();
    Object selectedItem = choiceBox.getSelectionModel().getSelectedItem();

    System.out.println("Selection made: [" + selectedIndex + "] " + selectedItem);
    System.out.println("   ChoiceBox.getValue(): " + choiceBox.getValue());
});
```
