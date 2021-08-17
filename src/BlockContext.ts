import { createContext } from 'react';
import { BlockContextType } from './types';

export const BlockContext = createContext<BlockContextType>('light');
