import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PantallaPrincipal from './assets/Components/PantallaPrincipal'
import Productos from './assets/Components/Producto'
import Clientes from './assets/Components/Cliente'
import Barberos from './assets/Components/Barbero'
import Menu from './assets/Components/Menu'

const router = createBrowserRouter ([

  {
    path: '/',
    element: <PantallaPrincipal/>
  },
  {
    path: '/productos',
    element: <Productos/>

  },
  {
    path: '/clientes',
    element: <Clientes/>
  },
  {
    path: '/barberos',
    element: <Barberos/>
  }
  
])

function App() {
  return(
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App