(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    Configuration.MOVIES_API_URL = "http://moviesdb.brm.us/api/movies";
    Configuration.CONSOLE_STYLE = 'color: green; font-weight: bold';
    Configuration.CONSOLE_DEBUG_STYLE = 'color: grey';
    Configuration.IS_DEBUG_MODE = true;
    return Configuration;
}());
exports["default"] = Configuration;
},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Configuration_1 = require("./Configuration");
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (Configuration_1["default"].IS_DEBUG_MODE) {
            console.info.apply(console, ["%c" + message, Configuration_1["default"].CONSOLE_DEBUG_STYLE].concat(optionalParams));
        }
    };
    Console.info = function (type, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        if (Configuration_1["default"].IS_DEBUG_MODE) {
            console.groupCollapsed(type);
            console.log("%c ----------------- " + type + " -----------------", Configuration_1["default"].CONSOLE_STYLE);
            console.log.apply(console, [message].concat(optionalParams));
            console.log("%c ------------------------------------------", Configuration_1["default"].CONSOLE_STYLE);
            console.groupEnd();
        }
    };
    return Console;
}());
exports["default"] = Console;
},{"./Configuration":1}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Console_1 = require("./Console");
var Configuration_1 = require("./Configuration");
var LOG_PREFIX = 'main | ';
var $movies = "";
$(function () {
    getMovies();
});
/**
 * Method permettant de récupérer la liste des films
 */
