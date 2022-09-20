import "./styles.css";
//alla fron return dvs Route, Routes osv
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Ewallet from "./components/pages/Ewallet";
import AddCard from "./components/pages/AddCard";
import { fetchRandomUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <h1> E-wallet with React</h1>

        <Link to="/ewallet">
          <button> E-wallet </button>
        </Link>
        <Link to="/addcard">
          <button> AddCard</button>
        </Link>

        <Routes>
          <Route path="/ewallet" element={<Ewallet />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </div>
    </Router>
  );
}





// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
     
//       </header>
//     </div>
//   );
// }

// export default App;
