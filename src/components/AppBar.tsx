import { Menu, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  XCircleIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  //DesktopComputerIcon,
} from "@heroicons/react/solid";
import {ChevronLeftIcon} from  "@heroicons/react/outline";
import { FC, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextApp from "../hooks/useContextApp";




const AppBar:FC = ():JSX.Element => {
  
  return (
    <div className="w-full h-14 bg-gray-100 dark:bg-gray-800 shadow-sm fixed  bg-opacity-80 backdrop-filter 
    backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-filter dark:backdrop-blur-2xl z-10">
      <Header />
      <SearchBar />
    </div>
  );
};

const Header:FC = () => {
  const { isOpenInput } = useContextApp();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`${isOpenInput&&'hidden md:flex'} flex justify-between items-center`}>
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center  h-14 w-14">
          <img
            className={`${ pathname !== "/" && "hidden" }  h-11 w-11 rounded-full border-2  border-gray-300`}
            src="/assets/pexels-logo.png"
            alt="pexels-logo"
          />
          <button
            className={`${pathname === "/" && "hidden"} touch-none h-14 w-14 flex justify-center items-center active:scale-75 transition-all duration-200`}
            type="button"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-7 h-7  text-gray-600 dark:text-gray-400 md:hover:text-gray-400 md:dark:hover:text-gray-100 transition-all duration-200" />
          </button>
        </div>
        <div className="ml-3 h-14 flex items-center md:mr-4">
          <Link to="/">
            <span
              className={` text-lg text-gray-600 dark:text-gray-300 font-semibold md:hover:text-gray-400 md:dark:hover:text-gray-100 transition-all duration-200`}
            >
              Pexels App
            </span>
          </Link>
        </div>
      <InputSearch />
      </div>
      <div className="flex ">
        <ThemeMenu />
        <SearchButton />
      </div>
    </div>
  );
};

const SearchBar:FC = () =>{
  return (
    <div className="md:hidden">
      <InputSearch />
    </div>
  )
}


const SearchButton:FC = () => {
  const { isOpenInput , setIsOpenInput} = useContextApp();
  return (
    <button type="button" className='font-semibold touch-none h-14 w-14 active:scale-75 flex justify-center items-center  md:hidden'
    onClick={() => setIsOpenInput(!isOpenInput)}
  >
    <SearchIcon className="h-7 w-7 fill-current text-gray-600 dark:text-gray-400" />
  </button>
  )
}



const InputSearch:FC = () => {
  const [inputValue, setInputValue] = useState('');
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const {isOpenInput,setIsOpenInput,setInputSearch} = useContextApp();

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }


  useEffect(() => {
    inputSearchRef.current?.focus();
    setInputValue('');
  }, [isOpenInput]);

  useEffect(() => {
    inputSearchRef.current?.blur();
  }, []);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSearch(inputValue);
    setInputValue('');
    navigate('/');
    setIsOpenInput(false);
    inputSearchRef.current?.blur();
  };

  return (
    <form className={`${!isOpenInput&&'hidden'}  group relative md:flex md:items-start h-14 md:w-80  `}  onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => setIsOpenInput(!isOpenInput)}
        className="touch-none absolute flex items-center  px-3 md:left-2 inset-y-0  cursor-pointer
         md:h-10 md:hidden md:rounded-md " 
      >
        <ArrowLeftIcon className="h-7 w-7 fill-current text-gray-500 dark:text-gray-300  " />
      </button>

  
      <SearchIcon className="hidden absolute md:flex items-center rounded-md 
      inset-y-1.5 mt-2 ml-2 h-7 w-7 fill-current group-focus-within:text-gray-400 dark:group-focus-within:text-gray-500 text-gray-300  dark:text-gray-600 " />


      <button
          className={`${inputValue.length === 0 && "hidden"} 
          touch-none absolute flex items-center right-0 inset-y-0
          px-3 cursor-pointer  md:inset-y-2 md:p-2 md:rounded-md `}
          type="button"
          onClick={() => {
            setInputValue('');
            inputSearchRef.current?.focus();
          }}
        >
          <XCircleIcon className="h-7 w-7 fill-current text-gray-400 dark:text-gray-400 md:h-6 md:w-6" />
      </button>
      

      <div className="md:mt-2">
        <input
          className="h-14 appearance-none transition-colors duration-75 border-0 ring-0 shadow-sm focus:ring-0 focus:border-0 pl-14 pr-14 w-full text-gray-700  
          md:focus:ring-2 md:focus:ring-teal-500 md:focus:outline-none md:bg-gray-100 md:focus:bg-gray-200 bg-gray-100 dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-500 placeholder:text-gray-400
          md:w-80 md:pl-10 md:pr-8 md:rounded-md md:h-10 md:focus:shadow-md md:dark:focus:placeholder:text-gray-500"
          id="inputSearch"
          name="inputSearch"
          placeholder="Search"
          onChange={handleInputChange}
          value={inputValue}
          ref={inputSearchRef}
          type="text"
        />
      </div>

  </form>
  );
};


