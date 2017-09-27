export class Ripple {
  constructor(el = '[data-ripple]', options = {}) {
    this.ripples = Array.from((typeof el === 'string') ? document.querySelectorAll(el) : el)
    this.opts = Object.assign({}, this.constructor.defaults(), options)

    this.initialize()
  }

  static defaults() {
    return {
      eventType: 'mousedown',
      selector: 'data-ripple',
      rippleClassName: 'ripple',
      animationEndEvent: (() => {
        const el = document.createElement('fake');
        const animations = {
          'animation': 'animationend',
          'OAnimation': 'oanimationend',
          'MozAnimation': 'animationend',
          'WebkitAnimation': 'webkitAnimationEnd'
        }

        for(let i in animations) {
          if(typeof el.style[i] !== 'undefined') {
            return animations[i]
          }
        }
      })()
    };
  }

  initialize() {
    this.addHandler()
  }

  addHandler() {
    this.ripples.forEach((wrap) => {
      wrap.addEventListener(this.opts.eventType, this.rippleStart.bind(this), false)
    })
  }

  rippleStart(e) {
    e.stopPropagation()

    const target = e.currentTarget.closest(`[${this.opts.selector}]`),
                  {width: w, height: h, left, top} = target.getBoundingClientRect(),
                  touchX = e.clientX - left,
                  touchY = e.clientY - top,
                  targetX = (touchX > w / 2) ? 0 : w,
                  targetY = (touchY > h / 2) ? 0 : h,
                  distance = Math.sqrt(Math.pow(Math.abs(targetX - touchX), 2) + Math.pow(Math.abs(targetY - touchY), 2)) * 2,
                  targetStyle = target.style,
                  targetPos = targetStyle.position

    if(!targetPos || targetPos === 'static') {
      targetStyle.position = 'relative'
    }

    const rippleWrap = document.createElement('div')
    rippleWrap.classList.add(this.opts.rippleClassName)

    const ripple = document.createElement('span')
    ripple.style.cssText = `position:absolute;background:${target.getAttribute(this.opts.selector)};width:${distance}px;height:${distance}px;left:${touchX - (distance / 2)}px;top:${touchY - (distance / 2)}px;`
    ripple.addEventListener(this.opts.animationEndEvent, this.rippleEnd.bind(this), false)

    rippleWrap.appendChild(ripple)
    target.insertBefore(rippleWrap, target.firstChild)
  }

  rippleEnd(e) {
    const elem = e.target.closest(`.${this.opts.rippleClassName}`)
    elem.parentNode.removeChild(elem)
  }
}
