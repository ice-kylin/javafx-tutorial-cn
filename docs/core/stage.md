# Stage（舞台）

::: details 目录

[[toc]]

:::

JavaFX _舞台（Stage）_ —— `javafx.stage.Stage`，代表 JavaFX 桌面应用程序中的一个窗口。在 JavaFX `Stage` 内，您可以插入一个 JavaFX `Scene`（场景），它表示在窗口内显示的内容 —— 也就是在舞台内显示的内容。

A JavaFX _Stage_, `javafx.stage.Stage`, represents a window in a JavaFX desktop application. Inside a JavaFX `Stage` you can insert a JavaFX `Scene` which represents the content displayed inside a window - inside a `Stage`.

当一个 JavaFX 应用程序启动时，它会创建一个根（root）`Stage` 对象，该对象将传递给 JavaFX 应用程序的根类的 `start(Stage primaryStage)` 方法。 此 `Stage` 对象代表 JavaFX 应用程序的主窗口。 您可以在应用程序生命周期的后期创建新的 `Stage` 对象，以适应应用程序需要打开更多窗口的场景。

When a JavaFX application starts up, it creates a root `Stage` object which is passed to the `start(Stage primaryStage)` method of the root class of your JavaFX application. This `Stage` object represents the primary window of your JavaFX application. You can create new `Stage` objects later in your application's life time, in case your application needs to open more windows.

## 创建一个 `Stage`

创建 JavaFX `Stage` 对象就像创建任何其它 Java 对象一样：使用 `new` 关键字和 `Stage` 构造函数。下面是一个创建 JavaFX `Stage` 对象的示例。

You create a JavaFX `Stage` object just like any other Java object: Using the `new` command and the `Stage` constructor. Here is an example of creating a JavaFX `Stage` object.

```java
Stage stage = new Stage();
```

## 展示 `Stage`

简单地创建 JavaFX `Stage` 对象之后并不会自动地显示它。为了使 `Stage` 可见，您必须显式地调用它的 `show()` 或 `showAndWait()` 方法。 这是一个显示 JavaFX `Stage` 的示例：

Simple creating a JavaFX `Stage` object will not show it. In order to make the `Stage` visible you must call either its `show()` or `showAndWait()` method. Here is an example of showing a JavaFX `Stage`:

```java
Stage stage = new Stage();
stage.show();
```

### `show()` 和 `showAndWait()` 对比

JavaFX `Stage` 的方法 —— `show()` 和 `showAndWait()` 之间的区别在于，`show()` 使 `Stage` 可见并立即退出 `show()` 方法，而 `showAndWait ()` 显示 `Stage` 对象，然后阻塞（停留在 `showAndWait()` 方法中）直到 `Stage` 关闭。

The difference between the JavaFX `Stage` methods `show()` and `showAndWait()` is, that `show()` makes the `Stage` visible and the exits the `show()` method immediately, whereas the `showAndWait()` shows the `Stage` object and then blocks (stays inside the `showAndWait()` method) until the `Stage` is closed.

## 在 `Stage` 上设置 `Scene`

为了在 JavaFX `Stage` 内显示任何内容，您必须在 `Stage` 上设置一个 JavaFX `Scene` 对象。 然后，当显示 `Stage` 时，`Scene` 的内容将显示在 `Stage` 内。 下面是在 JavaFX `Stage` 上设置 `Scene` 的示例：

In order to display anything inside a JavaFX `Stage`, you must set a JavaFX `Scene` object on the `Stage`. The content of the `Scene` will then be displayed inside the `Stage` when the `Stage` is shown. Here is an example of setting a `Scene` on a JavaFX `Stage`:

```java{5}
VBox vBox = new VBox(new Label("A JavaFX Label"));
Scene scene = new Scene(vBox);

Stage stage = new Stage();
stage.setScene(scene);
```

## `Stage` 标题（Title）

您可以通过 `Stage` 的 `setTitle()` 方法设置 JavaFX `Stage` 的标题。 `Stage` 标题显示在 `Stage` 窗口的标题栏中。 下面是设置 JavaFX 舞台标题的示例：

You can set the JavaFX `Stage` title via the `Stage` `setTitle()` method. The `Stage` title is displayed in the title bar of the `Stage` window. Here is an example of setting the title of a JavaFX `Stage`:

```java
stage.setTitle("JavaFX Stage Window Title");
```

## `Stage` 位置（Position）

您可以通过其 `setX()` 和 `setY()` 方法设置 JavaFX `Stage` 的位置坐标 (X,Y)。 `setX()` 和 `setY()` 方法设置由 `Stage` 表示的窗口的左上角的位置。下面是设置 JavaFX `Stage` 对象的 X 和 Y 坐标的示例：

