# CSS 样式

::: details 目录

[[toc]]

:::

JavaFX 使您能够使用 CSS 设置 JavaFX 组件的样式，就像您可以使用 CSS 设置网页中的 HTML 和 SVG 元素一样。JavaFX 使用与 Web 的 CSS 相同的 CSS 语法，但 CSS 属性特定于 JavaFX，因此与它们的 Web 对应的属性名称略有不同。

JavaFX enables you to style JavaFX components using CSS, just like you can style HTML and SVG element in web pages with CSS. JavaFX uses the same CSS syntax as CSS for the web, but the CSS properties are specific to JavaFX and therefore have slightly different names than their web counterparts.

使用 CSS 为 JavaFX 应用程序设置样式有助于您将样式（外观）与应用程序代码分开。这会使应用程序代码更简洁，并更容易更改应用程序的样式。您无需查看 Java 代码内部即可更改样式。您还可以使用共享的 CSS 样式表一次更改多个组件的样式。

Styling your JavaFX applications using CSS helps you separate styling (looks) from the application code. This results in cleaner application code and makes it easier to change the styling of the application. You do not have to look inside the Java code to change the styling. You can also change the styling for many components at once, by using shared CSS stylesheets.

在本 JavaFX CSS 教程中，我将带您深入了解可以将 CSS 样式应用于 JavaFX 应用程序的多种不同方式，以及可以设置样式和不可以设置样式的内容。JavaFX CSS 功能非常先进，因此您可以仅使用 CSS 做很多事情。

In this JavaFX CSS tutorial I will take a deeper look at the many different ways you can apply CSS styles to your JavaFX applications, as well as look at what can and cannot be styled. The JavaFX CSS features are quite advanced, so there is a lot you can do with just CSS.

我假设您已经对 CSS 的核心概念有些熟悉，例如 CSS 语法、CSS 规则、CSS 属性等。

I assume that you are already somewhat familiar with the core concepts of CSS, like CSS syntax, CSS rules, CSS properties etc.

## 应用 CSS 样式的方法

有几种不同的方法可以将 CSS 样式应用于 JavaFX 组件。 这些方法是：

There are several different methods to apply a CSS style to a JavaFX component. These methods are:

- JavaFX 默认 CSS 样式表（JavaFX default CSS stylesheet）
- 场景指定的 CSS 样式表（Scene specific CSS stylesheet）
- 父节点指定的 CSS 样式表（Parent specific CSS stylesheet）
- 组件 `style` 属性（Component `style` property）

在接下来的部分中，我将简要解释这些 CSS 样式机制中的每一个是如何工作的。

I will briefly explain how each of these CSS styling mechanisms work in the following sections.

### 默认 CSS 样式表

JavaFX 应用程序具有适用于所有 JavaFX 组件的默认 CSS 样式表。如果您不提供组件样式，则默认 CSS 样式表将为 JavaFX 组件设置样式，使它们看起来很漂亮（还过得去）。

JavaFX applications have a default CSS stylesheet which is applied to all JavaFX components. If you provide no styling of the components, the default CSS stylesheet will style the JavaFX components so they look pretty.

JavaFX 8 的默认样式表称为 Modena，位于 JavaFX JAR 文件中。

The default stylesheet for JavaFX 8 is called Modena, and is located in the JavaFX JAR file.

### 场景指定的 CSS 样式表

您可以为 JavaFX `Scene` 对象设置 CSS 样式表。然后将此 CSS 样式表应用于为该 `Scene` 对象添加到场景图中的所有 JavaFX 组件。场景指定的 CSS 样式表将覆盖默认样式表中指定的样式，以防两个样式表设置相同的 CSS 属性（也就是说场景指定的 CSS 样式表优先级更高）。

You can set a CSS stylesheet for a JavaFX `Scene` object. This CSS stylesheet is then applied to all JavaFX components added to the scene graph for that `Scene` object. The scene specific CSS stylesheet will override the styles specified in the default stylesheet, in case both stylesheets sets the same CSS properties.

下面是在 `Scene` 对象上设置 CSS 样式表的示例：

Here is an example of setting a CSS stylesheet on a `Scene` object:

```java
scene.getStylesheets().add("style1/button-styles.css");
```

此示例告诉 JavaFX 查找名为 `button-styles.css` 的样式表文件，该文件位于名为 `style1` 的目录中。JavaFX 在类路径中查找此文件，因此目录 `style1` 应位于应用程序的类路径中包含的目录（或 JAR 文件）之一的根目录中。

This example tells JavaFX to look for a stylesheet file called `button-styles.css` which is located in a directory called `style1` . JavaFX looks for this file on the classpath, so the directory `style1` should be located in a directory which is at root of one of the directories (or JAR files) which are included in the classpath for the application.

