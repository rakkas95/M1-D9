window.onload = function () {
    const bingo = document.querySelector("#bingo");

    for (let i = 0; i < 76; i++ ) {
      const child = document.createElement("div");
      child.className = "box";
      child.classList = "bingoCell";
      
      const box = document.createElement("h3")
      const bingoNumber = i + 1;
      box.innerText = bingoNumber;

      child.appendChild(box)
      bingo.appendChild(child);
    }
  };

  const randomizeNumber = function () {
    let number = Math.floor(Math.random() * 76) + 1
    console.log(number)
    let allBox = document.querySelectorAll('.bingoCell')
    let foundBox;
    console.log(foundBox)
    allBox[number - 1].style.backgroundColor = 'black'
  };