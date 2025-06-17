import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item"

export default function Home(){
    const {recipeList, loading} = useContext(GlobalContext)

    if(loading)
        return <h1>Loading...</h1>

    return <div className="flex flex-wrap py-8 container mx-auto justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ? 
            recipeList.map((item, index) => <RecipeItem key={index} item={item}/>)
            : <p className="lg:text-4xl text-xl text-center text-black font-extrabold">No Recipes Found</p>
        }
    </div>
}