function getMovies() {
    Console_1["default"].debug("%s getMovies", LOG_PREFIX);
    $.ajax({
        url: Configuration_1["default"].MOVIES_API_URL,
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            Console_1["default"].info("MOVIES", data);
            var movies = data.content.movies;
            if (!movies || !movies.length) {
                return;
            }
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var movie = movies_1[_i];
                $movies +=
                    "<li class=\"movie-item col-lg-3\">\n                        <div class=\"movie-container\">\n                            <a class=\"movie-visual-link\" href=\"#\"\n                                                        title=\"Voir l'affiche du film : " + movie.title + "\"\n                                                        target=\"_blank\"\n                                                        data-toggle=\"modal\"\n                                                        data-target=\"#myModal\">\n                                <img class=\"movie-visual\" src=\"" + movie.cover_small + "\" alt=\"Poster du film " + movie.title + "\"/>                            \n                            </a>\n                            <div class=\"movie-infos\">\n                                <h2 class=\"movie-title\">" + movie.title + "</h2>\n                            </div>\n                        </div>\n                     </li>   \n                    ";
            }
            $('#movies-list').html($movies);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
},{"./Configuration":1,"./Console":2}],4:[function(require,module,exports){

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMtYXNzZXRzL2pzL0NvbmZpZ3VyYXRpb24udHMiLCJzcmMtYXNzZXRzL2pzL0NvbnNvbGUudHMiLCJzcmMtYXNzZXRzL2pzL21haW4udHMiLCJzcmMtYXNzZXRzL2pzL25vdGlmaWNhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0lBQUE7SUFPQSxDQUFDO0lBTGlCLDRCQUFjLEdBQVcsbUNBQW1DLENBQUM7SUFFN0QsMkJBQWEsR0FBVSxpQ0FBaUMsQ0FBQztJQUN6RCxpQ0FBbUIsR0FBVyxhQUFhLENBQUM7SUFDNUMsMkJBQWEsR0FBWSxJQUFJLENBQUM7SUFDaEQsb0JBQUM7Q0FQRCxBQU9DLElBQUE7cUJBUG9CLGFBQWE7Ozs7QUNBbEMsaURBQTRDO0FBRTVDO0lBQUE7SUFpQkEsQ0FBQztJQWZpQixhQUFLLEdBQW5CLFVBQW9CLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDdkQsSUFBSSwwQkFBYSxDQUFDLGFBQWEsRUFBQztZQUM1QixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sR0FBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLDBCQUFhLENBQUMsbUJBQW1CLFNBQUssY0FBYyxHQUFFO1NBQ3RGO0lBQ0wsQ0FBQztJQUVhLFlBQUksR0FBbEIsVUFBbUIsSUFBWSxFQUFFLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDcEUsSUFBSSwwQkFBYSxDQUFDLGFBQWEsRUFBQztZQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLElBQUksdUJBQW9CLEVBQUUsMEJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sR0FBSyxPQUFPLFNBQUssY0FBYyxHQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLEVBQUUsMEJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7Ozs7O0FDbkJELHFDQUErQjtBQUMvQixpREFBNEM7QUFFNUMsSUFBTSxVQUFVLEdBQVcsU0FBUyxDQUFDO0FBQ3JDLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztBQVN6QixDQUFDLENBQUU7SUFDQyxTQUFTLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsU0FBUyxTQUFTO0lBQ2Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDSixHQUFHLEVBQUUsMEJBQWEsQ0FBQyxjQUFjO1FBQ2pDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxVQUFDLElBQUk7WUFDVixvQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxNQUFNLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUMzQixPQUFPO2FBQ1Y7WUFDRCxLQUFpQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBQztnQkFBcEIsSUFBSSxLQUFLLGVBQUE7Z0JBQ1QsT0FBTztvQkFDSCxrUUFHc0UsS0FBSyxDQUFDLEtBQUssMlRBSXBDLEtBQUssQ0FBQyxXQUFXLGdDQUF5QixLQUFLLENBQUMsS0FBSywrTEFHNUQsS0FBSyxDQUFDLEtBQUssbUlBSWhELENBQUM7YUFDVDtZQUNELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNBLEtBQUssRUFBRSxVQUFDLEtBQUs7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDOztBQ3hERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ3VyYXRpb257XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBNT1ZJRVNfQVBJX1VSTDogc3RyaW5nID0gXCJodHRwOi8vbW92aWVzZGIuYnJtLnVzL2FwaS9tb3ZpZXNcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTlNPTEVfU1RZTEU6c3RyaW5nID0gJ2NvbG9yOiBncmVlbjsgZm9udC13ZWlnaHQ6IGJvbGQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBDT05TT0xFX0RFQlVHX1NUWUxFOiBzdHJpbmcgPSAnY29sb3I6IGdyZXknO1xyXG4gICAgcHVibGljIHN0YXRpYyBJU19ERUJVR19NT0RFOiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlYnVnKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWR7XHJcbiAgICAgICAgaWYgKENvbmZpZ3VyYXRpb24uSVNfREVCVUdfTU9ERSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIiVjXCIgKyBtZXNzYWdlLCBDb25maWd1cmF0aW9uLkNPTlNPTEVfREVCVUdfU1RZTEUsIC4uLm9wdGlvbmFsUGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbmZvKHR5cGU6IHN0cmluZywgbWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTp2b2lkIHtcclxuICAgICAgICBpZiAoQ29uZmlndXJhdGlvbi5JU19ERUJVR19NT0RFKXtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCh0eXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIC0tLS0tLS0tLS0tLS0tLS0tICR7dHlwZX0gLS0tLS0tLS0tLS0tLS0tLS1gLCBDb25maWd1cmF0aW9uLkNPTlNPTEVfU1RZTEUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gLCBDb25maWd1cmF0aW9uLkNPTlNPTEVfU1RZTEUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb25zb2xlIGZyb20gJy4vQ29uc29sZSdcclxuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5cclxuY29uc3QgTE9HX1BSRUZJWDogc3RyaW5nID0gJ21haW4gfCAnO1xyXG5sZXQgJG1vdmllczogc3RyaW5nID0gXCJcIjtcclxuXHJcbmludGVyZmFjZSBNb3ZpZSB7XHJcbiAgICBjb3Zlcl9iaWc6IHN0cmluZyxcclxuICAgIGNvdmVyX3NtYWxsOiBzdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG59XHJcblxyXG4kKCAoKSA9PiB7XHJcbiAgICBnZXRNb3ZpZXMoKTtcclxufSk7XHJcblxyXG4vKipcclxuICogTWV0aG9kIHBlcm1ldHRhbnQgZGUgcsOpY3Vww6lyZXIgbGEgbGlzdGUgZGVzIGZpbG1zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNb3ZpZXMoKTogdm9pZCB7XHJcbiAgICBDb25zb2xlLmRlYnVnKFwiJXMgZ2V0TW92aWVzXCIsIExPR19QUkVGSVgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgIHVybDogQ29uZmlndXJhdGlvbi5NT1ZJRVNfQVBJX1VSTCxcclxuICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXHJcbiAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT57XHJcbiAgICAgICAgICAgQ29uc29sZS5pbmZvKFwiTU9WSUVTXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbW92aWVzOiBBcnJheTxNb3ZpZT4gPSBkYXRhLmNvbnRlbnQubW92aWVzO1xyXG4gICAgICAgICAgICBpZiAoIW1vdmllcyB8fCAhbW92aWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgbW92aWUgb2YgbW92aWVzKXtcclxuICAgICAgICAgICAgICAgICRtb3ZpZXMgKz1cclxuICAgICAgICAgICAgICAgICAgICBgPGxpIGNsYXNzPVwibW92aWUtaXRlbSBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1vdmllLXZpc3VhbC1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVm9pciBsJ2FmZmljaGUgZHUgZmlsbSA6ICR7bW92aWUudGl0bGV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibW92aWUtdmlzdWFsXCIgc3JjPVwiJHttb3ZpZS5jb3Zlcl9zbWFsbH1cIiBhbHQ9XCJQb3N0ZXIgZHUgZmlsbSAke21vdmllLnRpdGxlfVwiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7bW92aWUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9saT4gICBcclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNtb3ZpZXMtbGlzdCcpLmh0bWwoJG1vdmllcyk7XHJcbiAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libTkwYVdacFkyRjBhVzl1Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbk55WXkxaGMzTmxkSE12YW5NdmJtOTBhV1pwWTJGMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlsMTkiXX0=
