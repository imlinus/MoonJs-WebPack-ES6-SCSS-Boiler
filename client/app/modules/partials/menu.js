import Moon from 'moonjs'

export const Menu = Moon.component('menu', {
  template: `<nav class="nav">
               <ul>
                 <li><router-link to="/">Home</router-link></li>
                 <li><router-link to="/contact">Contact</router-link></li>
               </ul>
             </nav>`
})
