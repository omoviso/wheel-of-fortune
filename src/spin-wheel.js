function spinWheel() {
  let rad = 0;
  return function() {
    if (rad >= pi * 2) {
      rad = rad - pi * 2; //Go past 360 degree => start back at 0 degree
    }
    if (velocity <= 0) {
      //Stop spinning, return position for detection
      velocity = maxVelocity;
      startSpinning = false;

      c.save();

      c.translate(centerPoint[0], centerPoint[1]);
      c.rotate(rad);
      c.translate(-centerPoint[0], -centerPoint[1]);
      c.drawImage(preRender, 0, 0);
      c.restore();
      return [false, rad, velocity];
    }
    if (startSpinning) {
      velocity -= 0.001;
      rad += velocity;
    }
    c.save();
    c.translate(centerPoint[0], centerPoint[1]);
    c.rotate(rad);
    c.translate(-centerPoint[0], -centerPoint[1]);
    c.drawImage(preRender, 0, 0);

    c.restore();
    return [true, rad, velocity];
  };
}
let spinTheWheel = spinWheel();
