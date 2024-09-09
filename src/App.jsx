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
    <Nav className='nav' />
    </div>
    <div className='circle'>
      {/* <img  src='./img1.png'/> */}
      <img className='img1' src={'img1.png'}/>
    </div>
    <div className='head'>
      <div >NEW ARRIVAL</div>
      <div className='main-h'>JUST FOR YOU</div>
    </div>
    <div className='line'></div>
    <Products  />
    <div className='line2'></div>
    
    <About/>
    <div className='line2'></div>
    <Contact/>
    </>
  )
}

export default App;
