// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

let anchor = new Zdog.Anchor({
  addTo: illo,
});

// add circle
new Zdog.Shape({
  addTo: illo,
  stroke: 80,
  color: '#00f',
  translate: { z: 40 },
});

// add circle
new Zdog.Shape({
  addTo: illo,
  stroke: 20,
  color: '#fff',
  translate: { z: -40 },
});

// update & render
illo.updateRenderGraph();

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();