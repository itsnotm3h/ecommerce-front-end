import { atom, useAtom } from "jotai";

export const status = atom("");

export const useStatus = () =>{
    const [statusInfo, setStatus] = useAtom(status);

    return{
        statusInfo,
        setStatus,
    }
    
}