代表 CSS 样式表文件位置的字符串被称为 URL。这意味着您还可以指定文件系统中文件的完整路径。但是，最好将 CSS 文件视为资源并将它们与应用程序的代码捆绑在一起。运行应用程序的用户通常不会更改样式，因此无需在代码之外存放文件（而不是像让用户更改的配置文件一样）。

The string pointing to the CSS stylesheet file is interpreted as a URL. That means that you can also specify full paths to a file in the file system. However, it is good practice to think of CSS files as resources and bundle them with the code for your application. The users running the application will typically not be changing the styles, so there is no need to distribute the file outside the code (like you would with config file that users were intended to change).

### 父节点指定的 CSS 样式表

也可以在 JavaFX `Parent` 类的所有子类上设置 CSS 样式表。`Parent` 类是所有可以有子节点的父类，这意味着它们可以包含其它组件。在 `Parent` 类的子类上设置的样式表中指定的 CSS 属性通常优先于场景样式表中指定的 CSS 规则和默认样式表。

It is also possible so set a CSS stylesheet on all subclasses of the JavaFX `Parent` class. The `Parent` class is a base class for all components that can have children, meaning they can contain other components inside them. CSS properties specified in a stylesheet set on a `Parent` subclass will normally take precedence over CSS rules specified in a scene stylesheet, and the default stylesheet.

JavaFX 布局组件是 `Parent` 类的子类的典型示例。如果您在布局组件上设置 CSS 样式表，则样式表将应用于该布局组件内的所有组件。

The JavaFX layout components are typical examples of `Parent` subclasses. If you set a CSS stylesheet on a layout component, the stylesheet will be applied to all components inside that layout component.

在 `Parent` 类的子类上设置 CSS 样式表的形式看起来类似于在 `Scene` 对象上设置它。这是一个在 `VBox` 上设置 CSS 样式表的示例，它也是 `Parent` 的子类：

Setting a CSS stylesheet on a `Parent` subclass looks similar to setting it on a `Scene` object. Here is an example of setting a CSS stylesheet on a `VBox` which is a `Parent` subclass:

```java{6}
Button button1 = new Button("Button 1");
Button button2 = new Button("Button 2");

VBox vbox = new VBox(button1, button2);

vbox.getStylesheets().add("style1/button-styles.css");
```

此代码将在 `VBox` 上设置 `style1/button-styles.css` 样式表。样式表将因此应用于 VBox 内的两个按钮。

This code will set the `style1/button-styles.css` stylesheet on the `VBox`. The stylesheet will thus be applied to the two buttons inside the VBox.

### 组件样式属性

您可以通过直接在组件上设置 CSS 属性来为特定组件设置 CSS 样式。这是通过在组件的 `style` 属性中设置一个包含 CSS 属性的字符串来完成的。

You can set CSS styles for a specific component by setting the CSS properties directly on the component. This is done by setting a String containing the CSS properties in the component's `style` property.

通过 `style` 属性设置的 CSS 属性优先于将父节点指定的样式表、场景样式表和默认样式表中指定的 CSS 属性。

CSS properties set via the `style` property take precedence over CSS properties specified in any `Parent` subclasses the component is nested inside, the scene stylesheet and the default stylesheet.

下面是一个为 JavaFX `Button` 设置 `style` 属性的示例：

Here is an example that sets the `style` property for a JavaFX `Button`:

```java
Button button = new Button("Button 2");
button.setStyle("-fx-background-color: #0000ff");
```

此示例将 `style` 属性中的背景颜色 CSS 属性设置为蓝色。

This example sets the background color CSS property in the `style` property to a blue color.

您可以在同一个样式字符串中设置多个 CSS 属性。这是一个示例展示了如何这样做：

You can set multiple CSS properties inside the same style string. Here is an example of how that looks:

```java
String styles =
        "-fx-background-color: #0000ff;" +
        "-fx-border-color: #ff0000;" ;

Button button = new Button("Button 2");
button.setStyle(styles);
```

## JavaFX CSS 属性

如前所述，JavaFX 包含自己的一组 CSS 属性。JavaFX CSS 属性的命名与 HTML 使用的 CSS 属性稍微有些不同。但是，JavaFX 团队使 JavaFX CSS 属性的名称非常接近 HTML 中使用的 CSS 属性。如果您熟悉 Web 的 CSS，您通常能够猜到相应的 JavaFX CSS 属性被称为什么。

As mentioned earlier JavaFX contains its own set of CSS properties. The JavaFX CSS properties are named somewhat differently from the CSS properties used with HTML. However, the JavaFX team have kept the names of the JavaFX CSS properties very close to the CSS properties used in HTML. If you are familiar with CSS for the web, you will often be able to guess what the corresponding JavaFX CSS property is called.

并非所有 CSS 属性都可以应用于所有 JavaFX 组件，但许多 CSS 属性可以应用于多个 JavaFX 组件。

Not all CSS properties can be applied to all JavaFX components, but many CSS properties can be applied to several JavaFX components.
