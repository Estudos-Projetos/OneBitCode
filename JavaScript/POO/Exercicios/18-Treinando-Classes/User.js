class User {
  constructor(_fullname, _email, _password) {
    this.fullname = _fullname;
    this.email = _email;
    this.password = _password;
  }

  login(_email, _password) {
    if (_email === this.email && _password === this.password) {
      console.log("Success Login!");
    } else {
      console.log("Login Failed!");
    }
  }
}

const user1 = new User("Janiel", "janielmaia@gmail.com", "1234janiel");
user1.login("janielmaia@gmail.com", "1234janiel");
