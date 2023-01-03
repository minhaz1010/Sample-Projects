
let text = "abcdef0123456789";
let len = text.length;
let randomNumber = "";
color.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    randomNumber += text.charAt(Math.floor(Math.random() * (len + 1)));
  }
  console.log((document.body.style.backgroundColor = `#${randomNumber}`));
  randomNumber = "";
  // document.body.style.backgroundColor='#000000'
});
