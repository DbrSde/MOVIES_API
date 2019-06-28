import Console from "../shared/Console";
import Configuration from "../shared/Configuration";
import displayNotification from "../shared/notifications";
import {storeMovies} from "../shared/stores/stores";

interface Movie {
    cover_big: string;
    cover_small: string;
    title: string;
    description: string;
}

const LOG_PREFIX: string = "init | ";
const VIDEO_SRC: string = "http://localhost:3000/public/media/video.mp4";
let $movies:string = "";
let $window:JQuery = $(window);


$(() => {
    getMoviesList();
    $window.on('resize', () =>{
        let maxHeight:number = 0;
        $('.movie-infos').css({'height' : 'auto'});
        $('.movie-infos').each(function(){
            let currentHeight = $(this).height();
            if(currentHeight > maxHeight){
                maxHeight = currentHeight;
            }
        });
        $('.movie-infos').css({'height': maxHeight + 'px'});
        $('#movies-list').css({'left': 0, 'width' : ($('.movie-item.active').length * $('.movie-item.active:first-child').width() + 150) + "px"});
    });
    initModal();
});

/**
 * getMoviesList
 * Récupère et affiche la liste des films
 */
function getMoviesList():void{
    Console.debug("%s getMoviesList", LOG_PREFIX);
    $.ajax({
        url: Configuration.MOVIES_API_URL,
        crossDomain : true,
        dataType : 'jsonp',
        success : (data) =>{
            Console.info("MOVIES", data);
            let movies: Array<Movie> = data.content.movies;
            if(!movies || !movies.length){
                displayNotification(Configuration.MESSAGE_TYPE_ERROR, `Problème survenu (${JSON.stringify(data)})`);
                return false;
            }
            displayNotification(Configuration.MESSAGE_TYPE_SUCCESS, `Les films ont bien été chargé (${movies.length})`);
            for(let movie  of movies){
                $movies +=
                    `<li class="movie-item active">
                        <div class="movie-container">
                            <a class="movie-visual-link" href="#" title="Voir l'affiche du film : ${movie.title}" target="_blank" data-toggle="modal" data-target="#myModal">
                                <img class="movie-visual" src="${movie.cover_small}" alt="Poster du film ${movie.title}">
                            </a>
                            <div class="movie-infos">
                                <h2 class="movie-title">${movie.title}</h2>
                                <div class="movie-description">${movie.description}</div>
                            </div>
                        </div>
                    </li>`;
            }
            $('#movies-list').html($movies);
            initFilter();
            $window.trigger('resize');
        },
        error : (error) => {
            displayNotification(Configuration.MESSAGE_TYPE_ERROR, `Erreur lors du chargement : ${error}`);
        }
    });
}

/**
 * initFilter
 * Initialisation du champ de filtre sur les films
 */
function initFilter():void{
    Console.debug("%s initFilter", LOG_PREFIX);
    $('#movie-filter').on('input', (event:JQueryEventObject) => {
        let $this:JQuery = $(event.target);
        let value:string = $this.val();
        $('.movie-title').each(function() {
            if($(this).text().toLowerCase().startsWith(value.toLowerCase())){
                $(this).parents('.movie-item').addClass('active');
            } else {
                $(this).parents('.movie-item').removeClass('active');
            }
        });
        $window.trigger('resize');
    });
}

/**
 * initModal
 * Ouvre la modal avec la vidéo sélectionnée
 */
function initModal():void{
    Console.debug("%s initModal", LOG_PREFIX);
    $(document).on('click', '.movie-visual-link', function (event:JQueryEventObject):void {
       event.preventDefault();
       const $this:JQuery = $(event.target);
       const title:string = $this.parents('.movie-container').find('.movie-title').text();
        storeMovies.dispatch({type: Configuration.EVENT_MOVIE_SELECTED, title: title});
       $('.modal-title').text(title);
       const $video:string = `
            <video class="video" width="560" height="350" controls>
                    <source src="${VIDEO_SRC}" type="video/mp4">
                   <!-- <source src="movie.ogg" type="video/ogg">-->
                    Your browser does not support the video tag.
                </video>
       `;
       $('.modal-body').html($video);
    });
}
