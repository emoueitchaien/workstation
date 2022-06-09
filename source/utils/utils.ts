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

export const objValueSelector = (from: any, ...selectors: any) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t: any) => t !== '')
      .reduce((prev: any, cur: any) => prev && prev[cur], from),
  )

export const rating = (stars: number) =>
  '★★★★★☆☆☆☆☆'.slice(5 - stars, 10 - stars)

// const obj = {
//   selector: { to: { val: 'val to select' } },
//   target: [1, 2, { a: 'test' }],
// }
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a') // ['val to select', 1, 'test']
