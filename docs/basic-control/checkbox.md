# JavaFX CheckBox

A JavaFX CheckBox is a button which can be in three different states: Selected, not selected and unknown (indeterminate). The JavaFX CheckBox control is represented by the class `javafx.scene.control.CheckBox`.



## Creating a CheckBox

You create a JavaFX CheckBox control via the `CheckBox` constructor. Here is a JavaFX `CheckBox` instantiation example:

```
CheckBox checkBox1 = new CheckBox("Green");
```

The String passed to the `CheckBox` constructor is displayed next to the `CheckBox` control.



## Adding a CheckBox to the Scene Graph

To make a JavaFX `CheckBox` control visible you must add it to the scene graph of your JavaFX application. That means adding the `CheckBox` control to a `Scene` object, or to some layout component which is itself added to a `Scene` object.

Here is an example showing how to add a `CheckBox` to the scene graph:

```
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.CheckBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class CheckBoxExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("CheckBox Experiment 1");

        CheckBox checkBox1 = new CheckBox("Green");

        HBox hbox = new HBox(checkBox1);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

The application resulting from running this code looks like this:

![A JavaFX CheckBox displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-checkbox-1.png)

## Reading Selected State

You can read the selected state of a `CheckBox` via its method `isSelected()`. Here is an example of how calling `isSelected()` looks:

```
boolean isSelected = checkBox1.isSelected();
```



## Allowing Indeterminate State

As mentioned earlier a JavaFX `CheckBox` can be in an *indeterminate state* which means that is is neither selected, nor not selected. The user simply has not interacted with the `CheckBox` yet.

By default a `CheckBox` is not allowed to be in the indeterminate state. You can set if a `CheckBox` is allowed to be in an indeterminate state using the method `setAllowIndeterminate()`. Here is an example of allowing the indeterminate state for a `CheckBox`:

```
checkBox1.setAllowIndeterminate(true);
```



## Reading Indeterminate State

You can read if a `CheckBox` is in the indeterminate state via its `isIndeterminate()` method. Here is an example of checking if a `CheckBox` is in the indeterminate state:

```
boolean isIndeterminate = checkBox1.isIndeterminate();
```

Note, that if a `CheckBox` is not in the indeterminate state, it is either selected or not selected, which can be seen via its `isSelected()` method shown earlier.