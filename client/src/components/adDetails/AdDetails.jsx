import React, { useState } from 'react'
import styles from "./AdDetail.module.css"
import pushPin from '../../static/images/drawing-pin.png';

import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";



const AdDetails = () => {
    const { id } = useParams();
    const [ad, setAd] = useState()

    // params to grab single id for axios get
    // setAd state to fill variable locations (img, category, city/state, price, description)
    // button routes to contact listing owner view



  return (

            <div className={`d-flex flex-column align-items-center ${styles.paper}`} >
                <h2 className={styles.title}> Advertisement Title </h2>

                    <div className='d-flex mt-1 p-3 gap-5' style={{width: '550px', height: '350px'}}>
                        <div className='d-flex  p-3'>
                            <div className='border border-black rounded-3' style={{width: '250px', height: '250px', backgroundColor:'white'}}>
                                <img src="na" alt="image" />
                            </div>
                        </div>
                        <div className={`d-flex flex-column ${styles.info} `}>
                            <div className='d-flex flex-column align-items-center my-2'>
                                <label className='label'>Category</label>
                                <h4>category</h4>
                            </div>
                            <div className='d-flex flex-column align-items-center mb-2'>
                                <label className='label'>Location</label>
                                <h4>city, state</h4>
                            </div>
                            <div className='d-flex flex-column align-items-center mb-2'>
                                <label className='label'>Asking Price</label>
                                <h4>$ 1,000.00</h4>
                            </div>
                            <button className='btn btn-primary mt-2'>
                                {/* links to contact listing owner view, ("/#/" + creator._id + "/contact")*/}
                                <Link to={`/contact/0`} className='text-light text-decoration-none'>
                                    Contact
                                </Link>
                            </button>
                        </div> 
                    </div>

                        <div className={`rounded-3 ${styles.description}`} >
                            <p className='border'>
                                Description
                            </p>
                        </div>
                <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTL}`} />
                <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTR}`} />
                <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBL}`} />
                <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBR}`} />
            </div>
  )
}

export default AdDetails