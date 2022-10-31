import React,{ useContext, useState, createContext } from "react";
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

const ResultContext = createContext();
console.log(ResultContext)


export const useResultContext = () => {
    console.log(useContext(ResultContext))
    return useContext(ResultContext)
}

export const ResultContextProvider = ({ children }) => {
    const [results,setResults]  =useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("Coldplay")

    //type = videos,images,search
    const getResults = async (type) => {
        setIsLoading((val) => val=true)
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '43751a6cedmshaede457539899bfp16f453jsn7f540c04e2e0',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        const data = await response.json()
        
        if(type.includes('/news'))
        {
            setResults(data.entries)
        }
        setResults(data); 
        setIsLoading((val) => val=false)
    }

    return(
        <ResultContext.Provider value={{
            getResults,
            results,
            searchTerm,
            setSearchTerm,
            isLoading
        }}>
            {children}
        </ResultContext.Provider>
    )
}



