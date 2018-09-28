// Tiny TFJS train / predict example.
// async function myFirstTfjs() {
//   // Create a simple model.
//   const model = tf.sequential();
//   model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

//   // Prepare the model for training: Specify the loss and the optimizer.
//   model.compile({
//     loss: 'meanSquaredError',
//     optimizer: 'sgd'
//   });

//   // Generate some synthetic data for training. (y = 2x - 1)
//   const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
//   const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

//   // Train the model using the data.
//   await model.fit(xs, ys, { epochs: 250 });

//   // Use the model to do inference on a data point the model hasn't seen.
//   // Should print approximately 39.
//   document.getElementById('micro_out_div').innerText +=
//     model.predict(tf.tensor2d([20], [1, 1]).print);
// }

// myFirstTfjs();


// should print [1,2,3,4] on our console if we write this code there
function draw() {
  const data = tf.tensor([1, 2, 3, 4])
  const values = [];
  for (let i = 0; i < 15; i++) {
    values[i] = Math.random(0, 100);
  }
  const shape = [5, 3];
  const a = tf.tensor2d(values, shape, 'int32')
  const b = tf.tensor2d(values, shape, 'int32')

  const bb = b.transpose()

  const c = a.matMul(bb)
  c.print()
}

draw()
console.log('hello');