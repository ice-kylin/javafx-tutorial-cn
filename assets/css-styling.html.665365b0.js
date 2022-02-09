import{r as o,o as c,c as p,b as e,a as n,w as t,F as l,d as s,e as i}from"./app.918e623c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=e("h1",{id:"css-\u6837\u5F0F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-\u6837\u5F0F","aria-hidden":"true"},"#"),s(" CSS \u6837\u5F0F")],-1),S={class:"custom-container details"},h=e("summary",null,"\u76EE\u5F55",-1),y={class:"table-of-contents"},v=s("\u5E94\u7528 CSS \u6837\u5F0F\u7684\u65B9\u6CD5"),C=s("\u9ED8\u8BA4 CSS \u6837\u5F0F\u8868"),f=s("\u573A\u666F\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868"),b=s("\u7236\u8282\u70B9\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868"),m=s("\u7EC4\u4EF6\u6837\u5F0F\u5C5E\u6027"),k=s("JavaFX CSS \u5C5E\u6027"),g=i(`<p>JavaFX \u4F7F\u60A8\u80FD\u591F\u4F7F\u7528 CSS \u8BBE\u7F6E JavaFX \u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u5C31\u50CF\u60A8\u53EF\u4EE5\u4F7F\u7528 CSS \u8BBE\u7F6E\u7F51\u9875\u4E2D\u7684 HTML \u548C SVG \u5143\u7D20\u4E00\u6837\u3002JavaFX \u4F7F\u7528\u4E0E Web \u7684 CSS \u76F8\u540C\u7684 CSS \u8BED\u6CD5\uFF0C\u4F46 CSS \u5C5E\u6027\u7279\u5B9A\u4E8E JavaFX\uFF0C\u56E0\u6B64\u4E0E\u5B83\u4EEC\u7684 Web \u5BF9\u5E94\u7684\u5C5E\u6027\u540D\u79F0\u7565\u6709\u4E0D\u540C\u3002</p><p>JavaFX enables you to style JavaFX components using CSS, just like you can style HTML and SVG element in web pages with CSS. JavaFX uses the same CSS syntax as CSS for the web, but the CSS properties are specific to JavaFX and therefore have slightly different names than their web counterparts.</p><p>\u4F7F\u7528 CSS \u4E3A JavaFX \u5E94\u7528\u7A0B\u5E8F\u8BBE\u7F6E\u6837\u5F0F\u6709\u52A9\u4E8E\u60A8\u5C06\u6837\u5F0F\uFF08\u5916\u89C2\uFF09\u4E0E\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u5206\u5F00\u3002\u8FD9\u4F1A\u4F7F\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u66F4\u7B80\u6D01\uFF0C\u5E76\u66F4\u5BB9\u6613\u66F4\u6539\u5E94\u7528\u7A0B\u5E8F\u7684\u6837\u5F0F\u3002\u60A8\u65E0\u9700\u67E5\u770B Java \u4EE3\u7801\u5185\u90E8\u5373\u53EF\u66F4\u6539\u6837\u5F0F\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5171\u4EAB\u7684 CSS \u6837\u5F0F\u8868\u4E00\u6B21\u66F4\u6539\u591A\u4E2A\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002</p><p>Styling your JavaFX applications using CSS helps you separate styling (looks) from the application code. This results in cleaner application code and makes it easier to change the styling of the application. You do not have to look inside the Java code to change the styling. You can also change the styling for many components at once, by using shared CSS stylesheets.</p><p>\u5728\u672C JavaFX CSS \u6559\u7A0B\u4E2D\uFF0C\u6211\u5C06\u5E26\u60A8\u6DF1\u5165\u4E86\u89E3\u53EF\u4EE5\u5C06 CSS \u6837\u5F0F\u5E94\u7528\u4E8E JavaFX \u5E94\u7528\u7A0B\u5E8F\u7684\u591A\u79CD\u4E0D\u540C\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u8BBE\u7F6E\u6837\u5F0F\u548C\u4E0D\u53EF\u4EE5\u8BBE\u7F6E\u6837\u5F0F\u7684\u5185\u5BB9\u3002JavaFX CSS \u529F\u80FD\u975E\u5E38\u5148\u8FDB\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u4EC5\u4F7F\u7528 CSS \u505A\u5F88\u591A\u4E8B\u60C5\u3002</p><p>In this JavaFX CSS tutorial I will take a deeper look at the many different ways you can apply CSS styles to your JavaFX applications, as well as look at what can and cannot be styled. The JavaFX CSS features are quite advanced, so there is a lot you can do with just CSS.</p><p>\u6211\u5047\u8BBE\u60A8\u5DF2\u7ECF\u5BF9 CSS \u7684\u6838\u5FC3\u6982\u5FF5\u6709\u4E9B\u719F\u6089\uFF0C\u4F8B\u5982 CSS \u8BED\u6CD5\u3001CSS \u89C4\u5219\u3001CSS \u5C5E\u6027\u7B49\u3002</p><p>I assume that you are already somewhat familiar with the core concepts of CSS, like CSS syntax, CSS rules, CSS properties etc.</p><h2 id="\u5E94\u7528-css-\u6837\u5F0F\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528-css-\u6837\u5F0F\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5E94\u7528 CSS \u6837\u5F0F\u7684\u65B9\u6CD5</h2><p>\u6709\u51E0\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u53EF\u4EE5\u5C06 CSS \u6837\u5F0F\u5E94\u7528\u4E8E JavaFX \u7EC4\u4EF6\u3002 \u8FD9\u4E9B\u65B9\u6CD5\u662F\uFF1A</p><p>There are several different methods to apply a CSS style to a JavaFX component. These methods are:</p><ul><li>JavaFX \u9ED8\u8BA4 CSS \u6837\u5F0F\u8868\uFF08JavaFX default CSS stylesheet\uFF09</li><li>\u573A\u666F\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868\uFF08Scene specific CSS stylesheet\uFF09</li><li>\u7236\u8282\u70B9\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868\uFF08Parent specific CSS stylesheet\uFF09</li><li>\u7EC4\u4EF6 <code>style</code> \u5C5E\u6027\uFF08Component <code>style</code> property\uFF09</li></ul><p>\u5728\u63A5\u4E0B\u6765\u7684\u90E8\u5206\u4E2D\uFF0C\u6211\u5C06\u7B80\u8981\u89E3\u91CA\u8FD9\u4E9B CSS \u6837\u5F0F\u673A\u5236\u4E2D\u7684\u6BCF\u4E00\u4E2A\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><p>I will briefly explain how each of these CSS styling mechanisms work in the following sections.</p><h3 id="\u9ED8\u8BA4-css-\u6837\u5F0F\u8868" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4-css-\u6837\u5F0F\u8868" aria-hidden="true">#</a> \u9ED8\u8BA4 CSS \u6837\u5F0F\u8868</h3><p>JavaFX \u5E94\u7528\u7A0B\u5E8F\u5177\u6709\u9002\u7528\u4E8E\u6240\u6709 JavaFX \u7EC4\u4EF6\u7684\u9ED8\u8BA4 CSS \u6837\u5F0F\u8868\u3002\u5982\u679C\u60A8\u4E0D\u63D0\u4F9B\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u5219\u9ED8\u8BA4 CSS \u6837\u5F0F\u8868\u5C06\u4E3A JavaFX \u7EC4\u4EF6\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u4F7F\u5B83\u4EEC\u770B\u8D77\u6765\u5F88\u6F02\u4EAE\uFF08\u8FD8\u8FC7\u5F97\u53BB\uFF09\u3002</p><p>JavaFX applications have a default CSS stylesheet which is applied to all JavaFX components. If you provide no styling of the components, the default CSS stylesheet will style the JavaFX components so they look pretty.</p><p>JavaFX 8 \u7684\u9ED8\u8BA4\u6837\u5F0F\u8868\u79F0\u4E3A Modena\uFF0C\u4F4D\u4E8E JavaFX JAR \u6587\u4EF6\u4E2D\u3002</p><p>The default stylesheet for JavaFX 8 is called Modena, and is located in the JavaFX JAR file.</p><h3 id="\u573A\u666F\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868" aria-hidden="true">#</a> \u573A\u666F\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868</h3><p>\u60A8\u53EF\u4EE5\u4E3A JavaFX <code>Scene</code> \u5BF9\u8C61\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\u3002\u7136\u540E\u5C06\u6B64 CSS \u6837\u5F0F\u8868\u5E94\u7528\u4E8E\u4E3A\u8BE5 <code>Scene</code> \u5BF9\u8C61\u6DFB\u52A0\u5230\u573A\u666F\u56FE\u4E2D\u7684\u6240\u6709 JavaFX \u7EC4\u4EF6\u3002\u573A\u666F\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868\u5C06\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u8868\u4E2D\u6307\u5B9A\u7684\u6837\u5F0F\uFF0C\u4EE5\u9632\u4E24\u4E2A\u6837\u5F0F\u8868\u8BBE\u7F6E\u76F8\u540C\u7684 CSS \u5C5E\u6027\uFF08\u4E5F\u5C31\u662F\u8BF4\u573A\u666F\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF09\u3002</p><p>You can set a CSS stylesheet for a JavaFX <code>Scene</code> object. This CSS stylesheet is then applied to all JavaFX components added to the scene graph for that <code>Scene</code> object. The scene specific CSS stylesheet will override the styles specified in the default stylesheet, in case both stylesheets sets the same CSS properties.</p><p>\u4E0B\u9762\u662F\u5728 <code>Scene</code> \u5BF9\u8C61\u4E0A\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\u7684\u793A\u4F8B\uFF1A</p><p>Here is an example of setting a CSS stylesheet on a <code>Scene</code> object:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>scene<span class="token punctuation">.</span><span class="token function">getStylesheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;style1/button-styles.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u793A\u4F8B\u544A\u8BC9 JavaFX \u67E5\u627E\u540D\u4E3A <code>button-styles.css</code> \u7684\u6837\u5F0F\u8868\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u4F4D\u4E8E\u540D\u4E3A <code>style1</code> \u7684\u76EE\u5F55\u4E2D\u3002JavaFX \u5728\u7C7B\u8DEF\u5F84\u4E2D\u67E5\u627E\u6B64\u6587\u4EF6\uFF0C\u56E0\u6B64\u76EE\u5F55 <code>style1</code> \u5E94\u4F4D\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u7C7B\u8DEF\u5F84\u4E2D\u5305\u542B\u7684\u76EE\u5F55\uFF08\u6216 JAR \u6587\u4EF6\uFF09\u4E4B\u4E00\u7684\u6839\u76EE\u5F55\u4E2D\u3002</p><p>This example tells JavaFX to look for a stylesheet file called <code>button-styles.css</code> which is located in a directory called <code>style1</code> . JavaFX looks for this file on the classpath, so the directory <code>style1</code> should be located in a directory which is at root of one of the directories (or JAR files) which are included in the classpath for the application.</p><p>\u4EE3\u8868 CSS \u6837\u5F0F\u8868\u6587\u4EF6\u4F4D\u7F6E\u7684\u5B57\u7B26\u4E32\u88AB\u79F0\u4E3A URL\u3002\u8FD9\u610F\u5473\u7740\u60A8\u8FD8\u53EF\u4EE5\u6307\u5B9A\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84\u3002\u4F46\u662F\uFF0C\u6700\u597D\u5C06 CSS \u6587\u4EF6\u89C6\u4E3A\u8D44\u6E90\u5E76\u5C06\u5B83\u4EEC\u4E0E\u5E94\u7528\u7A0B\u5E8F\u7684\u4EE3\u7801\u6346\u7ED1\u5728\u4E00\u8D77\u3002\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u7684\u7528\u6237\u901A\u5E38\u4E0D\u4F1A\u66F4\u6539\u6837\u5F0F\uFF0C\u56E0\u6B64\u65E0\u9700\u5728\u4EE3\u7801\u4E4B\u5916\u5B58\u653E\u6587\u4EF6\uFF08\u800C\u4E0D\u662F\u50CF\u8BA9\u7528\u6237\u66F4\u6539\u7684\u914D\u7F6E\u6587\u4EF6\u4E00\u6837\uFF09\u3002</p><p>The string pointing to the CSS stylesheet file is interpreted as a URL. That means that you can also specify full paths to a file in the file system. However, it is good practice to think of CSS files as resources and bundle them with the code for your application. The users running the application will typically not be changing the styles, so there is no need to distribute the file outside the code (like you would with config file that users were intended to change).</p><h3 id="\u7236\u8282\u70B9\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868" tabindex="-1"><a class="header-anchor" href="#\u7236\u8282\u70B9\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868" aria-hidden="true">#</a> \u7236\u8282\u70B9\u6307\u5B9A\u7684 CSS \u6837\u5F0F\u8868</h3><p>\u4E5F\u53EF\u4EE5\u5728 JavaFX <code>Parent</code> \u7C7B\u7684\u6240\u6709\u5B50\u7C7B\u4E0A\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\u3002<code>Parent</code> \u7C7B\u662F\u6240\u6709\u53EF\u4EE5\u6709\u5B50\u8282\u70B9\u7684\u7236\u7C7B\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u53EF\u4EE5\u5305\u542B\u5176\u5B83\u7EC4\u4EF6\u3002\u5728 <code>Parent</code> \u7C7B\u7684\u5B50\u7C7B\u4E0A\u8BBE\u7F6E\u7684\u6837\u5F0F\u8868\u4E2D\u6307\u5B9A\u7684 CSS \u5C5E\u6027\u901A\u5E38\u4F18\u5148\u4E8E\u573A\u666F\u6837\u5F0F\u8868\u4E2D\u6307\u5B9A\u7684 CSS \u89C4\u5219\u548C\u9ED8\u8BA4\u6837\u5F0F\u8868\u3002</p><p>It is also possible so set a CSS stylesheet on all subclasses of the JavaFX <code>Parent</code> class. The <code>Parent</code> class is a base class for all components that can have children, meaning they can contain other components inside them. CSS properties specified in a stylesheet set on a <code>Parent</code> subclass will normally take precedence over CSS rules specified in a scene stylesheet, and the default stylesheet.</p><p>JavaFX \u5E03\u5C40\u7EC4\u4EF6\u662F <code>Parent</code> \u7C7B\u7684\u5B50\u7C7B\u7684\u5178\u578B\u793A\u4F8B\u3002\u5982\u679C\u60A8\u5728\u5E03\u5C40\u7EC4\u4EF6\u4E0A\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\uFF0C\u5219\u6837\u5F0F\u8868\u5C06\u5E94\u7528\u4E8E\u8BE5\u5E03\u5C40\u7EC4\u4EF6\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002</p><p>The JavaFX layout components are typical examples of <code>Parent</code> subclasses. If you set a CSS stylesheet on a layout component, the stylesheet will be applied to all components inside that layout component.</p><p>\u5728 <code>Parent</code> \u7C7B\u7684\u5B50\u7C7B\u4E0A\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\u7684\u5F62\u5F0F\u770B\u8D77\u6765\u7C7B\u4F3C\u4E8E\u5728 <code>Scene</code> \u5BF9\u8C61\u4E0A\u8BBE\u7F6E\u5B83\u3002\u8FD9\u662F\u4E00\u4E2A\u5728 <code>VBox</code> \u4E0A\u8BBE\u7F6E CSS \u6837\u5F0F\u8868\u7684\u793A\u4F8B\uFF0C\u5B83\u4E5F\u662F <code>Parent</code> \u7684\u5B50\u7C7B\uFF1A</p><p>Setting a CSS stylesheet on a <code>Parent</code> subclass looks similar to setting it on a <code>Scene</code> object. Here is an example of setting a CSS stylesheet on a <code>VBox</code> which is a <code>Parent</code> subclass:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Button</span> button2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">VBox</span> vbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span>button1<span class="token punctuation">,</span> button2<span class="token punctuation">)</span><span class="token punctuation">;</span>

