let data = [
  {
    name: "Minhaz",
    age: "24",
  },
  {
    name: "Swapnil",
    age: "22",
  },
  {
    name: "Injamam",
    age: "23",
  },
  {
    name: "Shah rukh khan",
    age: "56",
  },
  {
    name: "Rabbatul bait",
    age: "24",
  },
  {
    name: "Dhruv",
    age: "10",
  },
];
const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name +' is ' +item.age + " years old "+ "</div>";
});
info.innerHTML = details.join("\n");
