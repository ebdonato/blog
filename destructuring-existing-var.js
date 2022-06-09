let name = "Fulano"
let age = 22

console.log("before:", name) // Fulano

console.log("before:", age) // 22

const user = {name: "Eduardo", age: 39}

;({name, age} = user)

console.log("after ", name) // Eduardo

console.log("after ", age) // 39
