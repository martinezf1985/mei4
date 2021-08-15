
import NavBar from '../src/componentes/NavBar'
import './componentes/Style.css'
import ItemListContainer from './componentes/ItemListContainer';
// import ItemCount from './componentes/ItemCount';

function App() {
  const onAdd= () => {
    <button text="agregar producto" />
    console.log("")
  }
    return (
  <div className="App">

  <header className="App-header">
 
  <NavBar/>
  <ItemListContainer greeting="holaaaaa"/>
  </header>

  <section className ='section'>
 
{/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}

  </section>

  </div>
  );
}


 export default App
 
 
 