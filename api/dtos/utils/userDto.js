const userDto = (user) => {
  if (user._doc) {
    delete user._doc['password']
    delete user._doc['password_confirmation']
    delete user._doc['google_id']
    delete user._doc['createdAt']
    delete user._doc['__v']
  }

  delete user['password']
  delete user['password_confirmation']
  delete user['google_id']
  delete user['createdAt']
  delete user['__v']

  return user
}

module.exports = userDto
