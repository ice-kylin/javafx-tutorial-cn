import{r as c,o as l,c as i,b as s,a,w as t,F as r,d as n,e as p}from"./app.918e623c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=s("h1",{id:"hyperlink-\u8D85\u94FE\u63A5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hyperlink-\u8D85\u94FE\u63A5","aria-hidden":"true"},"#"),n(" Hyperlink\uFF08\u8D85\u94FE\u63A5\uFF09")],-1),h={class:"custom-container details"},m=s("summary",null,"\u76EE\u5F55",-1),b={class:"table-of-contents"},_=n("Hyperlink \u793A\u4F8B"),v=n("\u521B\u5EFA Hyperlink"),y=n("\u8BBE\u7F6E Hyperlink \u6587\u672C"),g=n("\u8BBE\u7F6E Hyperlink \u5B57\u4F53"),f=n("\u8BBE\u7F6E Hyperlink \u52A8\u4F5C"),H=p(`<p><em>JavaFX \u8D85\u94FE\u63A5</em> \u63A7\u4EF6\u662F\u4E00\u4E2A\u548C\u6309\u94AE\u529F\u80FD\u7C7B\u4F3C\u7684\u6587\u672C\u3002\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A\u8D85\u94FE\u63A5\u4EE5\u5728\u7528\u6237\u5355\u51FB\u5B83\u65F6\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u5C31\u50CF\u7F51\u9875\u4E2D\u7684\u8D85\u94FE\u63A5\u4E00\u6837\u3002 <em>JavaFX Hyperlink</em> \u63A7\u4EF6\u7531 <code>javafx.scene.control.Hyperlink</code> \u7C7B\u8868\u793A\u3002</p><p>The <em>JavaFX Hyperlink</em> control is a text that functions as a button, meaning you can configure a Hyperlink to perform some action when the user clicks it. Just like a hyperlink in a web page. The <em>JavaFX Hyperlink</em> control is represented by the class <code>javafx.scene.control.Hyperlink</code>.</p><p>\u8FD9\u662F\u5C55\u793A JavaFX <code>Hyperlink</code> \u5916\u89C2\u7684\u5C4F\u5E55\u622A\u56FE\uFF1A</p><p>Here is a screenshot showing how a JavaFX <code>Hyperlink</code> looks:</p><p><img src="http://tutorials.jenkov.com/images/java-javafx/javafx-hyperlink-1.png" alt="JavaFX Hyperlink screenshot"></p><h2 id="hyperlink-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#hyperlink-\u793A\u4F8B" aria-hidden="true">#</a> <code>Hyperlink</code> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 <em>JavaFX \u8D85\u94FE\u63A5</em> \u793A\u4F8B\uFF1A</p><p>Here is a full <em>JavaFX Hyperlink</em> example:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">Hyperlink</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">VBox</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HyperlinkExample</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">launch</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> primaryStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;JavaFX App&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Hyperlink</span> link <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hyperlink</span><span class="token punctuation">(</span><span class="token string">&quot;Click Me!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">VBox</span> vBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>vBox<span class="token punctuation">,</span> <span class="token number">960</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        primaryStage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,9),x=n("\u6B64\u793A\u4F8B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 JavaFX \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u521B\u5EFA\u4E00\u4E2A "),F=s("code",null,"Hyperlink",-1),w=n("\uFF0C\u5C06\u5176\u63D2\u5165\u5230 "),J={href:"http://tutorials.jenkov.com/javafx/vbox.html",target:"_blank",rel:"noopener noreferrer"},X=n("JavaFX VBox"),j=n(" \u4E2D\uFF0C\u7136\u540E\u5C06\u5176\u6DFB\u52A0\u5230 "),S=n("JavaFX Scene\uFF08\u573A\u666F\uFF09"),q=n("\u3002\u7136\u540E\u5C06 "),B=s("code",null,"Scene",-1),T=n(" \u6DFB\u52A0\u5230 "),V=n("JavaFX Stage\uFF08\u821E\u53F0\uFF09"),C=n("\uFF0C\u6700\u540E\u4F7F\u5176\u53EF\u89C1\u3002"),N=n("This example is a full JavaFX application that creates a "),I=s("code",null,"Hyperlink",-1),L=n(", inserts it into a "),A={href:"http://tutorials.jenkov.com/javafx/vbox.html",target:"_blank",rel:"noopener noreferrer"},E=n("JavaFX VBox"),O=n(" which is then added to a "),M=n("JavaFX Scene"),R=n(". The "),D=s("code",null,"Scene",-1),W=n(" is then added to a "),Y=n("JavaFX Stage"),z=n(" which is then made visible."),G=p(`<h2 id="\u521B\u5EFA-hyperlink" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-hyperlink" aria-hidden="true">#</a> \u521B\u5EFA <code>Hyperlink</code></h2><p>\u4E3A\u4E86\u4F7F\u7528 JavaFX <code>Hyperlink</code> \u63A7\u4EF6\uFF0C\u60A8\u5FC5\u987B\u9996\u5148\u521B\u5EFA\u4E00\u4E2A <code>Hyperlink</code> \u7684\u5B9E\u4F8B\u3002\u4EE5\u4E0B\u662F\u521B\u5EFA JavaFX <code>Hyperlink</code> \u5B9E\u4F8B\u7684\u793A\u4F8B\uFF1A</p><p>In order to use a JavaFX <code>Hyperlink</code> control you must first create a <code>Hyperlink</code> instance. Here is an example of creating a JavaFX <code>Hyperlink</code> instance:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Hyperlink</span> link <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hyperlink</span><span class="token punctuation">(</span><span class="token string">&quot;Click me!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u8BBE\u7F6E-hyperlink-\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-hyperlink-\u6587\u672C" aria-hidden="true">#</a> \u8BBE\u7F6E <code>Hyperlink</code> \u6587\u672C</h2><p>\u53EF\u4EE5\u901A\u8FC7\u5176 <code>setText()</code> \u65B9\u6CD5\u66F4\u6539 JavaFX \u8D85\u94FE\u63A5\u7684\u6587\u672C\u3002\u4EE5\u4E0B\u662F\u66F4\u6539 JavaFX \u8D85\u94FE\u63A5\u6587\u672C\u7684\u793A\u4F8B\uFF1A</p><p>It is possible to change the text of a JavaFX Hyperlink via its <code>setText()</code> method. Here is an example of changing the text of a JavaFX Hyperlink:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Hyperlink</span> link <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hyperlink</span><span class="token punctuation">(</span><span class="token string">&quot;Click me!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

