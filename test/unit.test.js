const User = require("../src/Users");

const user1 = new User("", "user1@gmail.com", "pass123");
const user2 = new User("Joseph", "user2@gmail.com", "pass123joe");
const user3 = new User("Victor", "vic@gmail.com", "pass123vic");

const user1MissingInput = user1.createUser();
const user2Save = user2.createUser();
user3.createUser();

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

describe("CAN READ SINGLE USER BY ID FROM 'USERS' OBJECT", () => {
  it("Should return 'invalid' if its a non-number input", function() {
    expect(user2.readSingleUser("")).toMatch("INVALID: ID must be a Number");
  });

  it("Should return no such user if no such id found in db", function() {
    expect(user2.readSingleUser(0)).toMatch("INFO: No such User");
  });

  it("Should return no such user if no such id found in db", function() {
    expect(user2.readSingleUser(2)).toEqual({
      id: 2,
      name: "Joseph",
      email: "user2@gmail.com",
      password: "pass123joe",
      isAdmin: false,
      isDeleted: false
    });
  });
});

describe("CAN UPDATE USER DETAILS", () => {
  it("Should return a warning if input(s) is empty", function() {
    expect(user3.updateUser("")).toMatch(
      "WARNING: To update, all feilds must be filled"
    );
  });

  it("Should return a warning if input(s) is empty", function() {
    expect(user3.updateUser("Charles", "", "charlie123")).toMatch(
      "WARNING: To update, all feilds must be filled"
    );
  });

  it("Should update user record and return success", function() {
    expect(user3.updateUser("Young", "Young@gmail.com", "Young123")).toMatch(
      "SUCCESS: Record Updated"
    );
  });
});

describe("CAN SEARCH FOR USER BY NAME", () => {
  it("Should return a warning if input(s) is empty or not a string type", function() {
    expect(user3.searchUserByName("")).toMatch("WARNING: Search by name");
  });

  it("Should return false if no name found in DB", function() {
    expect(user3.searchUserByName("Traversy")).toMatch("False");
  });

  it("Should return user object if the user is found", function() {
    expect(user3.searchUserByName("Young")).toEqual({
      id: 3,
      name: "Young",
      email: "Young@gmail.com",
      password: "Young123",
      isAdmin: false,
      isDeleted: false
    });
  });
});
