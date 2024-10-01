import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import Orders from "./Orders";


const IndividualProperty = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
    const [property, setProperty] = useState({})
    useEffect(() => {
        fetch('/properties.json')
        .then(res => res.json())
        .then(data => {
            const property = data.find(d => d.id === idInt)
            setProperty(property) 
        })
    },[])
    console.log(id)
    return (
        <div>
            <div className="w-3/4 mx-auto bg-yellow-600">
            <img className="w-1/2 mx-auto" src={property.image_url} alt="" srcset="" />
            </div>
        </div>
    );
};

export default IndividualProperty;