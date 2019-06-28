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
var movies;
$(function () {
    getMovies();
});
/**
 * Methode permettant de récupérer la liste des films
 */
function getMovies() {
    Console_1["default"].debug("%s getMovies", LOG_PREFIX);
    $.ajax({
        url: Configuration_1["default"].MOVIES_API_URL,
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            Console_1["default"].info("MOVIES", data);
            movies = data.content.movies;
            if (!movies || !movies.length) {
                return;
            }
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var movie = movies_1[_i];
                $movies +=
                    "<li class=\"movie-item col-lg-3\">\n                        <div class=\"movie-container\">\n                            <a class=\"movie-visual-link\" href=\"#\"\n                                                        title=\"Voir l'affiche du film : " + movie.title + "\"\n                                                        target=\"_blank\"\n                                                        data-toggle=\"modal\"\n                                                        data-id=\"" + movie.id + "\"\n                                                        data-target=\"#myModal\">\n                                <img class=\"movie-visual\" src=\"" + movie.cover_small + "\" alt=\"Poster du film " + movie.title + "\"/>                            \n                            </a>\n                            <div class=\"movie-infos\">\n                                <h2 class=\"movie-title\">" + movie.title + "</h2>\n                            </div>\n                        </div>\n                     </li>   \n                    ";
            }
            $('#movies-list').html($movies);
            initModal();
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function initModal() {
    $(document).on("click", "movie-visual-link", function (event) {
        console.log("coucouououo");
    });
}
},{"./Configuration":1,"./Console":2}],4:[function(require,module,exports){

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMtYXNzZXRzL2pzL0NvbmZpZ3VyYXRpb24udHMiLCJzcmMtYXNzZXRzL2pzL0NvbnNvbGUudHMiLCJzcmMtYXNzZXRzL2pzL21haW4udHMiLCJzcmMtYXNzZXRzL2pzL25vdGlmaWNhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0lBQUE7SUFPQSxDQUFDO0lBTGlCLDRCQUFjLEdBQVcsbUNBQW1DLENBQUM7SUFFN0QsMkJBQWEsR0FBVSxpQ0FBaUMsQ0FBQztJQUN6RCxpQ0FBbUIsR0FBVyxhQUFhLENBQUM7SUFDNUMsMkJBQWEsR0FBWSxJQUFJLENBQUM7SUFDaEQsb0JBQUM7Q0FQRCxBQU9DLElBQUE7cUJBUG9CLGFBQWE7Ozs7QUNBbEMsaURBQTRDO0FBRTVDO0lBQUE7SUFpQkEsQ0FBQztJQWZpQixhQUFLLEdBQW5CLFVBQW9CLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDdkQsSUFBSSwwQkFBYSxDQUFDLGFBQWEsRUFBQztZQUM1QixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sR0FBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLDBCQUFhLENBQUMsbUJBQW1CLFNBQUssY0FBYyxHQUFFO1NBQ3RGO0lBQ0wsQ0FBQztJQUVhLFlBQUksR0FBbEIsVUFBbUIsSUFBWSxFQUFFLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDcEUsSUFBSSwwQkFBYSxDQUFDLGFBQWEsRUFBQztZQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLElBQUksdUJBQW9CLEVBQUUsMEJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sR0FBSyxPQUFPLFNBQUssY0FBYyxHQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLEVBQUUsMEJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7Ozs7O0FDbkJELHFDQUErQjtBQUMvQixpREFBNEM7QUFFNUMsSUFBTSxVQUFVLEdBQVcsU0FBUyxDQUFDO0FBQ3JDLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztBQUN6QixJQUFJLE1BQW9CLENBQUM7QUFVekIsQ0FBQyxDQUFFO0lBQ0MsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILFNBQVMsU0FBUztJQUNkLG9CQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ0osR0FBRyxFQUFFLDBCQUFhLENBQUMsY0FBYztRQUNqQyxXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsT0FBTztRQUNqQixPQUFPLEVBQUUsVUFBQyxJQUFJO1lBQ1Ysb0JBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsT0FBTzthQUNWO1lBQ0QsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUM7Z0JBQXBCLElBQUksS0FBSyxlQUFBO2dCQUNULE9BQU87b0JBQ0gsa1FBR3NFLEtBQUssQ0FBQyxLQUFLLHdPQUdsQyxLQUFLLENBQUMsRUFBRSxpS0FFVixLQUFLLENBQUMsV0FBVyxnQ0FBeUIsS0FBSyxDQUFDLEtBQUssK0xBRzVELEtBQUssQ0FBQyxLQUFLLG1JQUloRCxDQUFDO2FBQ1Q7WUFDRCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLENBQUM7UUFDQSxLQUFLLEVBQUUsVUFBQyxLQUFLO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUdELFNBQVMsU0FBUztJQUNkLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsS0FBSztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7QUNwRUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9ue1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTU9WSUVTX0FQSV9VUkw6IHN0cmluZyA9IFwiaHR0cDovL21vdmllc2RiLmJybS51cy9hcGkvbW92aWVzXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDT05TT0xFX1NUWUxFOnN0cmluZyA9ICdjb2xvcjogZ3JlZW47IGZvbnQtd2VpZ2h0OiBib2xkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQ09OU09MRV9ERUJVR19TVFlMRTogc3RyaW5nID0gJ2NvbG9yOiBncmV5JztcclxuICAgIHB1YmxpYyBzdGF0aWMgSVNfREVCVUdfTU9ERTogYm9vbGVhbiA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWJ1ZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lke1xyXG4gICAgICAgIGlmIChDb25maWd1cmF0aW9uLklTX0RFQlVHX01PREUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCIlY1wiICsgbWVzc2FnZSwgQ29uZmlndXJhdGlvbi5DT05TT0xFX0RFQlVHX1NUWUxFLCAuLi5vcHRpb25hbFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5mbyh0eXBlOiBzdHJpbmcsIG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6dm9pZCB7XHJcbiAgICAgICAgaWYgKENvbmZpZ3VyYXRpb24uSVNfREVCVUdfTU9ERSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQodHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAtLS0tLS0tLS0tLS0tLS0tLSAke3R5cGV9IC0tLS0tLS0tLS0tLS0tLS0tYCwgQ29uZmlndXJhdGlvbi5DT05TT0xFX1NUWUxFKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCwgQ29uZmlndXJhdGlvbi5DT05TT0xFX1NUWUxFKTtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29uc29sZSBmcm9tICcuL0NvbnNvbGUnXHJcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbmNvbnN0IExPR19QUkVGSVg6IHN0cmluZyA9ICdtYWluIHwgJztcclxubGV0ICRtb3ZpZXM6IHN0cmluZyA9IFwiXCI7XHJcbmxldCBtb3ZpZXM6IEFycmF5PE1vdmllPjtcclxuXHJcbmludGVyZmFjZSBNb3ZpZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgY292ZXJfYmlnOiBzdHJpbmcsXHJcbiAgICBjb3Zlcl9zbWFsbDogc3RyaW5nLFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxufVxyXG5cclxuJCggKCkgPT4ge1xyXG4gICAgZ2V0TW92aWVzKCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIE1ldGhvZGUgcGVybWV0dGFudCBkZSByw6ljdXDDqXJlciBsYSBsaXN0ZSBkZXMgZmlsbXNcclxuICovXHJcbmZ1bmN0aW9uIGdldE1vdmllcygpOiB2b2lkIHtcclxuICAgIENvbnNvbGUuZGVidWcoXCIlcyBnZXRNb3ZpZXNcIiwgTE9HX1BSRUZJWCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgdXJsOiBDb25maWd1cmF0aW9uLk1PVklFU19BUElfVVJMLFxyXG4gICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICBkYXRhVHlwZTogJ2pzb25wJyxcclxuICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PntcclxuICAgICAgICAgICBDb25zb2xlLmluZm8oXCJNT1ZJRVNcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIG1vdmllcyA9IGRhdGEuY29udGVudC5tb3ZpZXM7XHJcbiAgICAgICAgICAgIGlmICghbW92aWVzIHx8ICFtb3ZpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBtb3ZpZSBvZiBtb3ZpZXMpe1xyXG4gICAgICAgICAgICAgICAgJG1vdmllcyArPVxyXG4gICAgICAgICAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtIGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibW92aWUtdmlzdWFsLWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb2lyIGwnYWZmaWNoZSBkdSBmaWxtIDogJHttb3ZpZS50aXRsZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7bW92aWUuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllLXZpc3VhbFwiIHNyYz1cIiR7bW92aWUuY292ZXJfc21hbGx9XCIgYWx0PVwiUG9zdGVyIGR1IGZpbG0gJHttb3ZpZS50aXRsZX1cIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW92aWUtdGl0bGVcIj4ke21vdmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW92aWVzLWxpc3QnKS5odG1sKCRtb3ZpZXMpO1xyXG4gICAgICAgICAgICBpbml0TW9kYWwoKTtcclxuXHJcbiAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0TW9kYWwoKTogdm9pZCB7XHJcbiAgICAkKGRvY3VtZW50KS5vbiAgKFwiY2xpY2tcIiwgXCJtb3ZpZS12aXN1YWwtbGlua1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvdWNvdW91b3VvXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm05MGFXWnBZMkYwYVc5dWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5OeVl5MWhjM05sZEhNdmFuTXZibTkwYVdacFkyRjBhVzl1Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJbDE5Il19
