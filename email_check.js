function validEmail(email) {
  if (typeof email !== "string") {
    return "invalid";
  }
  let spacialChartes = [".", "@", "_", "-", "+"];
  let firstLatter = email.charAt(0);
  for (let i = 0; i < spacialChartes.length; i++) {
    if (firstLatter === spacialChartes[i]) {
      return "false";
    }
  }
  let firstSpace = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === " ") {
      firstSpace = true;
      break;
    }
  }
  if (firstSpace === true) {
    return false;
  }
  let atderSymbol = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atderSymbol === true;
      break;
    }
  }
  if (atderSymbol === false) {
    return false;
  }
  let lastFourLatter = "";
  if (email.length >= 4) {
  }
}

// console.log(email(islam.@gmail.com))
