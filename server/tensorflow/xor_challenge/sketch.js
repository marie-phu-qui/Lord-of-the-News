let nn;
let model;

let resolution = 50;
let cols;
let rows;

let xs;

const train_xs = tf.tensor2d([
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
]);

const train_ys = tf.tensor2d([
  [0],
  [1],
  [1],
  [0]
]);


function setup() {
  createCanvas(400, 400);
  let cols = width / resolution;
  let rows = height / resolution;

  // Create input Data thing
  let inputs = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols;
      let x2 = j / rows;
      inputs.push([x1, x2]);
    }
  }
  xs = tf.tensor2d(inputs);



  model = tf.sequential();
  let hidden = tf.layers.dense({
    inputShape: [2],
    units: 2,
    activation: 'sigmoid'
  });
  let output = tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  });
  model.add(hidden);
  model.add(output);

  // Optimizer with gradient descent
  const learningRate = 0.1
  const sgdOpt = tf.train.adam(learningRate)

  // Compile the code
  model.compile({
    optimizer: sgdOpt,
    loss: 'meanSquaredError'
  })
  setTimeout(train, 100)
}


function train() {
  trainModel().then(response => {
    console.log(response.history.loss[0])
    setTimeout(train, 100)
  });
}

function trainModel() {
  return model.fit(train_xs, train_ys, {
    shuffle: true,
    epochs: 8
  })
}

function draw() {
  background(0)
  // noLoop()

  tf.tidy(() => {
    //PREDICT ME SOMETHING COMPUTER
    let ys = model.predict(xs)
    let y_values = ys.dataSync()

    // DRAW ME SOMETHING MACHINE
    let index = 0;
    for (let i = 0; i < cols; i++) {
      for (letj = 0; j < rows; j++) {
        let br = y_values[index * 255]
        fill(br);
        rect(i * resolution, j * resolution, resolution, resolution);
        fill(255 - br);
        textAlign(CENTER, CENTER);
        text(nf(y_values[index], 1, 2, i * resolution + resolution / 2))
        index++
      }
    }
  })
}
