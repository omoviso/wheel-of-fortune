function createPowerBar() {
  let xBase = canvas.width / 12,
    yBase = canvas.height / 3,
    rBase = canvas.width / 8;

  //CREATE BASE POWER BAR
  power.base = drawPowerBase(xBase, yBase, rBase, c, true);

  //CREATE ACTIVE POWER BAR
  power.active = (function drawLevelActive() {
    let level = 0;
    let direction = true;
    let x = xBase,
      y = yBase,
      r = rBase;
    let velo = 3;
    return () => {
      if (level >= r || level < 0) {
        direction = !direction; //IF overfilled or underfilled, change direction of filling the bar
      }
      if (!powerMeasure) {
        level = 0;
      } else if (powerMeasure && !startSpinning) {
        direction ? (level += velo) : (level -= velo);
      }
      drawPowerBase(x, y, r, c, false, level);
      return level / r;
    };
  })();
}

function drawPowerBase(x, y, r, ctx, base, level = r) {
  if (!base) {
    if (level <= 0) level = 0;
    if (level >= r) level = r;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + r - level);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r * 1.5, y + r, r, -pi, -pi + Math.asin(level / r));
    ctx.lineTo(x, y + r - level);
    if (base) {
      ctx.fillStyle = "#ffb09c";
    } else {
      ctx.fillStyle = "#FF2400";
    }
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  } else {
    return () => {
      if (level <= 0) level = 0;
      if (level >= r) level = r;
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y + r - level);
      ctx.lineTo(x, y + r);
      ctx.arc(x + r * 1.5, y + r, r, -pi, -pi + Math.asin(level / r));
      ctx.lineTo(x, y + r - level);
      if (base) {
        ctx.fillStyle = "#ffb09c";
      } else {
        ctx.fillStyle = "#FF2400";
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    };
  }
}
