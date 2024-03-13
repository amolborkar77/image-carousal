import React, { memo } from "react";

const ChildComponent = ({ changeDemo }) => {
  console.log("child component");
  return <div>ChildComponent</div>;
};

export default memo(ChildComponent);
