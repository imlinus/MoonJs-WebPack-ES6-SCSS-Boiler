import pell from 'pell' // WYSIWYG

export class Wysiwyg {
  constructor() {
    pell.init({
      element: document.getElementById('pell'),
      onChange: html => console.log(html),
      styleWithCSS: false,
      actions: [
        'bold',
        {
          name: 'custom',
          icon: 'C',
          title: 'Custom Action',
          result: () => console.log('YOLO')
        },
        'underline'
      ],
      classes: {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content'
      }
    })
  }
}
