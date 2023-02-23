import { MerengueData } from '../../types';
import { RandomArticle } from '../utils/RandomArticle';

export const data: MerengueData = {
  blocks: [
    // {
    //   as: 'figure',
    //   renderContent: RandomImage,
    //   style: { margin: 0 },
    // },
    {
      renderContent: RandomArticle,
    },
    {
      renderContent: RandomArticle,
    },
    {
      renderContent: RandomArticle,
    },
    {
      renderContent: RandomArticle,
    },
    {
      renderContent: RandomArticle,
    },
  ],
};
