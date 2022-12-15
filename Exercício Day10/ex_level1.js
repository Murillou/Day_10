const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const newSetCountries = new Set(countries)

const newSet = new Set()
console.log(newSet)

console.log('=====OUTRA QUESTÃO=====')

let num = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]
let setNum = new Set(num)
for (const n of num){
    setNum.add(n)
}
console.log(setNum)

console.log('=====OUTRA QUESTÃO=====')

setNum.delete(2)
console.log(setNum)

console.log('=====OUTRA QUESTÃO=====')

setNum.clear()
console.log(setNum)

console.log('=====OUTRA QUESTÃO=====')

newSetCountries.add('Brasil')
newSetCountries.add('Canadá')
console.log(newSetCountries)

console.log('=====OUTRA QUESTÃO=====')
