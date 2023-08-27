import User from "../src/components/user/User";

test('should create the object with the correctly values', () => { 
   var user:User = new User("Joker", "Coringa", 18, 1);   

   expect(user.userName).toEqual("Joker");
   expect(user.userClass).toEqual("Coringa");
   expect(user.statusPoints).toEqual(18);
   expect(user.userLevel).toEqual(1);
 })