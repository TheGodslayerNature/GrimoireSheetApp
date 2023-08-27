import User from "../src/components/user/User";

test('should create the object with the correctly values', () => { 
   var user:User = new User("Joker", "Coringa", 18, 1);   

   expect(user.userName).toEqual("Joker");
   expect(user.userClass).toEqual("Coringa");
   expect(user.statusPoints).toEqual(18);
   expect(user.userLevel).toEqual(1);
 })

 test('should sum the status points', () => { 
  var user:User = new User("Joker", "Coringa", 18, 1);

  expect(user.statusPoints).toEqual(18);

  user.setPoints(2);

  expect(user.statusPoints).toEqual(20);
  })