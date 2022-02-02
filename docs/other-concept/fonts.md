# Fonts（字体）

::: details 目录

[[toc]]

:::

_JavaFX Font_ 类 —— `java.scene.text.Font`，使您能够加载不同的字体以在您的 JavaFX 应用程序中使用。字体是一种文本样式。使用相同字体呈现的所有文本看起来都相似。在本 JavaFX 字体教程中，我将向您展示如何在 JavaFX 中加载和设置字体。

The _JavaFX Font_ class, `java.scene.text.Font`, enables you to load different Fonts for use in your JavaFX applications. A font is a text style. All text rendered with the same font will look similar. In this JavaFX Font tutorial I will show you how to load and set fonts in JavaFX.

## 创建 `Font` 实例

要在 JavaFX 中使用字体，您必须创建一个 JavaFX Font 的实例。创建 JavaFX Font 实例的最简单方法是使用 Font 类中静态的工厂方法。以下示例展示了如何使用 Font 类中静态的工厂方法的多种变体创建 JavaFX Font 的实例：

To use fonts in JavaFX you must create a JavaFX Font instance. The easiest way to create a JavaFX Font instance is to use the static factory methods in the Font class. The following example shows how to create JavaFX Font instances using the many variations of the Font class static factory methods:

```java
String      fontFamily  = "Arial";
double      fontSize    = 13;
FontWeight  fontWeight  = FontWeight.BOLD;
FontPosture fontPosture = FontPosture.ITALIC;

Font font1 = Font.font(fontFamily);
Font font2 = Font.font(fontSize);
Font font3 = Font.font(fontFamily, fontSize);
Font font4 = Font.font(fontFamily, fontWeight , fontSize);
Font font5 = Font.font(fontFamily, fontPosture, fontSize);
Font font6 = Font.font(fontFamily, fontWeight , fontPosture, fontSize);
```

如您所见，Font 的工厂方法使您能够创建代表不同字体、字体大小、字体粗细和字体倾斜程度的 Font 实例。

As you can see, the Font factory methods enable you to create Font instances representing different font families, font sizes, font weights and font postures.

## 使用 `Font` 实例

创建 JavaFX 字体实例后，您可以通过将其设置在任何能够使用字体的 JavaFX 组件上来使用它。例如，您可以在 [JavaFX Text](../basic-control/text.md#设置字体) 控件上设置它。下面是在 Text 控件上设置 Font 实例的示例：

Once you have created a JavaFX Font instance you use it by setting it on whatever JavaFX component capable of using a Font. For instance, you can set it on a [JavaFX Text](./basic-control/text.md#设置字体) control. Here is an example of setting a Font instance on a Text control:

```java
Font font = Font.font("Arial");

Text text = new Text("This is the text");
text.setFont(font);
```

确切地说，如何将 Font 对象应用于给定的 JavaFX 控件取决于特定的 JavaFX 控件。在 JavaFX Text 示例中，Font 对象通过如上所示的 Text 类的实例的 `setFont()` 方法应用。

Precisely how a Font object is applied to a given JavaFX control depends on the specific JavaFX control. In the JavaFX Text example the Font object is applied via the Text `setFont()` method, as shown above.

## 列出已安装的字体系列和名称

JavaFX Font 类提供了两种方法，可以列出安装在运行 JavaFX 应用程序的系统中的字体系列和字体名称。这些方法是 `getFamilies()` 和 `getFontNames()` 方法。以下是调用这些方法的一些示例：

The JavaFX Font class provides two methods that can list the font families and font names which installed on the system the JavaFX application is running on. These methods are the `getFamilies()` and `getFontNames()` methods. Here are some examples of calling these methods:

```java
List<String> fontFamilies = Font.getFamilies();
List<String> fontNames    = Font.getFontNames();
```

创建 Font 实例时可以使用字体系列名称和字体名称。在字体工厂方法的 `fontFamily` 参数中提供字体系列名称或字体名称。

Both font family names and font names can be used when creating a Font instance. Provide either the font family name or font name in the Font factory method `fontFamily` parameter.

要查看实际名称，请遍历上面的列表并打印出它们的名称，如下所示：

To see the actual names, loop through the lists above and print out their names, like this:

```java
for(String item : fontFamilies) {
    System.out.println(item);
}

for(String item : fontNames) {
    System.out.println(item);
}
```
