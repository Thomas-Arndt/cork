import React, { useState } from 'react'



const FilterForm = () => {
    const [ category, setCategory ] = useState('');
    const [ min, setMin ] = useState('');
    const [ max, setMax ] = useState('');
    const [ hasImage, setHasImage ] = useState('');
    const [ postedToday, setPostedToday ] = useState('');



    const categories = [
        "antiques", "appliances", "arts/crafts", "barter", "bikes", "boats",
        "books", "business", "cars/trucks", "cds/dvds/vhs", "clothes", "collectibles",
        "computers", "electronics", "farm/garden", "free", "furniture", "heavy equipment",
        "household items", "jewelry", "materials", "motorcycles", "musical instruments",
        "photo/video", "rvs/camp", "sporting", "tickets", "tools", "toys/games", "trailers",
        "trailers", "video gaming"
    ]



  return (


    <div className='container d-flex flex-column align-items-center p-3'>
        <form>
            <div className="d-flex flex-column mb-3">
                        <label for="category" >Category</label>
                        <select name="category" className="form-control ">
                            <option value="">Choose a Category</option>
                            {categories.map((category, i) => 
                                <option value={category}>{category}</option>
                            )}
                        </select>
            </div>
            <div className='mb-3'>
                <label>Price</label>
                <div className='d-flex gap-3 '>
                    <input type='number' className='form-control' placeholder='min' />
                    <input type='number' className='form-control' placeholder='max' />
                </div>
            </div>
            <div className='mb-2'>
                <div>
                    <input type="checkbox" id="hasImage" name="hasImage" value="" />
                    <label for="hasImage" className='mx-3'>Has Image</label>
                </div>
                <div >
                    <input type="checkbox" id="postedToday" name="postedToday" value="" />
                    <label for="postedToday" className='mx-3'>Posted Today</label>
                </div>
            </div>
            <button className='btn btn-primary mb-2 px-3'>
                    Filter
            </button>
        </form>

        
        

    </div>


  )
}




export default FilterForm