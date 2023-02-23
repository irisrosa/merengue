import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const getRandomImage = () => {
  const random = Math.floor(Math.random() * 100);
  return `https://picsum.photos/500/300?random=${random}`;
};

export const getRandomText = () => lorem.generateParagraphs(1);

export const getRandomTitle = () => {
  const random = Math.floor(Math.random() * 10);
  return lorem.generateWords(random);
};
