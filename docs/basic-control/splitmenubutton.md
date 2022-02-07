# SplitMenuButton（拆分菜单按钮）

JavaFX _SplitMenuButton_ 控件可以显示用户可以从中选择的菜单选项列表，以及在选择菜单选项时用户可以单击的按钮。JavaFX SplitMenuButton 可以显示或隐藏菜单项。当单击 SplitMenuButton 中的小箭头按钮时，通常会显示菜单项。JavaFX SplitMenuButton 控件由 `javafx.scene.control.SplitMenuButton` 类表示。这是 JavaFX SplitMenuButton 的屏幕截图：

The JavaFX _SplitMenuButton_ control can show a list of menu options which the user can choose from, as well as a button which the user can click on when a menu option has been chosen. The JavaFX SplitMenuButton can show or hide the menu items. The menu items are usually shown when a little arrow button is clicked in the SplitMenuButton. The JavaFX SplitMenuButton control is represented by the class `javafx.scene.control.SplitMenuButton`. Here is a screenshot of a JavaFX SplitMenuButton:

![A JavaFX SplitMenuButton.](http://tutorials.jenkov.com/images/java-javafx/javafx-splitmenubutton-1.png)

## 创建 `SplitMenuButton`

在您使用 JavaFX `SplitMenuButton` 之前，您必须创建它的一个实例。下面是创建 JavaFX `SplitMenuButton` 实例的示例：

Before you can use the JavaFX `SplitMenuButton` you must create an instance of it. Here is an example of creating a JavaFX `SplitMenuButton`:

```java
SplitMenuButton splitMenuButton = new SplitMenuButton();
```

## `SplitMenuButton` 文本

您可以通过其 `setText()` 方法设置 `SplitMenuButton` 的按钮文本。这是设置 JavaFX `SplitMenuButton` 的按钮文本的示例：

You can set the `SplitMenuButton`'s button text via its `setText()` method. Here is an example of setting the button text of a JavaFX `SplitMenuButton`:

```java
splitMenuButton.setText("Click here!");
```

## `SplitMenuButton` 字体

JavaFX SplitMenuButton 使您能够设置用于呈现 SplitMenuButton 文本的字体。您可以在 [Fonts（字体）](../other-concept/fonts.md)教程中阅读有关在 JavaFX 中创建字体的更多信息。 下面是在 JavaFX SplitMenuButton 上设置字体的示例：

The JavaFX SplitMenuButton enables you to set the font used to render the text of the SplitMenuButton. You can read more about creating fonts in JavaFX in [Fonts](../other-concept/fonts.md) tutorial. Here is an example of setting a font on a JavaFX SplitMenuButton:

```java
SplitMenuButton splitMenuButton = new SplitMenuButton();

Font font = Font.font("Courier New", FontWeight.BOLD, 36);
splitMenuButton.setFont(font);
```

## 设置 `SplitMenuButton` 菜单项

您可以通过 `getItems()` 返回的 `MenuItem` 集合设置菜单项以显示在 JavaFX `SplitMenuButton` 的菜单部分。每个菜单项都由一个 `MenuItem` 对象表示。下面是在 JavaFX `SplitMenuButton` 上设置三个菜单项的示例：

You can set the menu items to display in the menu part of a JavaFX `SplitMenuButton` via its `MenuItem` collection returned by `getItems()`. Each menu item is represented by a `MenuItem` object. Here is an example of setting three menu items on a JavaFX `SplitMenuButton`:

```java
MenuItem choice1 = new MenuItem("Choice 1");
MenuItem choice2 = new MenuItem("Choice 2");
MenuItem choice3 = new MenuItem("Choice 3");

button.getItems().addAll(choice1, choice2, choice3);
```

## 响应菜单项选择事件

在响应所选菜单项时，JavaFX `SplitMenuButton` 的工作方式与 [MenuButton（菜单按钮）](./menubutton.md#响应菜单项选择事件) 类似。要响应 JavaFX SplitMenuButton 中菜单项的选择，您必须在添加到 `SplitMenuButton` 的每个 `MenuItem` 上设置一个动作侦听器。 这是一个通过在其 `MenuItem` 实例上设置动作侦听器来响应 JavaFX `SplitMenuButton` 中的菜单项选择的示例：

The JavaFX `SplitMenuButton` works similarly to the [MenuButton](./menubutton.md#响应菜单项选择事件) when it comes to responding to selected menu items. To respond to selection of a menu item in a JavaFX SplitMenuButton you must set an action listener on each `MenuItem` added to the `SplitMenuButton`. Here is an example of responding to menu item selection in a JavaFX `SplitMenuButton` by setting action listeners on its `MenuItem` instances:

```java
MenuItem choice1 = new MenuItem("Choice 1");
MenuItem choice2 = new MenuItem("Choice 2");
MenuItem choice3 = new MenuItem("Choice 3");

choice1.setOnAction((e)-> {
    System.out.println("Choice 1 selected");
});
choice2.setOnAction((e)-> {
    System.out.println("Choice 2 selected");
});
choice3.setOnAction((e)-> {
    System.out.println("Choice 3 selected");
});
```

在此示例中，动作侦听器只是将文本打印到控制台。在实际应用程序中，您可能希望存储有关选择了哪些操作的信息，或采取其它的一些操作，而不仅仅是将文本打印到控制台。

In this example the action listeners simply print a text to the console. In a real application you would probably want to store information about what action was selected, or take some other action, rather than just printing a text out to the console.

## 响应按钮点击事件

您可以通过在其上设置动作侦听器来响应 JavaFX `SplitMenuButton` 按钮的单击。下面是在 JavaFX `SplitMenuButton` 上设置动作侦听器的示例：

You can respond to JavaFX `SplitMenuButton` button clicks by setting an action listener on it. Here is an example of setting an action listener on a JavaFX `SplitMenuButton`:

```java
splitMenuButton.setOnAction((e) -> {
    System.out.println("SplitMenuButton clicked!");
});
```

此示例使用 Java Lambda 表达式作为动作侦听器。单击按钮时，文本 `SplitMenuButton clicked!` 将打印到控制台。

This example uses a Java Lambda Expression as action listener. When the button is clicked, the text `SplitMenuButton clicked!` will be printed to the console.

## `SplitMenuButton`、`MenuButton`、`ChoiceBox` 和 `ComboBox` 的对比

您可能想知道 JavaFX `SplitMenuButton` 和 [MenuButton（菜单按钮）](./menubutton.md)、[ChoiceBox（选择框）](./choicebox.md)和 [ComboBox（组合框）](./combobox.md)之间有什么区别。我将在下面尝试解释。

You might be wondering what the difference is between a JavaFX `SplitMenuButton` and a [MenuButton](./menubutton.md), [ChoiceBox](./choicebox.md) and a [ComboBox](./combobox.md). I will try to explain that below.

`SplitMenuButton` 和 `MenuButton` 控件本质是 `Button`。这意味着，它们旨在让您的应用程序响应对任一菜单项的单击，或者在 `SplitMenuButton` 的情况下 —— 主按钮或菜单项之一。如果您希望在用户单击 / 选择菜单项时立即执行操作，请使用这两个控件之一。当其中一个选项的执行频率高于其他选项时，请使用 `SplitMenuButton`。将按钮部分用于选择最多的选项，将菜单项用于较少选择的选项。

The `SplitMenuButton` and `MenuButton` controls are _buttons_. That means, that they are intended for your application to respond to clicks on either one of the menu items, or in the case of the `SplitMenuButton` - the primary button or one of the menu items. Use one of these two controls when you want an immediate action to follow when the user clicks / selects a menu item. Use the `SplitMenuButton` when one of the choices is done more often than the rest. Use the button part for the most selected choice, and the menu items for the less often selected choices.

`ChoiceBox` 和 `ComboBox` 仅在内部存储用户在其菜单项中所做的选择。它们不是为在选择菜单项时立即采取行动而设计的。在用户必须在最终单击“确定”或“取消”按钮之前做出多个选择的表单中使用这些控件。单击这些按钮中的一个时，您可以读取从“ChoiceBox”或“ComboBox”中选择的菜单项。

The `ChoiceBox` and `ComboBox` merely store internally what choices the user has made among their menu items. They are not designed for immediate action upon menu item selection. Use these controls in forms where the user has to make several choices before finally clicking either an "OK" or "Cancel" button. When on of these buttons are clicked, you can read what menu item is chosen from the `ChoiceBox` or `ComboBox`.
