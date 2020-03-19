async function getTabs() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, function (tabs) {
      resolve(tabs)
    })

  })
}


let tabs = new Proxy([], {
  set(target, prop, value) {
    //@ts-ignore
    target[prop] = value
    return true;
  }
});

const background = {
  getTabs
}

declare type Background = typeof background & Window

// { status, title, url, favIconUrl }


