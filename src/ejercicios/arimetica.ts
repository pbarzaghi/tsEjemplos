// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const calculadora = (nro1: number, nro2: number, operacion: Operation) => {
  let infoAdd: string = ''
  if (operacion === 'multiply') {
    infoAdd = `La multiplicacion de ${nro1} * ${nro2} = `
    console.log(infoAdd, nro1 * nro2)
  } else if (operacion === 'add') {
    infoAdd = `La Suma de ${nro1} + ${nro2} = `
    console.log(infoAdd, nro1 + nro2)
  } else if (operacion === 'rest') {
    infoAdd = `La Resta de ${nro1} - ${nro2} = `
    if (nro1 > nro2) { console.log(infoAdd, nro1 - nro2) } else { console.log(infoAdd, (-1) * (nro2 - nro1)) }
  } else {
    if (nro2 === 0) { console.log('No se puede dividir por cero') } else {
      infoAdd = `La Division de ${nro1} / ${nro2} = `
      console.log(infoAdd, nro1 / nro2)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Operation = 'multiply' | 'add' | 'rest' | 'divide'

calculadora(3, 4, 'add')
calculadora(3, 4, 'rest')
calculadora(3, 4, 'multiply')
calculadora(4, 5, 'divide')
