
import { Pagination } from "./Components/Pagination";
import { Image } from "./Components/Image";
import { useState } from "react";
import { Input } from "./Components/Input";
import eye from "./Components/eye.svg"

function App() {

  const [text,setText] = useState("")

  const onChange = () => {
    setText("hello")

  }
  return (

    <div className="container">

      <Input type={"text"} size={"20px"} onChange={onChange} rightLogoOnClick={onChange} rightLogo={eye} variant={"bordered"} />

      <Image src={"https://avatars.githubusercontent.com/u/98902869?v=4"} alt={"error"} fit={"cover"} height={"100px"} width={"100px"} borderRadius={"100"} />

      <Pagination onPageChange={onChange} selected={1} total={20} />
      
    </div>
  );
}

export default App;