link<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;New link text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8BBE\u7F6E-hyperlink-\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-hyperlink-\u5B57\u4F53" aria-hidden="true">#</a> \u8BBE\u7F6E <code>Hyperlink</code> \u5B57\u4F53</h2>`,9),K=n("\u53EF\u4EE5\u901A\u8FC7\u5176 "),P=s("code",null,"setFont()",-1),Q=n(" \u65B9\u6CD5\u66F4\u6539 JavaFX \u8D85\u94FE\u63A5\u7684\u5B57\u4F53\u3002\u60A8\u53EF\u4EE5\u5728 "),U=n("JavaFX Fonts\uFF08\u5B57\u4F53\uFF09"),Z=n(" \u6559\u7A0B\u4E2D\u9605\u8BFB\u6709\u5173\u521B\u5EFA\u5B57\u4F53\u7684\u66F4\u591A\u4FE1\u606F\u3002\u4E0B\u9762\u662F\u8BBE\u7F6E JavaFX \u8D85\u94FE\u63A5\u5B57\u4F53\u7684\u793A\u4F8B\uFF1A"),$=n("It is possible to change the font of a JavaFX Hyperlink via its "),nn=s("code",null,"setFont()",-1),sn=n(" method. You can read more about creating fonts in "),an=n("JavaFX Fonts"),en=n(" tutorial. Here is an example of setting the font of a JavaFX Hyperlink:"),tn=p(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Hyperlink</span> link <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hyperlink</span><span class="token punctuation">(</span><span class="token string">&quot;Click Me!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Font</span> courierNewFontBold36 <span class="token operator">=</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token string">&quot;Courier New&quot;</span><span class="token punctuation">,</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>BOLD<span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

link<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>courierNewFontBold36<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u8BBE\u7F6E-hyperlink-\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-hyperlink-\u52A8\u4F5C" aria-hidden="true">#</a> \u8BBE\u7F6E <code>Hyperlink</code> \u52A8\u4F5C</h2><p>\u8981\u54CD\u5E94\u5BF9 JavaFX <code>Hyperlink</code> \u7684\u70B9\u51FB\uFF0C\u60A8\u9700\u8981\u5728 <code>Hyperlink</code> \u5B9E\u4F8B\u4E0A\u8BBE\u7F6E\u4E00\u4E2A\u52A8\u4F5C\u4FA6\u542C\u5668\u3002\u4E0B\u9762\u662F\u5728 JavaFX <code>Hyperlink</code> \u5B9E\u4F8B\u4E0A\u8BBE\u7F6E\u52A8\u4F5C\u4FA6\u542C\u5668\u7684\u793A\u4F8B\uFF1A</p><p>To respond to clicks on a JavaFX <code>Hyperlink</code> you set an action listener on the <code>Hyperlink</code> instance. Here is an example of setting an action listener on a JavaFX <code>Hyperlink</code> instance:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Hyperlink</span> link <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hyperlink</span><span class="token punctuation">(</span><span class="token string">&quot;Click me!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

link<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>e <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;The Hyperlink was clicked!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5);function pn(on,cn){const e=c("RouterLink"),o=c("ExternalLinkIcon");return l(),i(r,null,[d,s("details",h,[m,s("nav",b,[s("ul",null,[s("li",null,[a(e,{to:"#hyperlink-\u793A\u4F8B"},{default:t(()=>[_]),_:1})]),s("li",null,[a(e,{to:"#\u521B\u5EFA-hyperlink"},{default:t(()=>[v]),_:1})]),s("li",null,[a(e,{to:"#\u8BBE\u7F6E-hyperlink-\u6587\u672C"},{default:t(()=>[y]),_:1})]),s("li",null,[a(e,{to:"#\u8BBE\u7F6E-hyperlink-\u5B57\u4F53"},{default:t(()=>[g]),_:1})]),s("li",null,[a(e,{to:"#\u8BBE\u7F6E-hyperlink-\u52A8\u4F5C"},{default:t(()=>[f]),_:1})])])])]),H,s("p",null,[x,F,w,s("a",J,[X,a(o)]),j,a(e,{to:"/basic-control/core/scene.html"},{default:t(()=>[S]),_:1}),q,B,T,a(e,{to:"/basic-control/core/stage.html"},{default:t(()=>[V]),_:1}),C]),s("p",null,[N,I,L,s("a",A,[E,a(o)]),O,a(e,{to:"/basic-control/core/scene.html"},{default:t(()=>[M]),_:1}),R,D,W,a(e,{to:"/basic-control/core/stage.html"},{default:t(()=>[Y]),_:1}),z]),G,s("p",null,[K,P,Q,a(e,{to:"/basic-control/other-concept/fonts.html"},{default:t(()=>[U]),_:1}),Z]),s("p",null,[$,nn,sn,a(e,{to:"/basic-control/other-concept/fonts.html"},{default:t(()=>[an]),_:1}),en]),tn],64)}var un=u(k,[["render",pn]]);export{un as default};
