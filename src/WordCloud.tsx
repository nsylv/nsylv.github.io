import React from "react";
import { useDispatch } from "react-redux";
import ReactWordcloud from "react-wordcloud";

import { setDescription } from "./actions/actions";
import { words } from "./words";

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
      options={{ rotations: 0 }}
      minSize={[300, 300]}
    />
  );
}
