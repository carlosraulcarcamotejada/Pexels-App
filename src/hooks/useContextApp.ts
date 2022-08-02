import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { contextProps } from "../types/contextProps";



const useContextApp = ():contextProps => {

    const {inputSearch,isOpenInput,setIsOpenInput,setInputSearch,theme,setTheme} = useContext(AppContext);

    return {
        isOpenInput,
        inputSearch,
        theme,
        setIsOpenInput,
        setInputSearch,
        setTheme,
    }

}

export default useContextApp;