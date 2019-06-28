import Configuration from "../Configuration";
import Console from "../Console";

const LOG_PREFIX: string = "fileReducer |";

export const movieReducer = (state = {}, actions:any) => {
    Console.debug("%s fileReducer [%o / %o]", LOG_PREFIX, state, actions);
    const {type, title} = actions;

    switch (actions.type) {
        case Configuration.EVENT_MOVIE_SELECTED :
            return {
                type,
                title
            };
        default:
            return state;

    }
}