vbox<span class="token punctuation">.</span><span class="token function">getStylesheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;style1/button-styles.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6B64\u4EE3\u7801\u5C06\u5728 <code>VBox</code> \u4E0A\u8BBE\u7F6E <code>style1/button-styles.css</code> \u6837\u5F0F\u8868\u3002\u6837\u5F0F\u8868\u5C06\u56E0\u6B64\u5E94\u7528\u4E8E VBox \u5185\u7684\u4E24\u4E2A\u6309\u94AE\u3002</p><p>This code will set the <code>style1/button-styles.css</code> stylesheet on the <code>VBox</code>. The stylesheet will thus be applied to the two buttons inside the VBox.</p><h3 id="\u7EC4\u4EF6\u6837\u5F0F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6837\u5F0F\u5C5E\u6027" aria-hidden="true">#</a> \u7EC4\u4EF6\u6837\u5F0F\u5C5E\u6027</h3><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E0A\u8BBE\u7F6E CSS \u5C5E\u6027\u6765\u4E3A\u7279\u5B9A\u7EC4\u4EF6\u8BBE\u7F6E CSS \u6837\u5F0F\u3002\u8FD9\u662F\u901A\u8FC7\u5728\u7EC4\u4EF6\u7684 <code>style</code> \u5C5E\u6027\u4E2D\u8BBE\u7F6E\u4E00\u4E2A\u5305\u542B CSS \u5C5E\u6027\u7684\u5B57\u7B26\u4E32\u6765\u5B8C\u6210\u7684\u3002</p><p>You can set CSS styles for a specific component by setting the CSS properties directly on the component. This is done by setting a String containing the CSS properties in the component&#39;s <code>style</code> property.</p><p>\u901A\u8FC7 <code>style</code> \u5C5E\u6027\u8BBE\u7F6E\u7684 CSS \u5C5E\u6027\u4F18\u5148\u4E8E\u5C06\u7236\u8282\u70B9\u6307\u5B9A\u7684\u6837\u5F0F\u8868\u3001\u573A\u666F\u6837\u5F0F\u8868\u548C\u9ED8\u8BA4\u6837\u5F0F\u8868\u4E2D\u6307\u5B9A\u7684 CSS \u5C5E\u6027\u3002</p><p>CSS properties set via the <code>style</code> property take precedence over CSS properties specified in any <code>Parent</code> subclasses the component is nested inside, the scene stylesheet and the default stylesheet.</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4E3A JavaFX <code>Button</code> \u8BBE\u7F6E <code>style</code> \u5C5E\u6027\u7684\u793A\u4F8B\uFF1A</p><p>Here is an example that sets the <code>style</code> property for a JavaFX <code>Button</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token string">&quot;-fx-background-color: #0000ff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u793A\u4F8B\u5C06 <code>style</code> \u5C5E\u6027\u4E2D\u7684\u80CC\u666F\u989C\u8272 CSS \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u84DD\u8272\u3002</p><p>This example sets the background color CSS property in the <code>style</code> property to a blue color.</p><p>\u60A8\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6837\u5F0F\u5B57\u7B26\u4E32\u4E2D\u8BBE\u7F6E\u591A\u4E2A CSS \u5C5E\u6027\u3002\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u8FD9\u6837\u505A\uFF1A</p><p>You can set multiple CSS properties inside the same style string. Here is an example of how that looks:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> styles <span class="token operator">=</span>
        <span class="token string">&quot;-fx-background-color: #0000ff;&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;-fx-border-color: #ff0000;&quot;</span> <span class="token punctuation">;</span>

