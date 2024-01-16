// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface UserNormal {
  name: string
  age: number
  occupation: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Admin {
  name: string
  age: number
  role: string
}
type Persona = UserNormal | Admin

const personas: Persona[] = [
  {
    name: 'Ricardo',
    age: 35,
    occupation: 'Ingeniero'
  },
  {
    name: 'Pablo',
    age: 49,
    role: 'admin'
  }
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function logPersona2 (user: Persona) {
  console.log(` ${user.name} - ${user.age}`)
}

personas.forEach(logPersona2)
