# Vue 3 + Vite

## 组件规范

1. **组件名为多个单词。**

​	组件名应该始终是多个单词组成（大于等于 2），且命名规范为KebabCase格式(大驼峰)。

​	这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

**正例：**

```js
export default {
  name: 'TodoItem'
  // ...
};
```

**反例：**

```js
export default {
  name: 'Todo',
  // ...
}
export default {
  name: 'todo-item',
  // ...
}
```

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
