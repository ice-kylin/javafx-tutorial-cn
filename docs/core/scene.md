# Scene（场景）

::: details 目录

[[toc]]

:::

JavaFX `Scene` 对象是 JavaFX 场景图的根（root）。换句话说，JavaFX 场景中包含所有可视的 JavaFX GUI 组件。JavaFX 场景由 `javafx.scene.Scene` 类表示。必须在 [Stage（舞台）](../core/stage.md#在-stage-上设置-scene)上设置 `Scene` 对象才能使其可见。在本 JavaFX `Scene` 教程中，我将向您展示如何创建 `Scene` 对象并向其添加 GUI 组件。

The JavaFX `Scene` object is the root of the JavaFX Scene graph. In other words, the JavaFX Scene contains all the visual JavaFX GUI components inside it. A JavaFX Scene is represented by the class `javafx.scene.Scene`. A `Scene` object has to be set on a [Stage](../core/stage.md#在-stage-上设置-scene) to be visible. In this JavaFX `Scene` tutorial I will show you how to create a `Scene` object and add GUI components to it.

## 创建 `Scene`

您可以通过 JavaFX `Scene` 的构造函数创建一个它的对象。您必须传递一个根 JavaFX GUI 组件作为参数，该组件将充当要在 `Scene` 中显示的根视图。以下是创建 JavaFX `Scene` 对象的示例：

You create a JavaFX `Scene` object via its constructor. As parameter you must pass the root JavaFX GUI component that is to act as the root view to be displayed inside the `Scene`. Here is an example of creating a JavaFX `Scene` object:

```java{2}
VBox  vBox  = new VBox(); // 创建一个 VBox 布局组件
Scene scene = new Scene(vBox); // 将此 VBox 布局组件作为参数传递给 Scene 的构造函数
```

## 在 `Stage` 上设置 `Scene`

为了使 JavaFX `Scene` 可见，必须在 JavaFX `Stage` 上设置它。以下是在 `Stage` 上设置 JavaFX `Scene` 的示例：

In order to make a JavaFX `Scene` visible, it must be set on a JavaFX `Stage`. Here is an example of setting a JavaFX `Scene` on a `Stage`:

```java{5}
VBox vBox = new VBox(new Label("A JavaFX Label"));
Scene scene = new Scene(vBox);

Stage stage = new Stage();
stage.setScene(scene);
```

JavaFX `Scene` 一次只能附加到一个 `Stage` 上，`Stage` 一次也只能显示一个 `Scene`。

A JavaFX `Scene` can be attached to only a single `Stage` at a time, and `Stage` can also only display one `Scene` at a time.

## 场景图（Scene Graph）

正如 [JavaFX 概述](../prepare/overview.md#场景图-scene-graph) 中提到的，_场景图_ 由附加到给定 JavaFX `Scene` 对象的所有 _节点_ 组成。每个 `Scene` 对象都有自己的场景图。

As mentioned in the [JavaFX Overview](../prepare/overview.md#场景图-scene-graph), the _scene graph_ consists of all the _nodes_ which are attached to a given JavaFX `Scene` object. Each `Scene` object has its own scene graph.

场景图有且仅有一个根节点。其它节点可以附加到树状数据结构中的根节点（树也是一种图）。

The scene graph has a single root node. Other nodes can be attached to the root node in a tree-like data structure (a tree is a kind of graph).

## `Scene` 光标样式

可以设置 JavaFX `Scene` 的光标样式。光标样式是显示在光标（指针）位置的小图标。您可以通过 `setCursor()` 方法设置 `Scene` 的光标样式。下面是设置 JavaFX `Scene` 的光标样式的示例：

It is possible to set the mouse cursor of a JavaFX `Scene`. The mouse cursor is the little icon that is being displayed at the location of the mouse cursor (pointer). You set the mouse cursor of a `Scene` via the `setCursor()` method. Here is an example of setting the mouse cursor of a JavaFX `Scene`:

```java
scene.setCursor(Cursor.OPEN_HAND);
```

`javafx.scene.Cursor` 类包含许多常量，可用于指定要显示的光标样式。其中一些常量是：

The `javafx.scene.Cursor` class contains a lot of constants you can use to specify which mouse cursor you want to display. Some of these constants are:

- `Cursor.OPEN_HAND`
- `Cursor.CLOSED_HAND`
- `Cursor.CROSSHAIR`
- `Cursor.DEFAULT`
- `Cursor.HAND`
- `Cursor.WAIT`
- `Cursor.H_RESIZE`
- `Cursor.V_RESIZE`
- `Cursor.MOVE`
- `Cursor.TEXT`

实际上还有更多的常量。欢迎自己尝试使用下在 `Cursor` 类中找到的常量。

There are a few more. Just play with the constants found in the `Cursor` class and see for yourself.
