window.onload = () => {
  let back = document.querySelector(".back"); //back button
  let contents = document.querySelector(".contents"); //contents for wheel
  let title = document.querySelector(".title");
  let images = document.querySelector(".images");
  let startButton = document.getElementById("activate");

  //Transition for showing content of the selected section when wheel stops.
  let transitionDuration = 0.6;

  contents.style.transition = `all ${transitionDuration}s`;
  title.style.transition = `opacity ${transitionDuration}s`;
  images.style.transition = `opacity ${transitionDuration}s`;
  back.style.transition = `opacity ${transitionDuration}s ${transitionDuration}s`;

  //Clear BACK button when pressed
  back.addEventListener("click", () => {
    back.style.opacity = 0;
    setTimeout(() => (back.style.display = "none"), transitionDuration);
    setTimeout(() => contents.classList.remove("active"), 30);
    title.style.opacity = 0;
    images.style.opacity = 0;
  });

  //START MEASURING SPIN POWER
  startButton.addEventListener("mousedown", () => {
    if (!startSpinning) powerMeasure = true;
  });

  //START SPINNING THE WHEEL BASED ON POWER
  startButton.addEventListener("mouseup", () => {
    if (powerMeasure) {
      let x = power.active();
      velocity = x * maxVelocity;
      startSpinning = true;
      powerMeasure = false;
      // console.log(x);
    }
  });

  startButton.addEventListener("mouseout", () => {
    powerMeasure = false;
  });

  centerPoint = createWheelSections(); //centerPoint = [x, y, rad, qty] of center point, qty is the number of sections on wheel

  drawArrow();
  createPowerBar();
  createLightBulb();
  animation();
};
