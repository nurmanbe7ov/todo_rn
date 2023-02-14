export function generateUUID(): string {
  // Public Domain/MIT
  let d: number = new Date().getTime() //Timestamp
  let d2: number =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    ((typeof Date !== "undefined" || 0) && Date.now && Date.now() * 1000) || 0 //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16

    if (d > 0) {
      // eslint-disable-next-line no-bitwise
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      //Use microseconds since page-load if supported
      // eslint-disable-next-line no-bitwise
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }

    // eslint-disable-next-line no-bitwise
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16)
  })
}
