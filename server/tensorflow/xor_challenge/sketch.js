let model;

let resolution = 25
let cols
let rows

const train_xs = tf.tensor2d([
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
])

const train_ys = tf.tensor2d([
  [0],
  [1],
  [1],
  [0]
])


function setup() {
  createCanvas(400, 400)
  let cols = width / resolution
  let rows = height / resolution

  // Create input Data thing
  let inputs = []
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols
      let x2 = j / rows
      inputs.push([
        [x1, x2]
      ]
      )
    }
  }
  xs = tf.tensor2d(inputs)



  model = tf.sequential()
  let hidden = tf.layers.dense({
    inputShape: [2],
    units: 2,
    activation: 'sigmoid'
  });
  let output = tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  })
  model.add(hidden)
  model.add(output)

  // Optimizer with gradient descent
  const learningRate = 0.1
  const sgdOpt = tf.train.sgd(learningRate)

  // Compile the code
  const config = {
    optimizer: sgdOpt,
    loss: 'meanSquaredError'
  }
  model.compile(config)
}

async function trainModel() {
  return await model.fit(train_xs, train_ys, {
    shuffle: true
  })
}

function draw() {
  background(0)

  trainModel().then(response => console.log(response.history.loss[0]))
  // noLoop()
}
