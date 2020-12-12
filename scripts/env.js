console.log('Node env:', process.env.NODE_ENV)
console.log('Node env equality:', process.env.NODE_ENV === 'ci')
console.log('Node env MONGO_URI:', process.env.MONGO_URI)

const config = require('../api/config')

console.log('config:', config)