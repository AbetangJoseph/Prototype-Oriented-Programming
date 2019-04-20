const User = require("../src/Users");

const user1 = new User("", "user1@gmail.com", "pass123");
const user2 = new User("Joseph", "user2@gmail.com", "pass123");

const user1MissingInput = user1.createUser();

const user2Save = user2.createUser();

describe("CREATE NEW USER", () => {
  it("Should instantiate a new user", function() {
    expect(user2).toBeDefined();
  });
  it("Should create user and return success message", function() {
    expect(user2Save).toMatch("SUCCESS: Account saved");
  });
  it("Should return warning message when input(s) missing", function() {
    expect(user1MissingInput).toMatch("WARNING: All feilds are required");
  });
  it("Should return error message if the same email already exists", function() {
    expect(user2.createUser()).toMatch("ERROR: Email already exists");
  });
});
