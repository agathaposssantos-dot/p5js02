function setup() {
  createCanvas(400, 400);
}
let xJogador1 = 350;
let xJogador2 = 350;

function draw() {
  background(22);
  textSize(40);
  text("🏃", xJogador1, 100);
  text("🧑‍🦽", xJogador2, 300);
  rect(40, 0, 10, 400);
  
  function keyReleaser () {
  if (key === 'a') {
    xJogador1 += random(5);
  }
  if (key == 's') {
  xJogador2 += random(5);
  }
  }

  if (xJogador1 < 40) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 < 40) {