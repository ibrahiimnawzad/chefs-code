import { Link } from 'react-router-dom';

export default function RecipeItem({item}){
    return <div className="cursor-pointer flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
                <div className="h-40 flex justify-center rounded-xl items-center overflow-hidden">
                    <img src={item?.image_url} className="w-full block"/>
                </div>
                <div>
                    <span className="text-sm text-cyan-800 font-medium">{item?.publisher}</span>
                    <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
                    <Link to={`/recipe-item/${item?.id}`}
                    className="text-sm p-2 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md text-white bg-black"
                    >Recipe Details</Link>
                </div>
        </div>
}
