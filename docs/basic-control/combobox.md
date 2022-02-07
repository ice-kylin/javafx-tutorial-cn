# ComboBox

The JavaFX ComboBox control enables users to choose an option from a predefined list of choices, or type in another value if none of the predefined choices matches what the user want to select. The JavaFX ComboBox control is represented by the class `javafx.scene.control.ComboBox` . This JavaFX ComboBox tutorial will explain how to use the `ComboBox` class.



## Creating a ComboBox

You create a `ComboBox` simply by creating a new instance of the `ComboBox` class. Here is a JavaFX `ComboBox` instantiation example:

```
ComboBox comboBox = new ComboBox();
```



## Adding Choices to a ComboBox

You can add choices to a `ComboBox` by obtaining its item collection and add items to it. Here is an example that adds choices to a JavaFX `ComboBox` :

```
comboBox.getItems().add("Choice 1");
comboBox.getItems().add("Choice 2");
comboBox.getItems().add("Choice 3");
```



## Adding a ComboBox to the Scene Graph

To make a `ComboBox` visible you must add it to the scene graph. This means that you must add the `ComboBox` to a `Scene` object or to some layout component which is then attached to the `Scene` object.

Here is an example showing how to add a JavaFX `ComboBox` to the scene graph:

```
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class ComboBoxExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("ComboBox Experiment 1");

        ComboBox comboBox = new ComboBox();

        comboBox.getItems().add("Choice 1");
        comboBox.getItems().add("Choice 2");
        comboBox.getItems().add("Choice 3");


        HBox hbox = new HBox(comboBox);

        Scene scene = new Scene(hbox, 200, 120);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

The application resulting from running this example would look similar to this:

![A JavaFX ComboBox displayed via the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-combobox-1.png)

## Making the ComboBox Editable

A `ComboBox` is not editable by default. That means, that by default the user cannot enter anything themselves, but only choose from the predefined list of options. To make a `ComboBox` editable you must call the `setEditable()` method of the `ComboBox`. Here is an example making a JavaFX `ComboBox` editable:

```
comboBox.setEditable(true);
```

Once the `ComboBox` is editable the user can type in values into the `ComboBox`. The entered value is also read via the `getValue()` method as explained earlier. The following screenthot shows a JavaFX `ComboBox` which is editable, and with a custom value entered:

![A JavaFX ComboBox with a custom value entered.](http://tutorials.jenkov.com/images/java-javafx/javafx-combobox-2.png)

## Reading the Selected Value

You can read the selected value of a `ComboBox` via its `getValue()` method. If no choice is selected, the `getValue()` method returns `null`. Here is an example of calling `getValue()`:

```
String value = (String) comboBox.getValue();
```



## Listening for Selection

It is possible to listen for selection changes in a JavaFX ComboBox by setting an action listener on the ComboBox via its `setOnAction()` method. Here is an example of setting an action listener on a ComboBox which reads what value was selected in the ComboBox:

```
ComboBox comboBox = new ComboBox();

comboBox.getItems().add("Choice 1");
comboBox.getItems().add("Choice 2");
comboBox.getItems().add("Choice 3");

comboBox.setOnAction((event) -> {
    int selectedIndex = comboBox.getSelectionModel().getSelectedIndex();
    Object selectedItem = comboBox.getSelectionModel().getSelectedItem();

    System.out.println("Selection made: [" + selectedIndex + "] " + selectedItem);
    System.out.println("   ComboBox.getValue(): " + comboBox.getValue());
});
```