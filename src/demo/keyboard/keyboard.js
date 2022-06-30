const ua = navigator.userAgent
const isAndroid = /(Android);?[\s/]+([\d.]+)?(.*Mobile)/.test(ua)

const originHeight = document.documentElement.clientHeight || document.body.clientHeight
const originWidth = document.documentElement.clientWidth || document.body.clientWidth
let isFocus = false
function callbackHook(cb) {
  const resizeWeight = document.documentElement.clientWidth || document.body.clientWidth
  const activeDom = document.activeElement.tagName
  if(resizeWeight !== originWidth || !['INPUT', 'TEXTAREA'].includes(activeDom)) return isFocus = false
  cb && cb()
}
const keyBoard = {
  inserted(el, binding, vnode) {
    let context = vnode.context
    el.resizeFn = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
      callbackHook(()=> {
        if (resizeHeight < originHeight) {
          context[binding.arg](true)
          isFocus = true
        } else {
          isFocus = false
          context[binding.arg](false)
        }
      })
    }
    if (isAndroid) {
      window.addEventListener('resize', el.resizeFn)
    }

    el.handlerFocusin = () => {
      callbackHook(()=> {
        isFocus = true
        context[binding.arg](true)
      })
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
      if(isFocus) context[binding.arg](false)
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
