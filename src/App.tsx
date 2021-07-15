import Home from "./pages/Home"
import Counter from "./components/counter";
import Input from "./components/input";
import '../src/styles/global.scss';

function App() {
  return (
    <>
      <Home />
      <div className="content">
        <div className="contador">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
        <div className="form">
          <h2>CADASTRE-SE E RECEBA <span>OFERTAS EXCLUSIVAS</span></h2>
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
