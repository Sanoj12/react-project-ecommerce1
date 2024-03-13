
import React ,{useEffect,useState }from 'react'
import { getaProduct } from '../../apiServices/api'
import './details.css'
import { Link, useParams } from 'react-router-dom'

function Details() {

   const {id}=useParams();
  const [details,setDetails] = useState({})
    useEffect(() => {
    
    
      return async() => {
        const data=await getaProduct(id)
          setDetails(data)
      }
    }, [id])
    

    const handleBuynow = ()=>{
      window.confirm("OUT OF STOCK! PLEASE SELECT ANOTHER PRODUCT")
    }


  return (
    <div className='details-container'>
        <img src={details.image} alt='' className='details-image'/>
        <div className='details-info'>
            <h2 className='details-title'>
                {details.title}
            </h2>
            <p className='details-description'>{details.description}</p>
            <p className='details-price'>${details.price}</p>

            <button className='buy-now-button' onClick={handleBuynow}>Buy Now</button>
            <Link to='/'>
            <button className='go-back-home-button'>Go Back to Home</button>
            </Link>
           

        </div>

    </div>
  )
}

export default Details