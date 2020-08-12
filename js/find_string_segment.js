let string = "Some text about World War II, the end of the string"
console.log(string)
console.log("string.indexOf('World War II') ",string.indexOf("World War II"))
console.log("string.lastIndexOf('World War II') (the same)", string.lastIndexOf("World War II"))
console.log("string.replace('World War II', 'Second World War')", string.replace("World War II", "Second World War"))
console.log("string.replace(/'World War II'/g, 'Second World War') (global replace)", string.replace(/World War II/g, "Second World War"))
