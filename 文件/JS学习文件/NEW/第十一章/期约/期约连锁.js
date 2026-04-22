let p = new Promise((resolve, reject) => {
	console.log('initial promise rejects');
	reject();
});
p.catch(() => console.log('reject handler'))
	.finally(() => console.log('finally handler'))
	.finally(() => console.log('finally handler'))
	.then(() => console.log('resolve handler'))
	.finally(() => console.log('finally handler'));
// initial promise rejects
// reject handler
// resolve handler
// finally handler