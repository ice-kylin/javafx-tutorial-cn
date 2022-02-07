# RadioButton（单选按钮）

JavaFX RadioButton 是一个要么选择、要么不选择的按钮。`RadioButton` 与 [ToggleButton](http://tutorials.jenkov.com/javafx/togglebutton.html) 非常相似，但区别在于一旦选择 `RadioButton` 就不能“取消选择”。 如果 `RadioButton` 是 `ToggleGroup` 的一部分，那么一旦第一次选择了 `RadioButton`，则必须在 `ToggleGroup` 中选择一个 `RadioButton`。

A JavaFX RadioButton is a button that can be selected or not selected. The `RadioButton` is very similar to the [ToggleButton](http://tutorials.jenkov.com/javafx/togglebutton.html), but with the difference that a `RadioButton` cannot be "unselected" once selected. If `RadioButton`s are part of a `ToggleGroup` then once a `RadioButton` has been selected for the first time, there must be one `RadioButton` selected in the `ToggleGroup`.

JavaFX RadioButton 由类 `javafx.scene.control.RadioButton` 表示。 `RadioButton` 类是`ToggleButton` 类的子类。

The JavaFX RadioButton is represented by the class `javafx.scene.control.RadioButton`. The `RadioButton` class is a subclass of the `ToggleButton` class.

## Creating a RadioButton

You create a JavaFX `RadioButton` using its constructor. Here is a JavaFX `RadioButton` instantiation example:

```java
RadioButton radioButton1 = new RadioButton("Left");
```

The String passed as parameter to the `RadioButton` constructor is displayed next to the `RadioButton`.

## Adding a RadioButton to the Scene Graph

To make a `RadioButton` visible you must add it to the scene graph of your JavaFX application. This means adding the `RadioButton` to a `Scene`, or as child of a layout which is attached to a `Scene` object.

Here is an example that attaches a JavaFX `RadioButton` to the scene graph:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.RadioButton;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class RadioButtonExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        RadioButton radioButton1 = new RadioButton("Left");

        HBox hbox = new HBox(radioButton1);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

The application resulting from running this example looks like this:

![A JavaFX RadioButton displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-radiobutton-1.png)

## Reading Selected State

The `RadioButton` class has a method named `isSelected` which lets you determine if the `RadioButton` is selected or not. The `isSelected()` method returns a `boolean` with the value `true` if the `RadioButton` is selected, and `false` if not. Here is an example:

```java
boolean isSelected = radioButton1.isSelected();
```

## ToggleGroup

You can group JavaFX `RadioButton` instances into a `ToggleGroup`. A `ToggleGroup` allows at most one `RadioButton` to be selected at any time.

Here is a JavaFX `ToggleGroup` example:

```java
package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class RadioButtonExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("HBox Experiment 1");

        RadioButton radioButton1 = new RadioButton("Left");
        RadioButton radioButton2 = new RadioButton("Right");
        RadioButton radioButton3 = new RadioButton("Up");
        RadioButton radioButton4 = new RadioButton("Down");

        ToggleGroup radioGroup = new ToggleGroup();

        radioButton1.setToggleGroup(radioGroup);
        radioButton2.setToggleGroup(radioGroup);
        radioButton3.setToggleGroup(radioGroup);
        radioButton4.setToggleGroup(radioGroup);

        HBox hbox = new HBox(radioButton1, radioButton2, radioButton3, radioButton4);

        Scene scene = new Scene(hbox, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }

}
```

The application resulting from running this example looks like this:

![Four JavaFX RadioButton instances in a ToggleGroup displayed in the scene graph](http://tutorials.jenkov.com/images/java-javafx/javafx-radiobutton-2.png)

## Reading Selected State of a ToggleGroup

You can read which `RadioButton` of a `ToggleGroup` is selected using the `getSelectedToggle()` method, like this:

```java
RadioButton selectedRadioButton =
        (RadioButton) toggleGroup.getSelectedToggle();
```

If no `RadioButton` is selected the `getSelectedToggle()` method returns `null`.
