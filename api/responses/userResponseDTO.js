function userResponseDTO(user) {
  delete user['password'];
  delete user['createdAt'];
  delete user['__v'];
  
  return user;
}

module.exports = userResponseDTO;