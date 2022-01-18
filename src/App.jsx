import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'



function App() {
  return (
    <div className="app">
      <div className="card">
      <Info />
      <About/>
      <Interests/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
