module.exports = function utcVersion (date) {
  if (!date) date = new Date()

  const y = date.getUTCFullYear() - 2000
  const m = date.getUTCMonth() + 1
  const d = date.getUTCDate()
  const t = (date.getUTCHours() * 100) + date.getUTCMinutes()

  return (y + '.' + m + '.' + d + '.' + t)
}
