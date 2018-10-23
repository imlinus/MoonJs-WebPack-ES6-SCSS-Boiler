import Moon from 'moonjs'

export const logo = Moon.component('logo', {
  template: `<div class="logo">
                <router-link to="/">
                  <h1>boilerplate</h1>
                </router-link>
              </div>
  `
})
