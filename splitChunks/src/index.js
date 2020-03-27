const React = import(/* webpackChunkName: "react" */'./node_modules/react');
const ReactDOM = import(/* webpackChunkName: "react" */'./node_modules/react-dom')
import App from './App'
import a from './a'
import b from './b'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

setTimeout(() => {
    console.log(a)
}, 2000)
console.log(b)