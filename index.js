function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let message = "";
  city === "NYC" ? (message = "Ok, sounds good.") : (message = "No go.");
  return message;
}

function switchOnCharmFromTip(m) {
  // Write your code here!
  switch (m) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "thanks for everything":
      return "Bye.";
  }
}
