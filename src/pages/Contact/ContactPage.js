import React from "react";
import Home from "../HomePage/Home";
import { homeObjOne } from "../HomePage/Data";

function ContactPage() {
  return (
    <>
      <Home {...homeObjOne} />
    </>
  );
}

export default ContactPage;
