import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>
{
    count:number;
    results:T[];
}
const useData=<T>(endpoint:string,queryStringParam?:AxiosRequestConfig,deps?:any[])=>{

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading]=useState(false);
    
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...queryStringParam }) // AxiosRequestConfig is a QueryString params that passes our genre in the url to make the filteration.
        .then((response) =>{ setData(response.data.results);
         setLoading(false)
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
    
      return () => controller.abort();
    }, deps? [...deps]:[]);
  
    return { data, error,isLoading };
}
export default useData;