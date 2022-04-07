# vite-plugin-vue-definename

---

vite 插件，在 vue3 setup-script 中使用 `defineName` 来为组件命名。截止目前，vue 官方暂时没有对 setup-script 提供组件命名的方式。

## 如何使用

```bash
npm install vite-plugin-vue-definename -D

or 

pnpm add vite-plugin-vue-definename -D

yarn add vite-plugin-vue-definename -D
```

在 vite 配置文件中

```js
import { defineConfig } from 'vite'
import defineName from 'vite-plugin-vue-definename'

export default defineConfig({
  plugins: [defineName()]
})
```

在 vue 文件中，setup-script 中使用 `defineName` 来为组件命名。

```html
<script lang="ts" setup>
defineName('MyComponent')
</script>
```

typescript 支持，在 tsconfig.json 中，添加

```json
"types": ["vite-plugin-vue-definename"]
```

---

之前在写一个组件库 [sakura-ui](https://github.com/tflins/sakura-ui)，需要对组件进行命名，所以写了个 vite 插件，下图是之前尤小右对 setup-script 命名组件的回复

![img](https://tflins.oss-cn-beijing.aliyuncs.com/img/11649267288_.pic.jpg)
