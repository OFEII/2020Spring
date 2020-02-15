// 浏览器相关
// 检查是否为浏览器环境
const isBrowser = () => ![typeof window, typeof document].includes('undefined')

isBrowser() // true (browser)
isBrowser() // false (Node)

// 复制代码判断手机类型
getMobile () 
   var u = navigator.userAgent
   var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
   var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
   if (isAndroid) {
     return 'Android'
   }
   if (isIOS) {
     return 'IOS'
   }
 
// 复制代码判断微信/QQ浏览器
let url = navigator.userAgent.toLowerCase()
//使用toLowerCase将字符串全部转为小写 方便我们判断使用
if (url.indexOf('15b202 qq') > -1) {
  //单独判断QQ内置浏览器
  alert('QQ APP 内置浏览器，做你想做的操作')
}
if (url.indexOf('micromessenger') > -1) {
  //单独判断微信内置浏览器
  alert('微信内置浏览器，做你想做的操作')
}
if (url.indexOf('15b202') > -1) {
  //判断微信内置浏览器，QQ内置浏览器
  alert('QQ和微信内置浏览器，做你想做的操作')
}
// 复制代码判断手机开屏/息屏
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState)
  if (document.visibilityState === 'hidden') {
    console.log('息屏时间')
  } else if (document.visibilityState === 'visible' && vm.hidden) {
    console.log('开屏时间')
  }
})
// 复制代码监听浏览器的联网状态
window.addEventListener("offline", function(e) {alert("offline");})
window.addEventListener("online", function(e) {alert("online");})

if(window.navigator.onLine==true){
  alert("已连接")
}else{
  alert("未连接")
}
// 复制代码JavaScript 检测手机是否横屏
window.addEventListener('resize', () => {
  if (window.orientation === 180 || window.orientation === 0) {
    // 正常方向或屏幕旋转180度
    console.log('竖屏')
  }
  if (window.orientation === 90 || window.orientation === -90) {
    // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
    console.log('横屏')
  }
})