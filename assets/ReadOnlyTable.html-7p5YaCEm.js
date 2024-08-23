import{_ as a,o as e,c as n,a as s}from"./app-gCSRladW.js";const t={},l=s(`<h1 id="readonlytable" tabindex="-1"><a class="header-anchor" href="#readonlytable"><span>ReadOnlyTable</span></a></h1><p>The <code>ReadOnlyTable</code> is a React component that fetches and displays data in a table format from a specified API endpoint. It leverages the Material-UI (MUI) library for its styling and includes features such as a custom toolbar, cell rendering, and a responsive grid layout.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>The <code>ReadOnlyTable</code> component is designed to display a table of data from an API endpoint with a specified title and size. It accepts the following props:</p><ul><li><code>apiEndPoint</code>: A string that represents the API endpoint from which the data is fetched.</li><li><code>tableName</code>: A string that represents the name of the table to be displayed in the toolbar.</li><li><code>title</code>: A string that represents the title of the table to be displayed in the card header.</li><li><code>mdSize</code>, <code>lgSize</code>, <code>xlSize</code>: Optional numbers that represent the grid size for medium, large, and extra-large screens respectively. Each defaults to 6 if not provided.</li></ul><h2 id="styling" tabindex="-1"><a class="header-anchor" href="#styling"><span>Styling</span></a></h2><p>The <code>ReadOnlyTable</code> component uses Material-UI&#39;s <code>Grid</code>, <code>Card</code>, <code>CardHeader</code>, <code>sx</code>, and <code>DataGrid</code> components for its structure and styling. It has the following styling specifications:</p><ul><li>Grid: Implements a responsive grid layout based on the <code>mdSize</code>, <code>lgSize</code>, and <code>xlSize</code> props.</li><li>Card: Encapsulates the table and the card header.</li><li>CardHeader: Displays the <code>title</code> prop with a background color of <code>#ededed</code>.</li><li>DataGrid: Displays the data fetched from the <code>apiEndPoint</code> prop with the following customizations: <ul><li>Toolbar: Utilizes the <code>ReadTableToolbar</code> component to display the <code>tableName</code> prop and a search box.</li><li>Cell: Uses the <code>useRenderTableCell</code> hook to render the cell content based on the data type.</li><li>Styles: Overrides the default styles of the data grid, such as removing the cell selection border, changing the color of the icons and headers, and adjusting the padding of the cells.</li></ul></li></ul><h2 id="default-behavior" tabindex="-1"><a class="header-anchor" href="#default-behavior"><span>Default Behavior</span></a></h2><p>The <code>ReadOnlyTable</code> component, by default, renders a grid item containing a card with a table of data fetched from the <code>apiEndPoint</code> prop. It also displays a custom toolbar with the <code>tableName</code> prop and a search box, and renders the cell content based on the data type. The footer pagination and the row selection are hidden.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReadOnlyTable <span class="token keyword">from</span> <span class="token string">&quot;./ReadOnlyTable&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Import the ReadOnlyTable component</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReadOnlyTable</span></span>
        <span class="token attr-name">apiEndPoint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/users<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">tableName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Users<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User List<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">mdSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">lgSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">xlSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[l];function i(c,p){return e(),n("div",null,o)}const r=a(t,[["render",i],["__file","ReadOnlyTable.html.vue"]]),u=JSON.parse('{"path":"/guide/Frontend/react_components/ReadOnlyTable.html","title":"ReadOnlyTable","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Styling","slug":"styling","link":"#styling","children":[]},{"level":2,"title":"Default Behavior","slug":"default-behavior","link":"#default-behavior","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"contributors":[{"name":"André Lashley","email":"andre.lashley@gmail.com","commits":1}]},"filePathRelative":"guide/Frontend/react_components/ReadOnlyTable.md"}');export{r as comp,u as data};
