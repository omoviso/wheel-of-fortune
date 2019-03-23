function drawArrow(ctx = c) {
  ctx.save();
  let radius = centerPoint[2],
    x = centerPoint[0];
  let y = centerPoint[1] - radius / 1.1,
    qty = centerPoint[3];
  let base = pi / qty;
  let firstRad = -pi / 2 - base / 2;
  let secondRad = firstRad + base;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius / 4, firstRad, secondRad);
  ctx.lineTo(x, y);
  ctx.fillStyle = "#c30101";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.lineWidth = "5";
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}
