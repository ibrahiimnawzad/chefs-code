import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(event){
        try{
            setLoading(true)
            event.preventDefault()

            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await response.json()
            
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/')
            }
        }catch(e){
            console.log(e);
            setLoading(false)
            setSearchParam('') 
        }
    }

    useEffect(() => {
        async function fetchInitialRender(){
            setLoading(true)
            try{    
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=apple`)
                const data = await response.json()

                if (data?.data?.recipes) {
                    setRecipeList(data?.data?.recipes);
                }
            }catch(e){
                console.log(e);
            }finally{
                setLoading(false)
            }
        }
        fetchInitialRender()
    }, [])

    function handleAddToFavorites(getCurrentItem){
        let cpyFavoritesList = [...favoritesList]
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id)
        if(index === -1){
            cpyFavoritesList.push(getCurrentItem)
        }else{
            cpyFavoritesList.splice(index)
        }
        setFavoritesList(cpyFavoritesList)
    }

    return <GlobalContext.Provider value={{
        searchParam,
        loading, 
        recipeList, 
        setSearchParam, 
        handleSubmit, 
        recipeDetailsData, 
        setRecipeDetailsData, 
        handleAddToFavorites, 
        favoritesList
        }}>
        {children}
    </GlobalContext.Provider>
}
