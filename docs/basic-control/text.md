# Text（文本）

::: details 目录

[[toc]]

:::

_JavaFX 文本_ 控件可以在 JavaFX GUI 中显示文本。JavaFX 文本控件由 JavaFX `javafx.scene.text.Text` 类表示。您可以设置文本控件使用的字体、文本大小、字体装饰和许多其它内容。

The _JavaFX Text_ control can display a text inside a JavaFX GUI. The JavaFX Text control is represented by the JavaFX class `javafx.scene.text.Text`. You can set the font to be used by the Text control, text size, font decorations and many other things.

由于 JavaFX Text 控件是 JavaFX Shape 类的子类，因此 Text 类具有所有与其它 JavaFX Shape 对象相同的方法可用 —— 例如填充和描边颜色和样式。

Since the JavaFX Text control is a subclass of the JavaFX Shape class, the Text class has all the same methods available that other JavaFX Shape objects do - e.g. fill and stroke color and style.

JavaFX Text 控件也是 JavaFX Node 类的子类，因此 Text 类也具有所有与其它 JavaFX Node 对象相同的方法可用，这意味着您可以对其设置效果等等。

The JavaFX Text control is also a subclass of the JavaFX Node class, so the Text class also has all the same methods available as any other JavaFX Node has, meaning you can set effects on it etc.

## `Text` 示例

这是一个简单、完整的 JavaFX 文本示例：

Here is a simple, complete JavaFX text example:

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class TextExample extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) {

        Text text = new Text("This is a JavaFX text.");

        Scene scene = new Scene(new VBox(text), 300, 250);
        primaryStage.setScene(scene);
        primaryStage.show();

    }
}
```

## 设置文本

您可以通过其 `setText()` 方法设置 JavaFX Text 对象的文本。下面是通过 `setText()` 设置 JavaFX Text 控件文本的示例：

You can set the text of a JavaFX Text object via its `setText()` method. Here is an example of setting the text of a JavaFX Text control via `setText()`:

```java
Text text = new Text();

text.setText("This is the text to display");
```

## 设置字体

您可以通过其 `setFont()` 方法设置 JavaFX Text 控件的字体。下面是一个通过 `setFont()` 方法设置 JavaFX Text 对象字体的示例：

You can set the font of a JavaFX Text control via its `setFont()` method. Here is an example of setting the font of a JavaFX Text object via its `setFont()` method:

```java
Text text = new Text("Some Text");

text.setFont(Font.font("Arial"));
```

此示例将 Text 控件使用的字体设置为将文本呈现为 Arial 字体。

This example sets the font to be used by the Text control to render the text to be of the font family Arial.

此示例中使用的 [JavaFX 字体](http://tutorials.jenkov.com/javafx/fonts.html) 所用的类是 `javafx.scene.text.Font` 类。Font 类实际上还允许您指定字体粗细和字体大小。这是上面的示例，修改后还设置了 JavaFX Text 控件的字体粗细和大小：

The [JavaFX Font](http://tutorials.jenkov.com/javafx/fonts.html) class used in this example is the `javafx.scene.text.Font` class. The Font class actually also lets you specify the font weight and font size. Here is the example above, modified to also set font weight and font size for the JavaFX Text control:

```java
Text text = new Text("Some Text");

