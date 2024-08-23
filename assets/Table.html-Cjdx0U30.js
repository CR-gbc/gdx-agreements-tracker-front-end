import{_ as n,o as a,c as s,a as e}from"./app-gCSRladW.js";const t={},o=e(`<h1 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>Table</span></a></h1><p>The <code>Table</code> component displays tabular data using the MUI DataGrid component. It allows for customization of columns, row selection, and provides a toolbar for actions such as adding new items.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><ul><li><code>rows</code>: An array of objects representing the data rows to be displayed in the table.</li><li><code>tableConfig</code>: An object containing configuration for the table, including <code>tableColumns</code> and <code>initialState</code>.</li><li><code>handleRowDoubleClick</code>: A function to handle double-click events on table rows.</li><li><code>handleRowClick</code> (optional): A function to handle single-click events on table rows.</li><li><code>handleTableNewButton</code>: A function to handle the click event on the &quot;New&quot; button in the table toolbar.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./Table&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> rows<span class="token punctuation">,</span> tableConfig<span class="token punctuation">,</span> handleRowDoubleClick<span class="token punctuation">,</span> handleRowClick<span class="token punctuation">,</span> handleTableNewButton <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Table
        rows<span class="token operator">=</span><span class="token punctuation">{</span>rows<span class="token punctuation">}</span>
        tableConfig<span class="token operator">=</span><span class="token punctuation">{</span>tableConfig<span class="token punctuation">}</span>
        handleRowDoubleClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRowDoubleClick<span class="token punctuation">}</span>
        handleRowClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRowClick<span class="token punctuation">}</span>
        handleTableNewButton<span class="token operator">=</span><span class="token punctuation">{</span>handleTableNewButton<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[o];function p(c,i){return a(),s("div",null,l)}const u=n(t,[["render",p],["__file","Table.html.vue"]]),d=JSON.parse('{"path":"/guide/Frontend/react_components/Table/Table.html","title":"Table","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/Table/Table.md"}');export{u as comp,d as data};
