interface Tipo { titular: string }
interface TipoRojo {
  color: 'rojo'
  clase: 2
}
type Tipo3 = Tipo & { color: string } | TipoRojo
export default Tipo3
