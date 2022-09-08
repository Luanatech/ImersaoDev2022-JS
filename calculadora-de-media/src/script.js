var name = "Luana"
var notaPrimeiroBimestre = 9.5465346
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 

// fixar 1 casa:
var notaFixada = notaFinal.toFixed(1)


console.log("Welcome "+ name)
console.log(notaFinal)
console.log(notaFixada)
console.log("A nota final de " + name + " é " + notaFixada)