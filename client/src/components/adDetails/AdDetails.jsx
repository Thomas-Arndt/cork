import React, { useEffect, useState } from 'react'
import styles from "./AdDetail.module.css"
import pushPin from '../../static/images/drawing-pin.png';

import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import adService from '../../services/AdService';
import Loader from '../navigation/navigationButtons/Loader';



const AdDetails = () => {
    const { adId } = useParams();
    const [ad, setAd] = useState();
    const [ image, setImage ] = useState();


    useEffect(() => {
        adService.getOneAd(adId)
        .then(response => {
            console.log(response.data)
            setAd(response.data)
            setImage(require(`../../static/images/adImages/${response.data.image}`));
        })
        .catch(error => console.error(error))
    }, [])



  return (

            <div className={`d-flex flex-column align-items-center ${styles.paper}`} >
                {
                    ad ?

                    <div>
                        <h2 className={styles.title}>{ad.title}</h2>
        
                            <div className='d-flex mt-1 p-3 gap-5' style={{width: '550px', height: '350px'}}>
                                <div className='d-flex  p-3'>
                                    <div className='d-flex align-items-start'>
                                        <img src={image} alt="image" className={styles.image} />
                                    </div>
                                </div>
                                <div className={`d-flex flex-column `}>
                                    <div className='d-flex flex-column align-items-center my-2'>
                                        <label className='label'>Category</label>
                                        <h4>{ad.category}</h4>
                                    </div>
                                    <div className='d-flex flex-column align-items-center mb-2'>
                                        <label className='label'>Location</label>
                                        <h4>{ad.city}, {ad.state}</h4>
                                    </div>
                                    <div className='d-flex flex-column align-items-center mb-2'>
                                        <label className='label'>Asking Price</label>
                                        <h4 className=''>$ {ad.price}</h4>
                                    </div>
                                    <button className='btn btn-primary mt-2'>
                                        {/* links to contact listing owner view, ("/#/" + creator._id + "/contact")*/}
                                        <Link to={`/contact/${adId}`} className='text-light text-decoration-none'>
                                            Contact
                                        </Link>
                                    </button>
                                </div> 
                            </div>
        
                                <div className={`rounded-3 ${styles.description}`} >
                                    <p className='border p-2'>
                                        {ad.description}
                                    </p>
                                </div>
                        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTL}`} />
                        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTR}`} />
                        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBL}`} />
                        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBR}`} /> 

                    </div> :
                    
                    <Loader />
                }
            </div>
  )
}

export default AdDetails