let persons = [
  {
    name: "PK",
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];
let input = 18;

let arr = [];
for (i = 0; i < persons.length; i++) {
  if (persons[i].age > input) {
    persons[i].votingStatus = true;
    arr.push(persons[i]);
  }
}

console.log(arr);
