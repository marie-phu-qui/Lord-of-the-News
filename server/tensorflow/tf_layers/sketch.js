// BUILD OUR SEQUENTIAL MODEL
const model = tf.sequential()

// Config first layer = inputShape mandatory 
const configHid = {
  units: 4,
  inputShape: [2],
  activation: 'sigmoid'
}

const hidden = tf.layers.dense(configHid)
model.add(hidden)

// Config Second layer  
const configOut = {
  units: 3,
  activation: 'sigmoid'
}

const output = tf.layers.dense(configOut)
model.add(output)

// Optimizer with gradient descent
const sgdOpt = tf.train.sgd(0.1)

// Compile the code
const config = {
  optimizer: sgdOpt,
  loss: 'meanSquaredError'
}
model.compile(config)

// Training Data
const xs = tf.tensor2d([
  [0.25, 0.92],
  [0.95, 0.24],
  [0.45, 0.23],
  [0.5, 0.91],
  [0.25, 0.92]
])

const ys = tf.tensor2d([
  [0.25, 0.92, 0.92],
  [0.95, 0.24, 0.92],
  [0.45, 0.23, 0.92],
  [0.5, 0.91, 0.92],
  [0.25, 0.92, 0.92]
])

const configFit = {
  verbose: true,
  epochs: 8
}

async function train() {
  const response = await model.fit(xs, ys, configFit);
  console.log(response.history.loss[0])
}
train()
// THIS PROCESS A PREDICTION - NOT TRAINED - just random
// We need inputs from a tensor
// const xs = tf.tensor2d([
//   [0.25, 0.92],
//   [0.95, 0.24],
//   [0.45, 0.23],
//   [0.5, 0.91],
//   [0.25, 0.92],
// ])


// let ys = model.predict(xs)

// ys.print()