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