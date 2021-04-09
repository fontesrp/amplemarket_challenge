const lit = (strings, ...args) =>
  strings.map((string, idx) => `${string}${args[idx] || ''}`).join('')

module.exports = lit