text.setFont(Font.font("Arial", FontWeight.BOLD, 36));
```

此示例将字体粗细设置为粗体、字体大小设置为 36。此示例中使用的 FontWeight 类具体是 `javafx.scene.text.FontWeight` 类。

This example sets the font weight to bold and font size to 36. The FontWeight class used in this example is the `javafx.scene.text.FontWeight` class.

## 设置填充颜色

文本作为一个形状（Shape）类的子类，您可以设置 JavaFX 文本控件的填充颜色。填充颜色是用于绘制文本的“内部”颜色。您可以通过其 `setFill()` 方法设置 Text 控件的填充颜色，该方法将 [JavaFX Color](http://tutorials.jenkov.com/javafx/color.html) 对象作为参数。下面是通过 `setFill()` 设置 JavaFX Text 控件的填充颜色的示例：

Being a Shape, you can set the fill color of a JavaFX Text control. The fill color is the "inside" color used to draw the text. You set the fill color of a Text control via its `setFill()` method which takes a [JavaFX Color](http://tutorials.jenkov.com/javafx/color.html) object as parameter. Here is an example of setting the fill color of a JavaFX Text control via `setFill()`:

```java
text.setFill(Color.YELLOW);
```

## 设置描边颜色

文本作为一个形状（Shape）类的子类，您还可以设置 JavaFX Text 控件的描边颜色。描边颜色是用于绘制文本的“轮廓”或“边界”的颜色。默认情况下，仅使用填充颜色渲染文本，但设置描边颜色可以添加其它好的效果。您可以通过其 `setStroke()` 方法设置 Text 控件的描边颜色，该方法将 [JavaFX Color](http://tutorials.jenkov.com/javafx/color.html) 对象作为参数。下面是通过 `setStroke()` 设置 JavaFX Text 控件的描边颜色的示例：

Being a Shape, you can also set the stroke color of a JavaFX Text control. The stroke color is the "outline" or "boundary" color used to draw the text. By default, text is rendered only using the fill color, but setting a stroke color can add a nice effect. You set the stroke color of a Text control via its `setStroke()` method which takes a [JavaFX Color](http://tutorials.jenkov.com/javafx/color.html) object as parameter. Here is an example of setting the stroke color of a JavaFX Text control via `setStroke()`:

```java
text.setStroke(Color.GREEN);
```

## `Text` 的 X 和 Y 坐标

JavaFX Text 控件的 X 和 Y 坐标决定了 Text 控件在其父容器元素内的显示位置 —— 前提是父容器遵循此位置（[Pane](http://tutorials.jenkov.com/javafx/pane.html) 会，[VBox](http://tutorials.jenkov.com/javafx/vbox.html) 不会）。您可以通过其方法 `setX()` 和 `setY()` 设置 Text 控件的 X 和 Y 坐标。下面是设置 JavaFX Text 控件的 X 和 Y 坐标的示例：

The X and Y position of a JavaFX Text control determines where inside its parent container element the Text control is displayed - provided the parent container respects this position ([Pane](http://tutorials.jenkov.com/javafx/pane.html) does, [VBox](http://tutorials.jenkov.com/javafx/vbox.html) does not). You can set the X and Y position of a Text control via its methods `setX()` and `setY()`. Here is an example of setting the X and Y position of a JavaFX Text control:

```java
text.setX(50);
text.setY(25);
```

## `Text` 原点

JavaFX Text 控件有一个 _origin_ 属性，它控制文本相对于 Text 控件的 Y 坐标的显示方式。可以使用其 `setTextOrigin()` 方法设置原点。以下是设置 `Text` 原点的示例：

The JavaFX Text control has an _origin_ which controls how the text is displayed relative to the Y position of the Text control. You set the origin using the Text `setTextOrigin()` method. Here is an example of setting the Text origin:

```java
text.setTextOrigin(VPos.BASELINE);
```

`setTextOrigin()` 方法接受一个 VPos 类型的参数。VPos 类包含以下常量，您可以从中进行选择：

The `setTextOrigin()` method takes a VPos parameter. The VPos class contains the following constants you can choose between:

- `VPos.BASELINE`
  - `VPos.BASELINE` 表示 Text 控件的 Y 坐标被当作显示文本的 Y 轴基线。文本显示在基线上方，一些字符延伸到基线下方
  - `VPos.BASELINE` means that the Y position of the Text control is interpreted to mean the Y baseline of the displayed text. The text is displayed just above the baseline, with some characters extending below the baseline
- `VPos.BOTTOM`
  - `VPos.BOTTOM` 表示 Text 控件的 Y 坐标被当作显示文本的底部。 这低于 BASELINE
  - `VPos.BOTTOM` means that the Y position of the Text control is interpreted to mean the bottom the displayed text. This is lower than BASELINE
- `VPos.CENTER`
  - `VPos.CENTER` 表示 Text 控件的 Y 坐标被当作显示的文本的垂直中心
  - `VPos.CENTER` means that the Y position of the Text control is interpreted to mean the center of the text vertically
- `VPos.TOP`
  - `VPos.TOP` 表示 Text 控件的 Y 坐标被当作垂直文本的顶部
  - `VPos.TOP` means that the Y position of the Text control is interpreted to mean the top of the text vertically

## 多行文本

JavaFX Text 控件将根据以下规则将其显示的文本分成多行：

The JavaFX Text control will break the text it displays on to multiple lines based on these rules:

- 如果文本包含换行符（`\n`）（If the text contains a line break ( `\n` )）
- 如果文本宽度超过 Text 控件上设置的换行宽度（If the text width exceeds a wrapping width set on the Text control）

这是第一个显示包含换行符的文本的示例：

Here is first an example showing a text that contains a line break:

```java
Text text = new Text("This is a JavaFX text.\nLine 2");
```

Text 控件将在 Line 之前的文本处换行，因为字符串包含了换行符。

The Text control will break the text before "Line" because the String contains a line break character.

下面是在 JavaFX Text 控件上设置文本换行宽度的示例：

Here is an example of setting a text wrapping width on the JavaFX Text control:

```java
Text text = new Text("This is a longer JavaFX text.");
text.setWrappingWidth(80);
```

JavaFX Text 控件将尝试在单词之间的文本处换行。因此，如果在特定某个单词之后的文本宽度比换行宽度宽，则 Text 控件将在该单词之前换行，使文本比换行宽度更宽。

The JavaFX Text control will attempt to break the text between words. Thus, if after a specific word the text width is wider than the wrapping width, the Text control will wrap the text before that word that makes the text wider than the wrapping width.

## `Text` 删除线

JavaFX Text 控件使您能够将 _~~删除线~~_ 效果装饰应用于它显示的文本。您可以通过其 `setStrikethrough()` 方法启用删除线装饰，将 `true` 值作为参数传递。 `false` 的参数值将禁用删除线效果。下面是通过 `setStrikethrough()` 方法启用 JavaFX Text _~~删除线~~_ 效果装饰的示例：

The JavaFX Text control enables you to apply a _~~strikethrough~~_ decoration to the text it displays. You enable the strikethrough decoration via the Text `setStrikethrough()` method, passing a value of `true` as parameter. A parameter value of `false` will disable the strikethrough effect. Here is an example of enabling the JavaFX Text _~~strikethrough~~_ decoration via the `setStrikethrough()` method:

```java
text.setStrikethrough(true);
```

## `Text` 下划线

JavaFX Text 控件使您能够将 _<u>下划线</u>_ 装饰应用于它显示的文本。您可以通过其 `setUnderline()` 方法启用下划线装饰，将 `true` 值作为参数传递。`false` 的参数值将禁用下划线装饰。下面是通过 `setUnderline()` 方法启用 JavaFX Text _<u>下划线</u>_ 装饰的示例：

The JavaFX Text control enables you to apply an _underline_ decoration to the text it displays. You enable the underline decoration via the Text `setUnderline()` method, passing a value of `true` as parameter. A parameter value of `false` will disable the underline decoration. Here is an example of enabling the JavaFX Text _underline_ decoration via the `setUnderline()` method:

```java
text.setUnderline(true);
```

## 字体平滑技术

JavaFX Text 控件包含两种不同的字体平滑（抗锯齿）技术，您可以从中进行选择。第一种技术称为 LCD，第二种称为 GREY。您可以通过 `setFontSmoothingType()` 方法选择 Text 控件应使用的字体平滑技术。以下是将 LCD 和 GREY 设置为 JavaFX Text 控件上的字体平滑技术的示例：

The JavaFX Text control contains two different font smoothing (antialiasing) techniques you can choose between. The first technique is called LCD, and the second is called GRAY. You can choose which font smoothing technique the Text control should use via the `setFontSmoothingType()` method. Here are examples of setting both LCD and GRAY as font smoothing technique on a JavaFX Text control:

```java
text.setFontSmoothingType(FontSmoothingType.GRAY);

text.setFontSmoothingType(FontSmoothingType.LCD);
```

您必须尝试这两种字体平滑技术以查看它们当中的哪一种最适合您的应用程序。

Which of the two font smoothing techniques fits best to your application you will have to experiment with.
