import React, { useState } from "react";

export default function PopUp() {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <>
      <div className="dov"></div>
    </>
  );
}
