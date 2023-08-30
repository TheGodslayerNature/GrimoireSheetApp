import { Status } from "../src/components/statusPoints/status";
import {User} from "../src/components/user/User";

const nullStatus = new Status();

var userLevel = 1;

var newUser:User = new User("Joker", "Coringa", userLevel, nullStatus);

test('should create the object with the correctly values', () => { 
   var user:User = new User("Joker", "Coringa", 1, nullStatus);   

   expect(user.userName).toEqual("Joker");
   expect(user.userClass).toEqual("Coringa");
   expect(user.statusPoints).toEqual(18);
   expect(user.userLevel).toEqual(1);
 })

 test('should sum the status points', () => { 
  var user:User = new User("Joker", "Coringa", 1, nullStatus);

  expect(user.statusPoints).toEqual(18);

  user.setPoints(2);

  expect(user.statusPoints).toEqual(20);
  })

  test('the status points should decrease if is adding to some status', () => { 

    newUser.setPointsAgi(2);
    newUser.setPointsMag(1);
    expect(newUser.getPoints()).toEqual(15);

   })

   test('status should not receive values if totalPoints is not enough', () => { 

    newUser.setPointsFor(5);
    newUser.setPointsAgi(6);
    newUser.setPointsMag(8);

    expect(newUser.getPoints()).toEqual("There is no more points avaliable");
    })

     test('the status points should return if the user change his mind', () => { 
      newUser.setPointsFor(17);

      expect(newUser.getPoints()).toEqual(1);

      newUser.setPointsFor(2);
      expect(newUser.getPoints()).toEqual(16);

      //Tentar consseguir fazer os pontos retonarem toda vez que o valor setado deva sobrar

      newUser.setPointsFor(17);

      expect(newUser.getPoints()).toEqual(1);
      })
     