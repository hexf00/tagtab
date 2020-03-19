const background = chrome.extension.getBackgroundPage() as Background

// 由于没有使用webpack 不能使用import语法，暂时只能通过getBackgroundPage获取background的对象
// import background from './background'

!(async () => {
  console.log(background)
  const tabs = await background.getTabs()
  console.log(tabs)
})()
export { } 