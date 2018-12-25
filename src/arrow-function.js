// {
// 	// ES3,ES5
// 	var evens = [1, 2, 3, 4, 5]
// 	var odds = evens.map(function (v) {
// 		return v + 1
//   })
//   console.log(evens, odds)
// } 

{
	// ES6
  let evens = [1, 2, 3, 4, 5]
	let odds = evens.map(v => v + 2)
	console.log(evens, odds)
} 

// const Person = {
// 	'name': 'little bear',
// 	'age': 18,
// 	'sayHello': function () {
// 		let self = this
// 		setInterval(function () {
// 			console.log('我叫' + self.name + '我今年' + self.age + '岁!')
// 		}, 1000)
// 	}
// }
// Person.sayHello()

// {
	// ES3,ES5
// 	var factory = function () {
// 		this.a = 'a'
// 		this.b = 'b'
// 		this.c = {
// 			a: 'a+',
// 			b: function () {
// 				return this.a
// 			}
// 		}
// 	}

// 	console.log(new factory().c.b())
// }

{
  // ES6 this指向定义时的函数
	var factory = function () {
		this.a = 'a'
		this.b = 'b'
		this.c = {
			a: 'a+',
			b: () => {
				return this.a
			}
		}
	}
	console.log(new factory().c.b())
}