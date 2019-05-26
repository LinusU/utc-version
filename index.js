module.exports = function utcVersion (date = new Date(), options = {}) {
  if (!(date instanceof Date)) {
    options = date
    date = new Date()
  }

  const {
    apple = false,
    short = false
  } = options

  const y = date.getUTCFullYear() - 2000
  const m = date.getUTCMonth() + 1
  const d = date.getUTCDate()

  if (short) {
    return y + '.' + m + '.' + d
  }

  if (apple) {
    const divider = (86400 / 255)
    const seconds = (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + date.getUTCSeconds()

    const i = 1 + Math.floor(seconds / divider)

    return y + '.' + m + '.' + d + 'i' + i
  }

  const t = (date.getUTCHours() * 100) + date.getUTCMinutes()

  return y + '.' + m + '.' + d + '.' + t
}
