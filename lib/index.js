import html2canvas from 'html2canvas'
import cloneDeep from 'lodash/cloneDeep'
import Cookies from 'js-cookie'

const TOKEN_KEY = 'AuthAPIToken' // token的key
let APP_NAME = '' // 项目的域名

export function getToken () {
  return Cookies.get(TOKEN_KEY)
}

export function setToken (token) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeToken () {
  return Cookies.remove(TOKEN_KEY)
}

export function setLocalStorage (name, data) {
  localStorage.setItem(`${APP_NAME}:${name}`, getObjectType(data) !== 'String' ? JSON.stringify(data) : data)
}

export function getLocalStorage (name) {
  let storage = localStorage.getItem(`${APP_NAME}:${name}`)
  let result = storage
  try {
    result = JSON.parse(storage)
  } catch (e) {
    console.log('getLocalStorage catch')
  }
  return result
}

export function removeLocalStorage (name) {
  localStorage.removeItem(`${APP_NAME}:${name}`)
}

export function setSessionStorage (name, data) {
  sessionStorage.setItem(`${APP_NAME}:${name}`, getObjectType(data) !== 'String' ? JSON.stringify(data) : data)
}

export function getSessionStorage (name) {
  let storage = sessionStorage.getItem(`${APP_NAME}:${name}`)
  let result = storage
  try {
    result = JSON.parse(storage)
  } catch (e) {
    console.log('getSessionStorage catch')
  }
  return result
}

export function removeSessionStorage (name) {
  sessionStorage.removeItem(`${APP_NAME}:${name}`)
}

/**
 * 字段缺省
 * */
export function defaultValue (val, defaultVal = '无') {
  return (val === null || val === undefined || val === '') ? defaultVal : val
}

/**
 * 获取uuid
 */
export function getUUID (len = 32) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  const radix = chars.length
  let index = 0
  while (index < len) {
    uuid.push(chars[0 | Math.random() * radix])
    index++
  }
  return uuid.join('')
}

/**
 * 转换成金额格式
 * */
export function toPrice (money, floatNumber = 2) {
  if (money === undefined || money === null || money === '' || !/^\d+(\.\d+)?$/.test(money)) {
    return 'NA'
  }
  money = Number(money).toFixed(floatNumber)
  money = Number(money + '1').toLocaleString()
  return '￥' + money.substr(0, money.length - 1)
}

/**
 * 对象赋值
 * */
export function resetObject (targetObj, sourceObj, isdefault = false, defaultVal = '') {
  let keys = Object.keys(targetObj)
  keys.forEach((key) => {
    if (Object.prototype.toString.call(sourceObj) === '[object Object]' && sourceObj[key] !== undefined && sourceObj[key] !== null) {
      targetObj[key] = cloneDeep(sourceObj[key])
    }
    if (isdefault) {
      if (sourceObj[key] === null) {
        targetObj[key] = defaultVal
      }
    }
  })
  return targetObj
}

