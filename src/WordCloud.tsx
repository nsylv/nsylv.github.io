import React from "react";
import { useDispatch } from "react-redux";
import ReactWordcloud, { Options, Optional } from "react-wordcloud";

import { setDescription } from "./actions/actions";
import { words } from "./words";

const options: Optional<Options> = {
  rotations: 0,
  fontSizes: [30, 200],
  padding: 8,
};

export function WordCloud() {
  const dispatch = useDispatch();

  return (
    <ReactWordcloud
      words={words}
      callbacks={{
        getWordTooltip: (word) => word.description || word.text,
        onWordMouseOver: (word) =>
          dispatch(setDescription(word.description || null)),
      }}
      options={options}
      minSize={[300, 300]}
    />
  );
}
