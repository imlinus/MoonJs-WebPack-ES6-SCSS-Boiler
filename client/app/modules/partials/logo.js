import Moon from 'moonjs'

export const Logo = Moon.component('logo', {
  data: {
    branding: 'Devs'
  },
  template: `<div class="logo">
                <a href="#">
                  <h1>{{branding}}</h1>
                </a>
              </div>`
})
