// src/utils/loadExternal.js

// export function loadStyle(href) {
//     if (!document.querySelector(`link[href="${href}"]`)) {
//       const link = document.createElement('link')
//       link.rel = 'stylesheet'
//       link.href = href
//       document.head.appendChild(link)
//     }
//   }
  
//   export function loadScript(src) {
//     return new Promise((resolve, reject) => {
//       if (document.querySelector(`script[src="${src}"]`)) {
//         resolve()
//         return
//       }
//       const script = document.createElement('script')
//       script.src = src
//       script.async = true
//       script.onload = () => resolve()
//       script.onerror = () => reject(`Failed to load ${src}`)
//       document.body.appendChild(script)
//     })
//   }

// utils/loadExternal.js
export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export function loadStyle(href) {
  return new Promise((resolve, reject) => {
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = href
    l.onload = resolve
    l.onerror = reject
    document.head.appendChild(l)
  })
}

  