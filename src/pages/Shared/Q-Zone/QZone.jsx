import React from 'react';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
      <div className="px-3 py-3 my-4 bg-light">
        <h5> Q-Zone</h5>
        <div>
          <img src={QZone1} alt="" />
          <img src={QZone2} alt="" />
          <img src={QZone3} alt="" />
        </div>
      </div>
    );
};

export default QZone;