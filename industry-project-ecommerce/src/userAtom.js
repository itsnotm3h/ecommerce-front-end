import { atom, useAtom } from "jotai";
import axios from "axios";

export const status = atom("");
export const loading = atom(false);

export const useSession = () => {
    const [statusInfo, setStatus] = useAtom(status);
    const [isSession, setIsSession] = useAtom(loading);

    
    const getStatus = async () => {
        setIsSession(true);

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/session/`, 
                { withCredentials: true }
            );
            setStatus(response.data);
        } catch (error) {
            console.error("Error Fetching Session Status:", error);
        } finally {
            setIsSession(false);
        }
    };

    return {
        statusInfo,
        setStatus,
        getStatus,
        isSession
    };
};
