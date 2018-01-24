module.exports = function utcVersion (date, options) {
  if (!date) date = new Date()
  if (!options) options = {}

  if (typeof date === 'object' && typeof date.getUTCFullYear === 'undefined') {
    options = date
    date = new Date()
  }

  const y = date.getUTCFullYear() - 2000
  const m = date.getUTCMonth() + 1
  const d = date.getUTCDate()

  if (options.apple) {
    const divider = (86400 / 255)
    const seconds = (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + date.getUTCSeconds()

    const i = 1 + Math.floor(seconds / divider)

    return (y + '.' + m + '.' + d + 'i' + i)
  } else {
    const t = (date.getUTCHours() * 100) + date.getUTCMinutes()

    return (y + '.' + m + '.' + d + '.' + t)
  }
}
