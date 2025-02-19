import List from './List.jsx'

function App() {

  const pokemon = [{id: 1, name:"pikachu", weight: 8}, 
                   {id: 2, name:"vaporeon", weight:15}, 
                   {id: 3, name:"dialga", weight:120}, 
                   {id: 4, name:"deoxys", weight:85}, 
                   {id: 5, name:"fennekin", weight:7}]; 

  const pasta = [{id: 6, name:"spaghetti", weight: 30}, 
                 {id: 7, name:"carbonara", weight:60}, 
                 {id: 8, name:"pestopasta", weight:50}, 
                 {id: 9, name:"tunapasta", weight:40}, 
                 {id: 10, name:"tunacarbonara", weight:70}]; 
     
  return (<>
              {pokemon.length > 0 && <List items={pokemon} category="Pokemon"/>}
              {pasta.length > 0 && <List items={pasta} category="Pasta"/>}
          </>);
}

export default App
