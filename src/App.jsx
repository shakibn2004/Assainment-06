import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Header/Navbar'
import Overview from './Components/Overview/Overview'
import ToolsCards from './Components/ToolCards/ToolsCards'
import { Suspense } from 'react'
import { HiH1 } from 'react-icons/hi2'

const fetchData = async() => {
    const res = await fetch('/index.json');
    return res.json();
}
const dataPromised = fetchData()

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Overview />
    <Suspense fallback={<div className="loading loading-ring loading-xl w-fit mx-auto mt-20"></div>}>
      <ToolsCards dataPromised={dataPromised}/>
    </Suspense>
    </>
  )
}

export default App
