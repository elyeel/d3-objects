const raisinAlarm = function(cookie) {
  // Put your solution here
  const alarm = elem => elem ==="🍇";
  if (cookie.findIndex(alarm) !== -1) {
    return "Raisin Alert!";
  } else {
    return "All Good!";
  }
  
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result = [];
  cookies.forEach(cookie => {
    const alarm = elem => elem ==="🍇";
    if (cookie.findIndex(alarm) !== -1) {
      result.push("Raisin Alert!");
    } else {
      result.push("All Good!");
    }
  });
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));