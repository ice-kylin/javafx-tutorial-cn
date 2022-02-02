# FXML

::: details 目录

[[toc]]

:::

_JavaFX FXML_ 是一种 XML 格式的文件，使您能够以类似于在 HTML 中编写 Web GUI 的方式编写 JavaFX GUI。_FXML_ 因此使您能够将 JavaFX 布局代码与应用程序代码的其余部分分开。这使得布局代码和应用程序代码的其余部分分隔开（解耦）。

_JavaFX FXML_ is an XML format that enables you to compose JavaFX GUIs in a fashion similar to how you compose web GUIs in HTML. _FXML_ thus enables you to separate your JavaFX layout code from the rest of your application code. This cleans up both the layout code and the rest of the application code.

FXML 既可用于构建整个应用程序 GUI 的布局，也可仅用于构建应用程序 GUI 的一部分，例如表单、选项卡、对话框等一部分的布局。

FXML can be used both to compose the layout of a whole application GUI, or just part of an application GUI, e.g. the layout of one part of a form, tab, dialog etc.

## JavaFX FXML 示例

开始学习 JavaFX FXML 的最简单方法是查看 FXML 示例。下面是一个构成简单 JavaFX GUI 的 FXML 示例：

The easiest way to start learning about JavaFX FXML is to see an FXML example. Below is a FXML example that composes a simple JavaFX GUI:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox>
    <children>
        <Label text="Hello world FXML"/>
    </children>
</VBox>
```

此示例定义了一个包含单个 [Label](../basic-control/label.md) 作为子元素的 [VBox](http://tutorials.jenkov.com/javafx/vbox.html)。`VBox` 组件是一个 JavaFX 布局组件。`Label` 的作用只是在 GUI 中显示一个文本。如果您还不了解所有的 JavaFX 组件，请不要担心。一旦你开始和它们一起“玩”，你就会明白它们的用法。

This example defines a [VBox](http://tutorials.jenkov.com/javafx/vbox.html) containing a single [Label](../basic-control/label.md) as child element. The `VBox` component is a JavaFX layout component. The `Label` just shows a text in the GUI. Don't worry if you do not yet understand all the JavaFX components. You will once you start playing with them all.

FXML 文档的首行是标准的 XML 文档的首行声明。

The first line in the FXML document is the standard first line of XML documents.

接下来的两行是导入语句。在 FXML 中，您需要导入要使用的类。FXML 中使用的 JavaFX 类和核心 Java 类都必须被导入。

The following two lines are import statements. In FXML you need to import the classes you want to use. Both JavaFX classes and core Java classes used in FXML must be imported.

在导入语句之后，您将在此构建 GUI 的实际构成部分。可以看到此处声明了一个 `VBox` 组件，并在其 `children` 属性内声明了一个 `Label` 组件。 结果是 `Label` 实例将被添加到 `VBox` 实例的 `children` 属性中。

After the import statements you have the actual composition of the GUI. A `VBox` component is declared, and inside its `children` property is declared a single `Label` component. The result is that the `Label` instance will be added to the `children` property of the `VBox` instance.

## 加载 FXML 文件

为了加载 FXML 文件并创建该文件声明的 JavaFX GUI 组件，您可以使用 `FXMLLoader`（`javafx.fxml.FXMLLoader`）类。这是一个完整的 JavaFX FXML 加载示例，它加载一个 FXML 文件并返回其中声明的 JavaFX GUI 组件：

In order to load an FXML file and create the JavaFX GUI components the file declares, you use the `FXMLLoader` (`javafx.fxml.FXMLLoader`) class. Here is a full JavaFX FXML loading example which loads an FXML file and returns the JavaFX GUI component declared in it:

```java{17-19}
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.net.URL;

public class FXMLExample extends Application{

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        FXMLLoader loader = new FXMLLoader();
        loader.setLocation(new URL("file:///C:/data/hello-world.fxml"));
        VBox vbox = loader.<VBox>load();

