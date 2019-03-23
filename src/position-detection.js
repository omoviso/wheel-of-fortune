function positionDetection(rad) {
  //Detection by calculating the angle that the wheel has rotated
  let u = 0;
  let qty = centerPoint[3];
  if (rad > 2 * pi - pi / qty || rad < pi / qty) {
    return 0; //FIRST SECTION IN THE ARRAY
  }
  for (let i = 1; i <= qty * 2 - 3; i += 2) {
    if (rad > (i * pi) / qty && rad < (i * pi) / qty + (2 * pi) / qty) {
      return qty - i + u; //CURRENT SECTION POINTED BY THE ARROW
    }
    u++;
  }
}
