# Vue Autosizer
A **light** ([2.2kB](https://bundlephobia.com/result?p=vue-autosizer@0.1.2)) and **dependency-free**  replacement for built-in `<textarea>` and `<input>` elements allowing them to automatically grow to fit the content.

# Demo
[Edit on JSFiddle ](https://jsfiddle.net/hfalucas/3stdbkrg/)

# Install
## npm
```sh
npm install vue-autosizer
```

## yarn
```sh
yarn add vue-autosizer
```

# How to use

### Global Registration

You can import and register the plugin in the entry point of your application like so:
```js
import VueAutosizer from 'vue-autosizer'
import 'vue-autosizer/dist/vue-autosizer.min.css'

Vue.use(VueAutosizer)
```

Then use it like any other component:
```html
// Input that grows in width
<autosize-input v-model="" />

// Textarea that grows in height
<autosize-textarea v-model="" />
```

### Local Registration
```html
<template>
    <autosize-input v-model="" />

    <autosize-textarea v-model="" />
</template>

<script>
import { AutosizeInput, AutosizeTextarea } from 'vue-autosizer'

export default {
    components: { AutosizeInput, AutosizeTextarea }
}
</script>

<style src="vue-autosizer/dist/vue-autosizer.min.css"/>
```

# Contribution
If you have any reasonable PR you are welcome.

# License
[MIT](http://opensource.org/licenses/MIT)
