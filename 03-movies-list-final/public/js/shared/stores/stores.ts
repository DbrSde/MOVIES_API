import {createStore} from "redux";
import {movieReducer} from "../reducers/movieReducer";

export const storeMovies: any = createStore(movieReducer);