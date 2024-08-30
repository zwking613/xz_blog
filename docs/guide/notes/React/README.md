---
date: 2024-08-16
category:
  - React全家桶+Vite
tag:
  - React全家桶+Vite
archive: true
---

# React全家桶+Vite

### 1.创建React项目
* 通过vite创建项目

```js

npm create vite@latest vite-react --template raect
cd vite-react
npm install
npm run dev

```

* 配置vite.config.js

```js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host:'localhost',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


```

### 2.现在scss

```js

npm install sass sass-resources-loader --save

```

* 使用

styles/index.scss (新创建scss文件)
 
 ```css

.content{
    background: red;
}

 ```

 components/test/index.jsx
 
 ```js

import React from "react";
import './index.scss'
 
export default class Test extends React.Component {
    constructor(props){
        super(props)
    }
 
    render(){
        return (
            <div class="content">
                <div>测试组件</div>
            </div>
        )
    }
}
 
 ```
### 3.安装路由

```js

npm i react-router-dom --save

```

方式一：

main.jsx

```js

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from "react-router-dom";
import App from './App'
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

```

App.jsx

```js

import { Routes} from "react-router-dom";
import routes from '@/router/index'
 
function App() {
    return (
        <Routes>
            {routes}
        </Routes>
    )
}
 
export default App

```

创建router/index.jsx文件

```js

import { Route, Navigate } from "react-router-dom";
import Index from '@/pages/index.jsx'
 
export default [
    <Route key="Navigate" path="*" element={<Navigate to="/"/>} />,//重定向到首页
    <Route key="Index" path="/" element={ <Index/>} />
]

```

方式二（推荐）：使用useRoutes

main.jsx

```js

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

```

App.jsx

```js

import { useRoutes } from "react-router-dom";
import routes from '@/router/index.jsx'
 
function App() {
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}
 
export default App

```

创建router/index.jsx

```js

import { Navigate  } from 'react-router-dom'
import Index from '@/pages/index'
 
const router = [
    {
        path: "/",
        element: <Index />,
        children: [
            // 二级路由...
       ]
    },
    // 配置路由重定向 可配置404页面
    {
        path: '*',
        element: <Navigate to='/' />
    }
]
 
export default router

```

路由配置后只需要创建对应页面即可使用

```js

import React from 'react'
 
export default function Index(){
    return (
        <div>我是首页</div>
    )
}


```

* 注意如果是vite+react项目，因为是jsx文件，这块不能使用class只能以函数形式
表示页面这时候即可根据路由访问页面了

### 4.使用axios

* 安装axios

```js

npm i axios --save

```

* 创建utils/request.js

```js

import axios from 'axios'
 
// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})
 
// request interceptor
service.interceptors.request.use(
    config => {
        // 做一些请求前置，例如添加token
        // config.headers['token'] = getToken()
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
 
// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            // 配置响应拦截
            return Promise.reject(new Error(res.msg || '网络异常，请稍后~'))
        } else {
            return res
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
 
export default service

```

添加环境变量文件

.env.development

```js

NODE_ENV = 'development'
VITE_APP_ENV = 'development'
VITE_APP_BASE_API = '接口请求的域名'

```

.env.production

```js

NODE_ENV = 'production'
VITE_APP_ENV = 'production'
VITE_APP_BASE_API = '接口请求的域名'

```

使用环境变量

```js

import.meta.env.VITE_APP_BASE_API

```

* 使用

```js

import request from '@/utils/request'
// 其他引入文件
export default class Index extends React.Component{
    constructor(props) {
        super(props)
        request.get('/article/getAll').then(res => {
            console.log(res)
        })
    }
    
    render(){
        // 模板
    }
}

```

### 5.使用redux

* 安装redux

```js

npm install @reduxjs/toolkit react-redux --save

```

* 修改main.jsx文件

```js

/* 其他引入的js不变，只是新增这2个插件 */
import store from '@/store/index'
import { Provider } from 'react-redux'
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

```

* 创建store/index.js

```js

import { configureStore } from "@reduxjs/toolkit";
 
// configureStore 创建一个 redux 数据
const store = configureStore({
    reducer: {
    },
});
 
export default store;

```

* 创建store/modules/counterSlice.js

```js
import { createSlice } from '@reduxjs/toolkit'
 
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
            // 并不是真正的改变状态值，因为它使用了 Immer 库
            // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
            // 不可变的状态
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

```

* 将counterSlice挂载到store/index.js里面

```js

/* 其他引入的插件不需要变，新增这个引入 */
import counterReducer from '@/store/modules/counterSlice'
 
// configureStore 创建一个 redux 数据
const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});
export default store;

```

* 使用redux

pages/index.jsx

```js

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/modules/counterSlice'
 
export default function Index(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

```

### 6.使用ant-design UI框架

* 安装

```js
npm install antd --save
```

* 使用

```js
import { Button } from 'antd';
export default function Index(){
    return (
        <div>
            <Button type="primary">Primary Button</Button>
        </div>
    )
}
```

### 7.项目引入tailwindcss[官网](https://www.tailwindcss.cn/docs/guides/vite)

* 下载tailwindcss依赖

```js

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

* 在 tailwind.config.js 中添加配置

```js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

* 在全局css样式文件中引入样式

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

```

* 使用

```js

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

```


---
