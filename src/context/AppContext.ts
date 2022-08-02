import { createContext } from 'react';
import { contextProps } from '../types/contextProps';


export const AppContext = createContext<contextProps>({} as contextProps);

