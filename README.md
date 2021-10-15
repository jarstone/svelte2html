
# svelte2html

Render svelte file to html


## Installation

```bash
  npm install svelte2html -g
```
    
## Usage/Examples

Usage :
```bash
svelte2html source.svelte destination.html
```

Example : index.svelte
```bash
npm install heroicons-svelte
```
```svelte
<script>
  import HomeIcon from './node_modules/heroicons-svelte/outline/HomeIcon.svelte'

  let name = 'world'
</script>

<HomeIcon class="mb-4" />
<h1>Hello {name}</h1>
```

```bash
svelte2html index.svelte index.html
```

Result : index.html
```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="mb-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
<h1>Hello world</h1>
```
