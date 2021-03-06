import React from 'react';
import App from './App';
import ReactDOM from "react-dom";

import store from "./redux/store";

ReactDOM.render(<App/>,document.getElementById('root'))

// 检测redux中的状态的改变，如redux的状态发生了改变，那么重新渲染APP组件
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})

