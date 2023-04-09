import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import './assets/styles/style.css'
import './assets/styles/reset.css'
import './assets/styles/media.css'
import Resp from "./Components/Resp/Resp";
import Pagination from "./Components/Pagination/Pagination";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Create from "./Components/Create/Create";
import Cards from "./Components/Cards/Cards";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Content" element={<Content />} />
          <Route path="/" element={<About />} />
          <Route path="/repository/:repositoryName/:id" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;