import { useEffect, useState } from "react";

const useCheckOffline=()=>
{
    const [isOnline, setisOnline]=useState(true);
    useEffect(()=>
    {
        const handleonline=()=>
            {
                setisOnline(false);
            }
        const handleoffline=()=>
            {
                setisOnline(true);
            }
        window.addEventListener("online",handleonline)
        window.addEventListener("offline",handleoffline)
        return ()=>
        {
            removeEventListener("online",handleonline);
            removeEventListener("offline",handleoffline);
        }
    },[])
    
    return isOnline;
}

export default useCheckOffline;