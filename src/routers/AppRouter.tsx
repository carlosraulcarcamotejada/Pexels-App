import {FC} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import useContextApp from '../hooks/useContextApp';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import ImagePage from '../Pages/PhotoPage';



const AppRouter:FC = ():JSX.Element => {
  const {theme} = useContextApp();

  return (
    <div className={`${theme}`}>
      <Router>
        <div className='min-h-screen antialiased bg-gray-200 transition duration-700
        dark:bg-black select-none pb-14'
        style={{WebkitTapHighlightColor:'transparent'}}
        >
      
          <AppBar />

          <div className='pt-28'>
            <Routes >
              <Route path="/" element={<HomePage />} />
              <Route path="/image-page/:id" element={<ImagePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

        </div>
          <Footer />
      </Router>
    </div>
  )
}

export default AppRouter