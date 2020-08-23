import React from "react";
import ReactWordcloud from "react-wordcloud";
import { words } from "./words";

export function WordCloud() {
  return (
    <ReactWordcloud
      words={words}
      callbacks={{
        getWordTooltip: () => null,
      }}
      options={{ rotations: 0 }}
      minSize={[300, 300]}
      // size={[600, 800]}
    />
  );
}
