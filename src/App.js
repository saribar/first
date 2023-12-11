import './App.css';
import {Routes,Route,Link}from 'react-router-dom'
// import Card from './lesson8/components/Card';
// import Game from './lesson8/components/Game';
import Home from './lesson9/components/Home'
import Book from './lesson9/components/Book'
import Books from './lesson9/components/Books';
import SliceBook from './lesson9/Store/SliceBook';
function App() {
  return (
    <div className="App">
<nav>
  <Link to="/">home</Link>
</nav>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/books" element={<Books/>}/>
       <Route path=":id" element={<Book/>}/>
      
    </Routes>

   </div>



 
/* <Card/>
      <Game/> */
   
  );
}

export default App;
