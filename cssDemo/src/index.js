import styles from './css/app.css';
import './css/a.scss';
import './css/b.sass';
import './css/c.less';

document.write('My Webpack app.<br/>');

function component() {
    var element = document.createElement('div')
    element.innerHTML = 'Hello World'
    element.classList.add(styles.hello)

    return element
}
document.body.appendChild(component())

let ele = `
  <div class="${styles.element}">
    <p>CSS Modules</p>
  </div>
`
document.write(ele)
