import Moon from 'moonjs'

export const TopBar = Moon.component('top-bar', {
  template: `<div class="top-bar">
               <div class="wrapper">
                 <logo></logo>
                 <menu></menu>
               </div>
             </div>`
})
