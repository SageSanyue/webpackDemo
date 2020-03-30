import styles from './css/app.css';

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