You can set the position (X,Y) of a JavaFX `Stage` via its `setX()` and `setY()` methods. The `setX()` and `setY()` methods set the position of the upper left corner of the window represented by the `Stage`. Here is an example of setting the X and Y position of a JavaFX `Stage` object:

```java{3-4}
Stage stage = new Stage();

stage.setX(50);
stage.setY(50);
```

请注意，如果设置 X 和 Y 坐标，可能还需要设置 `Stage` 的宽度和高度，否则舞台窗口可能会变得非常小。有关设置 `Stage` 的宽度和高度的更多信息，请参阅下一节。

Please note, that it might be necessary to also set the width and height of the `Stage` if you set the X and Y position, or the stage window might become very small. See the next section for more information about setting the width and height of a `Stage`.

## `Stage` 宽度（Width）和高度（Height）

您可以通过其 `setWidth()` 和 `setHeight()` 方法设置 JavaFX `Stage` 的宽度和高度。下面是设置 JavaFX `Stage` 的宽度和高度的示例：

You can set the width and height of a JavaFX `Stage` via its `setWidth()` and `setHeight()` methods. Here is an example of setting the width and height of a JavaFX `Stage`:

```java{3-4}
Stage stage = new Stage();

stage.setWidth(600);
stage.setHeight(300);
```

## `Stage` 窗口模式（Modality）

您可以设置 JavaFX `Stage` 的窗口模式。`Stage` 模式确定代表 `Stage` 的窗口是否会阻止同一个 JavaFX 应用程序打开其它窗口。您可以通过其 `initModality()` 方法设置 JavaFX `Stage` 的窗口模式。以下是设置 JavaFX `Stage` 模式的示例：

You can set window modality of a JavaFX `Stage`. The `Stage` modality determines if the window representing the `Stage` will block other windows opened by the same JavaFX application. You set the window modality of a JavaFX `Stage` via its `initModality()` method. Here is an example of setting the JavaFX `Stage` modality:

:::: code-group
::: code-group-item APPLICATION_MODAL

```java{11}
public class StageExamples extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX App");

        Stage stage = new Stage();
        stage.initModality(Modality.APPLICATION_MODAL);

        primaryStage.show();

        stage.showAndWait();

    }
}
```

:::
::: code-group-item WINDOW_MODAL

```java{11}
public class StageExamples extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX App");

        Stage stage = new Stage();
        stage.initModality(Modality.WINDOW_MODAL);

        primaryStage.show();

        stage.showAndWait();

    }
}
```

:::
::: code-group-item NONE

```java{11}
public class StageExamples extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX App");

        Stage stage = new Stage();
        stage.initModality(Modality.NONE);

        primaryStage.show();

        stage.showAndWait();

    }
}
```

:::
::::

可以看到，这个例子是一个完整的 JavaFX 应用程序。`start()` 方法在 JavaFX 应用程序启动时执行（首先调用 `main()`，然后调用 `launch()`，然后调用 `start()`）。

Notice how this example is a full JavaFX application. The `start()` method is executed when the JavaFX application is launched (first `main()` is called which calls `launch()` which later calls `start()`).

还可以看到这里是如何创建一个新的 JavaFX `Stage` 对象并设置它的窗口模式，然后使主要的 `Stage` 对象（`primaryStage`）和新的 `Stage` 对象（`stage`）都可见（显示出来）。第二个 `Stage` 的窗口设置为 `Modality.APPLICATION_MODAL`，这意味着它将阻止用户访问此 JavaFX 应用程序打开的所有其它窗口（舞台）。在关闭此“Stage”窗口之前，用户无法访问任何其它窗口。

Notice also, how a new JavaFX `Stage` object is created, its modality mode set, and then both the primary and the new `Stage` objects are made visible (shown). The second `Stage` has its modality set to `Modality.APPLICATION_MODAL` meaning it will block all other windows (stages) opened by this JavaFX application. You cannot access any other windows until this `Stage` window has been closed.

`Modality.WINDOW_MODAL` 窗口选项意味着新创建的 `Stage` 将阻止用户访问“拥有”新创建的 `Stage` 的 `Stage` 窗口，但仅此而已，而并非应用程序中的所有窗口。请参阅下面的下一节，了解如何设置 `Stage` 的“所有者”。

The `Modality.WINDOW_MODAL` modality option means that the newly created `Stage` will block the `Stage` window that "owns" the newly created `Stage`, but only that. Not all windows in the application. See the next section below to see how to set the "owner" of a `Stage`.

`Modality.NONE` 窗口选项意味着此 `Stage` 不会阻止用户访问在此应用程序中打开的任何其他窗口。

The `Modality.NONE` modality option means that this `Stage` will not block any other windows opened in this application.