        Scene scene = new Scene(vbox);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```

要使此示例正常运行，FXML 文件必须位于 `C:\data\hello-world.fxml`。如您所见，文件的位置是通过 `setLocation()` 方法设置的。根 GUI 组件（`VBox` 对象）是通过`load()` 方法获得的。

For this example to work, the FXML file must be located at `C:\data\hello-world.fxml`. As you can see, the location of the file is set via the `setLocation()` method. The root GUI component (the `VBox` object) is obtained via the `load()` method.

## 在 FXML 中导入类

为了在 FXML 中使用 Java 类，无论是 JavaFX GUI 组件还是常规 Java 类，都必须在 FXML 文件中导入该类。FXML 导入语句如下所示：

In order to use a Java class in FXML, whether a JavaFX GUI component or a regular Java class, the class must be imported in the FXML file. FXML import statements look like this:

```xml
<?import javafx.scene.layout.VBox?>
```

此 FXML 导入语句导入了 `javafx.scene.layout.VBox` 类。

This FXML import statement imports the class `javafx.scene.layout.VBox`.

## 在 FXML 中创建对象

FXML 可以创建 JavaFX GUI 对象以及非 JavaFX 对象。有几种方法可以在 FXML 中创建对象。在下面，我们将看到这几种方法分别是什么。

FXML can create both JavaFX GUI objects as well as non-JavaFX objects. There are several ways to create objects in FXML. In the following sections we will see what these options are.

### 通过 FXML 元素和空参构造器创建对象

在 FXML 中创建对象的最简单方法是通过 FXML 文件中的 FXML 元素。FXML 中使用的元素名称与没有包名称的 Java 类名相同。通过 FXML 导入语句导入类后，可以将其名称用作 FXML 元素名称。

The easiest way to create objects in FXML is via an FXML element in an FXML file. The element names used in FXML are the same names as the Java class names without the package names. Once you have imported a class via an FXML import statement, you can use its name as an FXML element name.

在以下示例中，元素名称 `VBox` 和 `Label` 是有效的，因为这两个类是在 FXML 文件的前面使用 import 语句声明的：

In the following example the element names `VBox` and `Label` are valid because these two classes are declared with import statements earlier in the FXML file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox>
    <children>
        <Label text="Hello world FXML"/>
    </children>
</VBox>
```

如果要像这样使用 FXML 元素创建对象，需要创建对象的类具有空参的构造器。

To create objects using FXML elements like this requires that the class of the created object has a no-argument constructor.

### 通过 `valueOf()` 方法创建对象

在 FXML 中创建对象的另一种方法是在要为其创建对象的类中调用静态的 `valueOf()` 方法。通过 `valueOf()` 方法创建对象的方法是在 FXML 元素中插入一个 `value` 属性。这是一个例子：

Another way to create objects in FXML is to call a static `valueOf()` method in the class you want to create the object of. The way to create objects via a `valueOf()` method is to insert a `value` attribute in the FXML element. Here is an example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import com.jenkov.javafx.MyClass?>

<MyClass value="The Value"/>
```

以下是相应的 `MyClass` 类需要长什么样才能使代码正常运行：

Here is how the corresponding `MyClass` needs to look for this to work:

```java{2-4}
public MyClass {
    public static MyClass valueOf(String value) {
        return new MyClass(value);
    }

    private String value = null;

    public MyClass(String value) {
        this.value = value;
    }
}
```

请注意静态的 `valueOf()` 方法，它以一个 Java 字符串类型作为参数。当在 FXML 文件中看到 `MyClass` 元素时，`FXMLLoader` 会调用此方法。`valueOf()` 方法返回的对象将插入到 FXML 文件中组成的 GUI 中的对象。上面的 FXML 也包含除 `MyClass` 元素之外的任何其它元素。

Notice the static `valueOf()` method which takes a Java String as parameter. This method is called by the `FXMLLoader` when it sees the `MyClass` element in the FXML file. The object returned by the `valueOf()` method is what is inserted into the GUI composed in the FXML file. The above FXML doesn't contain any other elements than the `MyClass` element, but it could.

请记住，`valueOf()` 方法返回的任何对象都将用于对象图（组成 GUI）。如果返回的对象不是包含 `valueOf()` 方法的类的实例，而是某个其它类的实例，则该对象仍将在对象图中使用。元素名称仅用于查找包含 `valueOf()` 方法的类（当 FXML 元素包含 `value` 属性时）。

Keep in mind that whatever object is returned by the `valueOf()` method will be used in the object graph (composed GUI). If the object returned is not an instance of the class containing the `valueOf()` method, but an instance of some other class, then that object will still be used in the object graph. The element name is used only to find the class containing the `valueOf()` method (when the FXML element contains a `value` attribute).

### 通过工厂方法创建对象

从某种意义上说，`valueOf()` 方法也是一种基于一个字符串参数创建对象的工厂方法。但是 —— 你也可以让 `FXMLLoader` 调用其它工厂方法而不是 `valueOf()` 方法。

In a sense, a `valueOf()` method is also a factory method that creates objects based on a String parameter. But - you can also get the `FXMLLoader` to call other factory methods than a `valueOf()` method.

要调用另一个工厂方法来创建对象，您需要插入一个 `fx:factory` 属性。`fx:factory` 属性的值应该是要调用的工厂方法的名称。这是一个例子：

To call another factory method to create an object, you need to insert an `fx:factory` attribute. The value of the `fx:factory` attribute should be the name of the factory method to call. Here is an example:

```xml{4}
<?xml version="1.0" encoding="UTF-8"?>
<?import com.jenkov.javafx.MyClass?>

<MyClass fx:factory="instance"/>
```

MyClass 类应如下所示，以使上述 FXML 示例正常运行：

The MyClass class should look like this for the above FXML example to work:

```java{2-4}
public MyClass {
    public static MyClass instance() {
        return new MyClass();
    }
}
```

注意 `instance()` 方法。此方法引用自上述 FXML 片段中的 `fx:factory` 属性。

Notice the `instance()` method. This method is referenced from the `fx:factory` attribute in the FXML snippet above.

请注意，工厂方法必须是空参方法才能从 `fx:factory` 属性调用它。

Note, that the factory method must be a no-argument method to call it from a `fx:factory` attribute.

## FXML 中的属性

一些 JavaFX 对象具有属性。事实上，大部分 JavaFX 对象都具有属性。您可以通过两种方式设置属性的值。第一种方法是使用 XML 属性来设置属性值。第二种方法是使用嵌套的 XML 元素来设置属性值。

Some JavaFX objects have properties. In fact, most of them do. You can set the values of properties in two ways. The first way is to use an XML attribute to set the property value. The second way is to use a nested XML element to set the property value.

为了更好地理解如何在 FXML 元素中设置属性，让我们看一个例子：

To understand how to set properties in FXML elements better, let us look at an example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox spacing="20">
    <children>
        <Label text="Line 1"/>
        <Label text="Line 2"/>
    </children>
</VBox>
```

此示例显示了设置属性值方法的 3 个例子。第一个例子是通过 `VBox` 元素中的 `spacing` 属性。在 `spacing` 属性中设置的值将作为参数传递给基于 `VBox` 元素创建的 `VBox` 对象的 `setSpacing()` 方法。

This example shows 3 property examples. The first example is the `spacing` attribute in the `VBox` element. The value set in the `spacing` attribute is passed as parameter to the `setSpacing()` method of the `VBox` object created based on the `VBox` element.

第二个例子是通过嵌套在 `VBox` 元素中的 `children` 元素。该元素对应着 `VBox` 类的 `getChildren()` 方法。嵌套在 `children` 元素中的元素将转换为 JavaFX 组件，这些组件将添加到从父 `VBox` 元素表示的 `VBox` 对象的 `getChildren()` 方法获得的集合（collection）中。

The second example is the `children` element nested inside the `VBox` element. This element corresponds to the `getChildren()` method of the `VBox` class. The elements nested inside the `children` element will be converted to JavaFX components that are are added to the collection obtained from the `getChildren()` method of the `VBox` object represented by the parent `VBox` element.

第三个例子是通过嵌套在 `children` 中的两个 `Label` 元素的 `text` 属性。`text` 属性的值将作为参数传递给由 `Label` 元素创建的 `Label` 对象的 `setText()` 属性。

The third example are the `text` attributes of the two `Label` elements nested inside the `children` . The values of the `text` attributes will be passed as parameters to the `setText()` property of the `Label` objects created by the `Label` elements.

### 属性名称匹配

FXML 将“属性”视为通过 getter 和 setter 访问的成员变量。例如 `getText()` 和 `setText()`。

FXML considers "properties" to be member variables accessed via getters and setters. E.g. `getText()` and `setText()`.

从上一节的示例中可以看出，JavaFX 类的属性名称通过以下方式与属性和元素名称匹配：

As you can see from the example in the previous section the property names of JavaFX classes are matched to the attribute and element names by:

- 删除属性名称中的任何 get/set 字符（Remove any get/set in the property name）
- 将属性名称的第一个剩余字符转换为小写（Convert first remaining character of property name to lowercase）

因此，getter 方法 `getChildren` 将首先简化为 `Children`，然后简化为 `children`。类似地，setter 方法 `setText` 将被简化为 `Text`，然后是 `text`。

Thus, the getter method `getChildren` will first be reduced to `Children` and then to `children`. Similarly, the setter method `setText` will be reduced to `Text` and then to `text`.

### 默认属性

JavaFX 组件可以具有默认属性。这意味着，如果 FXML 元素包含未嵌套在属性元素内的子元素，则假定这些子元素属于默认属性。

A JavaFX component can have a default property. That means, that if a FXML element contains children which are not nested inside a property element, then it is assumed that the children are belonging to the default property.

让我们看一个例子。`VBox` 类具有 `children` 属性作为默认属性。这意味着我们可以省略 `children` 元素。因此，这个 FXML：

Let us look at an example. The `VBox` class has the `children` property as default property. That means that we can leave out the `children` element. Thus, this FXML:

```xml{6,9}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox spacing="20">
    <children>
        <Label text="Line 1"/>
        <Label text="Line 2"/>
    </children>
</VBox>
```

可以被简化为：

can be shortened to:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox spacing="20">
    <Label text="Line 1"/>
    <Label text="Line 2"/>
</VBox>
```

这将假定两个 `Label` 元素属于 `VBox` 的默认属性，即 `children` 属性。

The two `Label` elements are then assumed to belong to the default property of `VBox`, which is the `children` property.

默认属性用 JavaFX 注解 `@DefaultProperty(value="propertyName")` 标记，其中的 `value` 值是应该是默认属性的属性的名称。例如，`@DefaultProperty(value="children")` 声明将使`children` 属性成为默认属性。

A default property is marked with the JavaFX annotation `@DefaultProperty(value="propertyName")` where the value is the name of the property that should be the default property. For instance, the `@DefaultProperty(value="children")` declaration would make the `children` property the default property.

::: tip 📌 译注

`VBox` 的默认属性的注解声明在其父类 `javafx.scene.layout.Pane` 上：

```java{1}
@DefaultProperty(value = "children")
public class Pane
        extends Region {
    // ...
}
```

并且此注解具有继承性：

```java{1}
@Inherited
@Documented
@Retention(value = RUNTIME)
@Target(value = TYPE)
public @interface DefaultProperty {
    // ...
}
```

:::

## FXML 命名空间（Namespace）

FXML 有一个命名空间，您可以在 FXML 文件的根元素上设置。某些 FXML 属性（如 `fx:id` 属性）需要 FXML 命名空间（请参阅本 FXML 教程的下一部分）。

FXML has a namespace you can set on the root element of your FXML files. The FXML namespace is needed for some FXML attributes like the `fx:id` attribute (see the next section in this FXML tutorial).

在 FXML 文件的根元素上设置 FXML 命名空间如下所示：

Setting the FXML namespace on the root element of an FXML file looks like this:

```xml{4}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>

<VBox xmlns:fx="http://javafx.com/fxml">
</VBox>
```

FXML 命名空间由属性声明 `xmlns:fx="http://javafx.com/fxml"` 声明。

The FXML namespace is declared by the attribute declaration `xmlns:fx="http://javafx.com/fxml"`.

::: tip 📌 译注

XML 命名空间提供避免元素命名冲突的方法。在 XML 中，元素名称是由开发者定义的，当两个不同的文档使用相同的元素名时，就会发生命名冲突。XML 解析器无法确定如何处理这类冲突。

在 XML 中的命名冲突可以通过使用名称前缀从而避免。当在 XML 中使用前缀时，一个所谓的用于前缀的命名空间必须被定义。命名空间是在元素的开始标签的 `xmlns` 属性中定义的。

:::

## FXML 元素 ID

您可以将 ID 分配给 FXML 元素。这些 ID 可用于引用 FXML 文件中其它位置的 FXML 元素。为 FXML 元素指定 ID 是通过 FXML 命名空间中的 `id` 属性完成的。以下是为 FXML 元素指定一个 ID 的示例：

You can assign IDs to FXML elements. These IDs can be used to reference the FXML elements elsewhere in the FXML file. Specifying an ID for an FXML element is done via the `id` attribute from the FXML namespace. Here is an example of specifying an ID for an FXML element:

```xml{6}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Label?>

<VBox xmlns:fx="http://javafx.com/fxml">
    <Label fx:id="label1" text="Line 1"/>
</VBox>
```

注意 `Label` 元素中的属性声明 `fx:id="label1"`。此属性声明该 `Label` 元素的 ID。现在，可以在 FXML 文件中的其它地方通过 ID `label1` 引用这个特定的 `Label` 元素。例如，此 ID 可用于在 CSS 中引用此 FXML 元素。您将在本 FXML 教程后面看到通过 ID 引用 FXML 元素的示例。

Notice the attribute declaration `fx:id="label1"` in the `Label` element. This attribute declares the ID of that `Label` element. Now this specific `Label` element can be referenced via the ID `label1` elsewhere in the FXML document. For instance, this ID can be used to reference the FXML element from CSS. You will see examples of referencing FXML elements by their ID later in this FXML tutorial.

## FXML 事件处理程序（Event Handlers）

可以从定义 JavaFX 对象的 FXML 文件中对 JavaFX 对象设置事件处理程序。您可能更喜欢从 Java 代码中设置高级事件处理程序，但对于简单的事件处理程序，从 FXML 中设置它们问题不大。

It is possible to set event handlers on JavaFX objects from inside the FXML file that defines the JavaFX objects. You might prefer to set advanced event handlers from within Java code, but for simple event handlers setting them from within FXML might be fine.

为了定义事件处理程序，您需要使用 `script` 元素。以下是 FXML `script` 元素的样子：

In order to define an event handler you need to use a `script` element. Here is how an FXML script element looks:

```xml{8,10-14}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>

<VBox xmlns:fx="http://javafx.com/fxml">
    <Label  fx:id="label1" text="Button not clicked"/>
    <Button fx:id="button1" text="Click me!" onAction="reactToClick()"/>