// 日期格式化
export function dateFormatter (date, fmt) {
  if (!(date instanceof Date)) {
    return ''
  }
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss'
  let o = {
    // 月份
    'M+': date.getMonth() + 1,
    // 日
    'd+': date.getDate(),
    // 小时
    'H+': date.getHours(),
    // 分
    'm+': date.getMinutes(),
    // 秒
    's+': date.getSeconds(),
    // 季度
    'q+': Math.floor((date.getMonth() + 3) / 3),
    // 毫秒
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 数据类型
 * */
export function getObjectType (s) {
  let str = Object.prototype.toString.call(s)
  let regex = /^\[object\s([a-zA-Z]+)\]$/
  return str.match(regex)[1]
}

/**
 * 判断两个id相同
 * */
export function isSameStr (id1, id2) {
  return id1 + '' === id2 + ''
}

/**
 * 时间差
 * */
export function timeDiff (startTime = new Date(), endTime = new Date()) {
  if (getObjectType(startTime) === 'String') {
    startTime = new Date(startTime.replace(/\-/g, '/'))
  }
  if (getObjectType(endTime) === 'String') {
    endTime = new Date(endTime.replace(/\-/g, '/'))
  }
  let value = Math.abs((endTime.getTime() - startTime.getTime()) / 1000)
  let day = Math.floor(value / (3600 * 24))
  let hours = value % (3600 * 24)
  let hour = Math.floor(hours / 3600)
  let minutes = hours % 3600
  let minute = Math.floor(minutes / 60)
  let second = minutes % 60
  let str = `${day ? day + '天 ' : ''}${(hour + '').padStart(2, '0')}:${(minute + '').padStart(2, '0')}:${(second + '').padStart(2, '0')}`
  return str
}

/**
 * 文件后缀
 * */
export function getFileType (path = '') {
  let suffix = path.substring(path.lastIndexOf('.') + 1).toLowerCase()
  let fileType = 'file'
  if (['xls', 'xlsx'].includes(suffix)) {
    fileType = 'excel'
  } else if (['doc', 'docx'].includes(suffix)) {
    fileType = 'word'
  } else if (['pdf'].includes(suffix)) {
    fileType = 'pdf'
  } else if (['pptx'].includes(suffix)) {
    fileType = 'ppt'
  } else if (['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(suffix)) {
    fileType = 'image'
  } else if (['mp4', 'avi', 'ra', 'rm', 'ram', 'rmvb', 'mkv', 'wmv', 'flv', 'f4v', '3gb', 'amv', 'mov', 'ogg', 'asf'].includes(suffix)) {
    fileType = 'video'
  } else if (['mp3', 'wma', 'midi', 'cda'].includes(suffix)) {
    fileType = 'audio'
  }
  return fileType
}

/**
 * 把菜单的权限标识转换成路由name
 * */
export function getRouteNameByMenuAuth (auth) {
  auth = auth.trim()
  let name = []
  if (auth) {
    auth.split(/[\:\-\_]/).forEach(item => {
      name.push(item.slice(0, 1).toUpperCase() + item.slice(1))
    })
  } else {
    name.push(`Menu_${getUUID()}`)
  }
  return name.join('')
}

/**
 * 打印
 * */
export function print (ele, opts) {
  opts = Object.assign({
    direction: 'portrait', // 空-默认 portrait-纵向 landscape-横向
    margin: [40], // 打印四周边距
    scale: 2, // 清晰度，越大越清晰
    backgroundColor: '#ffffff', // 背景
    startCallback: null, // 处理打印-start
    endCallback: null, // 处理打印-end
    beforePrint: null, // 打印-before
    afterPrint: null // 打印-after
  }, opts)
  let A4_width = 794 // A4纸张宽
  let A4_height = 1123 // A4纸张高
  let marginStr = opts.margin.join('px ') + 'px' // 打印边距
  // let ele_width = ele.clientWidth // 元素宽
  let ele_height = ele.clientHeight // 元素高
  let width = 794
  let height = 1123
  if (opts.direction === 'portrait') {
    width = A4_width
    height = Math.max(A4_height, ele_height)
  } else if (opts.direction === 'landscape') {
    width = A4_height
    height = Math.min(A4_width, ele_height) // 高度取最小值（防止出现空白页）
  }
  opts.startCallback && opts.startCallback()
  // 清晰度
  let _canvas = document.createElement('canvas')
  let scale = opts.scale
  _canvas.width = width * scale
  _canvas.height = height * scale
  _canvas.style.width = `${width}px`
  _canvas.style.height = `${height}px`
  _canvas.getContext('2d').scale(scale, scale)

  html2canvas(ele, {
    canvas: _canvas,
    scale: 1,
    width: width,
    height: height,
    dpi: 600,
    // allowTaint: true,  //允许 canvas 污染， allowTaint参数要去掉，否则是无法通过toDataURL导出canvas数据的
    backgroundColor: opts.backgroundColor,
    allowTaint: true,
    useCORS: true // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。
  }).then(canvas => {
    let iframeClass = 'media-print'
    // 新建iframe
    let iframe = document.createElement('iframe')
    let iframeId = `canvas_${new Date().getTime()}`
    document.body.appendChild(iframe)
    iframe.style.border = '0px'
    iframe.style.position = 'absolute'
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    iframe.style.left = '0px'
    iframe.style.top = '0px'
    iframe.setAttribute('src', iframeId)
    iframe.setAttribute('class', iframeClass)
    // iframe.doc = null
    // iframe.doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document)
    iframe.onload = () => {
      let win = iframe.contentWindow || iframe
      // 打印控制
      let style = win.document.createElement('style')
      style.type = 'text/css'
      style.media = 'print'
      let styleCss = ''
      if (opts.direction) {
        styleCss = `@page { size: A4 ${opts.direction}; ${marginStr ? `margin:${marginStr}` : ''} }`
      } else if (marginStr) {
        styleCss = `@page { size: A4; margin:${marginStr}; }`
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = styleCss
      } else {
        style.innerHTML = styleCss
      }
      win.document.getElementsByTagName('head')[0].appendChild(style)
      // 插入canvas
      win.document.body.innerHTML = ''
      win.document.body.appendChild(canvas)

      const beforePrint = () => {
        opts.beforePrint && opts.beforePrint()
      }
      const afterPrint = () => {
        // 删除旧的iframe
        let oldIframe = document.body.querySelector(`.${iframeClass}`)
        if (oldIframe) {
          document.body.removeChild(oldIframe)
        }
        opts.afterPrint && opts.afterPrint()
      }
      win.onbeforeprint = beforePrint
      win.onafterprint = afterPrint

      win.print()
      opts.endCallback && opts.endCallback()
    }
  })
}

const _Utils = {
  getToken,
  setToken,
  removeToken,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  defaultValue,
  getUUID,
  toPrice,
  resetObject,
  dateFormatter,
  getObjectType,
  isSameStr,
  timeDiff,
  getFileType,
  getRouteNameByMenuAuth,
  print
}

const Utils = {
  install (Vue, opts) {
    console.log(opts)
    let { rootMethods, appName } = opts
    APP_NAME = appName || '';
    (rootMethods || []).forEach(method => {
      Vue.prototype[`$${method}`] = _Utils[method]
    })
    Vue.prototype.$utils = _Utils
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Utils = Utils
  window.Vue.use(Utils)
}

export default Utils
