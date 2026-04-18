const userList = []
function emit(newValue) {
  console.log(" 2 ")
  console.log(newValue)
}
const proxy = new Proxy(userList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments)
    // console.log(property)
    if (result) {
      console.log(" 1 ")
      emit(Reflect.get(target, property, receiver))
    }
    return result
  },
})
proxy.push("John")
// John
proxy.push("Jacob")
// Jacob
