import { PexelResp } from '../interfaces/pexel-resp';


export type contextProps = {
    isOpenInput:boolean,
    setIsOpenInput:(isOpen:boolean)=>void,
    theme:string,
    setTheme:(theme:string)=>void,
    inputSearch:string,
    setInputSearch:(inputSearch:string)=>void,
}
