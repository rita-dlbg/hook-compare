import React from 'react';

const PowerComponent = (Hcomponent) => {
  const newcomp = () => {
    return (
        <div style={{backgroundColor:"blue"}}>
            <Hcomponent/>
        </div>
    )
  }
  return newcomp;
}

export default PowerComponent