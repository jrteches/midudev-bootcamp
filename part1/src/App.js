import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
return <p>Esta es la app del curso Fullstack</p>
}
function App() { // declaramos el componente App que no es mas que una función.
  return (
    <div className="App">
     <Mensaje message='Estamos trabajando en un curso de React' />
     <Description />
    </div>
  );
}

export default App;
