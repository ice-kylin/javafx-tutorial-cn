import{r as p,o as c,c as l,b as s,a as t,w as e,F as i,e as o,d as n}from"./app.918e623c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=o(`<h1 id="vbox-\u5782\u76F4\u76D2\u5B50" tabindex="-1"><a class="header-anchor" href="#vbox-\u5782\u76F4\u76D2\u5B50" aria-hidden="true">#</a> VBox\uFF08\u5782\u76F4\u76D2\u5B50\uFF09</h1><p>JavaFX VBox \u7EC4\u4EF6\u662F\u4E00\u4E2A\u5E03\u5C40\u7EC4\u4EF6\uFF0C\u5B83\u5C06\u5176\u6240\u6709\u5B50\u8282\u70B9\uFF08\u7EC4\u4EF6\uFF09\u653E\u7F6E\u5728\u5782\u76F4\u7684\u4E00\u5217\u4E2D \u2014\u2014 \u5F7C\u6B64\u4E0A\u4E0B\u6392\u5E03\u3002JavaFX VBox \u7EC4\u4EF6\u7531 <code>javafx.scene.layout.VBox</code> \u7C7B\u8868\u793A\u3002\u5728\u8FD9\u4E2A JavaFX VBox \u6559\u7A0B\u4E2D\uFF0C\u6211\u5C06\u6DF1\u5165 VBox \u7EC4\u4EF6\u7528\u4E8E\u63A7\u4EF6\u5E03\u5C40\u7684\u5404\u79CD\u9009\u9879\u3002</p><p>The JavaFX VBox component is a layout component which positions all its child nodes (components) in a vertical column - on top of each other. The JavaFX VBox component is represented by the class <code>javafx.scene.layout.VBox</code> . In this JavaFX VBox tutorial I will take a deeper look at the various options the VBox component has for the layout of controls.</p><h2 id="\u521B\u5EFA-vbox" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-vbox" aria-hidden="true">#</a> \u521B\u5EFA <code>VBox</code></h2><p>\u8981\u4F7F\u7528 JavaFX VBox \u7EC4\u4EF6\uFF0C\u60A8\u5FC5\u987B\u9996\u5148\u521B\u5EFA VBox \u7C7B\u7684\u5B9E\u4F8B\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u7684\u6784\u9020\u5668\u521B\u5EFA\u4E00\u4E2A <code>VBox</code> \u5B9E\u4F8B\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p>To use the JavaFX VBox component you must first create an instance of the VBox class. You create a <code>VBox</code> instance using its constructor like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>VBox</code> \u8FD8\u6709\u4E00\u4E2A\u6784\u9020\u5668\u63A5\u53D7\u4E00\u4E2A\u53EF\u53D8\u957F\u5EA6\u7684\u5B83\u5E94\u8BE5\u5E03\u5C40\u7684\u7EC4\u4EF6\u5217\u8868\u3002\u4EE5\u4E0B\u662F\u5982\u4F55\u6267\u884C\u6B64\u64CD\u4F5C\u7684\u793A\u4F8B\uFF1A</p><p><code>VBox</code> also has a constructor which takes a variable length list of components it should layout. Here is an example of how to do that:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button Number 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Button</span> button2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button Number 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button1<span class="token punctuation">,</span> button2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,10),h=n("\u8FD9\u4E2A "),k=s("code",null,"VBox",-1),x=n(" \u793A\u4F8B\u5C06\u4E24\u4E2A "),b=n("Button\uFF08\u6309\u94AE\uFF09"),m=n("\u5B9E\u4F8B\u5728\u4E00\u5217\u4E2D\u5782\u76F4\u6392\u5E03\u3002"),g=n("This "),v=s("code",null,"VBox",-1),B=n(" example will layout the two "),y=n("Button"),V=n(" instances one on top of the other in a vertical column."),f=o(`<h2 id="\u5411\u573A\u666F\u56FE\u4E2D\u6DFB\u52A0-vbox" tabindex="-1"><a class="header-anchor" href="#\u5411\u573A\u666F\u56FE\u4E2D\u6DFB\u52A0-vbox" aria-hidden="true">#</a> \u5411\u573A\u666F\u56FE\u4E2D\u6DFB\u52A0 <code>VBox</code></h2><p>\u8981\u4F7F <code>VBox</code> \u5B9E\u4F8B\u53EF\u89C1\uFF0C\u5FC5\u987B\u5C06\u5176\u6DFB\u52A0\u5230\u573A\u666F\u56FE\u4E2D\u3002\u8FD9\u610F\u5473\u7740\u5C06\u5176\u6DFB\u52A0\u5230 <code>Scene</code> \u5BF9\u8C61\uFF0C\u6216\u8005\u4F5C\u4E3A\u9644\u52A0\u5230 <code>Scene</code> \u5BF9\u8C61\u7684\u53E6\u4E00\u4E2A\u5E03\u5C40\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u3002</p><p>For a <code>VBox</code> instance to be visible it must be added to the scene graph. This means adding it to a <code>Scene</code> object, or as child of another layout component which is attached to a <code>Scene</code> object.</p><p>\u8FD9\u662F\u4E00\u4E2A\u5C06\u5E26\u6709\u4E24\u4E2A <code>Button</code> \u5B9E\u4F8B\u7684 JavaFX <code>VBox</code> \u9644\u52A0\u5230\u573A\u666F\u56FE\u7684\u793A\u4F8B\uFF1A</p><p>Here is an example that attaches a JavaFX <code>VBox</code> with the two <code>Button</code> instances to the scene graph:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>jenkov<span class="token punctuation">.</span>javafx<span class="token punctuation">.</span>layouts</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">Button</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">VBox</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VBoxExperiments</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span><span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> primaryStage<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    primaryStage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;VBox Experiment 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Button</span> button1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button Number 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Button</span> button2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button Number 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button1<span class="token punctuation">,</span> button2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>vbox<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    primaryStage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    primaryStage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8FD0\u884C\u4E0A\u8FF0 JavaFX <code>VBox</code> \u793A\u4F8B\u7684\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><p>The result of running the above JavaFX <code>VBox</code> example is an application that looks like this:</p><p><img src="http://tutorials.jenkov.com/images/java-javafx/javafx-vbox-1.png" alt="A JavaFX VBox component displayed in the scene graph."></p><h2 id="\u5B50\u8282\u70B9\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8282\u70B9\u95F4\u8DDD" aria-hidden="true">#</a> \u5B50\u8282\u70B9\u95F4\u8DDD</h2><p>\u5728\u524D\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>VBox</code> \u5C06\u8282\u70B9\uFF08\u6309\u94AE\u63A7\u4EF6\uFF09\u5B9A\u4F4D\u5728\u53E6\u4E00\u4E2A\u8282\u70B9\u7684\u6B63\u4E0B\u65B9\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728 <code>VBox</code> \u6784\u9020\u5668\u4E2D\u63D0\u4F9B\u95F4\u9699\u5927\u5C0F\u6765\u4F7F <code>VBox</code> \u5728\u5176\u5D4C\u5957\u63A7\u4EF6\u4E4B\u95F4\u63D2\u5165\u4E00\u4E9B\u7A7A\u683C\u3002 \u8FD9\u662F\u4E00\u4E2A\u5728 <code>VBox</code> \u4E2D\u8BBE\u7F6E\u5D4C\u5957\u63A7\u4EF6\u4E4B\u95F4\u7684\u7A7A\u95F4\u7684\u793A\u4F8B\uFF1A</p><p>In the earlier example the <code>VBox</code> positioned the nodes (button controls) right under the other. You can make the <code>VBox</code> insert some space between its nested controls by providing the space in the <code>VBox</code> constructor. Here is an example of setting the space between nested controls in an <code>VBox</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> button1<span class="token punctuation">,</span> button2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06 <code>VBox</code> \u5E03\u5C40\u7EC4\u4EF6\u4E2D\u7684\u63A7\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u8BBE\u7F6E\u4E3A 20\u3002</p><p>This example sets the spacing between the controls in the <code>VBox</code> layout component to 20.</p><p>\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>setSpacing()</code> \u65B9\u6CD5\u8BBE\u7F6E\u5D4C\u5957\u63A7\u4EF6\u4E4B\u95F4\u7684\u7A7A\u95F4\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p>You can also set the space between the nested controls using the <code>setSpacing()</code> method, like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>vbox<span class="token punctuation">.</span><span class="token function">setSpacing</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06\u5D4C\u5957\u63A7\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u8BBE\u7F6E\u4E3A 50\u3002</p><p>This example will set the spacing between nested controls to 50.</p><h2 id="\u5B50\u8282\u70B9\u8FB9\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8282\u70B9\u8FB9\u8DDD" aria-hidden="true">#</a> \u5B50\u8282\u70B9\u8FB9\u8DDD</h2>`,21),_=n("\u60A8\u53EF\u4EE5\u4F7F\u7528\u9759\u6001 "),w=s("code",null,"setMargin()",-1),S=n(" \u65B9\u6CD5\u4E3A JavaFX VBox \u7684\u5B50\u8282\u70B9\u8BBE\u7F6E\u8FB9\u8DDD\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 "),j=s("code",null,"setMargin()",-1),F=n(" \u65B9\u6CD5\u8BBE\u7F6E "),T=n("Button\uFF08\u6309\u94AE\uFF09"),E=n("\u8FB9\u8DDD\u7684\u793A\u4F8B\uFF1A"),X=n("You can set the margin for child nodes of a JavaFX VBox using the static "),J=s("code",null,"setMargin()",-1),C=n(" method. Here is an example of setting the margin around a "),P=n("Button"),N=n(" using the "),A=s("code",null,"setMargin()",-1),q=n(" method:"),I=o(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span><span class="token punctuation">.</span><span class="token function">setMargin</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Insets</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06 VBox \u5185 Button \u5468\u56F4\u7684\u8FB9\u8DDD\u8BBE\u7F6E\u4E3A\u6BCF\u8FB9 10\u3002</p><p>This example sets the margin around the Button inside the VBox to 10 on each side.</p><h2 id="\u5B50\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> \u5B50\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F</h2><p>\u7531\u4E8E JavaFX VBox \u662F\u4E00\u4E2A\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u5305\u542B\u5176\u5B83 JavaFX \u7EC4\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u6307\u5B9A VBox \u5982\u4F55\u5BF9\u9F50\u5B83\u5305\u542B\u7684\u7EC4\u4EF6\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7 VBox <code>setAlignment()</code> \u65B9\u6CD5\u6765\u5B9E\u73B0\u3002\u4E0B\u9762\u662F\u4E3A JavaFX VBox \u8BBE\u7F6E\u5B50\u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F\u7684\u793A\u4F8B\uFF1A</p><p>Since the JavaFX VBox is a container component, meaning it contains other JavaFX components, you can specify how the VBox is to align the components it contains. You do so via the VBox <code>setAlignment()</code> method. Here is an example of setting the alignment of child nodes for a JavaFX VBox:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>vbox<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Pos</span><span class="token punctuation">.</span>BASELINE_CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06\u4F7F VBox \u5728\u5782\u76F4\u65B9\u5411\u4E0A\u6CBF\u7740\u57FA\u7EBF\u3001\u6C34\u5E73\u65B9\u5411\u4E0A\u5C45\u4E2D\u5B9A\u4F4D\u5176\u5B50\u8282\u70B9\u3002</p><p>This example will make the VBox position its child nodes along the baseline (vertically) of the vertical line, and from the center of the line and out (horizontally).</p><p>JavaFX VBox \u63A7\u4EF6\u652F\u6301\u4EE5\u4E0B\u5BF9\u9F50\u65B9\u5F0F\uFF1A</p><p>The JavaFX VBox control supports the following alignment options:</p><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</th><th style="text-align:center;">\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</th></tr></thead><tbody><tr><td style="text-align:center;"><code>Pos.BASELINE_LEFT</code></td><td style="text-align:center;">\u57FA\u7EBF</td><td style="text-align:center;">\u9760\u5DE6</td></tr><tr><td style="text-align:center;"><code>Pos.BASELINE_CENTER</code></td><td style="text-align:center;">\u57FA\u7EBF</td><td style="text-align:center;">\u5C45\u4E2D</td></tr><tr><td style="text-align:center;"><code>Pos.BASELINE_RIGHT</code></td><td style="text-align:center;">\u57FA\u7EBF</td><td style="text-align:center;">\u9760\u53F3</td></tr><tr><td style="text-align:center;"><code>Pos.BOTTOM_LEFT</code></td><td style="text-align:center;">\u5E95\u90E8</td><td style="text-align:center;">\u9760\u5DE6</td></tr><tr><td style="text-align:center;"><code>Pos.BOTTOM_CENTER</code></td><td style="text-align:center;">\u5E95\u90E8</td><td style="text-align:center;">\u5C45\u4E2D</td></tr><tr><td style="text-align:center;"><code>Pos.BOTTOM_RIGHT</code></td><td style="text-align:center;">\u5E95\u90E8</td><td style="text-align:center;">\u9760\u53F3</td></tr><tr><td style="text-align:center;"><code>Pos.CENTER_LEFT</code></td><td style="text-align:center;">\u5C45\u4E2D</td><td style="text-align:center;">\u9760\u5DE6</td></tr><tr><td style="text-align:center;"><code>Pos.CENTER</code></td><td style="text-align:center;">\u5C45\u4E2D</td><td style="text-align:center;">\u5C45\u4E2D</td></tr><tr><td style="text-align:center;"><code>Pos.CENTER_RIGHT</code></td><td style="text-align:center;">\u5C45\u4E2D</td><td style="text-align:center;">\u9760\u53F3</td></tr><tr><td style="text-align:center;"><code>Pos.TOP_LEFT</code></td><td style="text-align:center;">\u9876\u90E8</td><td style="text-align:center;">\u9760\u5DE6</td></tr><tr><td style="text-align:center;"><code>Pos.TOP_CENTER</code></td><td style="text-align:center;">\u9876\u90E8</td><td style="text-align:center;">\u5C45\u4E2D</td></tr><tr><td style="text-align:center;"><code>Pos.TOP_RIGHT</code></td><td style="text-align:center;">\u9876\u90E8</td><td style="text-align:center;">\u9760\u53F3</td></tr></tbody></table><h3 id="\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D</h3><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B50\u8282\u70B9\u5BF9\u9F50\u529F\u80FD\u5C06 VBox \u7684\u5B50\u8282\u70B9\u6C34\u5E73\u5C45\u4E2D\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5C06 VBox \u7684\u5B50\u8282\u70B9\u6C34\u5E73\u5C45\u4E2D\uFF1A</p><p>You can use the child node alignment features to horizontally center the child nodes of a VBox. Here is an example showing how to center the child nodes of a VBox horizontally:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>vbox<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Pos</span><span class="token punctuation">.</span>BASELINE_CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5B50\u8282\u70B9\u5782\u76F4\u589E\u957F" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8282\u70B9\u5782\u76F4\u589E\u957F" aria-hidden="true">#</a> \u5B50\u8282\u70B9\u5782\u76F4\u589E\u957F</h2><p>\u60A8\u53EF\u4EE5\u6307\u5B9A VBox \u7684\u5B50\u8282\u70B9\u662F\u5426\u5E94\u5782\u76F4\u589E\u957F\u4EE5\u586B\u5145 VBox \u5185\u7684\u4EFB\u4F55\u53EF\u7528\u7A7A\u95F4\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7 VBox <code>setVgrow()</code> \u9759\u6001\u65B9\u6CD5\u6267\u884C\u6B64\u64CD\u4F5C\u3002\u60A8\u5FC5\u987B\u6307\u5B9A\u4E3A\u54EA\u4E2A\u5B50\u8282\u70B9\u8BBE\u7F6E\u89C4\u5219\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06\u5B50\u8282\u70B9\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9 <code>setVgrow()</code> \u6765\u5B9E\u73B0\uFF0C\u540C\u65F6\u8FD8\u5FC5\u987B\u5C06\u5782\u76F4\u6269\u5C55\u7B56\u7565\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9<code>setVgrow()</code>\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5982\u679C VBox \u5185\u6709\u53EF\u7528\u7A7A\u95F4\uFF0C\u5219\u544A\u8BC9\u5B50 Button \u5782\u76F4\u6269\u5C55\uFF1A</p><p>You can specify whether a child node of a VBox should grow vertically to fill any available space available inside the VBox. You do so via the VBox <code>setVgrow()</code> static method. You have to specify which child node the rule is set for. You do so by passing the child node as parameter to <code>setVgrow()</code>. You also have to pass the vertical expansion policy as parameter to <code>setVgrow()</code>. Here is an example of telling that a child Button to expand vertically if space is available inside the VBox:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span><span class="token punctuation">.</span><span class="token function">setVgrow</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token class-name">Priority</span><span class="token punctuation">.</span>ALWAYS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Priority \u7C7B\u5305\u542B\u4EE5\u4E0B\u5E38\u91CF\uFF0C\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6269\u5C55\u7B56\u7565\uFF1A</p><p>The Priority class contains the following constants you can use to set the expansion policy:</p><ul><li><code>Policy.ALWAYS</code></li><li><code>Policy.SOMETIMES</code></li><li><code>Policy.NEVER</code></li></ul><p>\u8BF7\u8BB0\u4F4F\uFF0C\u53EA\u6709\u5F53 VBox \u6BD4\u5176\u5B50\u9879\u7684\u9996\u9009\u9AD8\u5EA6\u4E4B\u548C\u9AD8\u65F6\uFF0CVBox \u624D\u4F1A\u6709\u989D\u5916\u7684\u5782\u76F4\u7A7A\u95F4\u53EF\u7528\u3002</p><p>Please keep in mind that the VBox will only have extra vertical space available if the child nodes do not have the same preferred height, or if you explicitly set a preferred height on the VBox that is larger than the preferred height of its child nodes.</p><h2 id="\u586B\u5145\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u586B\u5145\u5BBD\u5EA6" aria-hidden="true">#</a> \u586B\u5145\u5BBD\u5EA6</h2><p>JavaFX VBox <code>fillWidth</code> \u5C5E\u6027\u53EF\u7528\u4E8E\u544A\u8BC9 VBox \u63A7\u4EF6\u662F\u5426\u5E94\u8BE5\u6269\u5C55\u5176\u5B50\u9879\u7684\u5BBD\u5EA6\u4EE5\u586B\u5145 VBox \u7684\u6574\u4E2A\u5BBD\u5EA6\uFF0C\u6216\u8005\u5C06\u5176\u5B50\u9879\u4FDD\u6301\u5728\u5176\u9996\u9009\u5BBD\u5EA6\u3002</p><p>The JavaFX VBox <code>fillWidth</code> property can be used to tell the VBox control whether it should expand the width of its children to fill out the whole width of the VBox, or keep its children at their preferred widths.</p><p><code>fillWidth</code> \u5C5E\u6027\u53EA\u5F71\u54CD\u5BBD\u5EA6\u53EF\u4EE5\u5B9E\u9645\u6539\u53D8\u7684\u5B50\u7EC4\u4EF6\u3002\u4F8B\u5982\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Button \u4E0D\u4F1A\u66F4\u6539\u5176\u5BBD\u5EA6\u3002\u5B83\u7684\u6700\u5927\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u5176\u9996\u9009\u5BBD\u5EA6\u3002 \u4F46\u662F\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06 Button \u6216\u8981\u5D4C\u5957\u5728 VBox \u5185\u7684\u4EFB\u4F55\u5176\u5B83\u7EC4\u4EF6\u7684\u6700\u5927\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A\u4E0E\u5176\u9996\u9009\u503C\u4E0D\u540C\u7684\u503C\u6765\u8986\u76D6\u5B83\u3002</p><p>The <code>fillWidth</code> property only affects child components which widths can actually change. For instance, a Button does not change its width by default. It&#39;s max width is set to its preferred width. However, you can override that by setting the max width of the Button, or any other component you want to nest inside the VBox, to a value different than its preferred value.</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5C55\u793A <code>fillWidth</code> \u5C5E\u6027\u5982\u4F55\u5DE5\u4F5C\u7684\u793A\u4F8B\uFF1A</p><p>Here is an example showing how the <code>fillWidth</code> property works:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">setMaxWidth</span><span class="token punctuation">(</span><span class="token number">99999.0D</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// or Double.MAX_VALUE;</span>

