function createWheelSections() {
  let qty = wheelContents.color.length; //NUMBER OF SECTIONS ON WHEEL
  let x, y, rad;
  (x = canvas.width / 2), (y = canvas.height / 2), (radius = canvas.width / 6);

  drawWheelOutline(x, y, radius, preC);

  for (let i = 0; i < qty; i++) {
    let rotateRad = (i * pi * 2) / qty;
    drawWheelSections(
      x,
      y,
      radius,
      rotateRad,
      wheelContents.color[i],
      wheelContents.content[i],
      qty,
      preC
    );
  }
  return [x, y, radius, qty];
}

function drawWheelSections(x, y, radius, rotateRad, color, contents, qty, ctx) {
  let base = -pi / 2 - pi / qty;
  let rad = -pi / 2 + pi / qty;

  ctx.save();
  ctx.beginPath();

  ctx.translate(x, y);
  ctx.rotate(rotateRad);
  ctx.translate(-x, -y);
  ctx.arc(x, y, radius, base, rad);
  if (qty > 1) ctx.lineTo(x, y);

  let grad = ctx.createRadialGradient(x, y, radius / 1.1, x, y, radius);
  grad.addColorStop(0, color);
  grad.addColorStop(1, "#555555");
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.font = `${canvas.width / 90}px Comic Sans MS`;
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(contents, x, y - radius + radius / 5);

  ctx.closePath();
  ctx.restore();
}

function drawWheelOutline(x, y, radius, ctx) {
  ctx.save();
  ctx.beginPath();

  let outerRadius = radius * 1.07;
  ctx.arc(x, y, outerRadius, 0, pi * 2);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.lineWidth = "3";
  ctx.stroke();

  ctx.closePath();
  ctx.restore();
}
