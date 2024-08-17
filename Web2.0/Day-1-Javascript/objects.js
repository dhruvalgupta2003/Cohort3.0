// takes name and age as input and greet them

function greet(user) {
  // pass the object directly
  return "Hi " + user.name + "!!. Your age is " + user.age;
}

const user = {
  name: "Dhruval",
  age: 21,
};

console.log(greet(user));
