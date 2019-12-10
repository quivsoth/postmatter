var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,

    Body = Matter.Body;
    Mouse = Matter.Mouse;

//   var mouse = Mouse.create(render.canvas);
//   var body = Bodies.rectangle(0, 0, 10, 10, { isStatic: true });

//   Events.on(engine, 'afterUpdate', function() {
//       if (!mouse.position.x) {
//         return;
//       }

//       Body.setVelocity(body, {
//           x: body.position.x - mouse.position.x,
//           y: body.position.y - mouse.position.y
//       })

//       Body.translate(body, {
//           x: mouse.position.x,
//           y: mouse.position.y
//       });
//   });

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });
var ball = Bodies.circle(90, 280, 20);
World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball]);
Engine.run(engine);
Render.run(render);


// Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});

// $('.force').on('click', function () {
//     Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
// });


// $('.vforce').on('click', function () {
//     Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.05});
// });
