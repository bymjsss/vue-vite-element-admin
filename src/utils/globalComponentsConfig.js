/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-07-07 11:10:10
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 15:20:41
 * @FilePath: /vue-vite-element-admin/src/utils/globalComponentsConfig.js
 * @Description: 全局自定义组件注册工具
 */

const  componentsRegistrar = async (app) => {
  const context = import.meta.globEager('@/components/global/**/*.vue')
  for (const path in context) {
    if (context.hasOwnProperty.call(context, path)) {
      const component = context[path].default
      let name = (component.name || component.__name) // 组件name或者文件名
      app.component(name, component)
    }
  }
}
export default componentsRegistrar