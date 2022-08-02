import {FC} from 'react';
import { SWRConfig } from 'swr';
import AppProvider from './context/AppProvider';
import fetcher from './helpers/fetcher';
import AppRouter from './routers/AppRouter';

const App:FC = ():JSX.Element => {


  return (
    <AppProvider>
      <SWRConfig value={{fetcher,suspense:true,revalidateOnFocus:false}}>
        <AppRouter />
      </SWRConfig>
    </AppProvider>
  );
}

export default App;
