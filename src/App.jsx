import { useEffect } from 'react';
import './App.css'
// import img1 from '../img1.png'
import Nav from './nav'
import Products from './products';
import About from './about';
import Contact from './contact'
function App() {

  //   useEffect(()=>{
  //  let products = fetch('https://fakestoreapi.com/products')
  //             .then(res=>res.json())
  //             .then(json=>console.log(json))
  //   })
  return (
    <>
      <div className='header' >
        <h1 id="nav" className='logo'>Shopy</h1>
        <div className='nav-head'>
        <Nav className='nav' />
        </div>
      </div>
      <div className='flex-container'>
      <div className='circle'>
        {/* <img  src='./img1.png'/> */}
        <img className='img1' src={'man.png'} />
      </div>
      <div className='head'>
        <div className='fs-small'>NEW ARRIVAL</div>
        <div className='main-h fs-small'>JUST FOR YOU</div>
      </div>
      </div>
      <div className='line'></div>
      <Products />
      <div className='line2'></div>

      <About />
      <div className='line2'></div>
      <Contact />
    </>
  )
}

export default App;