`Modality.APPLICATION_MODAL` 和 `Modality.WINDOW_MODAL` 窗口模式对于充当“向导”或“对话框”窗口的 `Stage` 对象很有用，，它们应该阻塞应用程序或窗口，直到用户完成向导或对话框的过程。`Modality.NONE` 窗口对于表示可以共存的窗口的 `Stage` 对象很有用，例如浏览器应用中的不同网页窗口。

The `Modality.APPLICATION_MODAL` and `Modality.WINDOW_MODAL` modality modes are useful for `Stage` objects representing windows that function as "wizards" or "dialogs" which should block the application or window until the wizard or dialog process is completed by the user. The `Modality.NONE` modality is useful for `Stage` objects representing windows that can co-exist, like different browser windows in a browser application.

## `Stage` 所有者（Owner）

JavaFX `Stage` 可以被另一个 `Stage` _拥有_。您可以通过 `initOwner()` 方法设置 `Stage` 的所有者。这是一个初始化 JavaFX `Stage` 的所有者的示例，另外将 `Stage` 的窗口模式设置为 `Modality.WINDOW_MODAL`：

A JavaFX `Stage` can be _owned_ by another `Stage`. You set the owner of a `Stage` via its `initOwner()` method. Here is an example of initializing the owner of a JavaFX `Stage`, plus set the modality of the `Stage` to `Modality.WINDOW_MODAL`:

```java{13}
public class StageExamples extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX App");

        Stage stage = new Stage();
        stage.initModality(Modality.WINDOW_MODAL);

        stage.initOwner(primaryStage);

        primaryStage.show();

        stage.showAndWait();
    }
}
```

此示例将打开一个新的 `Stage`，它将阻止用户访问拥有新创建的 `Stage`（`stage`）的 `Stage`（在此示例中设置为 `primaryStage`）。

This example will open a new `Stage` which will block the `Stage` owning the newly created `Stage` (which is set to the primary stage).

## `Stage` 风格（Style）

您可以通过其 `initStyle()` 方法设置 JavaFX `Stage` 的样式。您可以选择一组不同的样式：

You can set the style of a JavaFX `Stage` via its `initStyle()` method. There are a set of different styles you can choose from:

- DECORATED
  - _带有装饰的_ `Stage` 是一个带有操作系统装饰（标题栏和最小化 / 最大化 / 关闭按钮）和白色背景的标准窗口
  - A decorated `Stage` is a standard window with OS decorations (title bar and minimize / maximize / close buttons), and a white background
- UNDECORATED
  - _未装饰的_ `Stage` 是没有操作系统装饰的标准窗口，但仍具有白色背景
  - An undecorated `Stage` is a standard window without OS decorations, but still with a white background
- TRANSPARENT
  - _透明的_ `Stage` 是具有透明背景的未装饰窗口
  - A transparent `Stage` is an undecorated window with transparent background
- UNIFIED
  - _统一的_ `Stage` 就像一个装饰过的 `Stage`，只是装饰区域和主要内容区域之间没有边界
  - A unified `Stage` is like a decorated stage, except it has no border between the decoration area and the main content area
- UTILITY
  - _实用的_ `Stage` 是一个装饰过的窗口，但装饰很少
  - A utility `Stage` is a decorated window, but with minimal decorations
  - ![](../static/core/stage/utility.png)

下面是设置 JavaFX `Stage` 样式的示例：

Here is an example of setting the style of a JavaFX `Stage`:

```java
stage.initStyle(StageStyle.DECORATED);

//stage.initStyle(StageStyle.UNDECORATED);
//stage.initStyle(StageStyle.TRANSPARENT);
//stage.initStyle(StageStyle.UNIFIED);
//stage.initStyle(StageStyle.UTILITY);
```

实际上只执行了第一行代码，其余的则被注释掉了。它们只是为了展示如何配置其它选项。

Only the first line is actually executed. The rest are commented out. They are just there to show how to configure the other options.

## `Stage` 全屏模式（Full Screen Mode）

您可以通过调用 `Stage` 的 `setFullScreen()` 方法将 JavaFX `Stage` 切换到全屏模式。请注意，除非您在 `Stage` 上设置 `Scene`，否则您可能无法获得预期的结果（全屏模式的窗口）。以下是将 JavaFX Stage 设置为全屏模式的示例：

You can switch a JavaFX `Stage` into full screen mode via the `Stage` `setFullScreen()` method. Please note, that you may not get the expected result (a window in full screen mode) unless you set a `Scene` on the `Stage`. Here is an example of setting a JavaFX Stage to full screen mode:

```java{5}
VBox vbox = new VBox();
Scene scene = new Scene(vbox);

primaryStage.setScene(scene);
primaryStage.setFullScreen(true);

primaryStage.show();
```

## `Stage` 生命周期事件（Life Cycle Events）

JavaFX `Stage` 可以发出一些您可以侦听的事件。这些 `Stage` 事件是：

The JavaFX Stage can emit a few events you can listen for. These Stage events are:

- Close Request
- Hiding
- Hidden
- Showing
- Shown

### 关闭舞台事件侦听器（Close Stage Event Listener）

您可以在 JavaFX `Stage` 上侦听关闭事件，这意味着当用户单击 `Stage` 窗口右上角的关闭按钮时，您会收到通知。如果您需要在主舞台窗口关闭后清理一些资源，或者需要停止一些线程等情况时。以下是监听关闭舞台事件的示例：

You can listen for close events on a JavaFX Stage, meaning you can be notified when the user clicks the button with the X on, in the upper right corner of the Stage window. Listening for the Stage close event can be useful if you need to clean up some resources after the main Stage window is closed, or e.g. need to stop some threads etc. Here is an example of listening for Stage close events:

```java
primaryStage.setOnCloseRequest((event) -> {
    System.out.println("Closing Stage");
});
```

### 隐藏舞台事件侦听器（Hiding Stage Event Listener）

您可以将隐藏舞台事件侦听器添加到 JavaFX 舞台。隐藏舞台事件侦听器在舞台被隐藏之前调用，但在它被请求隐藏之后。 以下是将 Stage 隐藏事件侦听器添加到 JavaFX Stage 的示例：

You can attach a Stage hiding event listener to a JavaFX stage. The Stage hiding event listener is called before the Stage is being hidden, but after it has been requested hidden. Here is an example of attaching a Stage hiding event listener to a JavaFX Stage:

```java
primaryStage.setOnHiding((event) -> {
    System.out.println("Hiding Stage");
});
```

### 隐藏舞台事件侦听器（Hidden Stage Event Listener）

您可以将隐藏舞台事件侦听器添加到 JavaFX 舞台。隐藏舞台事件侦听器将在舞台隐藏后被调用。以下是将隐藏舞台事件侦听器添加到 JavaFX Stage 的示例：

You can attach a Stage hidden event listener to a JavaFX stage. The Stage hidden event listener is called after the Stage is hidden. Here is an example of attaching a Stage hidden event listener to a JavaFX Stage:

```java
primaryStage.setOnHidden((event) -> {
    System.out.println("Stage hidden");
});
```

### 显示舞台事件侦听器（Showing Stage Event Listener）

您可以将显示事件侦听器的舞台添加到 JavaFX 舞台。在请求显示舞台之后，但在显示舞台之前调用舞台显示事件侦听器。以下是将显示舞台事件侦听器添加到 JavaFX Stage 的示例：

You can attach a Stage showing event listener to a JavaFX stage. The Stage showing event listener is called after the Stage is requested shown, but before the Stage is shown. Here is an example of attaching a Stage showing event listener to a JavaFX Stage:

```java
primaryStage.setOnShowing((event) -> {
    System.out.println("Showing Stage");
});
```

### 显示舞台事件侦听器（Shown Stage Event Listener）

您可以将显示舞台事件侦听器添加到 JavaFX 舞台。在显示舞台后调用舞台显示事件侦听器。以下是将显示舞台事件侦听器添加到 JavaFX Stage 的示例：

You can attach a Stage shown event listener to a JavaFX stage. The Stage shown event listener is called after the Stage is shown. Here is an example of attaching a Stage shown event listener to a JavaFX Stage:

```java
primaryStage.setOnShown((event) -> {
    System.out.println("Stage Shown");
});
```

## `Stage` 键盘事件（Keyboard Events）

可以在 JavaFX `Stage` 上侦听键盘事件。这样，您可以捕获在舞台具有焦点时发生的所有键盘事件。这是一个侦听键盘上的 `ESC` 和 `Return` 键的示例 —— 当 JavaFX Stage 具有焦点时：

It is possible to listen for keyboard events on a JavaFX Stage. That way you can catch all keyboard events that occur while the Stage has focus. Here is an example that listens for the ESC and Return keys on the keyboard - when a JavaFX Stage has focus:

```java
primaryStage.addEventHandler(KeyEvent.KEY_PRESSED,  (event) -> {
    System.out.println("Key pressed: " + event.toString());

    switch(event.getCode().getCode()) {
        case 27 : { // 27 = ESC key
            primaryStage.close();
            break;
        }
        case 10 : { // 10 = Return
            primaryStage.setWidth( primaryStage.getWidth() * 2);
        }
        default:  {
            System.out.println("Unrecognized key");
        }
    }
});
```
