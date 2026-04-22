let p3 = Promise.race([
	// Promise.resolve(5),
	// Promise.resolve(6),
	// Promise.resolve(7)
  new Promise((resolve,reject)=>setTimeout(resolve(1),1000)),
  new Promise((resolve,reject)=>setTimeout(resolve(2),1000)),
  new Promise((resolve,reject)=>setTimeout(resolve(3),1000)),
  new Promise((resolve,reject)=>setTimeout(resolve(4),1000))
]);
setTimeout(console.log, 0, p3); // Promise <resolved>: 5