import React, { useState, useEffect } from 'react';
import adService from '../../services/AdService';



const FilterForm = ({ setAdList, category, setCategory }) => {
    const [ min, setMin ] = useState('');
    const [ max, setMax ] = useState('');
    const [ hasImage, setHasImage ] = useState(false);
    const [ postedToday, setPostedToday ] = useState(false);



    const categories = [
        "antiques", "appliances", "arts+crafts", "barter", "bikes", "boats",
        "books", "business", "cars+trucks", "cds+dvds+vhs", "clothes", "collectibles",
        "computers", "electronics", "farm+garden", "free", "furniture", "heavy equipment",
        "household items", "jewelry", "materials", "motorcycles", "musical instruments",
        "photo+video", "rvs+camp", "sporting", "tickets", "tools", "toys+games", "trailers",
        "trailers", "video gaming"
    ];

    useEffect(() => {
        console.log(category);
        adService.getAllAds(category)
            .then(response => setAdList(response.data))
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        adService.getAllAds(category)
        .then(response => {
            let tempList = [...response.data];
            if(min && min > 0){
                tempList= tempList.filter(ad => ad.price >= min)
            }
            if(max && max > 0){
                tempList = tempList.filter(ad => ad.price <= max)
            }
            if(hasImage){
                tempList = tempList.filter(ad => ad.image !== null)
            }
            if(postedToday){
                const today = new Date();
                tempList = tempList.filter(ad => new Date(ad.createAt).getDay() === today.getDay())
            }
            setAdList(tempList);
            setCategory(category);
        })
    }

  return (


    <div className='container d-flex flex-column align-items-center px-3 pt-3'>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
            <div className="d-flex flex-column">
                        <label>Category</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category} name="category">
                            <option value="all">All Categories</option>
                            {categories.map((category, i) => 
                                <option key={i} value={category}>{category}</option>
                            )}
                        </select>
            </div>
            <div className=''>
                <label>Price</label>
                <div className='d-flex gap-3 '>
                    <input onChange={(e) => setMin(e.target.value)} value={min} type='number' className='form-control p-0 px-2' placeholder='min' />
                    <input onChange={(e) => setMax(e.target.value)} value={max} type='number' className='form-control p-0 px-2' placeholder='max' />
                </div>
            </div>
            <div className='mb-2'>
                <div>
                    <input onChange={() => setHasImage(!hasImage)} checked={hasImage} type="checkbox" id="hasImage" name="hasImage" value="" />
                    <label className='mx-3'>Has Image</label>
                </div>
                <div >
                    <input onChange={() => setPostedToday(!postedToday)} checked={postedToday} type="checkbox" id="postedToday" name="postedToday" value="" />
                    <label className='mx-3'>Posted Today</label>
                </div>
            </div>
            <button className='btn btn-primary p-0 px-1'>
                    Filter
            </button>
        </form>

        
        

    </div>


  )
}




export default FilterForm