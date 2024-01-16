interface User {
  name: string
  age: number
  occupation: string
};

const users = [
  {
    name: 'Oscar',
    age: 20,
    occupation: 'Mecanico'
  },
  {
    name: 'Danien',
    age: 44,
    occupation: 'Analista'

  }]

function logPersona (user: User): void {
  console.log(`- ${user.name} , ${user.age}`)
}

console.log('Usuarios: ')
users.forEach(logPersona)
