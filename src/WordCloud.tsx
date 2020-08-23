import React from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  {
    text: "Nikki",
    value: 901,
    description: "👋 Hi, I'm Nikki!",
  },
  {
    text: "React",
    value: 500,
    description:
      "I have been working on an enterprise React app for the past 2 years",
  },
  {
    text: "Typescript",
    value: 450,
    description: "I picked up Typescript about a year ago",
  },
  {
    text: "Java",
    value: 350,
    description: "I work on our app whose backend is written in Java",
  },
  {
    text: "Python",
    value: 200,
    description: "One of the first programming languages I learned",
  },
  {
    text: "Javascript",
    value: 400,
    description: "I've done enough vanilla JS to know I really like Typescript",
  },
  {
    text: "HTML",
    value: 380,
    description:
      "Although I find myself reaching for React more often then not, I started off learning vanilla HTML",
  },
  {
    text: "CSS",
    value: 380,
    description:
      "Although I use CSS-in-JS at work, I have experience with vanilla CSS too",
  },
  {
    text: "Spring Boot",
    value: 200,
    description:
      "The app I'm currently working on uses Spring Boot for its server-side framework",
  },
  {
    text: "GraphQL",
    value: 200,
    description: "Recently I've been learning GraphQL using Apollo",
  },
  {
    text: "PostgreSQL",
    value: 180,
    description:
      "The backing store of the enterprise app I have been working on is PostgreSQL",
  },
  {
    text: "Elasticsearch",
    value: 170,
    description: "You know, for search",
  },
  {
    text: "a11y",
    value: 170,
    description:
      "I'm learning about a11y best practices and how to develop with accessibility in mind",
  },
  {
    text: "blue",
    value: 100,
    description: "Fun fact: blue is my favorite color",
  },
  {
    text: "dogs",
    value: 150,
    description:
      "I grew up with dogs; I'm particularly fond of Border Collies as I showed one in Agility",
  },
  {
    text: "cats",
    value: 150,
    description: "My cat's name is Chimichanga, he's an orange tabby",
  },
  {
    text: "horses",
    value: 150,
    description:
      "I grew up with horses, showing them in Hunter/Jumper and Dressage",
  },
  {
    text: "goats",
    value: 150,
    description: "My family has several goats, including BUG (Big Ugly Goat)",
  },
  {
    text: "alpacas",
    value: 150,
    description:
      "My goal is to get some land so I can try owning alpacas as pets",
  },
  {
    text: "stand up paddleboard",
    value: 120,
    description: "About a year ago I got my first SUP and now I'm hooked",
  },
  {
    text: "home renovation",
    value: 120,
    description:
      'I purchased a 1908 "fixer upper", which I have been using to pick up rudimentary carpentry skills',
  },
  {
    text: "soccer",
    value: 150,
    description:
      "I played on several different teams up through college, and I still love watching/kicking around the ball",
  },
  {
    text: "MIT",
    value: 75,
    description: "I went to MIT where I studied 6-3 (Computer Science)",
  },
  {
    text: "Illinois",
    value: 75,
    description: "I grew up in Wauconda, IL",
  },
];

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
