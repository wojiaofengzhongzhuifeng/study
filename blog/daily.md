

# 2019.7.8

## 完成一次模块加载

- 上传文件，获取 fileKey
- 解析文件，输入 fileKey，输出 modelKey
- 创建场景，输入 modelKey，输出 相同的 modelKey
- 模型浏览

## 过一遍 BOS3D API 

- 操作视图

- 操作构件(component)

  ```
  // 显示
  showComponentsById(将在4.10.0版本移除)
  showComponentsByKey
  hideComponentsById(将在4.10.0版本移除)
  hideComponentsByKey
  hideAllComponents
  showAllComponents
  
  // 高亮
  highlightComponentsById(将在4.10.0版本移除)
  highlightComponentsByKey
  addHighlightComponentsByKey
  closeHighlightComponentsById(将在4.10.0版本移除)
  closeHighlightComponentsByKey
  getHighlightComponentsKey
  clearHighlightList
  getHighlightComponents(移除)
  
  // 透明
  setComponentsOpacityState
  transparentComponentsById(将在4.10.0版本移除)
  transparentComponentsByKey
  transparentOtherComponentsByKey
  transparentAllComponents
  closeTransparentComponentsById(将在4.10.0版本移除)
  closeTransparentComponentsByKey
  clearTransparentList
  
  // 改变颜色
  colorfulComponentsById(将在4.10.0版本移除)
  colorfulComponentsByKey
  closeColorfulComponentsById(将在4.10.0版本移除)
  closeColorfulComponentsByKey
  clearColorfulList
  
  // 3d -> 线框
  wireFrameComponentsById(将在4.10.0版本移除)
  wireFrameComponentsByKey
  closeWireFrameComponentsById(将在4.10.0版本移除)
  closeWireFrameComponentsByKey
  
  // 隔离
  isolateComponentsById(将在4.10.0版本移除)
  isolateComponentsByKey
  closeIsolateComponentsById(将在4.10.0版本移除)
  closeIsolateComponentsByKey
  clearIsolation
  
  // 构件是否能被选中
  disableComponentsSelectionByKey
  enableComponentsSelectionByKey
  clearDisableSelectionList
  sortComponentsById
  sortComponentsByKey
  getComponentsAttributeById
  getComponentsAttributeByKey
  setComponentPositionByKey
  componentsExplosion
  closeComponentsExplosion
  ```



## react router 如何完成组件外跳转

在该组件定义处，使用 withRouter 高阶组件进行包裹，那么在该组件的this.props可拿到history等属性

## 新的跳转的方式

```javascript
this.props.history.push({
	pathname: "/test",
})
```







# 第一周知识点汇总

- 所有功能由数据结构开始想

- 在 postman 中创建全局变量

- none, form-data, x-www-form-urlencoded, raw, binary 是什么？区别是什么？

  - 一般只用 form-data 或者 raw

  - form-data 指的是上传文件或者传输表单内容。

  - raw 指的是传输的是 JSON 

- http 400，401， 405

  - 401：用户未验证
  - 400：服务器无法理解请求内容
  - 405：调用方式错误

- token 的理解

  想操作数据库，必须要

  1. 指定数据库： appKey

  2. 获取权限： access_token

  access_token 是用户通过登录网站之后，响应内容返回的 token 作为 access_token 

- api 中比较重要的接口

  - 11：多条件获取对象表内的实例数据（获取所有对象数据）
  - 24：获取关系表内所有的实例数据（获取所有关系数据）
  - 12：批量增加对象表内实例数据
  - 28：批量增加关系表内实例数据
  - 27：根据对象表内实例数据获取指定关联方向的实例数据



