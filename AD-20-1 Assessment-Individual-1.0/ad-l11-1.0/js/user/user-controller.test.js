const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

  test('does not add a user already in the list', () => {
    let userController = new UserController();
    let user = new User(1235, "Sara", "sara@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  }); 

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('remove user that is not in the list', () => {
    const userController = new UserController();
    const user = new User(1236, "Alex", "alex@generation.org");
    expect(() => userController.remove(user)).not.toThrow();
    expect(userController.getUsers()).not.toContain(user);
  });

  test('find user by email', () => {
    const userController = new UserController();
    const user = new User(1237, "Carolina", "carolina@generation.org");
    userController.add(user);
    expect(userController.findByEmail('carolina@generation.org')).toBe(user);
  });

  test('find user by email', () => {
    const userController = new UserController();
    const user = new User(1238, "Lucifer", "lucifer@generation.org");
    userController.add(user);
    expect(userController.findByEmail("lucifer@generation.org")).toBe(user);
  });

  test('find user by id', () => {
    const userController = new UserController();
    const user = new User(1239, "David", 'david@generation.org');
    userController.add(user);
    expect(userController.findById(1239)).toBe(user);
  });

  test('when id not found', () => {
    const userController = new UserController();
    expect(userController.findById(1240)).toBeUndefined();
  });
  
  
  

