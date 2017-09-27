export class Button {
  constructor() {
    this.initialize()
  }

  initialize() {
    /* Add Ripple to buttons */
    let btns = document.body.querySelectorAll('.btn'),
        i

    for(i = 0; i < btns.length; i++ ) {
    	btns[i].setAttribute('data-ripple', '')
    }
  }

}
