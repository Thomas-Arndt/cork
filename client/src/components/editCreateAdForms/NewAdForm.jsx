import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import adService from '../../services/AdService';
import fileService from '../../services/FileService';
import styles from "./NewAdForm.module.css";
import pushPin from '../../static/images/drawing-pin.png'


const NewAdForm = () => {
    const history = useHistory();
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState(0.00);
    const [ category, setCategory ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');
    const [ imagePreview, setImagePreview ] = useState();
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ email, setEmail ] = useState('');

    const categories = [
        "antiques", "appliances", "arts/crafts", "barter", "bikes", "boats",
        "books", "business", "cars/trucks", "cds/dvds/vhs", "clothes", "collectibles",
        "computers", "electronics", "farm/garden", "free", "furniture", "heavy equipment",
        "household items", "jewelry", "materials", "motorcycles", "musical instruments",
        "photo/video", "rvs/camp", "sporting", "tickets", "tools", "toys/games", "trailers",
        "trailers", "video gaming"
    ]

    const states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN",
        "IA", "KS", "KY", "LA", "ME", "MD", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM",
        "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
        "VA", "WA", "WV", "WI", "WY"
    ]

    const handleImage = (e) => {
        if(e.target.files.length === 0) {
            setImagePreview('');
            setImage('');
            return;
        }

        let file = e.target.files[0];
        let reader = new FileReader();
        setImage(e.target.files[0]);

        reader.onloadend = (e) => {
            setImagePreview(reader.result);
        }

        reader.readAsDataURL(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fileService.uploadFile(image)
        .then(response => {
            console.log(response.data);
            const formData = {
                title: title,
                price: price,
                category: category,
                description: description,
                image: response.data.filePath,
                city: city,
                state: state,
                email: email
            }
            adService.createAd(formData)
                .then(response => {
                    let newAd = response.data
                    history.push(`/posted/${newAd.id}`);
                })
        })
        
    }

    return (
        <div className={`d-flex flex-column align-items-center border p-3 ${styles.paper}`}>
            <h2 className={styles.title}>Post a New Advertisement</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between" >
                    <div className="d-flex flex-column">
                        <label for="title" >Posting Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" className="form-control" />
                    </div>
                    <div className="d-flex flex-column col-2">
                        <label for="price" >Asking Price</label>
                        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" inputMode="decimal" step="0.01" className="form-control" />
                    </div>
                    <div className="d-flex flex-column">
                        <label for="category" >Category</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category} name="category" className="form-control">
                            <option value="">Choose a Category</option>
                            {categories.map((category, i) => 
                                <option key={i} value={category}>{category}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <label for="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} name="description" id="description" cols="30" rows="10" className="form-control" ></textarea>
                </div>
                <div className="d-flex gap-3">
                    <div>
                        <label for="image">Upload Image</label>
                        <div className="d-flex flex-column align-items-center border p-3 bg-white" >
                            <input type="file" name="image" onChange={handleImage} className="form-control" />
                            {imagePreview && <img src={imagePreview} className={`col-12 p-3 mt-3 ${styles.preview}`} />}
                        </div>
                    </div>
                    <div>
                        <div className="d-flex flex-column">
                            <label for="city" >City</label>
                            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" name="city" className="form-control" />
                        </div>
                        <div>
                            <label for="state">State</label>
                            <select onChange={(e) => setState(e.target.value)} value={state} name="state" className="form-control">
                                <option value="">--</option>
                                {states.map((state, i) =>
                                    <option key={i} value={state}>{state}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label for="email" >Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="form-control" />
                        </div>
                        <input type="submit" value="Post Ad!" className="btn btn-secondary mt-3" />
                    </div>
                </div>
            </form>
            <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTL}`} />
            <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTR}`} />
            <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBL}`} />
            <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBR}`} />
        </div>
    )
}

export default NewAdForm;