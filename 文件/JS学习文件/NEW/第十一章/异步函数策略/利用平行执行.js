// async function randomDelay(id) { 
//  // 延迟 0~1000 毫秒
//  const delay = Math.random() * 1000; 
//  return new Promise((resolve) => setTimeout(() => { 
//  console.log(`${id} finished`); 
//  resolve(); 
//  }, delay)); 
// } 
// async function foo() { 
//  const t0 = Date.now(); 
//  await randomDelay(0); 
//  await randomDelay(1); 
//  await randomDelay(2); 
//  await randomDelay(3); 
//  await randomDelay(4); 
//  console.log(`${Date.now() - t0}ms elapsed`); 
// } 
// foo(); 
// // 0 finished 
// // 1 finished 
// // 2 finished 
// // 3 finished 
// // 4 finished 
// // 877ms elapsed


// async function randomDelay(id) {
// // 延迟 0~1000 毫秒
// 	const delay = Math.random() * 1000;
// 		return new Promise((resolve) => setTimeout(() => {
// 		console.log(`${id} finished`);
// 		resolve();
// 	}, delay));
// }
// async function foo() {
// 	const t0 = Date.now();
// 	for (let i = 0; i < 5; ++i) {
// 		await randomDelay(i);
// 	}
// 	console.log(`${Date.now() - t0}ms elapsed`);
// }
// foo();

async function randomDelay(id) {
// 延迟 0~1000 毫秒
	const delay = Math.random() * 1000;
	return new Promise((resolve) => setTimeout(() => {
		setTimeout(console.log, 0, `${id} finished`);
		resolve();
	}, delay));
}
async function foo() {
	const t0 = Date.now();
	const p0 = randomDelay(0);
	const p1 = randomDelay(1);
	const p2 = randomDelay(2);
	const p3 = randomDelay(3);
	const p4 = randomDelay(4);
		// 一次性初始化所有期约
		// 当某一个期约完成时
		// 恢复执行对应的awith
	await p0;
	await p1;
	await p2;
	await p3;
	await p4;
	setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
}
foo()