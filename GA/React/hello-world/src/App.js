
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import "./styles.css";

function App() {
 return (
   <div>
     <Header />
     <Player whichPlayer="x" />
     <Player whichPlayer="o" />
     <Board/>
   </div>
 );
}

export default App;