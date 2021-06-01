import './App.css';
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Description from "./components/Description";

function App() {
  return (
      <div id="header">
        <Header/>
          <span id="calculator">
              <Calculator/>
          </span>
          <span id="description">
              <Description/>
          </span>
      </div>


  );
}
export default App;
