import { GlobalContext } from "../../context";
import RecipeItem from '../../components/recipe-item'
import { useContext } from "react";

export default function Favorites(){
    const {favoritesList} = useContext(GlobalContext)

    return <div className="flex flex-wrap py-8 container mx-auto justify-center gap-10">
        {
            favoritesList && favoritesList.length > 0 ? 
            favoritesList.map((item, index) => <RecipeItem key={index} item={item}/>)
            : <p className="lg:text-4xl text-xl text-center text-black font-extrabold">No Recipes In Favorites.</p>
        }
    </div> 
}