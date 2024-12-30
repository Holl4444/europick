const BALL = 50;
const STAR = 12;
const totBalls = 5;
const totStars = 2;

const numOptions = document.getElementById("num-options");
const starOptions = document.getElementById("star-options");
const numNumsChosen = document.getElementById("num-nums-picked");
const numStarsChosen = document.getElementById("num-stars-picked");
const confirmBtn = document.getElementById("confirm");

numNumsChosen.textContent = 0;
numStarsChosen.textContent = 0;

let choicesObject = {
  nums: numChoices = [],
  stars: starChoices = [],
}

const getRandom = (type) => Math.floor(Math.random() * type + 1);

const generateBalls = () => {
  const balls = [];
  for (i = 0; i < totBalls; i++) {
    let ball = getRandom(BALL);
    if (!balls.includes(ball)) {
      balls[i] = ball;
      continue;
    } else {
      while (balls.includes(ball)) {
        ball = getRandom(BALL);
      }
      balls[i] = ball;
    }
  }
  return balls;
};

const generateStars = () => {
  const stars = [];
  for (i = 0; i < totStars; i++) {
    let star = getRandom(STAR);
    if (!stars.includes(star)) {
      stars[i] = star;
      continue;
    } else {
      while (stars.includes(star)) {
        star = getRandom(STAR);
      }
      stars[i] = star;
    }
  }
  return stars;
};

const generateDisplay = () => {
  const nums = generateBalls();
  for (let i in nums) {
    const ball = document.getElementById(`ball-${i}`);
    ball.textContent = nums[i];
  }
  const stars = generateStars();
  for (let i in stars) {
    const star = document.getElementById(`star-${i}`);
    star.textContent = stars[i];
  }
  return nums.concat(stars);
};

const clear = () => {
  for (i = 0; i < totBalls; i++) {
    const ball = document.getElementById(`ball-${i}`);
    ball.textContent = "";
  }
  for (i = 0; i < totStars; i++) {
    const star = document.getElementById(`star-${i}`);
    star.textContent = "";
  }
  return 1;
};

//clear();

numOptions.addEventListener("click", (e, choicesObject) => {
  let txt = parseInt(numNumsChosen.textContent);
  if (!e.target.classList.contains("chosen")) {
    if (txt < 5) {
      e.target.classList.toggle("chosen");
      numNumsChosen.textContent = txt + 1;
      choicesObject.nums.numChoices.push(txt);
    }
    numChoices.push(text + 1);
  } else if (txt > 0) {
    e.target.classList.toggle("chosen");
    numNumsChosen.textContent = txt - 1;
    // find index of txt in choices and remove it.
  }
  console.table(choicesObject);
  return 1;
});

starOptions.addEventListener("click", (e, choicesObject) => {
  let txt = parseInt(numStarsChosen.textContent);
  if (!e.target.classList.contains("chosen")) {
    if (txt < 2) {
      e.target.classList.toggle("chosen");
      numStarsChosen.textContent = txt + 1;
      choicesObject.stars[0].push(txt);
      console.table(choicesObject);
    }
  } else if (txt > 0) {
    e.target.classList.toggle("chosen");
    numStarsChosen.textContent = txt - 1;
    // find index of txt in choices and remove it. (.findIndex())
  }
  return 1;
});

confirmBtn.addEventListener("click", () => {
  const results = generateDisplay();
  // results.filter((i) =>  userinputresults.contains[i])
  //check
});
