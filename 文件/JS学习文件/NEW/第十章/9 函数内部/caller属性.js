function outer() {
	if (arguments[0] == 1){
		console.log("11")
		return 0
	} 
	inner()
}
function inner() {
	// console.log(inner.caller);
	console.log(arguments.callee.caller)
	arguments.callee.caller(1)
}
outer()