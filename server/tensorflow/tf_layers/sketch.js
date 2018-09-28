// BUILD OUR SEQUENTIAL MODEL
const model = tf.sequential()


const configHid = {
  units: 4,
  inputShape: [2],
  activation: 'sigmoid'
}

const hidden = tf.layers.dense(configHid)

const configOut = {
  units: 3,
  activation: 'sigmoid'
}

const output = tf.layers.dense(configOut)

model.add(hidden)
model.add(output)

const sgdOpt = tf.train.sgd(0.1)
const config = {
  optimizer: sgdOpt,
  loss: 'Boooh'
}

model.compile()