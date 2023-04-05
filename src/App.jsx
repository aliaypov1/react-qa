import {BrowserRouter,Routes,Route} from "react-router-dom";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import './assets/styles/style.css'
import './assets/styles/reset.css'
import Resp from "./Components/Resp/Resp";
import Pagination from "./Components/Pagination/Pagination";
import Footer from "./Components/Footer/Footer";
const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;