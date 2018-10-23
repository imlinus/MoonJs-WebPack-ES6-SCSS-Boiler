import Moon from 'moonjs'

export const menu = Moon.component('menu', {
  template: `<nav class="menu">
                <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </nav>
  `
})
