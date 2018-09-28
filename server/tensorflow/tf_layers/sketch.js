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

// We need inputs from a tensor
const inputs = tf.tensor2d([
  [0.25, 0.92]
])


let outputs = model.predict(inputs)
outputs.print()