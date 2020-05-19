import React from "react";

const Death = ({ active, confirmed, recovered }) => {
  return (
    <div className="mt-2">
      <h1 className="text-white">
        Death Count = ( {confirmed - (active + recovered)})
      </h1>
      {/* <h1 className="text-white">Death Count = {confirmed} </h1> */}
    </div>
  );
};

export default Death;
