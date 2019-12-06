import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Name: ${payload[0].payload.name}`}</p>
          <p className="country">Country: {payload[0].payload.country}</p>
          <p className="desc">Searches: {payload[0].payload.searches}</p>
        </div>
      );
    } else return null;
  };
  
  export default CustomTooltip;