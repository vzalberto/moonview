const SunCalc = require('suncalc');
console.log(SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111));

const azimuth = SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111).azimuth;
const altitude = SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111).altitude;
const riseTime = SunCalc.getMoonTimes(new Date(), 20.1225, -98.736111).rise;
const setTime = SunCalc.getMoonTimes(new Date(), 20.1225, -98.736111).set;

console.log(SunCalc.getMoonTimes(new Date(), 20.1225, -98.736111));

document.getElementById('azimuth').innerText = azimuth;
document.getElementById('altitude').innerText = altitude;

if (riseTime !== undefined){
  document.getElementById('rise').innerText = `Rise: ${riseTime}`;
}

if (setTime !== undefined){
  document.getElementById('set').innerText = `Set: ${setTime}`;
}


const TAU = Zdog.TAU;
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: { x:  TAU / 4, y: TAU / 2, z : TAU / 2}
});

let moonAnchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { x: - altitude, z: - azimuth }, 
});

console.log(moonAnchor)

let can = new Zdog.Cylinder({
  addTo: illo,
  diameter: 180,
  length: 5,
  stroke: false,
  color: '#ccc',
  backface: '#66a',
});

let north = new Zdog.Shape({
  addTo: can,
  path: [
    { y: 0 }, 
    { y: 90 }
    ],
  stroke: 1,
  color: "green",
});

let northSymbol = new Zdog.Shape({
  addTo: can,
  path: [
    { y: 100 },
    { y: 120 },
    { x: 20, y: 100 }
  ],
  stroke: 2,
  color: "white",
});

let moon = new Zdog.Shape({
  addTo: moonAnchor,
  stroke: 20,
  color: 'white',
  translate: { y: -100},
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();