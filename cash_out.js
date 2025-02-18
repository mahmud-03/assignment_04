function cashOut(money) {
  if (typeof money !== "number" || isNaN(money)) {
    return "invalid";
  }
  if (money < 0) {
    return "invalid";
  }

  let total_charge = (money * 1.75) / 100;
  return total_charge;
}

// console.log(cashOut(-20));
