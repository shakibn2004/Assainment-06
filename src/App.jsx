import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Header/Navbar'
import Overview from './Components/Overview/Overview'
import ToolsCards from './Components/ToolCards/ToolsCards'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'


const fetchData = async() => {
    const res = await fetch('/index.json');
    return res.json();
}
const dataPromised = fetchData()

function App() {
  const [selectedProduct, setSelectedProduct] = useState([])
  const [renderCard, setRenderCard] = useState(true)

  return (
    <>
    <ToastContainer />
    <Navbar selectedProduct={selectedProduct} setRenderCard={setRenderCard}/>
    <Hero />
    <Overview />
    <Suspense fallback={<div className="loading loading-ring loading-xl w-fit mx-auto mt-20"></div>}>
      <ToolsCards dataPromised={dataPromised} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} renderCard={renderCard} setRenderCard={setRenderCard}/>
    </Suspense>
    </>
  )
}

export default App