<span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

vbox<span class="token punctuation">.</span><span class="token function">setFillWidth</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="vbox-css-\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#vbox-css-\u6837\u5F0F" aria-hidden="true">#</a> VBox CSS \u6837\u5F0F</h2>`,34),L=n("\u50CF\u8BB8\u591A\u5176\u5B83 JavaFX \u63A7\u4EF6\u4E00\u6837\uFF0CVBox \u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 CSS \u8BBE\u7F6E\u6837\u5F0F\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 "),R=s("code",null,"setStyle()",-1),H=n(" \u65B9\u6CD5\u8BBE\u7F6E JavaFX VBox \u7EC4\u4EF6\u7684 CSS \u6837\u5F0F\u3002"),Y=n("CSS \u6837\u5F0F"),M=n("\u4E2D\u66F4\u8BE6\u7EC6\u5730\u4ECB\u7ECD\u4E86\u901A\u8FC7 CSS \u8BBE\u7F6E JavaFX \u63A7\u4EF6\u7684\u6837\u5F0F\uFF0C\u4F46\u6211\u5C06\u5728\u6B64\u5904\u7B80\u8981\u8BF4\u660E\u5982\u4F55\u8BBE\u7F6E JavaFX VBox \u7684 CSS \u6837\u5F0F\u3002\u4E0B\u9762\u662F\u8BBE\u7F6E JavaFX VBox \u7EC4\u4EF6\u7684 CSS \u6837\u5F0F\u7684\u793A\u4F8B\uFF1A"),O=n("Like many other JavaFX controls the VBox component can be styled via CSS. You set the CSS styles of the JavaFX VBox component via its "),W=s("code",null,"setStyle()",-1),G=n(" method. Styling JavaFX controls via CSS is covered in more detail in the "),z=n("CSS Styling"),D=n(", but I will briefly explain how to style a JavaFX VBox here. Here is an example of setting the CSS styles of a JavaFX VBox component:"),U=o(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>vbox<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token string">&quot;-fx-padding: 16;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>VBox \u7EC4\u4EF6\u652F\u6301\u4EE5\u4E0B CSS \u5C5E\u6027\uFF1A</p><p>The VBox component supports the following CSS properties:</p><table><thead><tr><th style="text-align:center;">CSS \u5C5E\u6027</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-fx-padding</code></td><td style="text-align:center;">\u8BBE\u7F6E VBox \u8FB9\u7F18\u548C\u6700\u5916\u5C42\u5B50\u8282\u70B9\u8FB9\u7F18\u4E4B\u95F4\u7684\u5185\u8FB9\u8DDD\uFF08Sets the padding between the edge of the VBox and the edge of the outermost child nodes\uFF09</td></tr><tr><td style="text-align:center;"><code>-fx-border-style</code></td><td style="text-align:center;">\u8BBE\u7F6E VBox \u7684\u8FB9\u6846\u6837\u5F0F\uFF0C\u4F7F\u4E00\u4E2A\u53EF\u89C1\u7684\u8FB9\u6846\u56F4\u7ED5\u5B83\uFF08Sets the border style of the VBox, in case you want a visible border around it\uFF09</td></tr><tr><td style="text-align:center;"><code>-fx-border-width</code></td><td style="text-align:center;">\u8BBE\u7F6E\u8FB9\u6846\u5BBD\u5EA6\uFF08Sets the border width\uFF09</td></tr><tr><td style="text-align:center;"><code>-fx-border-insets</code></td><td style="text-align:center;">\u8BBE\u7F6E\u8FB9\u6846\u63D2\u56FE\uFF08Sets the border insets\uFF09</td></tr><tr><td style="text-align:center;"><code>-fx-border-radius</code></td><td style="text-align:center;">\u8BBE\u7F6E\u5706\u89D2\uFF08Sets the border radius (of corners)\uFF09</td></tr><tr><td style="text-align:center;"><code>-fx-border-color</code></td><td style="text-align:center;">\u8BBE\u7F6E\u8FB9\u6846\u989C\u8272\uFF08Sets the border color\uFF09</td></tr></tbody></table>`,4);function K(Q,Z){const a=p("RouterLink");return c(),l(i,null,[d,s("p",null,[h,k,x,t(a,{to:"/basic-control/button.html"},{default:e(()=>[b]),_:1}),m]),s("p",null,[g,v,B,t(a,{to:"/basic-control/button.html"},{default:e(()=>[y]),_:1}),V]),f,s("p",null,[_,w,S,j,F,t(a,{to:"/basic-control/button.html"},{default:e(()=>[T]),_:1}),E]),s("p",null,[X,J,C,t(a,{to:"/basic-control/button.html"},{default:e(()=>[P]),_:1}),N,A,q]),I,s("p",null,[L,R,H,t(a,{to:"/core/css-styling.html"},{default:e(()=>[Y]),_:1}),M]),s("p",null,[O,W,G,t(a,{to:"/core/css-styling.html"},{default:e(()=>[z]),_:1}),D]),U],64)}var sn=r(u,[["render",K]]);export{sn as default};