    <fx:script>
        function reactToClick() {
            label1.setText("Button clicked");
        }
    </fx:script>

</VBox>
```

这个例子展示了两个有趣的 FXML 概念。第一个概念是从 FXML 中向 JavaFX 组件添加事件侦听器。`Button` 元素通过其 `onAction` 属性声明了一个事件监听器。该属性值声明了对 `reactToClick()` 函数的调用，该函数在 FXML 文件下方的 `script` 元素中定义。

This example shows two interesting FXML concepts. The first concept is adding an event listener to a JavaFX component from within FXML. The `Button` element declares an event listener via its `onAction` attribute. The attribute value declares a call to the `reactToClick()` function which is defined in the `script` element further down the FXML file.

第二个概念是通过 FXML 文件中的 ID 引用 JavaFX 组件。在 `script` 元素中声明的 `reactToClick()` 方法中，`Label` 元素通过其 ID `label1` 被引用，也就是以下语句：

The second concept is the reference of a JavaFX component via its ID from within the FXML file. Inside the `reactToClick()` method declared in the `script` element, the `Label` element is referenced via its ID `label1`, via this statement:

```java
label1.setText("Button clicked");
```

`onAction` 事件侦听器属性对应于 `Button` 组件的 `onAction` 事件。您也可以通过 Java 代码设置此事件侦听器 —— 通过 `Button` 的 `setOnAction()` 方法。您也可以在 FXML 中为其它事件设置侦听器，方法是使用与其它属性相同的名称匹配规则（参见前面关于 [属性名称匹配](#属性名称匹配) 的部分）将相应 JavaFX 组件中的事件侦听器方法与 FXML 属性匹配。

The `onAction` event listener attribute corresponds to the `onAction` event of the `Button` component. You can set this event listener via Java code too, via the `Button` `setOnAction()` method. You can set listeners for other events in FXML too, by matching their event listener methods from the corresponding JavaFX component with an FXML attribute, using the same name matching rules as for other properties (see earlier section on [property name matching](#属性名称匹配)).

## FXML CSS 样式

可以对在 FXML 文件中声明的 JavaFX 组件进行样式设置。您可以通过在 FXML 元素中嵌入一个 `style` 元素来做到这一点。以下是在 FXML 文件中设置 JavaFX 按钮的 CSS 样式示例：

It is possible to style the JavaFX components declared inside an FXML file. You can do so by embedding a `style` element inside the FXML element. Here is an example of CSS styling a JavaFX button in an FXML file:

```xml{7-10}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Button?>

<VBox xmlns:fx="http://javafx.com/fxml">
    <Button text="Click me!"/>
        <style>
            -fx-padding: 10;
            -fx-border-width: 3;
        </style>
    </Button>
</VBox>
```

此示例将 `-fx-padding` CSS 属性设置为 10，将 `-fx-border-width` 属性设置为 3。由于 `style` 元素嵌套在 `button` 元素中，这些 CSS 样式将被应用到相应的 `button` 元素。

This example sets the `-fx-padding` CSS property to 10, and the `-fx-border-width` property to 3. Since the `style` element is nested inside the `button` element, these CSS styles will be applied to that `button` element.

## 指定 FXML 控制器类（Controller Class）

您可以为 FXML 文件设置控制器类。FXML 控制器类可以将 FXML 文件中声明的 GUI 组件绑定在一起，使控制器对象充当代理（设计模式）。

You can set a controller class for an FXML document. An FXML controller class can bind the GUI components declared in the FXML file together, making the controller object act as a mediator (design pattern).

有两种方法可以为 FXML 文件设置控制器。设置控制器的第一种方法是在 FXML 文件中指定它。第二种方法是在用于加载 FXML 文档的 `FXMLLoader` 实例上设置控制器类的实例。此 JavaFX FXML 教程将在以下部分中显示这两个方法。

There are two ways to set a controller for an FXML file. The first way to set a controller is to specify it inside the FXML file. The second way is to set an instance of the controller class on the `FXMLLoader` instance used to load the FXML document. This JavaFX FXML tutorial will show both options in the following sections.

### 在 FXML 文件中指定控制器类

在 FXML 文件的根元素中使用 `fx:controller` 属性指定控制器类。以下是在 FXML 中指定控制器的示例：

The controller class is specified in the root element of the FXML file using the `fx:controller` attribute. Here is an example of specifying a controller in FXML:

```xml{5}
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.layout.VBox?>
<?import javafx.scene.control.Button?>

<VBox xmlns:fx="http://javafx.com/fxml" fx:controller="com.jenkov.javafx.MyFxmlController" >
    <Button text="Click me!"/>
    </Button>
</VBox>
```

注意根元素（`VBox` 元素）中的 `fx:controller` 属性。该属性包含控制器类的名称。加载 FXML 文件时会创建此类的实例。为此，控制器类必须有一个空参的构造函数。

Notice the `fx:controller` attribute in the root element (the `VBox` element). This attribute contains the name of the controller class. An instance of this class is created when the FXML file is loaded. For this to work, the controller class must have a no-argument constructor.

### 在 `FXMLLoader` 上设置控制器实例

在 `FXMLLoader` 上设置控制器实例时，您必须首先创建控制器类的实例，然后在 `FXMLLoader` 上设置该实例。下面是在 `FXMLLoader` 实例上设置控制器实例的示例：

When setting a controller instance on an `FXMLLoader` you must first create an instance of the controller class, and then set that instance on the `FXMLLoader`. Here is an example of setting a controller instance on an `FXMLLoader` instance:

```java
MyFxmlController controller = new MyFxmlController();

FXMLLoader loader = new FXMLLoader();
loader.setController(controller);
```

### 将 JavaFX 组件绑定到控制器变量

您可以将 FXML 文件中的 JavaFX 组件绑定到控制器类中的变量。要将 JavaFX 组件绑定到控制器类中的变量，您需要为 JavaFX 组件的 FXML 元素提供一个 `fx:id` 属性，该属性具有将其绑定到的控制器变量的名称作为值。这是一个示例控制器类：

You can bind the JavaFX components in the FXML file to fields in the controller class. To bind a JavaFX component to a field in the controller class, you need to give the FXML element for the JavaFX component an `fx:id` attribute which has the name of the controller field to bind it to as value. Here is an example controller class:

```java
public class MyFxmlController {

