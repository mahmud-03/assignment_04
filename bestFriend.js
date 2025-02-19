function isBestFriend(object1, object2) {
  if (typeof object1 !== "object") {
    return "invalid";
  }
  if (typeof object2 !== "object") {
    return "invalid";
  }
  if (object1.roll === undefined) {
    return "invalid";
  }
  if (object2.bestFriend === undefined) {
    return "invalid";
  }
  if (object2.roll === undefined) {
    return "invalid";
  }
  if (object2.bestFriend === undefined) {
    return "invalid";
  }
  let rollcondition1 = object1.bestFriend === object2.roll;
  let rollcondition2 = object2.bestFriend === object1.roll;
  if (rollcondition1 === true) {
    return true;
  } else {
    return false;
    99;
  }
}
// console.log(
//   isBestFriend(
//     { name: "mahmud", roll: 20, bestFriend: 5 },
//     { name: "islam", roll: 5, bestFriend: 7 }
//   )
// );
