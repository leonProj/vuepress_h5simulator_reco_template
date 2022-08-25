---
title: h5模拟器使用说明
---
## 如何使用
1. 修改模拟器组件`docs/.vuepress/components/demoModel.vue`中的baseUrl，换成你自己的地址
```vue
 data() {
    return {
      baseUrl: 'xxx'
    }
 },
```
2. 在`xx.md`markdown文件中使用h5模拟器组件,引用位置无所谓，因为是fix定位.url传你自己的实际地址。iframe地址就是`baseUrl+url`

```markdown
<demo-model url="/pages/componentsA/button/button"></demo-model>
...其他内容
```

2. 在`docs/.vuepress/config.js`中的`themeConfig.simulatorUrl`配置使用模拟器组件的markdown文件的路径

```js
module.exports = {
    ...,
    themeConfig: {
        ...,
        /*自定义的配置*/
        simulatorUrl: {
            '/pages/components/button':true,
        }
    }
}
```

::: warning 
注意 不需要使用时 如果之前页面使用过h5模拟器组件， 请记得删除simulatorUrl中配置的路径,或者设置为false,否则右边距会变大。
:::
## 举个栗子
<a :href="$withBase('/pages/components/button')" alt="foo">使用组件模板</a><br/>
<a :href="$withBase('/pages/components/noSim')" alt="foo">不使用组件模板</a>
## 简单解释
### 本质
demo-model本质上是一个vue组件，通过iframe+样式模拟出手机h5的效果。
### 原理
在`docs/.vuepress/enhanceApp.js`中进行了样式相关的修改，如果simulatorUrl中有这个路径则会添加一个`for-simulator-padding`样式名称。这就是为什么当你不
需要使用模拟器组件的时候，需要在simulatorUrl中路径设置为false或者删除的原因。

```js
if (this.$themeConfig.simulatorUrl[pageRoot]) {
    try {
        document.getElementById('app').classList.add("for-simulator-padding");
    } catch (e) {
        //TODO handle the exception
    }
}
```
在`docs/.vuepress/styles/index.styl`中修改样式
```stylus
/* h5模拟器样式 */
.for-simulator-padding{
  // 相关样式代码
}
```


