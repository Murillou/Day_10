const empty = new Set()
console.log(empty) // criando um Set vazio

const nomes = ['Letycia', 'Gustavo', 'Gustavo', 'Murillo', 'Letycia', 'Murillo']
const setNome = new Set(nomes)
console.log(setNome) // criando um Set com Array

for(const nomes of setNome){
    console.log(nomes)
}  // criando Set com For


const pais = new Set()
console.log(pais.size) // .size serve para ver o tamanho do Conjunto

pais.add('Brasil') // .add adiciona elemento ao conjunto
pais.add('Argetina')
pais.add('Suécia')
pais.add('França')
pais.add('Marrocos')
console.log(pais.size)
console.log(pais)

const frutas = ['Melão', 'Melância', 'Morango', 'Maça', 'Banana']
setOfFrutas = new Set()
for (const frutinhas of frutas){
    setOfFrutas .add(frutinhas)
} // fazendo loop com Set
console.log(setOfFrutas)

setOfFrutas.delete('Melão') // metodo para excluir algum elemento do conjunto
console.log(setOfFrutas)
console.log(setOfFrutas.size)

console.log(setOfFrutas.has('Melância')) // metodo para checkar se existe ou não aquele elemento no conjunto
console.log(setOfFrutas.has('Melão'))

setOfFrutas.clear() // metodo para limpar todo o conjunto
console.log(setOfFrutas) 

const linguas = ['Português', 'Português', 'Inglês', 'Francês', 'Português', 'Inglês']
const setLingua = new Set(linguas)
console.log(setLingua)
console.log(setLingua.size)

const contador = []
const quantidade = {}

for(const lang of setLingua){
    const filtrarLingua = linguas.filter((lng) => lng ===  lang)
    console.log(filtrarLingua)
    contador.push({linguas: lang, quantidade: filtrarLingua.length})
}
console.log(contador) // botando o set em prática

const numeros = [1, 2, 4, 3, 3, 2, 1, 5, 6, 4]
const setNumero = new Set(numeros)
console.log(setNumero) // outro exemplo de set, para contar números unicos em um array 

let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) // fazendo a união de conjuntos


let x = [1, 2, 3, 4, 5, 6]
let y = [ 3, 4, 5, 7 , 8]

let X = new Set(x)
let Y = new Set(y)

let z = x.filter((num) => Y.has(num))
let Z = new Set(z) // descobrindo a intercessão entre os conjuntos
console.log(Z)

let m = [1, 2, 3, 4, 5, 6]
let n = [ 3, 4, 5, 7 , 8]

let M = new Set(m)
let N = new Set(n)

let o = m.filter((num) => !N.has(num))
let O = new Set(o) // descobrindo a diferença entre os conjuntos
console.log(o)

 // MAP

const map = new Map()
console.log(map) // criando um map vazio

const paises = [
    ['Brasil', 'França'],
    ['Russia', 'Alemanha'],
    ['Argentina', 'Croácia']
]
const paisesMap = new Map(paises) // criando map no array
console.log(paisesMap.size)
console.log(paisesMap)

const newPaises = new Map()
console.log(newPaises.size)
newPaises.set('Brasil', 'São Paulo') // adicionado valor ao map
newPaises.set('Argentina', 'Buenos Áries') // adicionado valor ao map
newPaises.set('França', 'Paris') // adicionado valor ao map
console.log(newPaises.size) 
console.log(newPaises)

console.log(newPaises.get('Brasil')) // obtendo um valor no map

console.log(newPaises.has('Brasil')) // checka se existe uma chave com o valor, retorna boolean

for(const pais of newPaises){
    console.log(pais)
} // obtendo todos os valores do map com for

for (const [pais, cidade] of newPaises){
    console.log(pais, cidade)
} // outra forma de obter todos os valores do map com for



