import { useState } from "react"
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";


const App = () => {

  const [show, setShow] = useState(false);


  function toggleComponent() {
    setShow((prev) => !prev);
  }


  return (
    <div>
      <button className="cursor-pointer" onClick={toggleComponent}>Toggle Component</button>
      {show && <Posts />}
      <CreatePost />
    </div>
  );
}

export default App
