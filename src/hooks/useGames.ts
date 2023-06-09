import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
export interface PlatForm{
    id:number;
    name:string;
    slug:string; 
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms: {platform:PlatForm}[];
  metacritic:number;
}



const useGames = (gameQuery:GameQuery) => {
    
  return  useData<Game>('/games',
  {params:{  //as a query string parameter
    genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
 ordering:gameQuery.sortOrder,
 search:gameQuery.searchText
  }
  },
 [gameQuery]

);
};

export default useGames;
