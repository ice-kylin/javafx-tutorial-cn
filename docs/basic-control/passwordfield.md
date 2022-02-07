# PasswordField

A JavaFX PasswordField control enables users of a JavaFX application to enter password which can then be read by the application. The `PasswordField` control does not show the texted entered into it. Instead it shows a circle for each character entered. The JavaFX PasswordField control is represented by the class `javafx.scene.control.PasswordField` .



## Creating a PasswordField

You create a PasswordField control by creating an instance of the `PasswordField` class. Here is a JavaFX `PasswordField` instantiation example:

```
PasswordField passwordField = new PasswordField();
```



## Adding a PasswordField to the Scene Graph

For a JavaFX `PasswordField` to be visible the `PasswordField` object must be added to the scene graph. This means adding it to a `Scene` object, or as child of a layout which is attached to a `Scene` object.

Here is an example that attaches a JavaFX `PasswordField` to the scene graph:

```
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.PasswordField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class PasswordFieldExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("PasswordField Experiment 1");

        PasswordField passwordField = new PasswordField();

        HBox hbox = new HBox(passwordField);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```

The result of running the above JavaFX `PasswordField` example is an application that looks like this:

![A JavaFX PasswordField component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-passwordfield-1.png)

## Getting the Text of a PasswordField

You can get the text entered into a `PasswordField` using its `getText()` method which returns a `String`. Here is a full example that shows a `PasswordField` and a `Button` and which reads the text entered into the `PasswordField` when the button is clicked:

```
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class PasswordFieldExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("PasswordField Experiment 1");

        PasswordField passwordField = new PasswordField();

        Button button = new Button("Click to get password");

        button.setOnAction(action -> {
            System.out.println(passwordField.getText());
        });

        HBox hbox = new HBox(passwordField, button);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
```