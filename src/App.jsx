import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar";
import BlockCard from "./component/BlockCard";




function App() {
  return (
    <div>
      <Navbar />
      <BlockCard />
    </div>
  );
}

export default App;
