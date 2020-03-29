// 引入 css
import './style/style1.css'
import './style/style2.less'

console.log('index.js')

// import 作为一个方法使用，传入模块名即可，返回一个 promise 来获取模块暴露的对象
// 注释 webpackChunkName: "lodash" 可以用于指定 chunk 的名称，在输出文件时有用
import(/* webpackChunkName: "lodash" */ 'lodash').then((_) => { 
    console.log(_.last([1, 2, 3])) // 打印 3
})
  