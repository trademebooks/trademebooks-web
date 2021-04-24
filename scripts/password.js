const bcrypt = require('bcrypt')
const saltRounds = 10

const myPlaintextPassword = 'password'

const salt = bcrypt.genSaltSync(saltRounds)
const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt)

console.log(hashedPassword)

console.log(bcrypt.compareSync('password', hashedPassword))
