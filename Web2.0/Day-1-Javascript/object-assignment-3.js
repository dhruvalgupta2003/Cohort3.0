function greet(users) {
  return users.filter((user) => user.gender == "male" && user.age >= 18);
}


const userArray = [
  {
    name: "John",
    gender: "male",
    age: 21,
  },
  {
    name: "Jane",
    gender: "female",
    age: 21,
  },
  {
    name: "Max",
    gender: "male",
    age: 22,
  },
  {
    name: "Eren",
    gender: "male",
    age: 16,
  },
];

console.log(greet(userArray));
