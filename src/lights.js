function createLightBulb() {
  let qty = centerPoint[3];
  for (let i = 0; i < qty; i++) {
    let rad = (i * pi * 2) / qty;
    lights.push(new LightBulb(rad));
  }
}

function LightBulb(rad) {
  this.rad = rad;
  let [x, y, radius, qty] = centerPoint;

  this.draw = opacity => {
    c.save();
    c.beginPath();

    c.translate(x, y);
    c.rotate(this.rad);
    c.translate(-x, -y);
    c.arc(x, y - radius / 4, radius / 25, 0, pi * 2);
    if (opacity == 1) {
      c.shadowColor = "yellow";
      c.shadowBlur = 20;
      c.fillStyle = `rgba(255,249,174, ${opacity})`;
    } else c.fillStyle = `rgba(255,255,255, ${opacity})`;
    c.fill();

    c.closePath();
    c.restore();
  };

  this.update = (rotateRad, opacity = 0.8) => {
    if (this.rad >= pi * 2) {
      this.rad = this.rad - pi * 2;
    }
    if (startSpinning) this.rad += rotateRad;
    this.draw(opacity);
  };
}

function drawCenterLight() {
  c.save();
  c.beginPath();

  c.fillStyle = "white";
  let [x, y, radius] = centerPoint;
  c.arc(x, y, radius / 25, 0, Math.PI * 2);
  c.fill();

  c.closePath();
  c.restore();
}
