import Console from './Console'
import Configuration from "./Configuration";

const LOG_PREFIX: string = 'main | ';
let $movies: string = "";
let movies: Array<Movie>;

interface Movie {
    id: number,
    cover_big: string,
    cover_small: string,
    title: string,
    description: string
}

$( () => {
    getMovies();
});

/**
 * Methode permettant de récupérer la liste des films
 */
function getMovies(): void {
    Console.debug("%s getMovies", LOG_PREFIX);
    $.ajax({
       url: Configuration.MOVIES_API_URL,
       crossDomain: true,
       dataType: 'jsonp',
       success: (data) =>{
           Console.info("MOVIES", data);
            movies = data.content.movies;
            if (!movies || !movies.length) {
                return;
            }
            for(let movie of movies){
                $movies +=
                    `<li class="movie-item col-lg-3">
                        <div class="movie-container">
                            <a class="movie-visual-link" href="#"
                                                        title="Voir l'affiche du film : ${movie.title}"
                                                        target="_blank"
                                                        data-toggle="modal"
                                                        data-id="${movie.id}"
                                                        data-target="#myModal">
                                <img class="movie-visual" src="${movie.cover_small}" alt="Poster du film ${movie.title}"/>                            
                            </a>
                            <div class="movie-infos">
                                <h2 class="movie-title">${movie.title}</h2>
                            </div>
                        </div>
                     </li>   
                    `;
            }
            $('#movies-list').html($movies);
            initModal();

       },
        error: (error) => {
           console.log(error);
        }
    });
}


function initModal(): void {
    $(document).on  ("click", "movie-visual-link", function (event) {
        console.log("coucouououo");
    });
}

