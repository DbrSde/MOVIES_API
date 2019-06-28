import {storeMovies} from "../shared/stores/stores";
import Console from "../shared/Console";
import Configuration from "../shared/Configuration";
import displayNotification from "../shared/notifications";

const LOG_PREFIX: string = "video |";

/**
* Mise en place du store via redux pour écouter les events sur les films
* EVENT LISTENER Configuration.EVENT_MOVIE_SELECTED Lorsqu'un film est sélectionné
*/
storeMovies.subscribe(() => {
    Console.debug("%s storeMovies changed [%o]", LOG_PREFIX, storeMovies.getState());
    switch (storeMovies.getState().type) {
        case Configuration.EVENT_MOVIE_SELECTED:
            displayNotification(Configuration.MESSAGE_TYPE_INFO, `Film sélectionné : (${storeMovies.getState().title})`);
            return;
        default:
            return;
    }
});