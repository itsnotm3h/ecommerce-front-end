import { atom, useAtom } from "jotai";
import { useLocation } from "wouter";
import axios from "axios";

export const status = atom("");
export const loading = atom(false);
export const location = atom("");

export const useSession = () => {
    const [statusInfo, setStatus] = useAtom(status);
    const [isSession, setIsSession] = useAtom(loading);
    const [prevLocation,setLocation] = useAtom(location);

    
    const getStatus = async () => {
        setIsSession(true);

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/session/`,{withCredentials:true, headers: {
                    'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
                  }});
            setStatus(response.data);
        } catch (error) {
            console.error("Error Fetching Session Status:", error);
        } finally {
            setIsSession(false);
        }
    };

    const setPreviousLocation = (item)=>{

        // const [item] = useLocation();
       
        if(prevLocation != [item])
        {
            setLocation(item);
            console.log(item,prevLocation);
            console.log(prevLocation);

        }

    }

    return {
        statusInfo,
        setStatus,
        getStatus,
        isSession,
        setPreviousLocation
    };
};
