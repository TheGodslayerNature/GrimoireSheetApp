import User from "../src/components/user/User";

test('should create the object', () => { 
   var user:User = new User("Joker", "Coringa", 18, 1);   

   expect(user.userName).toEqual("Joker");
 })