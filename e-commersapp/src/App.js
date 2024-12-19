import logo from './logo.svg';
import './App.css';
import Category from './Category';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';


function App() {
  let [finalCategory,setFinalCategory]=useState([])
  let [finalPro,setFinalProduct]=useState([])
  let [catName, setCatname]=useState('')
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategory(finalRes) 
    })
  }

  let getProucts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalProduct(finalRes.products)
    })
  }

  useEffect(()=>{
    getCategory();
    getProucts();
  },[])

  useEffect(()=>{
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
        setFinalProduct(finalRes.products)
      })
    }
   },[catName])

  let Pitems=finalPro.map((products,index)=>
  {
    return(
      <ProductItems key={index} pdata={products}/>
    )
  })

 



  return (
  <>
  <div className='he'>
    <h1 className='tt'>sHopUs</h1>
    <h3 className='tit'>products marketplace</h3>
    <h3 className='tit2'>up to40% </h3>
    <h3 className='tit3'>offlatest Creations</h3>
  </div>
  <div className='logo'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
  </div>
  <div className='py-[40px]'>
    <div className=' max-w-[1320px] mx-auto'>
      <h1 className=' font-serif  text-center text-[40px] font-bold  mb-[10px] mt-10'>Our Products</h1>
      <div className='grid grid-cols-[30%_auto] gap-[20px]'>
        <div>
          <Category finalCategory={finalCategory} setCatname={setCatname}/>
        </div>
        <div>
          <div className='grid grid-cols-3 gap-4'>
            
           {
            finalPro.length>=1 ?
            Pitems
            :
            'no product found'
           }
          
          </div>
        </div>

      </div>
    </div>
  
  </div>



  </>
  );
}


export default App;



function ProductItems({pdata}){
  

  return(
    <div className='shadow-lg text-center pb-4'>
              <img src={pdata.thumbnail}/>
              <h1>{pdata.title}</h1>
              <b>Rs.{pdata.price}</b>
               </div>
          
            
  )


}


