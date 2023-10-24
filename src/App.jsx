import './App.css'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App mx-0">
      <div className="container">
      <Navbar/>
      <Products/>
      <Footer/>

      </div>
          
    </div>
  )
}

export default App