const ThemeMenu:FC = () => {

  const {theme, setTheme} = useContextApp();

  const options = [
    {
      icon: <SunIcon />,
      option:'Light'
    },
    {
      icon: <MoonIcon />,
      option:'Dark'
    },
    // {
    //   icon: <DesktopComputerIcon />,
    //   option:'System'
    // },
  ]

  return (
    <Menu className="relative" as="div">
      {
        ({open}) => (
          <div >
            <Menu.Button type="button" 
              className='touch-none active:scale-75 transition-transform duration-200  h-14 w-14 flex justify-center 
              items-center ring-0 border-0 cursor-pointer focus:outline-none '>
              <MoonIcon className={`${theme==='dark'?'block':'hidden'} ${open&&'dark:text-gray-300 text-gray-500'} h-7 w-7 fill-current text-gray-600 dark:text-gray-400`} />
              <SunIcon className={`${theme==='light'?'block':'hidden'} ${open&&'dark:text-gray-300 text-gray-500'} h-7 w-7 fill-current text-gray-600 dark:text-gray-400`} />
            </Menu.Button>
            <Transition show={open}
              enter='transform transition duration-100 ease-in'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='transform transition duration-75 ease-out'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Menu.Items
                className={`bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-2xl 
                dark:bg-gray-800 dark:bg-opacity-80 dark:backdrop-filter dark:backdrop-blur-2xl
                absolute origin-top-right right-3 w-36 mt-2 rounded-md 
                py-1 ring-1 ring-black ring-opacity-5 focus:outline-none
              border-indigo-300 shadow-sm`}
              >
                {
                  options.map( ({icon,option}) => 
                      ( <Menu.Item key={option} as="div">
                    {
                      ({active}) => (
                      <button
                        className='flex justify-start items-center cursor-pointer w-full '
                        onClick={()=>setTheme(option.toLocaleLowerCase())}>

                          <div className={`h-6 w-6 text-gray-600 fill-current dark:text-gray-300 m-2 
                            ${active&&'text-emerald-500 dark:text-emerald-500'} 
                            ${theme === option.toLowerCase()&&'text-emerald-500 dark:text-emerald-500'}`}
                            onKeyDown={()=>{  
                              console.log('pressed');
                              // if(e.key !== 'Enter'){return;}
                              // changeTheme(option.toLocaleLowerCase());
                              }
                            }
                            >
                            {icon}
                          </div> 
                          <div className={`text-gray-600 dark:text-gray-300 font-medium 
                            ${active&&'text-emerald-500 dark:text-emerald-500'}
                            ${theme === option.toLowerCase()&&'text-emerald-500 dark:text-emerald-500'}`}>
                            {option}
                          </div>
                      </button>)
                    }
                  </Menu.Item>)
                  
                  )
                }
              </Menu.Items>
            </Transition>
          </div>
        )
      }
    </Menu>
  )
}







export default AppBar;
