function greet(user) {
  return (
    "Hi!! " +
    getSalutation(user.gender) +
    " " +
    user.name +
    ". You are " +
    user.age +
    " years old."
  );
}

function getSalutation(gender) {
  if (gender == "male") {
    return "Mr";
  } else if (gender == "female") {
    return "Mrs";
  } else {
    return "Others";
  }
}

const user = {
  name: "John",
  gender: "male",
  age: 21,
};

console.log(greet(user));
