import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

export default function ProductDescriptionPage() {
  const [cardData, setCardData] = useState({});
  const { location } = useHistory();

  return <div>{!location.state.id ? <Redirect to="/" /> : "Description"}</div>;
}
