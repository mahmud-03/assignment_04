function electionResult(votes) {
  if (Array.isArray(votes) === false) {
    return "Invalid";
  }

  let mangoCount = 0;
  let bananaCount = 0;

  for (let vote of votes) {
    if (vote === "mango") {
      mangoCount++;
    } else if (vote === "banana") {
      bananaCount++;
    }
  }

  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mangoCount) {
    return "Banana";
  } else {
    return "Draw";
  }
}

// console.log(electionResult(["mango", "banana", "mango", "banana"]));
