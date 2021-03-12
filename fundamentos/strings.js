const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //codigo na tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // mostra o que esta no indice 1 em diante, incluindo ele mesmo
console.log(escola.substring(0, 3)) // mostra o que esta no indice 0 e vai ate o 3, nao incluindo o 3

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))

console.log("Ana,Maria,Pedro".split(','))