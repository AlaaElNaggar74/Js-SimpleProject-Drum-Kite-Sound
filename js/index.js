let singdiv = document.querySelectorAll(".singdiv");
let auddioo = document.querySelectorAll("audio");
let h1h1 = document.querySelectorAll(".drumdiv h1");

let arr = [];

for (let index = 0; index < auddioo.length; index++) {
  let obj = {
    divsoun: auddioo[index],
    divSounPar: singdiv[index].id,
    firstch: h1h1[index].id.substring(0, 1),
  };
  arr.push(obj);
}

function getaudio(divv) {
  for (let index = 0; index < arr.length; index++) {
    if (divv.id === arr[index].divSounPar) {
      arr[index].divsoun.play();
    }
  }
}

function getcharsou(char) {
  for (let index = 0; index < arr.length; index++) {
    if (
      char === arr[index].firstch ||
      char === arr[index].firstch.toUpperCase()
    ) {
      arr[index].divsoun.play();
    }
  }
}

singdiv.forEach((element) => {
  element.addEventListener("click", () => {
    getaudio(element);
  });
});

document.body.addEventListener("keyup", (e) => {
  let keycodd = e.key;

  getcharsou(keycodd);
  console.log(e);
});
