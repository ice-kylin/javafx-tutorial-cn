import{r as p,o as l,c as i,b as a,a as s,w as t,F as r,d as n,e as c}from"./app.918e623c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=a("h1",{id:"text-\u6587\u672C",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#text-\u6587\u672C","aria-hidden":"true"},"#"),n(" Text\uFF08\u6587\u672C\uFF09")],-1),k={class:"custom-container details"},x=a("summary",null,"\u76EE\u5F55",-1),m={class:"table-of-contents"},v=n("Text \u793A\u4F8B"),_=n("\u8BBE\u7F6E\u6587\u672C"),b=n("\u8BBE\u7F6E\u5B57\u4F53"),f=n("\u8BBE\u7F6E\u586B\u5145\u989C\u8272"),T=n("\u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272"),g=n("Text \u7684 X \u548C Y \u5750\u6807"),F=n("Text \u539F\u70B9"),X=n("\u591A\u884C\u6587\u672C"),j=n("Text \u5220\u9664\u7EBF"),w=n("Text \u4E0B\u5212\u7EBF"),J=n("\u5B57\u4F53\u5E73\u6ED1\u6280\u672F"),y=c(`<p><em>JavaFX \u6587\u672C</em> \u63A7\u4EF6\u53EF\u4EE5\u5728 JavaFX GUI \u4E2D\u663E\u793A\u6587\u672C\u3002JavaFX \u6587\u672C\u63A7\u4EF6\u7531 JavaFX <code>javafx.scene.text.Text</code> \u7C7B\u8868\u793A\u3002\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u6587\u672C\u63A7\u4EF6\u4F7F\u7528\u7684\u5B57\u4F53\u3001\u6587\u672C\u5927\u5C0F\u3001\u5B57\u4F53\u88C5\u9970\u548C\u8BB8\u591A\u5176\u5B83\u5185\u5BB9\u3002</p><p>The <em>JavaFX Text</em> control can display a text inside a JavaFX GUI. The JavaFX Text control is represented by the JavaFX class <code>javafx.scene.text.Text</code>. You can set the font to be used by the Text control, text size, font decorations and many other things.</p><p>\u7531\u4E8E JavaFX Text \u63A7\u4EF6\u662F JavaFX Shape \u7C7B\u7684\u5B50\u7C7B\uFF0C\u56E0\u6B64 Text \u7C7B\u5177\u6709\u6240\u6709\u4E0E\u5176\u5B83 JavaFX Shape \u5BF9\u8C61\u76F8\u540C\u7684\u65B9\u6CD5\u53EF\u7528 \u2014\u2014 \u4F8B\u5982\u586B\u5145\u548C\u63CF\u8FB9\u989C\u8272\u548C\u6837\u5F0F\u3002</p><p>Since the JavaFX Text control is a subclass of the JavaFX Shape class, the Text class has all the same methods available that other JavaFX Shape objects do - e.g. fill and stroke color and style.</p><p>JavaFX Text \u63A7\u4EF6\u4E5F\u662F JavaFX Node \u7C7B\u7684\u5B50\u7C7B\uFF0C\u56E0\u6B64 Text \u7C7B\u4E5F\u5177\u6709\u6240\u6709\u4E0E\u5176\u5B83 JavaFX Node \u5BF9\u8C61\u76F8\u540C\u7684\u65B9\u6CD5\u53EF\u7528\uFF0C\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u5BF9\u5176\u8BBE\u7F6E\u6548\u679C\u7B49\u7B49\u3002</p><p>The JavaFX Text control is also a subclass of the JavaFX Node class, so the Text class also has all the same methods available as any other JavaFX Node has, meaning you can set effects on it etc.</p><h2 id="text-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#text-\u793A\u4F8B" aria-hidden="true">#</a> <code>Text</code> \u793A\u4F8B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u3001\u5B8C\u6574\u7684 JavaFX \u6587\u672C\u793A\u4F8B\uFF1A</p><p>Here is a simple, complete JavaFX text example:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">VBox</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Text</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TextExample</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">launch</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> primaryStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&quot;This is a JavaFX text.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
        primaryStage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u8BBE\u7F6E\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6587\u672C" aria-hidden="true">#</a> \u8BBE\u7F6E\u6587\u672C</h2><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 <code>setText()</code> \u65B9\u6CD5\u8BBE\u7F6E JavaFX Text \u5BF9\u8C61\u7684\u6587\u672C\u3002\u4E0B\u9762\u662F\u901A\u8FC7 <code>setText()</code> \u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u6587\u672C\u7684\u793A\u4F8B\uFF1A</p><p>You can set the text of a JavaFX Text object via its <code>setText()</code> method. Here is an example of setting the text of a JavaFX Text control via <code>setText()</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

text<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;This is the text to display&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8BBE\u7F6E\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5B57\u4F53" aria-hidden="true">#</a> \u8BBE\u7F6E\u5B57\u4F53</h2><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 <code>setFont()</code> \u65B9\u6CD5\u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u7684\u5B57\u4F53\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u901A\u8FC7 <code>setFont()</code> \u65B9\u6CD5\u8BBE\u7F6E JavaFX Text \u5BF9\u8C61\u5B57\u4F53\u7684\u793A\u4F8B\uFF1A</p><p>You can set the font of a JavaFX Text control via its <code>setFont()</code> method. Here is an example of setting the font of a JavaFX Text object via its <code>setFont()</code> method:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&quot;Some Text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

text<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span><span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token string">&quot;Arial&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06 Text \u63A7\u4EF6\u4F7F\u7528\u7684\u5B57\u4F53\u8BBE\u7F6E\u4E3A\u5C06\u6587\u672C\u5448\u73B0\u4E3A Arial \u5B57\u4F53\u3002</p><p>This example sets the font to be used by the Text control to render the text to be of the font family Arial.</p>`,20),S=n("\u6B64\u793A\u4F8B\u4E2D\u4F7F\u7528\u7684 "),Y={href:"http://tutorials.jenkov.com/javafx/fonts.html",target:"_blank",rel:"noopener noreferrer"},E=n("JavaFX \u5B57\u4F53"),V=n(" \u6240\u7528\u7684\u7C7B\u662F "),q=a("code",null,"javafx.scene.text.Font",-1),P=n(" \u7C7B\u3002Font \u7C7B\u5B9E\u9645\u4E0A\u8FD8\u5141\u8BB8\u60A8\u6307\u5B9A\u5B57\u4F53\u7C97\u7EC6\u548C\u5B57\u4F53\u5927\u5C0F\u3002\u8FD9\u662F\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u4FEE\u6539\u540E\u8FD8\u8BBE\u7F6E\u4E86 JavaFX Text \u63A7\u4EF6\u7684\u5B57\u4F53\u7C97\u7EC6\u548C\u5927\u5C0F\uFF1A"),L=n("The "),B={href:"http://tutorials.jenkov.com/javafx/fonts.html",target:"_blank",rel:"noopener noreferrer"},N=n("JavaFX Font"),A=n(" class used in this example is the "),C=a("code",null,"javafx.scene.text.Font",-1),O=n(" class. The Font class actually also lets you specify the font weight and font size. Here is the example above, modified to also set font weight and font size for the JavaFX Text control:"),H=c(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&quot;Some Text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

text<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span><span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token string">&quot;Arial&quot;</span><span class="token punctuation">,</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>BOLD<span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06\u5B57\u4F53\u7C97\u7EC6\u8BBE\u7F6E\u4E3A\u7C97\u4F53\u3001\u5B57\u4F53\u5927\u5C0F\u8BBE\u7F6E\u4E3A 36\u3002\u6B64\u793A\u4F8B\u4E2D\u4F7F\u7528\u7684 FontWeight \u7C7B\u5177\u4F53\u662F <code>javafx.scene.text.FontWeight</code> \u7C7B\u3002</p><p>This example sets the font weight to bold and font size to 36. The FontWeight class used in this example is the <code>javafx.scene.text.FontWeight</code> class.</p><h2 id="\u8BBE\u7F6E\u586B\u5145\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u586B\u5145\u989C\u8272" aria-hidden="true">#</a> \u8BBE\u7F6E\u586B\u5145\u989C\u8272</h2>`,4),I=n("\u6587\u672C\u4F5C\u4E3A\u4E00\u4E2A\u5F62\u72B6\uFF08Shape\uFF09\u7C7B\u7684\u5B50\u7C7B\uFF0C\u60A8\u53EF\u4EE5\u8BBE\u7F6E JavaFX \u6587\u672C\u63A7\u4EF6\u7684\u586B\u5145\u989C\u8272\u3002\u586B\u5145\u989C\u8272\u662F\u7528\u4E8E\u7ED8\u5236\u6587\u672C\u7684\u201C\u5185\u90E8\u201D\u989C\u8272\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 "),R=a("code",null,"setFill()",-1),W=n(" \u65B9\u6CD5\u8BBE\u7F6E Text \u63A7\u4EF6\u7684\u586B\u5145\u989C\u8272\uFF0C\u8BE5\u65B9\u6CD5\u5C06 "),G={href:"http://tutorials.jenkov.com/javafx/color.html",target:"_blank",rel:"noopener noreferrer"},U=n("JavaFX Color"),D=n(" \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u3002\u4E0B\u9762\u662F\u901A\u8FC7 "),z=a("code",null,"setFill()",-1),M=n(" \u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u7684\u586B\u5145\u989C\u8272\u7684\u793A\u4F8B\uFF1A"),K=n('Being a Shape, you can set the fill color of a JavaFX Text control. The fill color is the "inside" color used to draw the text. You set the fill color of a Text control via its '),Q=a("code",null,"setFill()",-1),Z=n(" method which takes a "),$={href:"http://tutorials.jenkov.com/javafx/color.html",target:"_blank",rel:"noopener noreferrer"},nn=n("JavaFX Color"),an=n(" object as parameter. Here is an example of setting the fill color of a JavaFX Text control via "),sn=a("code",null,"setFill()",-1),en=n(":"),tn=c(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setFill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>YELLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272" aria-hidden="true">#</a> \u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272</h2>`,2),on=n("\u6587\u672C\u4F5C\u4E3A\u4E00\u4E2A\u5F62\u72B6\uFF08Shape\uFF09\u7C7B\u7684\u5B50\u7C7B\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u7684\u63CF\u8FB9\u989C\u8272\u3002\u63CF\u8FB9\u989C\u8272\u662F\u7528\u4E8E\u7ED8\u5236\u6587\u672C\u7684\u201C\u8F6E\u5ED3\u201D\u6216\u201C\u8FB9\u754C\u201D\u7684\u989C\u8272\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EC5\u4F7F\u7528\u586B\u5145\u989C\u8272\u6E32\u67D3\u6587\u672C\uFF0C\u4F46\u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272\u53EF\u4EE5\u6DFB\u52A0\u5176\u5B83\u597D\u7684\u6548\u679C\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 "),cn=a("code",null,"setStroke()",-1),pn=n(" \u65B9\u6CD5\u8BBE\u7F6E Text \u63A7\u4EF6\u7684\u63CF\u8FB9\u989C\u8272\uFF0C\u8BE5\u65B9\u6CD5\u5C06 "),ln={href:"http://tutorials.jenkov.com/javafx/color.html",target:"_blank",rel:"noopener noreferrer"},rn=n("JavaFX Color"),un=n(" \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u3002\u4E0B\u9762\u662F\u901A\u8FC7 "),dn=a("code",null,"setStroke()",-1),hn=n(" \u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u7684\u63CF\u8FB9\u989C\u8272\u7684\u793A\u4F8B\uFF1A"),kn=n('Being a Shape, you can also set the stroke color of a JavaFX Text control. The stroke color is the "outline" or "boundary" color used to draw the text. By default, text is rendered only using the fill color, but setting a stroke color can add a nice effect. You set the stroke color of a Text control via its '),xn=a("code",null,"setStroke()",-1),mn=n(" method which takes a "),vn={href:"http://tutorials.jenkov.com/javafx/color.html",target:"_blank",rel:"noopener noreferrer"},_n=n("JavaFX Color"),bn=n(" object as parameter. Here is an example of setting the stroke color of a JavaFX Text control via "),fn=a("code",null,"setStroke()",-1),Tn=n(":"),gn=c(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setStroke</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>GREEN<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="text-\u7684-x-\u548C-y-\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#text-\u7684-x-\u548C-y-\u5750\u6807" aria-hidden="true">#</a> <code>Text</code> \u7684 X \u548C Y \u5750\u6807</h2>`,2),Fn=n("JavaFX Text \u63A7\u4EF6\u7684 X \u548C Y \u5750\u6807\u51B3\u5B9A\u4E86 Text \u63A7\u4EF6\u5728\u5176\u7236\u5BB9\u5668\u5143\u7D20\u5185\u7684\u663E\u793A\u4F4D\u7F6E \u2014\u2014 \u524D\u63D0\u662F\u7236\u5BB9\u5668\u9075\u5FAA\u6B64\u4F4D\u7F6E\uFF08"),Xn={href:"http://tutorials.jenkov.com/javafx/pane.html",target:"_blank",rel:"noopener noreferrer"},jn=n("Pane"),wn=n(" \u4F1A\uFF0C"),Jn={href:"http://tutorials.jenkov.com/javafx/vbox.html",target:"_blank",rel:"noopener noreferrer"},yn=n("VBox"),Sn=n(" \u4E0D\u4F1A\uFF09\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176\u65B9\u6CD5 "),Yn=a("code",null,"setX()",-1),En=n(" \u548C "),Vn=a("code",null,"setY()",-1),qn=n(" \u8BBE\u7F6E Text \u63A7\u4EF6\u7684 X \u548C Y \u5750\u6807\u3002\u4E0B\u9762\u662F\u8BBE\u7F6E JavaFX Text \u63A7\u4EF6\u7684 X \u548C Y \u5750\u6807\u7684\u793A\u4F8B\uFF1A"),Pn=n("The X and Y position of a JavaFX Text control determines where inside its parent container element the Text control is displayed - provided the parent container respects this position ("),Ln={href:"http://tutorials.jenkov.com/javafx/pane.html",target:"_blank",rel:"noopener noreferrer"},Bn=n("Pane"),Nn=n(" does, "),An={href:"http://tutorials.jenkov.com/javafx/vbox.html",target:"_blank",rel:"noopener noreferrer"},Cn=n("VBox"),On=n(" does not). You can set the X and Y position of a Text control via its methods "),Hn=a("code",null,"setX()",-1),In=n(" and "),Rn=a("code",null,"setY()",-1),Wn=n(". Here is an example of setting the X and Y position of a JavaFX Text control:"),Gn=c(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setX</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
text<span class="token punctuation">.</span><span class="token function">setY</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="text-\u539F\u70B9" tabindex="-1"><a class="header-anchor" href="#text-\u539F\u70B9" aria-hidden="true">#</a> <code>Text</code> \u539F\u70B9</h2><p>JavaFX Text \u63A7\u4EF6\u6709\u4E00\u4E2A <em>origin</em> \u5C5E\u6027\uFF0C\u5B83\u63A7\u5236\u6587\u672C\u76F8\u5BF9\u4E8E Text \u63A7\u4EF6\u7684 Y \u5750\u6807\u7684\u663E\u793A\u65B9\u5F0F\u3002\u53EF\u4EE5\u4F7F\u7528\u5176 <code>setTextOrigin()</code> \u65B9\u6CD5\u8BBE\u7F6E\u539F\u70B9\u3002\u4EE5\u4E0B\u662F\u8BBE\u7F6E <code>Text</code> \u539F\u70B9\u7684\u793A\u4F8B\uFF1A</p><p>The JavaFX Text control has an <em>origin</em> which controls how the text is displayed relative to the Y position of the Text control. You set the origin using the Text <code>setTextOrigin()</code> method. Here is an example of setting the Text origin:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setTextOrigin</span><span class="token punctuation">(</span><span class="token class-name">VPos</span><span class="token punctuation">.</span>BASELINE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>setTextOrigin()</code> \u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A VPos \u7C7B\u578B\u7684\u53C2\u6570\u3002VPos \u7C7B\u5305\u542B\u4EE5\u4E0B\u5E38\u91CF\uFF0C\u60A8\u53EF\u4EE5\u4ECE\u4E2D\u8FDB\u884C\u9009\u62E9\uFF1A</p><p>The <code>setTextOrigin()</code> method takes a VPos parameter. The VPos class contains the following constants you can choose between:</p><ul><li><code>VPos.BASELINE</code><ul><li><code>VPos.BASELINE</code> \u8868\u793A Text \u63A7\u4EF6\u7684 Y \u5750\u6807\u88AB\u5F53\u4F5C\u663E\u793A\u6587\u672C\u7684 Y \u8F74\u57FA\u7EBF\u3002\u6587\u672C\u663E\u793A\u5728\u57FA\u7EBF\u4E0A\u65B9\uFF0C\u4E00\u4E9B\u5B57\u7B26\u5EF6\u4F38\u5230\u57FA\u7EBF\u4E0B\u65B9</li><li><code>VPos.BASELINE</code> means that the Y position of the Text control is interpreted to mean the Y baseline of the displayed text. The text is displayed just above the baseline, with some characters extending below the baseline</li></ul></li><li><code>VPos.BOTTOM</code><ul><li><code>VPos.BOTTOM</code> \u8868\u793A Text \u63A7\u4EF6\u7684 Y \u5750\u6807\u88AB\u5F53\u4F5C\u663E\u793A\u6587\u672C\u7684\u5E95\u90E8\u3002 \u8FD9\u4F4E\u4E8E BASELINE</li><li><code>VPos.BOTTOM</code> means that the Y position of the Text control is interpreted to mean the bottom the displayed text. This is lower than BASELINE</li></ul></li><li><code>VPos.CENTER</code><ul><li><code>VPos.CENTER</code> \u8868\u793A Text \u63A7\u4EF6\u7684 Y \u5750\u6807\u88AB\u5F53\u4F5C\u663E\u793A\u7684\u6587\u672C\u7684\u5782\u76F4\u4E2D\u5FC3</li><li><code>VPos.CENTER</code> means that the Y position of the Text control is interpreted to mean the center of the text vertically</li></ul></li><li><code>VPos.TOP</code><ul><li><code>VPos.TOP</code> \u8868\u793A Text \u63A7\u4EF6\u7684 Y \u5750\u6807\u88AB\u5F53\u4F5C\u5782\u76F4\u6587\u672C\u7684\u9876\u90E8</li><li><code>VPos.TOP</code> means that the Y position of the Text control is interpreted to mean the top of the text vertically</li></ul></li></ul><h2 id="\u591A\u884C\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C</h2><p>JavaFX Text \u63A7\u4EF6\u5C06\u6839\u636E\u4EE5\u4E0B\u89C4\u5219\u5C06\u5176\u663E\u793A\u7684\u6587\u672C\u5206\u6210\u591A\u884C\uFF1A</p><p>The JavaFX Text control will break the text it displays on to multiple lines based on these rules:</p><ul><li>\u5982\u679C\u6587\u672C\u5305\u542B\u6362\u884C\u7B26\uFF08<code>\\n</code>\uFF09\uFF08If the text contains a line break ( <code>\\n</code> )\uFF09</li><li>\u5982\u679C\u6587\u672C\u5BBD\u5EA6\u8D85\u8FC7 Text \u63A7\u4EF6\u4E0A\u8BBE\u7F6E\u7684\u6362\u884C\u5BBD\u5EA6\uFF08If the text width exceeds a wrapping width set on the Text control\uFF09</li></ul><p>\u8FD9\u662F\u7B2C\u4E00\u4E2A\u663E\u793A\u5305\u542B\u6362\u884C\u7B26\u7684\u6587\u672C\u7684\u793A\u4F8B\uFF1A</p><p>Here is first an example showing a text that contains a line break:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&quot;This is a JavaFX text.\\nLine 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Text \u63A7\u4EF6\u5C06\u5728 Line \u4E4B\u524D\u7684\u6587\u672C\u5904\u6362\u884C\uFF0C\u56E0\u4E3A\u5B57\u7B26\u4E32\u5305\u542B\u4E86\u6362\u884C\u7B26\u3002</p><p>The Text control will break the text before &quot;Line&quot; because the String contains a line break character.</p><p>\u4E0B\u9762\u662F\u5728 JavaFX Text \u63A7\u4EF6\u4E0A\u8BBE\u7F6E\u6587\u672C\u6362\u884C\u5BBD\u5EA6\u7684\u793A\u4F8B\uFF1A</p><p>Here is an example of setting a text wrapping width on the JavaFX Text control:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Text</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string">&quot;This is a longer JavaFX text.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
text<span class="token punctuation">.</span><span class="token function">setWrappingWidth</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>JavaFX Text \u63A7\u4EF6\u5C06\u5C1D\u8BD5\u5728\u5355\u8BCD\u4E4B\u95F4\u7684\u6587\u672C\u5904\u6362\u884C\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u5728\u7279\u5B9A\u67D0\u4E2A\u5355\u8BCD\u4E4B\u540E\u7684\u6587\u672C\u5BBD\u5EA6\u6BD4\u6362\u884C\u5BBD\u5EA6\u5BBD\uFF0C\u5219 Text \u63A7\u4EF6\u5C06\u5728\u8BE5\u5355\u8BCD\u4E4B\u524D\u6362\u884C\uFF0C\u4F7F\u6587\u672C\u6BD4\u6362\u884C\u5BBD\u5EA6\u66F4\u5BBD\u3002</p><p>The JavaFX Text control will attempt to break the text between words. Thus, if after a specific word the text width is wider than the wrapping width, the Text control will wrap the text before that word that makes the text wider than the wrapping width.</p><h2 id="text-\u5220\u9664\u7EBF" tabindex="-1"><a class="header-anchor" href="#text-\u5220\u9664\u7EBF" aria-hidden="true">#</a> <code>Text</code> \u5220\u9664\u7EBF</h2><p>JavaFX Text \u63A7\u4EF6\u4F7F\u60A8\u80FD\u591F\u5C06 <em><s>\u5220\u9664\u7EBF</s></em> \u6548\u679C\u88C5\u9970\u5E94\u7528\u4E8E\u5B83\u663E\u793A\u7684\u6587\u672C\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 <code>setStrikethrough()</code> \u65B9\u6CD5\u542F\u7528\u5220\u9664\u7EBF\u88C5\u9970\uFF0C\u5C06 <code>true</code> \u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u3002 <code>false</code> \u7684\u53C2\u6570\u503C\u5C06\u7981\u7528\u5220\u9664\u7EBF\u6548\u679C\u3002\u4E0B\u9762\u662F\u901A\u8FC7 <code>setStrikethrough()</code> \u65B9\u6CD5\u542F\u7528 JavaFX Text <em><s>\u5220\u9664\u7EBF</s></em> \u6548\u679C\u88C5\u9970\u7684\u793A\u4F8B\uFF1A</p><p>The JavaFX Text control enables you to apply a <em><s>strikethrough</s></em> decoration to the text it displays. You enable the strikethrough decoration via the Text <code>setStrikethrough()</code> method, passing a value of <code>true</code> as parameter. A parameter value of <code>false</code> will disable the strikethrough effect. Here is an example of enabling the JavaFX Text <em><s>strikethrough</s></em> decoration via the <code>setStrikethrough()</code> method:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setStrikethrough</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="text-\u4E0B\u5212\u7EBF" tabindex="-1"><a class="header-anchor" href="#text-\u4E0B\u5212\u7EBF" aria-hidden="true">#</a> <code>Text</code> \u4E0B\u5212\u7EBF</h2><p>JavaFX Text \u63A7\u4EF6\u4F7F\u60A8\u80FD\u591F\u5C06 <em><u>\u4E0B\u5212\u7EBF</u></em> \u88C5\u9970\u5E94\u7528\u4E8E\u5B83\u663E\u793A\u7684\u6587\u672C\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5176 <code>setUnderline()</code> \u65B9\u6CD5\u542F\u7528\u4E0B\u5212\u7EBF\u88C5\u9970\uFF0C\u5C06 <code>true</code> \u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u3002<code>false</code> \u7684\u53C2\u6570\u503C\u5C06\u7981\u7528\u4E0B\u5212\u7EBF\u88C5\u9970\u3002\u4E0B\u9762\u662F\u901A\u8FC7 <code>setUnderline()</code> \u65B9\u6CD5\u542F\u7528 JavaFX Text <em><u>\u4E0B\u5212\u7EBF</u></em> \u88C5\u9970\u7684\u793A\u4F8B\uFF1A</p><p>The JavaFX Text control enables you to apply an <em>underline</em> decoration to the text it displays. You enable the underline decoration via the Text <code>setUnderline()</code> method, passing a value of <code>true</code> as parameter. A parameter value of <code>false</code> will disable the underline decoration. Here is an example of enabling the JavaFX Text <em>underline</em> decoration via the <code>setUnderline()</code> method:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setUnderline</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5B57\u4F53\u5E73\u6ED1\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u5E73\u6ED1\u6280\u672F" aria-hidden="true">#</a> \u5B57\u4F53\u5E73\u6ED1\u6280\u672F</h2><p>JavaFX Text \u63A7\u4EF6\u5305\u542B\u4E24\u79CD\u4E0D\u540C\u7684\u5B57\u4F53\u5E73\u6ED1\uFF08\u6297\u952F\u9F7F\uFF09\u6280\u672F\uFF0C\u60A8\u53EF\u4EE5\u4ECE\u4E2D\u8FDB\u884C\u9009\u62E9\u3002\u7B2C\u4E00\u79CD\u6280\u672F\u79F0\u4E3A LCD\uFF0C\u7B2C\u4E8C\u79CD\u79F0\u4E3A GREY\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7 <code>setFontSmoothingType()</code> \u65B9\u6CD5\u9009\u62E9 Text \u63A7\u4EF6\u5E94\u4F7F\u7528\u7684\u5B57\u4F53\u5E73\u6ED1\u6280\u672F\u3002\u4EE5\u4E0B\u662F\u5C06 LCD \u548C GREY \u8BBE\u7F6E\u4E3A JavaFX Text \u63A7\u4EF6\u4E0A\u7684\u5B57\u4F53\u5E73\u6ED1\u6280\u672F\u7684\u793A\u4F8B\uFF1A</p><p>The JavaFX Text control contains two different font smoothing (antialiasing) techniques you can choose between. The first technique is called LCD, and the second is called GRAY. You can choose which font smoothing technique the Text control should use via the <code>setFontSmoothingType()</code> method. Here are examples of setting both LCD and GRAY as font smoothing technique on a JavaFX Text control:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">setFontSmoothingType</span><span class="token punctuation">(</span><span class="token class-name">FontSmoothingType</span><span class="token punctuation">.</span>GRAY<span class="token punctuation">)</span><span class="token punctuation">;</span>

text<span class="token punctuation">.</span><span class="token function">setFontSmoothingType</span><span class="token punctuation">(</span><span class="token class-name">FontSmoothingType</span><span class="token punctuation">.</span>LCD<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u60A8\u5FC5\u987B\u5C1D\u8BD5\u8FD9\u4E24\u79CD\u5B57\u4F53\u5E73\u6ED1\u6280\u672F\u4EE5\u67E5\u770B\u5B83\u4EEC\u5F53\u4E2D\u7684\u54EA\u4E00\u79CD\u6700\u9002\u5408\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>Which of the two font smoothing techniques fits best to your application you will have to experiment with.</p>`,36);function Un(Dn,zn){const e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),i(r,null,[h,a("details",k,[x,a("nav",m,[a("ul",null,[a("li",null,[s(e,{to:"#text-\u793A\u4F8B"},{default:t(()=>[v]),_:1})]),a("li",null,[s(e,{to:"#\u8BBE\u7F6E\u6587\u672C"},{default:t(()=>[_]),_:1})]),a("li",null,[s(e,{to:"#\u8BBE\u7F6E\u5B57\u4F53"},{default:t(()=>[b]),_:1})]),a("li",null,[s(e,{to:"#\u8BBE\u7F6E\u586B\u5145\u989C\u8272"},{default:t(()=>[f]),_:1})]),a("li",null,[s(e,{to:"#\u8BBE\u7F6E\u63CF\u8FB9\u989C\u8272"},{default:t(()=>[T]),_:1})]),a("li",null,[s(e,{to:"#text-\u7684-x-\u548C-y-\u5750\u6807"},{default:t(()=>[g]),_:1})]),a("li",null,[s(e,{to:"#text-\u539F\u70B9"},{default:t(()=>[F]),_:1})]),a("li",null,[s(e,{to:"#\u591A\u884C\u6587\u672C"},{default:t(()=>[X]),_:1})]),a("li",null,[s(e,{to:"#text-\u5220\u9664\u7EBF"},{default:t(()=>[j]),_:1})]),a("li",null,[s(e,{to:"#text-\u4E0B\u5212\u7EBF"},{default:t(()=>[w]),_:1})]),a("li",null,[s(e,{to:"#\u5B57\u4F53\u5E73\u6ED1\u6280\u672F"},{default:t(()=>[J]),_:1})])])])]),y,a("p",null,[S,a("a",Y,[E,s(o)]),V,q,P]),a("p",null,[L,a("a",B,[N,s(o)]),A,C,O]),H,a("p",null,[I,R,W,a("a",G,[U,s(o)]),D,z,M]),a("p",null,[K,Q,Z,a("a",$,[nn,s(o)]),an,sn,en]),tn,a("p",null,[on,cn,pn,a("a",ln,[rn,s(o)]),un,dn,hn]),a("p",null,[kn,xn,mn,a("a",vn,[_n,s(o)]),bn,fn,Tn]),gn,a("p",null,[Fn,a("a",Xn,[jn,s(o)]),wn,a("a",Jn,[yn,s(o)]),Sn,Yn,En,Vn,qn]),a("p",null,[Pn,a("a",Ln,[Bn,s(o)]),Nn,a("a",An,[Cn,s(o)]),On,Hn,In,Rn,Wn]),Gn],64)}var Qn=u(d,[["render",Un]]);export{Qn as default};