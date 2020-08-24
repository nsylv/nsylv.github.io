import React from "react";
import { useSelector } from "react-redux";

import { selectDescription } from "./selectors";

export const Description: React.FC = () => {
  const description = useSelector(selectDescription);

  return description ? <div className="description">{description}</div> : null;
};
