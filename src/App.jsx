import Navbar from "./assets/Navbar";
import Content from "./assets/Content";
import Program from "./assets/Program";
import Speaker from "./assets/Speakers";
import Form from "./assets/Form";
import Footer from "./assets/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App(){
  return(
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/program' element={<Program/>} />
          <Route path='/speakers' element={<Speaker/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
    
  )
}
export default App;