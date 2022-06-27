const ua = navigator.userAgent
const isAndroid = /(Android);?[\s/]+([\d.]+)?(.*Mobile)/.test(ua)

const originHeight = document.documentElement.clientHeight || document.body.clientHeight
const keyBoard = {
  inserted(el, binding, vnode) {
    let context = vnode.context
    console.log({binding})
    console.log({vnode})
    el.resizeFn = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
      if (resizeHeight < originHeight) {
        context[binding.arg](true)
      } else {
        context[binding.arg](false)
      }
    }
    if (isAndroid) {
      window.addEventListener('resize', el.resizeFn)
    }

    el.handlerFocusin = () => {
      el.resizeFn
      context[binding.arg](true)
      if (isAndroid) {
        setTimeout(() => {
          el.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          })
        }, 100)
      }
    }
    el.handlerFocusout = () => {
      context[binding.arg](false)
    }
    el.addEventListener('focusin', el.handlerFocusin)
    el.addEventListener('focusout', el.handlerFocusout)
  },
  unbind(el) {
    window.removeEventListener('resize', el.resizeFn)
    el.removeEventListener('focusin', el.handlerFocusin)
    el.removeEventListener('focusout', el.handlerFocusout)
  },
}

export default keyBoard
