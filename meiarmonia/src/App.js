
import NavBar from '../src/componentes/NavBar'
import CardComponentHooks from './componentes/CardComponentHooks'
import './componentes/Style.css'
import Button from './componentes/Button'

function App() {
    return (
  <div className="App">

  <header className="App-header">
 
  <NavBar/>
  </header>

  
  <section className ='section'>
 
<CardComponentHooks />
<br></br> <br></br>


<Button/>
{/* 
<ItemListContainer/> */}
  </section>

  </div>
  );
}

export default App;
