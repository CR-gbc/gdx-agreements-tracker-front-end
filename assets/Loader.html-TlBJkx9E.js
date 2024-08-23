import{_ as t,r as o,o as r,c as i,b as a,d as e,e as l,a as n}from"./app-gCSRladW.js";const p={},c=n('<h1 id="loader" tabindex="-1"><a class="header-anchor" href="#loader"><span>Loader</span></a></h1><p>The <code>Loader</code> component is a React component that wraps the <code>LinearProgress</code> component. The <strong><code>LinearProgress</code></strong> component in React is part of the <strong>Material-UI</strong> library. It serves as a visual indicator for ongoing processes, such as loading an app, submitting a form, or saving updates. Here are the key points about this component:</p><h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose"><span>Purpose</span></a></h2><ul><li><strong>Linear Progress</strong> components inform users about the status of ongoing tasks.</li><li>They indicate how long an operation will take (determinate mode) or visualize an unspecified wait time (indeterminate mode).</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><ul><li>Import the component from <code>@mui/material</code>.</li><li>Use it within your React components to display a linear progress bar.</li></ul><h3 id="variants" tabindex="-1"><a class="header-anchor" href="#variants"><span>Variants</span></a></h3><ul><li><strong>Indeterminate</strong>: Represents an unspecified wait time.</li><li><strong>Determinate</strong>: Shows how long an operation will take (requires setting a value).</li><li><strong>Buffer</strong>: Displays a buffer progress (useful for file uploads or downloads).</li></ul><h3 id="customization" tabindex="-1"><a class="header-anchor" href="#customization"><span>Customization</span></a></h3><ul><li>You can customize the color, size, and other properties of the <code>LinearProgress</code> component.</li></ul>',10),d={href:"https://mui.com/material-ui/react-progress/",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> LinearProgress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@mui/material&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Renders a linear progress loader.
 *
 * @returns {ReactNode} A React element representing the linear progress loader.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">Loader</span><span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LinearProgress</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(h,g){const s=o("ExternalLinkIcon");return r(),i("div",null,[c,a("p",null,[e("For more details and additional customization options, refer to the "),a("a",d,[e("Material-UI documentation"),l(s)]),e(" ¹.")]),u])}const v=t(p,[["render",m],["__file","Loader.html.vue"]]),f=JSON.parse('{"path":"/guide/Frontend/react_components/Loader.html","title":"Loader","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Purpose","slug":"purpose","link":"#purpose","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":3,"title":"Customization","slug":"customization","link":"#customization","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/Loader.md"}');export{v as comp,f as data};
