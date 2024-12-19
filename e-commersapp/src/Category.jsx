import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faFaceAngry, faIndianRupee, faWandMagicSparkles, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



export default function Category({finalCategory, setCatname}) {
  let cat=finalCategory.map((v,i)=>{
      return(
      
        <div className='container'>
          <li onClick={()=>setCatname(v)} key={i} className='font-serif bg-[grey] text-[black] p-[10px] cursor-pointer text-[20px] font-[500] '>
              {v}
          </li>
          </div>
          
      )
      
  })

  
  return (
    <div>
     <h3 className='text font-serif text-[25px] text-[black] font-[500] p-[10x]'>Product Category</h3>
     
     
     <ul>
        {cat}
     </ul>
     <div className='footer'>
   <h1 className='foot'> footer</h1>


   <div className='a'>
   <h1 className='h1'>products</h1>
   <br/>
   <h3>Headless</h3>
   <h3>commerce</h3>
   <h3>multipurpose</h3>
   <h3>career</h3>
   
   </div>
   <div className='b'>
    <h1 className='h1'>Shop Now</h1>
    <br/>
    <h3>Collection</h3>
    <h3>Trending Products</h3>
    <h3>New Arrivals Products</h3>
    <h3>Featured Products</h3>
    <h3>Sitemaps</h3>

    <div className='c'>
      <h1 className='h1'>Follow Us</h1>
      <br/>
      <h1 className='text-success'><FontAwesomeIcon icon={faWhatsapp}/></h1>
   <h1 className='text-primary'><FontAwesomeIcon icon={faTwitter}/></h1>
   <h1 className='text-primary'><FontAwesomeIcon icon={faFacebook}/></h1>
   <h1 className='text-danger'><FontAwesomeIcon icon={faInstagram}/></h1>
   <h1 className='text-primary'><FontAwesomeIcon icon={faTelegram}/></h1>
   


    </div>




   </div>
   <div className='d'>
    <h1 className='h1'>Reache Us</h1>
    <br/>
   <h3>#444, some main road, some area, some street, gwalior, India-470004</h3>
   <h3>+91 9739368363</h3>
   <h3>fundaofwebit@gmail.com</h3>
    </div>
  
   <h1 className='last'>
    Copyright 2020 All rights resereved |Block is made by madhuri narwaiya
   </h1>
  
  </div>
    </div>

    
  )
}

<div>
  footer
</div>