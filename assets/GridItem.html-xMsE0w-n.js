import{_ as e,r as o,o as p,c,b as n,d as s,e as t,a as i}from"./app-gCSRladW.js";const l={},r=n("h1",{id:"grid-item",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid-item"},[n("span",null,"Grid Item")])],-1),u=n("p",null,[s("The "),n("code",null,"GridItem"),s(" component is a custom React component designed to act as a layout container for child components, specifically Form Inputs; be they Text, Numerical, or Checkboxes. It has no styling of its own, though it uses a "),n("code",null,"Grid"),s(" component to wrap the children that are passed in as props.")],-1),d=n("h3",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),m=n("code",null,"GridItem",-1),k=n("code",null,"Grid",-1),h=n("code",null,"Grid",-1),g={href:"https://mui.com/material-ui/api/grid/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"GridItem",-1),b=n("code",null,"children",-1),f=n("code",null,"lg",-1),_=n("code",null,"Field",-1),x=n("code",null,"children",-1),w=n("code",null,"GridItem",-1),y=i(`<ul><li><code>children</code> (JSX.element): one or more components to be laid out in a grid</li><li><code>width</code> (string): either &quot;half&quot; or &quot;full&quot;, which correspond to 6 and 12 columns, respectively. <ul><li>the <code>xs</code>, <code>sm</code>, and md breakpoints are literally assigned 12 columns</li><li>the <code>lg</code> breakpoint will be set to 6 if <code>width</code> prop is &quot;half&quot;, and 12 if <code>width</code> is &quot;full&quot;.</li></ul></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GridItem <span class="token keyword">from</span> <span class="token string">&#39;@mui/material/GridItem&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Field <span class="token keyword">from</span> <span class="token string">&#39;../Field&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">BasicGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">GridItem</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          // children
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span>
            <span class="token attr-name">required</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>required<span class="token punctuation">}</span></span>
            <span class="token attr-name">fullWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">as</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>TextField<span class="token punctuation">}</span></span>
            <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldName<span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">handleChange</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldLabel<span class="token punctuation">}</span></span>
            <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldName<span class="token punctuation">}</span></span>
            <span class="token attr-name">role</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fieldName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_input</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
            <span class="token attr-name">helperText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>touched<span class="token punctuation">[</span>fieldName<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> errors<span class="token punctuation">[</span>fieldName<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">error</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>touched<span class="token punctuation">[</span>fieldName<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>errors<span class="token punctuation">[</span>fieldName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">GridItem</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),I={id:"for-a-current-in-use-example-see-components-forms-fields",tabindex:"-1"},G={class:"header-anchor",href:"#for-a-current-in-use-example-see-components-forms-fields"},j={href:"https://github.com/bcgov/gdx-agreements-tracker/blob/development/frontend/src/components/Forms/Fields/index.tsx",target:"_blank",rel:"noopener noreferrer"};function F(N,q){const a=o("ExternalLinkIcon");return p(),c("div",null,[r,u,d,n("p",null,[s("The "),m,s(" component wraps its child components in a "),k,s(" component from the Material-UI library, which is a layout component that arranges its child component(s) in a grid. The "),h,s(" component does the actual layout, and takes a "),n("a",g,[s("number of props"),t(a)]),s(", potentially, but in "),v,s(" we only utilize "),b,s(" and the "),f,s(" breakpoint, which determines the number of columns that will be used in the grid layer (either 12 or 6) In the example below, you can see where the "),_,s(" is used to pass the "),x,s(" into the container component. each child gets its own set of props, but otherwise this container needs no other properties in order to perform its grid layout task. The "),w,s(" component uses the following props:")]),y,n("h5",I,[n("a",G,[n("span",null,[s("for a current in-use example, see: "),n("a",j,[s("components/Forms/Fields"),t(a)])])])])])}const V=e(l,[["render",F],["__file","GridItem.html.vue"]]),B=JSON.parse('{"path":"/guide/Frontend/react_components/Forms/GridItem.html","title":"Grid Item","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/Forms/GridItem.md"}');export{V as comp,B as data};
