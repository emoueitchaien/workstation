//run function one time only
let ran = false
export function runOnce(func: Function) {
  return () => {
    if (ran) {
      return
    }
    ran = true
    return func.apply(runOnce, arguments)
  }
}

export const maxDate = (...dates: []) =>
  new Date(Math.max.apply(null, ...dates))
