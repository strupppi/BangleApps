const buffer = Graphics.createArrayBuffer(61, 61, 2, { msb: true });
const eye = {
  width: buffer.getWidth(),
  height: buffer.getWidth(),
  bpp: 2,
  transparent: 2,
  buffer: buffer.buffer,
};
function getRock() {
  return {
  width: 240,
  height: 160,
  bpp: 2,
  buffer: require("heatshrink").decompress(atob("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"))
};
}

let px = 0;
let py = 0;
let vx = 0;
let vy = 0;
let ax = 0;
let ay = 0;
let gx = 0;
let gy = 0;

function draw() {
  vx += ax;
  vy += ay;
  px += vx;
  py += vy;

  const pp = Math.sqrt(px * px + py * py);

  if (pp > 14) {
    const vv = Math.sqrt(vx * vx + vy * vy);
    const alpha = Math.atan2(px, py);
    const ratio = 14 / pp;

    px *= ratio;
    py *= ratio;
    vx = -0.9 * vv * Math.sin(alpha);
    vy = -0.9 * vv * Math.cos(alpha);
  }

  buffer.setColor(2);
  buffer.fillRect(0, 0, 60, 60);
  buffer.setColor(3);
  buffer.fillCircle(30, 30, 30);
  buffer.setColor(0);
  buffer.fillCircle(30 + px, 30 + py, 16);

  g.reset(); // ensure we're drawing in white
  g.drawImage(eye, 55, 90);
  g.drawImage(eye, 125, 90);
}

Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

g.clear(1); // ensure we're drawing in white
g.drawImage(getRock(), 0, 40);

Bangle.loadWidgets();
Bangle.drawWidgets();

Bangle.on('accel', (accel) => {
  gx += 0.1 * (accel.x - gx);
  gy += 0.1 * (accel.y - gy);
  ax = 90 * gx - 100 * accel.x;
  ay = 90 * gy - 100 * accel.y;
  draw();
});
