import React from 'react';

export const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{minWidth: "200px"}}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className='card-title'>{item.name}</h5>
              <hr></hr>
              <p>location: {item.species}</p>
              <p>location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
