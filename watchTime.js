function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "invalid";
  }
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number" || isNaN(times[i])) {
      return "invalid";
    }
  }
  let allSecond = 0;
  for (let i = 0; i < times.length; i++) {
    allSecond += times[i];
  }
  let hours = Math.floor(allSecond / 3600);
  let remSecond = allSecond % 3600;
  let minutes = Math.floor(remSecond / 60);
  let seconds = remSecond % 60;
  let result = {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
  return result;
}

// console.log(calculateWatchTime([3600, 1800, 60]));
