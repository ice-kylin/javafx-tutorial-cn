import{r as c,o as l,c as i,b as a,a as s,w as t,F as u,e as p,d as n}from"./app.918e623c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=p('<h1 id="pane-\u7A97\u683C" tabindex="-1"><a class="header-anchor" href="#pane-\u7A97\u683C" aria-hidden="true">#</a> Pane\uFF08\u7A97\u683C\uFF09</h1><p>JavaFX <em>\u7A97\u683C</em> \u7C7B\u662F\u4E00\u4E2A\u5E03\u5C40\u5BB9\u5668\uFF0C\u53EF\u4EE5\u5728\u5185\u90E8\u5305\u542B\u5176\u5B83 JavaFX \u7EC4\u4EF6\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u5E03\u5C40\u3002\u5B9E\u9645\u4E0A\uFF0CJavaFX Pane \u7C7B\u5B9E\u9645\u4E0A\u5E76\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u5E03\u5C40\u7B97\u6CD5\u3002Pane \u7C7B\u53EA\u662F\u7B80\u5355\u7684\u5728\u7EC4\u4EF6\u81EA\u8EAB\u60F3\u8981\u663E\u793A\u7684\u4F4D\u7F6E\u663E\u793A\u5B83\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0CPane \u7C7B\u4F7F\u7528\u5176\u5B50\u7EC4\u4EF6\u6307\u5B9A\u7684 <code>layoutX</code> \u548C <code>layoutY</code> \u6765\u786E\u5B9A\u5728\u54EA\u91CC\u663E\u793A\u5B83\u4EEC\u3002</p><p>The JavaFX <em>Pane</em> class is a layout container which can contain other JavaFX components internally, and lay them out. Actually, the JavaFX Pane class does not actually provide any layout algorithm. The Pane class simply displays the components it contains at the locations the components themselves want to be located. In other words, the Pane class uses the <code>layoutX</code> and <code>layoutY</code> specified by its child components to determine where to display them.</p>',3),h=n("JavaFX Pane \u7C7B \u2014\u2014 "),m=a("code",null,"javafx.scene.layout.Pane",-1),b=n(" \u662F "),_={href:"http://tutorials.jenkov.com/javafx/region.html",target:"_blank",rel:"noopener noreferrer"},v=n("JavaFX Region"),g=n(" \u7C7B\u7684\u5B50\u7C7B\uFF0C\u56E0\u6B64\u5B83\u7EE7\u627F\u4E86\u6240\u6709 Region \u7C7B\u529F\u80FD\u3002\u8FD9\u5305\u62EC\u8FB9\u6846\u3001\u586B\u5145\u3001\u80CC\u666F\u8BBE\u7F6E\u7B49\u529F\u80FD\u3002"),y=n("The JavaFX Pane class, "),f=a("code",null,"javafx.scene.layout.Pane",-1),w=n(", is a subclass of the "),P={href:"http://tutorials.jenkov.com/javafx/region.html",target:"_blank",rel:"noopener noreferrer"},x=n("JavaFX Region"),X=n(" class, so it inherits all of the Region class functionality. That includes functionality like borders, padding, background settings etc."),F=p(`<h2 id="\u521B\u5EFA\u4E00\u4E2A-pane" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A-pane" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A <code>Pane</code></h2><p>\u60A8\u53EA\u9700\u901A\u8FC7\u5176\u6807\u51C6\u7684\u7A7A\u53C2\u6784\u9020\u5668\u5373\u53EF\u521B\u5EFA JavaFX \u7A97\u683C\u3002\u4E0B\u9762\u662F\u521B\u5EFA JavaFX \u7A97\u683C\u5B9E\u4F8B\u7684\u793A\u4F8B\uFF1A</p><p>You create a JavaFX Pane simply via its standard no-arg constructor. Here is an example of creating a JavaFX Pane instance:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Pane</span> pane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5C06\u7EC4\u4EF6\u6DFB\u52A0\u5230-pane" tabindex="-1"><a class="header-anchor" href="#\u5C06\u7EC4\u4EF6\u6DFB\u52A0\u5230-pane" aria-hidden="true">#</a> \u5C06\u7EC4\u4EF6\u6DFB\u52A0\u5230 <code>Pane</code></h2>`,5),J=n("\u60A8\u53EF\u4EE5\u901A\u8FC7 "),j=a("code",null,"getChildren()",-1),E=n(" \u65B9\u6CD5\u83B7\u53D6\u5176\u5B50\u8282\u70B9\u5217\u8868\uFF0C\u7136\u540E\u5C06\u9879\u76EE\u6DFB\u52A0\u5230\u8BE5\u5217\u8868\u4E2D\u4EE5\u6DFB\u52A0\u9879\u76EE\u5230 JavaFX \u7A97\u683C\u3002\u4EE5\u4E0B\u662F\u5C06 "),L=n("Label\uFF08\u6807\u7B7E\uFF09"),S=n("\u6DFB\u52A0\u5230 JavaFX \u7A97\u683C\u7684\u793A\u4F8B\uFF1A"),A=n("You add items to JavaFX Pane by obtaining its list of children via "),B=a("code",null,"getChildren()",-1),C=n(", and then add the items to that list. Here is an example of adding a "),Y=n("Label"),R=n(" to a JavaFX Pane:"),H=p(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Pane</span>  pane  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pane<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Pane&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u591A\u6B21\u91CD\u590D\u6700\u540E\u4E00\u884C\uFF0C\u5219\u4F1A\u5C06\u591A\u4E2A Label \u5B9E\u4F8B\u6DFB\u52A0\u5230\u7A97\u683C\u4E2D\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u9664\u975E\u60A8\u66F4\u6539\u6DFB\u52A0\u6807\u7B7E\u7684 layoutX \u548C / \u6216 layoutY \u5C5E\u6027\uFF0C\u5426\u5219\u6240\u6709 Label \u5B9E\u4F8B\u90FD\u5C06\u663E\u793A\u5728\u76F8\u540C\u7684 X \u548C Y \u5750\u6807\u4F4D\u7F6E \u2014\u2014 \u610F\u5473\u7740\u5F7C\u6B64\u91CD\u53E0\u3002</p><p>If you repeat the last line multiple times, you will add multiple Label instances to the Pane. Just keep in mind, that unless you change the layoutX and / or layoutY properties of the added Labels, all the Label instances will be displayed in the same X and Y position - meaning on top of each other.</p><h2 id="\u5C06-pane-\u6DFB\u52A0\u5230\u573A\u666F\u56FE\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5C06-pane-\u6DFB\u52A0\u5230\u573A\u666F\u56FE\u4E2D" aria-hidden="true">#</a> \u5C06 <code>Pane</code> \u6DFB\u52A0\u5230\u573A\u666F\u56FE\u4E2D</h2>`,4),T=n("\u8FD9\u662F\u5C06 JavaFX \u7A97\u683C\u6DFB\u52A0\u5230 JavaFX \u573A\u666F\u56FE\u7684\u793A\u4F8B \u2014\u2014 \u901A\u8FC7\u5C06\u7A97\u683C\u8BBE\u7F6E\u4E3A "),q=n("Scene\uFF08\u573A\u666F\uFF09"),I=n("\u7684\u6839\u8282\u70B9\uFF1A"),N=n("Here is an example of adding a JavaFX Pane to the JavaFX scene graph - by setting the Pane as the root node of a "),V=n("Scene"),D=n(":"),z=p(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">Label</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">Pane</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaneExample</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">launch</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> primaryStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pane</span> pane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        pane<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Pane&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>pane<span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,1);function G(K,M){const o=c("ExternalLinkIcon"),e=c("RouterLink");return l(),i(u,null,[k,a("p",null,[h,m,b,a("a",_,[v,s(o)]),g]),a("p",null,[y,f,w,a("a",P,[x,s(o)]),X]),F,a("p",null,[J,j,E,s(e,{to:"/basic-control/label.html"},{default:t(()=>[L]),_:1}),S]),a("p",null,[A,B,C,s(e,{to:"/basic-control/label.html"},{default:t(()=>[Y]),_:1}),R]),H,a("p",null,[T,s(e,{to:"/core/scene.html#%E5%9C%A8-stage-%E4%B8%8A%E8%AE%BE%E7%BD%AE-scene"},{default:t(()=>[q]),_:1}),I]),a("p",null,[N,s(e,{to:"/core/scene.html#%E5%9C%A8-stage-%E4%B8%8A%E8%AE%BE%E7%BD%AE-scene"},{default:t(()=>[V]),_:1}),D]),z],64)}var U=r(d,[["render",G]]);export{U as default};