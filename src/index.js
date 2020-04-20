import x from './x.js'
import png from './assets/1.jpg'

const div = document.getElementById('app')

div.innerHTML = `
  <img src="${png}">
`

const button = document.createElement('button')

button.innerText = '懒加载'
button.onclick = () => {
  let promise = import('./lazy.js')
  promise.then((module) => {
    console.log(promise)
    console.log(module)
    module.default()
  }, () => {
    console.log('error!asshole')
  })
}

div.appendChild(button)