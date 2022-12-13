import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddGalleryForm from "../components/AddGalleryForm";
import CarsService from '../services/CarsService'


export default function AddGallery() {
    const YEARS = Array(2018 - 1990 + 1)
        .fill(1990)
        .map((el, index) => el + index);

    const history = useHistory();
    const { id } = useParams();

    const [newGallery, setNewGallery] = useState({
       
    });

    // submitovanje forme:
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ newGallery })
        if (id) {
            GalleriesService.edit(id, newGallery)
        } else {
            GalleriesService.add(newGallery);
        }

        // redirektovanje na gallery stranicu
        history.push('/galleries');
    }
    // reset button:
    const handleReset = () => {
        setNewGallery({
          
        })

    }
    // preview:
    const handlePreview = () => {
        alert(`
   
      `);
    }

    return (<div><h3>
        Add a new gallery:
    </h3>
        <AddCGalleryForm
            newGallery={newGallery}
            setNewGallery={setNewGallery}
            onChange={handleSubmit}
            onReset={handleReset}
            onPreview={handlePreview} />
    </div>)
}