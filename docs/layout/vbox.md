# VBox

The JavaFX VBox component is a layout component which positions all its child nodes (components) in a vertical column - on top of each other. The JavaFX VBox component is represented by the class `javafx.scene.layout.VBox` . In this JavaFX VBox tutorial I will take a deeper look at the various options the VBox component has for the layout of controls.



## Create a VBox

To use the JavaFX VBox component you must first create an instance of the VBox class. You create a `VBox` instance using its constructor like this:

```
VBox vbox = new VBox();
```

`VBox` also has a constructor which takes a variable length list of components it should layout. Here is an example of how to do that:

```
Button button1 = new Button("Button Number 1");
Button button2 = new Button("Button Number 2");

VBox vbox = new VBox(button1, button2);
```

This `VBox` example will layout the two [Button](http://tutorials.jenkov.com/javafx/button.html) instances one on top of the other in a vertical column.



## Adding a VBox to the Scene Graph

For a `VBox` instance to be visible it must be added to the scene graph. This means adding it to a `Scene` object, or as child of another layout component which is attached to a `Scene` object.

Here is an example that attaches a JavaFX `VBox` with the two `Button` instances to the scene graph:

```
package com.jenkov.javafx.layouts;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class VBoxExperiments extends Application{

  @Override
  public void start(Stage primaryStage) throws Exception { 
    primaryStage.setTitle("VBox Experiment 1");

    Button button1 = new Button("Button Number 1");
    Button button2 = new Button("Button Number 2");

    VBox vbox = new VBox(button1, button2);

    Scene scene = new Scene(vbox, 200, 100);
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    Application.launch(args);
  }
}
```

The result of running the above JavaFX `VBox` example is an application that looks like this:

![A JavaFX VBox component displayed in the scene graph.](http://tutorials.jenkov.com/images/java-javafx/javafx-vbox-1.png)

## Child Node Spacing

In the earlier example the `VBox` positioned the nodes (button controls) right under the other. You can make the `VBox` insert some space between its nested controls by providing the space in the `VBox` constructor. Here is an example of setting the space between nested controls in an `VBox`:

```
VBox vbox = new VBox(20, button1, button2);
```

This example sets the spacing between the controls in the `VBox` layout component to 20.

You can also set the space between the nested controls using the `setSpacing()` method, like this:

```
vbox.setSpacing(50);
```

This example will set the spacing between nested controls to 50.



## Child Node Alignment

Since the JavaFX VBox is a container component, meaning it contains other JavaFX components, you can specify how the VBox is to align the components it contains. You do so via the VBox `setAlignment()` method. Here is an example of setting the alignment of child nodes for a JavaFX VBox:

```
vbox.setAlignment(Pos.BASELINE_CENTER);
```

This example will make the VBox position its child nodes along the baseline (vertically) of the vertical line, and from the center of the line and out (horizontally).

The JavaFX VBox control supports the following alignment options:

| Parameter           | Vertically | Horizontally |
| :------------------ | :--------- | :----------- |
| Pos.BASELINE_LEFT   | Baseline   | Left         |
| Pos.BASELINE_CENTER | Baseline   | Center       |
| Pos.BASELINE_RIGHT  | Baseline   | Right        |
| Pos.BOTTOM_LEFT     | Bottom     | Left         |
| Pos.BOTTOM_CENTER   | Bottom     | Center       |
| Pos.BOTTOM_RIGHT    | Bottom     | Right        |
| Pos.CENTER_LEFT     | Center     | Left         |
| Pos.CENTER          | Center     | Center       |
| Pos.CENTER_RIGHT    | Center     | Right        |
| Pos.TOP_LEFT        | Top        | Left         |
| Pos.TOP_CENTER      | Top        | Center       |
| Pos.TOP_RIGHT       | Top        | Right        |



### Center Horizontally

You can use the child node alignment features to horizontally center the child nodes of a VBox. Here is an example showing how to center the child nodes of a VBox horizontally:

```
vbox.setAlignment(Pos.BASELINE_CENTER);
```



## Child Node Margin

You can set the margin for child nodes of a JavaFX VBox using the static `setMargin()` method. Here is an example of setting the margin around a [JavaFX Button](http://tutorials.jenkov.com/javafx/button.html) using the `setMargin()` method:

```
Button button = new Button("Button 1");

VBox vbox = new VBox(button);

VBox.setMargin(button, new Insets(10, 10, 10, 10));
```

This example sets the margin around the Button inside the VBox to 10 on each side.



## Child Node vgrow

You can specify whether a child node of a VBox should grow vertically to fill any available space available inside the VBox. You do so via the VBox `setVgrow()` static method. You have to specify which child node the rule is set for. You do so by passing the child node as parameter to `setVgrow()`. You also have to pass the vertical expansion policy as parameter to `setVgrow()`. Here is an example of telling that a child Button to expand vertically if space is available inside the VBox:

```
Button button = new Button("Button 1");

VBox vbox = new VBox(button);

VBox.setVgrow(button, Priority.ALWAYS);
```

The Priority class contains the following constants you can use to set the expansion policy:

1. Policy.ALWAYS
2. Policy.SOMETIMES
3. Policy.NEVER

Please keep in mind that the VBox will only have extra vertical space available if the child nodes do not have the same preferred height, or if you explicitly set a preferred height on the VBox that is larger than the preferred height of its child nodes.



## fillWidth

The JavaFX VBox `fillWidth` property can be used to tell the VBox control whether it should expand the width of its children to fill out the whole width of the VBox, or keep its children at their preferred widths.

The `fillWidth` property only affects child components which widths can actually change. For instance, a Button does not change its width by default. It's max width is set to its preferred width. However, you can override that by setting the max width of the Button, or any other component you want to nest inside the VBox, to a value different than its preferred value.

Here is an example showing how the `fillWidth` property works:

```
Button button = new Button("Button 1");
button.setMaxWidth(99999D); //or Double.MAX_VALUE;

VBox vbox = new VBox(button);

vbox.setFillWidth(true);
```



## VBox CSS

Like many other JavaFX controls the VBox component can be styled via CSS. You set the CSS styles of the JavaFX VBox component via its `setStyle()` method. Styling JavaFX controls via CSS is covered in more detail in the [JavaFX CSS Styling tutorial](http://tutorials.jenkov.com/javafx/css-styling.html), but I will briefly explain how to style a JavaFX VBox here. Here is an example of setting the CSS styles of a JavaFX VBox component:

```
vbox.setStyle("-fx-padding: 16;");
```

The VBox component supports the following CSS properties:

| CSS Property      | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| -fx-padding       | Sets the padding between the edge of the VBox and the edge of the outermost child nodes. |
| -fx-border-style  | Sets the border style of the VBox, in case you want a visible border around it. |
| -fx-border-width  | Sets the border width.                                       |
| -fx-border-insets | Sets the border insets.                                      |
| -fx-border-radius | Sets the border radius (of corners).                         |
| -fx-border-color  | Sets the border color.                                       |



## VBox FXML

You can define a JavaFX VBox from inside a [JavaFX FXML](http://tutorials.jenkov.com/javafx/fxml.html) document. Here is an example of how a VBox FXML definition looks:

```
<?import javafx.scene.layout.GridPane?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.VBox?>
<GridPane xmlns:fx="http://javafx.com/fxml"
          fx:controller="sample.Controller"
          alignment="center" hgap="10" vgap="10">

    <VBox>
        <Label>Text inside VBox</Label>
    </VBox>

</GridPane>
```

Here are some of the most commonly used VBox XML element attributes:

- border
- alignment
- fillWidth