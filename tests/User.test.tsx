import { UserStatus, Status } from "../src/components/userStatus/UserStatus";

var userLevel = 1;

var newUser:UserStatus;

beforeEach(() => {
  newUser = new UserStatus("Joker", userLevel);
})

test("should create the object with the correctly values", () => {
  var user: UserStatus = new UserStatus("Joker", 1);

  expect(user.userName).toEqual("Joker");

  expect(user.userLevel).toEqual(1);
  expect(user.availablePoints()).toEqual(18);
});

test("the available status points should decrease if is adding to some status", () => {
  expect(newUser.availablePoints()).toEqual(18);

  newUser.setPointsFor(Status.MAG, 2);
  newUser.setPointsFor(Status.FOR, 1);

  expect(newUser.availablePoints()).toEqual(15);
});

test("status should not receive values if totalPoints is not enough", () => {
  newUser.setPointsFor(Status.FOR, 10);
  newUser.setPointsFor(Status.AGI, 5);

  expect(newUser.availablePoints()).toEqual(3);

  let setPointsAboveMax = () => newUser.setPointsFor(Status.MAG, 10);

  expect(setPointsAboveMax).toThrow(
    new Error("Total points exceeded the maximum")
  );

  expect(newUser.availablePoints()).toEqual(3);
});

test("the status points should return if the user change his mind", () => {
  expect(newUser.availablePoints()).toEqual(18);

  newUser.setPointsFor(Status.MAG, 5);

  expect(newUser.availablePoints()).toEqual(13);

  newUser.setPointsFor(Status.MAG, 3);

  expect(newUser.availablePoints()).toEqual(15);
});
