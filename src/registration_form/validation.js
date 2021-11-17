function validate(users, username, password, repeatedPassword, age) {
  if (username === "" || password === "") 
    return false;

  if (password !== repeatedPassword) 
    return false;

  if (age < 18) 
    return false;

  if (users.find((u) => u.username === username) !== -1)
    return false;

  if (password.length < 8)
    return false;
  
  return true;
}

export default validate;
