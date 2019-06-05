const SunCalc = require('suncalc');
console.log(SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111));

const azimuth = SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111).azimuth;
const altitude = SunCalc.getMoonPosition(new Date(), 20.1225, -98.736111).altitude;

document.getElementById('azimuth').innerText = azimuth;
document.getElementById('altitude').innerText = altitude;

const TAU = Zdog.TAU;
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: { x: - TAU / 4, z : TAU / 2}
});

console.log(altitude);
console.log(azimuth);

let moonAnchor = new Zdog.Anchor({
  addTo: illo,
  rotate: { x: - altitude, z: - azimuth }, 
});

console.log(moonAnchor)

// new Zdog.Shape({
//   addTo: illo,
//   path: [
//     { y: 0 }, // start at 1st point
//     { y:  -90 }, // line to 2nd point
//   ],
//   stroke: 10,
//   color: 'red',
// });

// new Zdog.Shape({
//   addTo: illo,
//   path: [
//     { x: 0 }, // start at 1st point
//     { x:  -90 }, // line to 2nd point
//   ],
//   stroke: 10,
//   color: 'green',
// });

// new Zdog.Shape({
//   addTo: illo,
//   path: [
//     { z: 0 }, // start at 1st point
//     { z:  90 }, // line to 2nd point
//   ],
//   stroke: 10,
//   color: 'blue',
// });

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