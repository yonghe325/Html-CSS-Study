// 异步打印"foo"
async function foo() {
	console.log(await Promise.resolve('foo'));
}
foo();
// foo

// 异步打印"bar"
async function bar() {
	return await Promise.resolve('bar');
}
bar().then(console.log);
// bar

// 1000 毫秒后异步打印"baz"
async function baz() {
	await new Promise((resolve, reject) => setTimeout(resolve, 1000));
	console.log('baz');
}
baz();
// baz（1000 毫秒后）