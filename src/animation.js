function animation() {
  window.requestAnimationFrame(animation);
  c.clearRect(0, 0, canvas.width, canvas.height);
  //SPIN THE WHEEL WHEN BUTTON PRESSED
  let result = spinTheWheel(); //return [state, rad, velocity] state: if wheel is spinning or not, rad: current degree of the wheel, velocity: spinning velocity

  //DETECT WHICH POSITION THE POINTER IS IN FOR THE LIGHTBULB TO TURN ON ACCORDINGLY
  let index = positionDetection(result[1]);

  //SHOW CONTENT WHEN WHEEL STOPS
  if (!result[0]) {
    showContent(index);
  }

  //DRAW THE POINTER
  drawArrow();

  //DRAW THE BASE POWER BAR
  power.base();

  //DRAW AND GET THE CURRENT POWER LEVEL
  power.active();

  //CHANGE COLOR OF LIGHTBULBS BASED ON WHICH SECTION IS POINTED TO AT THE MOMENT
  lights.forEach((light, i) => {
    if (i == index) {
      light.update(result[2], 1);
    } else {
      light.update(result[2]);
    }
  });

  drawCenterLight();
}
