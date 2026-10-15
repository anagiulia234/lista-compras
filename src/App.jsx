import Itemcompra from './components/itemCompra';

const compras = [
  { id: 1, produto: 'Macarrão', quantidade: 3},
  { id: 2, produto: 'Lasanha', quantidade: 6},
  { id: 3, produto: 'Frango', quantidade: 1},
  { id: 4, produto: 'Queijo', quantidade: 5}
]

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Lista de Compras</h1>
      <ul>
        {compras.map((item) => (
        <Itemcompra 
        key= {item.id}
        produto={item.produto}
        quantidade={item.quantidade}
        />
      ))}
      </ul>
    </div>
  )
}

export default App;