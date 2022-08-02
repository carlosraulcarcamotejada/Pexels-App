import {FC, useState} from 'react';
import useTheme from '../hooks/useTheme';
import { contextProps } from '../types/contextProps';
import { AppContext } from './AppContext';




type props = {
  children:JSX.Element | JSX.Element[]
}


const AppProvider:FC<props> = ({children}):JSX.Element => {
  
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [theme,setTheme] = useTheme();
  const [inputSearch, setInputSearch] = useState('nature');

  const global_state:contextProps = {
    inputSearch,
    isOpenInput,
    setInputSearch,
    setIsOpenInput,
    setTheme,
    theme,
  }


  return (
    <AppContext.Provider value={global_state}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

