// ES5 中常量的写法
// 把一个变量设置成不可写
Object.defineProperty(window, 'PI2', {
	value: 3.1415926,
	writable: false,
})

console.log('ES5:'+ window.PI2)

// ES6 的常量写法

const PI = 3.1415926
console.log('ES6:'+ PI)

// PI = 4
