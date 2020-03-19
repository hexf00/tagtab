export default class EventEmiter {

  public funcs: Record<string, Function[]> = {}

  public on(eventName: string, fn: Function) {
    if (!this.funcs[eventName]) {
      this.funcs[eventName] = []
    }
    this.funcs[eventName].push(fn)

    return this
  }

  public emit() {
    if (arguments.length === 0) {
      return
    }
    let eventName = arguments[0]
    if (this.funcs[eventName]) {
      this.funcs[eventName].forEach((fn) => {
        fn(...Array.from(arguments).slice(1))
      })
    }

    return this
  }
}



