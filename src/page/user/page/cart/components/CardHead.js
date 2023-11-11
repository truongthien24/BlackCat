import React from "react";

const CardHead = ({ columns }) => {
  const renderColumn = (col) => {
    return col.map((cl, index) => {
      return (
        <div key={index} style={{ width: `${cl.width}` }}>
          <h5 className="font-[500]" style={{textAlign: `${cl.alignment}`}}>{cl?.title}</h5>
        </div>
      );
    });
  };

  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-solid border-b-[#498374] pb-[10px]">
      {renderColumn(columns)}
    </div>
  );
};

export default CardHead;
