
import './App.css'
import Employee from './Components/Employee'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ListOfEmployee from './Components/ListOfEmployee'
import{BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
       <Route path='/' element={  <ListOfEmployee/>} />
       <Route path="/employees" element={  <ListOfEmployee/>} />
       <Route path= "/add-employee" element={<Employee/>} />
       <Route path='/update-employee/:id'  element={<Employee/>} />
         </Routes>
        <Footer/>
        </BrowserRouter>
        
        
      </div>
      
    </>
  )
}

export default App
