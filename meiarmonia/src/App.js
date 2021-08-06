
import NavBar from '../src/componentes/NavBar'
// import CardComponentHooks from './componentes/CardComponentHooks'
import './componentes/Style.css'
// import Button from './componentes/Button'
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

function App() {
    return (
  <div className="App">

  <header className="App-header">
 
  <NavBar/>
  <ItemListContainer greeting="holaaaaa"/>
  </header>

  
  <section className ='section'>
 
{/* <CardComponentHooks /> */}

<ItemCount/>

{/* <Button/> */}

  </section>

  </div>
  );
}

export default App;
