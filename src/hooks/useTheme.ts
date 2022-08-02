import {useState,useEffect} from 'react';


const useTheme = ():[theme:string, changeTheme:(theme:string)=>void] => {

    const [theme, setthemee] = useState<string>(localStorage.getItem("theme") || 'light');

    const setTheme = (theme:string) => {
        setthemee(theme);
        const root = window.document.documentElement;
        root.classList.remove(localStorage.getItem("theme") || 'light');
        root.classList.add(theme);
        localStorage.setItem("theme",theme);
    }

    useEffect(() => {
        setTheme(theme);
        //console.log(theme)
    }, [theme])
    
    return [ theme, setTheme ];
}

export default useTheme