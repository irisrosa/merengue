import React from 'react';

import { getRandomImage, getRandomText, getRandomTitle } from '.';
import styles from './RandomArticle.module.scss';

export const RandomArticle = () => {
  const image = getRandomImage();
  const text = getRandomText();
  const title = getRandomTitle();

  return (
    <article className={styles.article}>
      <img src={image} alt="Example Image" />
      <h3 className={styles.title}>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
