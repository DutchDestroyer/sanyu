'use strict'

function Hedy() {
  let name = window.prompt("Hoe heet jij")
  if (name === "Sanyu") {
    for (let i = 0; i <= 10000; i++) {
      console.log(i)
    }

    window.open("https://mijn.numo.nl");
  } else if (name === "Mark") {
    window.open("https://www.google.com/maps");
  } else {
    window.alert("jij hebt niet de naam die ik zocht. :(")
  }
}