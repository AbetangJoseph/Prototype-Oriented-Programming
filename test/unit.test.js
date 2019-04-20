const User = require("../src/Users");

describe("CREATE NEW USER", () => {
  it("Should instantiate a new user", function() {
    const user1 = new User("Joseph", "joe@gmail.com", "pass123");
    expect(user1).toBeDefined();
  });
  it("Should call create user method and return a value", function() {
    const user1 = new User("Joseph", "joe@gmail.com", "pass123");
    expect(user1.createUser()).toBeDefined();
  });
  it("Should return warning message when input(s) missing", function() {
    const user2 = new User("", "Amakiri@gmail.com", "pass123");
    expect(user2.createUser()).toMatch("WARNING");
  });
  it("Should create user and return success message", function() {
    const user2 = new User("Joseph", "Amakiri@gmail.com", "pass123");
    expect(user2.createUser()).toMatch("SUCCESS");
  });
  it("Should return error message if the same email already exists", function() {
    const user2 = new User("Joseph", "Amakiri@gmail.com", "pass123");
    expect(user2.createUser()).toMatch("ERROR");
  });
});