<span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>styles<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="javafx-css-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#javafx-css-\u5C5E\u6027" aria-hidden="true">#</a> JavaFX CSS \u5C5E\u6027</h2><p>\u5982\u524D\u6240\u8FF0\uFF0CJavaFX \u5305\u542B\u81EA\u5DF1\u7684\u4E00\u7EC4 CSS \u5C5E\u6027\u3002JavaFX CSS \u5C5E\u6027\u7684\u547D\u540D\u4E0E HTML \u4F7F\u7528\u7684 CSS \u5C5E\u6027\u7A0D\u5FAE\u6709\u4E9B\u4E0D\u540C\u3002\u4F46\u662F\uFF0CJavaFX \u56E2\u961F\u4F7F JavaFX CSS \u5C5E\u6027\u7684\u540D\u79F0\u975E\u5E38\u63A5\u8FD1 HTML \u4E2D\u4F7F\u7528\u7684 CSS \u5C5E\u6027\u3002\u5982\u679C\u60A8\u719F\u6089 Web \u7684 CSS\uFF0C\u60A8\u901A\u5E38\u80FD\u591F\u731C\u5230\u76F8\u5E94\u7684 JavaFX CSS \u5C5E\u6027\u88AB\u79F0\u4E3A\u4EC0\u4E48\u3002</p><p>As mentioned earlier JavaFX contains its own set of CSS properties. The JavaFX CSS properties are named somewhat differently from the CSS properties used with HTML. However, the JavaFX team have kept the names of the JavaFX CSS properties very close to the CSS properties used in HTML. If you are familiar with CSS for the web, you will often be able to guess what the corresponding JavaFX CSS property is called.</p><p>\u5E76\u975E\u6240\u6709 CSS \u5C5E\u6027\u90FD\u53EF\u4EE5\u5E94\u7528\u4E8E\u6240\u6709 JavaFX \u7EC4\u4EF6\uFF0C\u4F46\u8BB8\u591A CSS \u5C5E\u6027\u53EF\u4EE5\u5E94\u7528\u4E8E\u591A\u4E2A JavaFX \u7EC4\u4EF6\u3002</p><p>Not all CSS properties can be applied to all JavaFX components, but many CSS properties can be applied to several JavaFX components.</p>`,57);function J(F,X){const a=o("RouterLink");return c(),p(l,null,[u,e("details",S,[h,e("nav",y,[e("ul",null,[e("li",null,[n(a,{to:"#\u5E94\u7528-css-\u6837\u5F0F\u7684\u65B9\u6CD5"},{default:t(()=>[v]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#\u9ED8\u8BA4-css-\u6837\u5F0F\u8868"},{default:t(()=>[C]),_:1})]),e("li",null,[n(a,{to:"#\u573A\u666F\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868"},{default:t(()=>[f]),_:1})]),e("li",null,[n(a,{to:"#\u7236\u8282\u70B9\u6307\u5B9A\u7684-css-\u6837\u5F0F\u8868"},{default:t(()=>[b]),_:1})]),e("li",null,[n(a,{to:"#\u7EC4\u4EF6\u6837\u5F0F\u5C5E\u6027"},{default:t(()=>[m]),_:1})])])]),e("li",null,[n(a,{to:"#javafx-css-\u5C5E\u6027"},{default:t(()=>[k]),_:1})])])])]),g],64)}var _=r(d,[["render",J]]);export{_ as default};
