import React from 'react';
import { Link } from 'react-router-dom';

const PropertiesDetails = ({property}) => {
    console.log(property)
    const {id, image_url, title, details} = property;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="property"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`} className="btn btn-primary">Show more</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PropertiesDetails;