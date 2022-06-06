import { Nav } from "./components/Nav";
import { CardDetails } from "./components/CardDetails";
import { Checkout } from "./components/Checkout";
import { Body } from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/:id" element={<CardDetails />}>
          {" "}
        </Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
