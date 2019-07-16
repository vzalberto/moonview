const SunCalc = require('suncalc');

var latitude = 20.1225;
var longitude = -98.736111;

document.getElementById('latlng').innerText = `${latitude}, ${longitude}`;

const moonPosition = SunCalc.getMoonPosition(new Date(), latitude, longitude);
const moonTimes = SunCalc.getMoonTimes(new Date(), latitude, longitude);

console.log(moonPosition);
console.log(moonTimes);

const azimuth = moonPosition.azimuth;
const altitude = moonPosition.altitude;
const riseTime = moonTimes.rise;
const setTime = moonTimes.set;

document.getElementById('azimuth').innerText = `Azimuth: ${azimuth}`;
document.getElementById('altitude').innerText = `Altitude: ${altitude}`;

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

let can = new Zdog.Cylinder({
  addTo: illo,
  diameter: 180,
  length: 5,
  stroke: false,
  color: '#ccc',
  backface: '#313',
});

// let north = new Zdog.Shape({
//   addTo: can,
//   path: [
//     { y: 0 }, 
//     { y: 90 }
//     ],
//   stroke: 2,
//   translate: { z: -20 },
//   color: "white",
// });

// let northSymbol = new Zdog.Shape({
//   addTo: can,
//   path: [
//     { y: 100 },
//     { y: 120 },
//     { x: 20, y: 100 }
//   ],
//   stroke: 2,
//   color: "white",
// });

let moon = new Zdog.Shape({
  addTo: moonAnchor,
  stroke: 20,
  color: 'white',
  translate: { y: -100},
});

function animate() {
  illo.rotate.z += 0.2;
  illo.rotate.y += 0.007;
  illo.rotate.x += 0.2;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();