import Auto from './lib/auto';
import type Tipo3 from './lib/tipos';
class Test {
readonly lastName: string = ''

  constructor (lastName: string) {
    this.lastName = lastName
  }

  start (name: string): void {
    console.log(`Starting ${name} ${this.lastName}`)
  }
}

const variableTipo3: Tipo3 = {
  color: 'rojo',
  titular: 'pablo',
  clase: 2
}

const auto = new Auto()
const x = new Test('Barzaghi')
x.start('pablo')
auto.run()
imprimirTipo(variableTipo3)

function imprimirTipo (v: Tipo3){
  console.log(v)
}
