// /**
//  * Loader.js
//  * How to use: new Loader(milliseconds);
// */
// import { Render } from './../helpers/render'
// import anime from 'animejs'
// import cash from 'cash-dom'
// const $ = cash
//
// export class Loader {
//   constructor(timer) {
//     new Render(`
//       <div class="loader-overlay">
//         <div class="loader">
//           <div class="loader-circle loader-circle-1"></div>
//           <div class="loader-circle loader-circle-2"></div>
//           <div class="loader-circle loader-circle-3"></div>
//           <div class="loader-circle loader-circle-4"></div>
//         </div>
//       </div>
//     `)
//
//     // Show loader overlay
//     $('.loader-overlay').css('z-index', '1001')
//     anime({
//       targets: '.loader-overlay',
//       opacity: 1
//     })
//
//     // Spin loader
//     for(var i = 1; i < 5; i++) {
//       anime({
//         targets: '.loader',
//         rotate: {
//         	value: 90 * i,
//         },
//         delay: 50,
//         loop: true,
//         duration: timer
//       });
//     }
//
//     // Take it away
//     setTimeout(() => {
//       anime({
//         targets: '.loader-overlay',
//         opacity: 0,
//         complete: () => {
//           $('.loader-overlay').remove()
//         }
//       })
//     }, timer)
//   }
// }
