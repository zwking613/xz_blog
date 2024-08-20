---
date: 2024-08-20
category:
  - uni-app
tag:
  - uni-app
archive: true
---

# uni-app问题

## eCharts dataZoom无法再手机端进行缩放

### 问题原因

在uni-app中使用echarts时，如果想在手机端进行缩放操作，需要设置echarts的环境变量。

1. main.js 文件中直接修改

```javascript
import Vue from 'vue'
import App from './App';
import * as echarts from 'echarts'
App.mpType = 'app'
// 添加这行代码
window.wx = {}
Vue.prototype.$echarts = echarts
const app = new Vue({
  ...App
})
app.$mount()
```

2. main.js中全局引入echarts

```javascript
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 在使用echarts的页面中

this.$echarts.env.touchEventsSupported = true;
this.$echarts.env.wxa = false;
this.$echarts.env.canvasSupported = false;
this.$echarts.env.svgSupported = true;
this.$echarts.env.domSupported = true;
this.myChart = this.$echarts.init(document.getElementById('main'));

```

以上两种方式都可以解决echarts在手机端无法缩放的问题,建议选择第二种方式,因为第一种方式可能会影响其它页面功能的正常使用

---
