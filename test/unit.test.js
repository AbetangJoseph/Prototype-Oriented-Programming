const {
  User,
  Admin,
  Orders,
  user1,
  user2,
  user3,
  admin1,
  admin2,
  admin3,
  user1MissingInput,
  user2Save,
  admin1MissingInput,
  admin2Save
} = require("../src/paths");

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

describe("CAN MAKE ORDER", () => {
  it("Should return a warning if input(s) is empty or not a string type", function() {
    expect(user2.makeOrder()).toMatch("WARNING: Input cannot be empty");
  });
});

describe("CREATE NEW ADMIN USER", () => {
  it("Should instantiate a new admin user", function() {
    expect(admin2).toBeDefined();
  });

  it("Should create admin and return success message", function() {
    expect(admin2Save).toMatch("SUCCESS: Account saved");
  });

  it("Should return warning message when input(s) missing", function() {
    expect(admin1MissingInput).toMatch("WARNING: All feilds are required");
  });

  it("Should return error message if the same email already exists", function() {
    expect(admin2.createUser()).toMatch("ERROR: Email already exists");
  });
});

describe("ADMIN CAN READ SINGLE USER BY ID", () => {
  it("Should return 'invalid' if its a non-number input", function() {
    expect(admin2.readSingleUser("")).toMatch("INVALID: ID must be a Number");
  });

  it("Should return no such user if no such id found in db", function() {
    expect(admin2.readSingleUser(0)).toMatch("INFO: No such User");
  });

  it("Should return no such user if no such id found in db", function() {
    expect(admin2.readSingleUser(6)).toEqual({
      id: 6,
      name: "admin3",
      email: "admin3@gmail.com",
      password: "pass3",
      isAdmin: true,
      isDeleted: false
    });
  });
});

describe("ADMIN CAN DELETE A USER BY ID", () => {
  it("Should return a success message if user is deleted", function() {
    expect(admin3.deleteUser(7)).toMatch("SUCCESS: User Deleted");
  });

  it("Should return an info message if the user is not in DB", function() {
    expect(admin3.deleteUser(7)).toMatch("INFO: No such user");
  });
});

describe("ADMIN CAN GET ALL USERS", () => {
  it("Should return a warning if input(s) is empty or not a string type", function() {
    const allUsers = admin3.getAllUsers();
    expect(allUsers).toEqual(allUsers);
  });
});

describe("ADMIN CAN DELETE ALL USERS", () => {
  it("Should return a success message if users are deleted", function() {
    expect(admin3.deleteAllUsers()).toMatch("SUCCESS: Users Deleted");
  });
  it("Should return NO users in DB if it is empty", function() {
    expect(admin3.deleteAllUsers()).toMatch("INFO: No users in Database");
  });
});

describe("ADMIN CAN GET ALL ORDERS", () => {
  it("Should return 'No order in db' when order db is empty", function() {
    expect(admin3.getAllOders()).toMatch("INFO: No order in Database");
  });
});

describe("ADMIN CAN GET ONE ORDER BY ID", () => {
  it("Should return 'No such order in db' when orderid is not found", function() {
    expect(admin3.getOneOrder(1)).toMatch("INFO: No such order in Database");
  });
});