    public Label label1;

}
```

::: warning ⚠ 译注

若将变量声明为非公共的（如 `private`），需要在变量上方添加 `@FXML` 注解。

:::

这是对应的 FXML 文件，其中包含绑定到控制器类的 `label1` 变量的 `Label` 元素：

And here is the FXML file with a `Label` element bound to the `label1` field of the controller class:

```xml
<VBox xmlns:fx="http://javafx.com/fxml" >
    <Label fx:id="label1" text="Line 1"/>
</VBox>
```

注意 `fx:id` 属性的值 `label1` 与应该绑定到的控制器类中的变量名称相同。

Notice how the value of the `fx:id` attribute has the value `label1` which is the same as the field name in the controller class to which it should be bound.

### 在控制器中引用方法

可以从 FXML 引用控制器实例中的方法。例如，您可以将 JavaFX GUI 组件的事件绑定到控制器的方法。这是一个将 JavaFX 组件的事件绑定到控制器中的方法的示例：

It is possible to reference methods in the controller instance from FXML. For instance, you can bind the events of a JavaFX GUI component to methods of the controller. Here is an example of binding an event of a JavaFX component to a method in the controller:

```xml{5}
<VBox xmlns:fx="http://javafx.com/fxml" fx:controller="com.jenkov.javafx.MyFxmlController" spacing="20">
<children>
    <Label fx:id="label1" text="Line 1"/>
    <Label fx:id="label2" text="Line 2"/>
    <Button fx:id="button1" text="Click me!" onAction="#buttonClicked"/>
</children>
</VBox>
```

此示例将 `Button` 的 `onAction` 事件绑定到控制器类中的 `buttonClicked` 方法。下面是展示控制器类必须如何编写以启用事件绑定的例子：

This example binds the `onAction` event of the `Button` to the method `buttonClicked` in the controller class. Here is how the controller class must look to enable the event binding:

```java{7-10}
import javafx.event.Event;
import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class MyFxmlController {

    @FXML
    public void buttonClicked(Event e){
        System.out.println("Button clicked");
    }

}
```

注意 `buttonClicked` 方法上方的 `@FXML` 注解。此注解将方法标记为 FXML 绑定的目标。另请注意，名称 `buttonClicked` 在 FXML 文件中被引用。

Notice the `@FXML` annotation above the `buttonClicked` method. This annotation marks the method as a target for binding for FXML. Notice also that the name `buttonClicked` is referenced in the FXML file.

### 从 FXMLLoader 获取控制器实例

`FXMLLoader` 实例加载 FXML 文档后，您可以通过 `FXMLLoader` 的 `getController()` 方法获取对控制器实例的引用。这是一个例子：

Once the `FXMLLoader` instance has loaded the FXML document, you can obtain a reference to the controller instance via the `FXMLLoader` `getController()` method. Here is an example:

```java
MyFxmlController controllerRef = loader.getController();
```
