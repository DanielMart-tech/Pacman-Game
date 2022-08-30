let circles = [];
let pacmanPosition;

function setup() {
  createCanvas(400, 400);

  pacmanPosition = createVector(200, 200);

  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(400),
      y: random(400),
    });
  }
}

function draw() {
  background(220);

  fill("white");
  circles.forEach((circle) => {
    ellipse(circle.x, circle.y, 40);
  });

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      pacmanPosition.x -= 2;
    } else if (keyCode === RIGHT_ARROW) {
      pacmanPosition.x += 2;
    } else if (keyCode === UP_ARROW) {
      pacmanPosition.y -= 2;
    } else if (keyCode === DOWN_ARROW) {
      pacmanPosition.y += 2;
    }
  }

  isTouchingCircles();

  describe("Pacman");
  fill("yellow");
  stroke("black");
  arc(
    pacmanPosition.x,
    pacmanPosition.y,
    90,
    90,
    QUARTER_PI,
    PI + HALF_PI + QUARTER_PI,
    PIE
  );

  //Pacman's eye
  fill("black");
  circle(pacmanPosition.x, pacmanPosition.y - 20, 10);  

  text(`Counter: ${circles.length}`, 310, 20);

  if(circles.length === 0) {
    text("YOU WON!", 200, 200);
  }
}

function isTouchingCircles() {
  const newCircles = circles.filter((circle) => {
    let distance = Math.sqrt(
      Math.pow(pacmanPosition.x - circle.x, 2) +
        Math.pow(pacmanPosition.y - circle.y, 2)
    );
    if (distance > 65) {
      return circle;
    }
  });

  circles = newCircles;
}
