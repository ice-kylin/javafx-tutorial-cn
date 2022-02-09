import{e}from"./app.918e623c.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=e(`<h1 id="combobox-\u7EC4\u5408\u6846" tabindex="-1"><a class="header-anchor" href="#combobox-\u7EC4\u5408\u6846" aria-hidden="true">#</a> ComboBox\uFF08\u7EC4\u5408\u6846\uFF09</h1><p>JavaFX ComboBox \u63A7\u4EF6\u4F7F\u7528\u6237\u80FD\u591F\u4ECE\u9884\u5B9A\u4E49\u7684\u9009\u9879\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u9009\u9879\uFF0C\u6216\u8005\u5982\u679C\u6CA1\u6709\u4E00\u4E2A\u9884\u5B9A\u4E49\u7684\u9009\u9879\u4E0E\u7528\u6237\u60F3\u8981\u9009\u62E9\u7684\u9009\u9879\u5339\u914D\uFF0C\u5219\u53EF\u4EE5\u952E\u5165\u53E6\u4E00\u4E2A\u503C\u3002JavaFX ComboBox \u63A7\u4EF6\u7531 <code>javafx.scene.control.ComboBox</code> \u7C7B\u8868\u793A\u3002\u8FD9\u4E2A JavaFX ComboBox \u6559\u7A0B\u5C06\u89E3\u91CA\u5982\u4F55\u4F7F\u7528 <code>ComboBox</code> \u7C7B\u3002</p><p>The JavaFX ComboBox control enables users to choose an option from a predefined list of choices, or type in another value if none of the predefined choices matches what the user want to select. The JavaFX ComboBox control is represented by the class <code>javafx.scene.control.ComboBox</code> . This JavaFX ComboBox tutorial will explain how to use the <code>ComboBox</code> class.</p><h2 id="creating-a-combobox" tabindex="-1"><a class="header-anchor" href="#creating-a-combobox" aria-hidden="true">#</a> Creating a ComboBox</h2><p>You create a <code>ComboBox</code> simply by creating a new instance of the <code>ComboBox</code> class. Here is a JavaFX <code>ComboBox</code> instantiation example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ComboBox comboBox = new ComboBox();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="adding-choices-to-a-combobox" tabindex="-1"><a class="header-anchor" href="#adding-choices-to-a-combobox" aria-hidden="true">#</a> Adding Choices to a ComboBox</h2><p>You can add choices to a <code>ComboBox</code> by obtaining its item collection and add items to it. Here is an example that adds choices to a JavaFX <code>ComboBox</code> :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>comboBox.getItems().add(&quot;Choice 1&quot;);
comboBox.getItems().add(&quot;Choice 2&quot;);
comboBox.getItems().add(&quot;Choice 3&quot;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="adding-a-combobox-to-the-scene-graph" tabindex="-1"><a class="header-anchor" href="#adding-a-combobox-to-the-scene-graph" aria-hidden="true">#</a> Adding a ComboBox to the Scene Graph</h2><p>To make a <code>ComboBox</code> visible you must add it to the scene graph. This means that you must add the <code>ComboBox</code> to a <code>Scene</code> object or to some layout component which is then attached to the <code>Scene</code> object.</p><p>Here is an example showing how to add a JavaFX <code>ComboBox</code> to the scene graph:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.jenkov.javafx.controls;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;


public class ComboBoxExperiments extends Application  {


    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle(&quot;ComboBox Experiment 1&quot;);

        ComboBox comboBox = new ComboBox();

        comboBox.getItems().add(&quot;Choice 1&quot;);
        comboBox.getItems().add(&quot;Choice 2&quot;);
        comboBox.getItems().add(&quot;Choice 3&quot;);


        HBox hbox = new HBox(comboBox);

        Scene scene = new Scene(hbox, 200, 120);
        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {
        Application.launch(args);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>The application resulting from running this example would look similar to this:</p><p><img src="http://tutorials.jenkov.com/images/java-javafx/javafx-combobox-1.png" alt="A JavaFX ComboBox displayed via the scene graph"></p><h2 id="making-the-combobox-editable" tabindex="-1"><a class="header-anchor" href="#making-the-combobox-editable" aria-hidden="true">#</a> Making the ComboBox Editable</h2><p>A <code>ComboBox</code> is not editable by default. That means, that by default the user cannot enter anything themselves, but only choose from the predefined list of options. To make a <code>ComboBox</code> editable you must call the <code>setEditable()</code> method of the <code>ComboBox</code>. Here is an example making a JavaFX <code>ComboBox</code> editable:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>comboBox.setEditable(true);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once the <code>ComboBox</code> is editable the user can type in values into the <code>ComboBox</code>. The entered value is also read via the <code>getValue()</code> method as explained earlier. The following screenthot shows a JavaFX <code>ComboBox</code> which is editable, and with a custom value entered:</p><p><img src="http://tutorials.jenkov.com/images/java-javafx/javafx-combobox-2.png" alt="A JavaFX ComboBox with a custom value entered."></p><h2 id="reading-the-selected-value" tabindex="-1"><a class="header-anchor" href="#reading-the-selected-value" aria-hidden="true">#</a> Reading the Selected Value</h2><p>You can read the selected value of a <code>ComboBox</code> via its <code>getValue()</code> method. If no choice is selected, the <code>getValue()</code> method returns <code>null</code>. Here is an example of calling <code>getValue()</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>String value = (String) comboBox.getValue();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="listening-for-selection" tabindex="-1"><a class="header-anchor" href="#listening-for-selection" aria-hidden="true">#</a> Listening for Selection</h2><p>It is possible to listen for selection changes in a JavaFX ComboBox by setting an action listener on the ComboBox via its <code>setOnAction()</code> method. Here is an example of setting an action listener on a ComboBox which reads what value was selected in the ComboBox:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ComboBox comboBox = new ComboBox();

comboBox.getItems().add(&quot;Choice 1&quot;);
comboBox.getItems().add(&quot;Choice 2&quot;);
comboBox.getItems().add(&quot;Choice 3&quot;);

comboBox.setOnAction((event) -&gt; {
    int selectedIndex = comboBox.getSelectionModel().getSelectedIndex();
    Object selectedItem = comboBox.getSelectionModel().getSelectedItem();

    System.out.println(&quot;Selection made: [&quot; + selectedIndex + &quot;] &quot; + selectedItem);
    System.out.println(&quot;   ComboBox.getValue(): &quot; + comboBox.getValue());
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,26);function s(t,c){return n}var r=o(a,[["render",s]]);export{r as default};
