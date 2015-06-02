angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("suggestions_modal.html","<div class=\"modal\">\n  <header class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Search</h1>\n    <div class=\"button button-clear\" ng-click=\"modal.hide()\"><span class=\"icon ion-ios-close-outline\"></span></div>\n  </header>\n\n  <ion-nav-button side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"openModal()\">\n      <i class=\"icon ion-search\"></i>\n    </button>\n  </ion-nav-button>\n\n  <ion-view>\n    <ion-content class=\"has-header\">\n\n      <ion-item class=\"item-input-inset\">\n        <label class=\"item-input-wrapper\">\n          <i class=\"icon ion-ios-search placeholder-icon\"></i>\n          <input id=\"search\" type=\"search\" placeholder=\"Search\" ng-change=\"search()\" ng-focus=\"scrollTop()\" ng-value=\"station.id\" ng-model=\"station.name\" autofocus />\n        </label>\n\n        <form name=\"search_form\" ng-submit=\"clearSearch()\">\n          <button class=\"button button-clear no-margin no-padding\" style=\"text-align: right;\" ng-click=\"clear()\">\n            <i class=\"icon ion-android-cancel\"></i>\n          </button>\n        </form>\n      </ion-item>\n\n      <div class=\"list no-margin no-padding\" ng-if=\"suggestions\">\n        <li class=\"item\" ng-repeat=\"suggestion in suggestions\" ng-click=\"onSelect(suggestion)\">\n          {{suggestion.name}}\n        </li>\n      </div>\n\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("tab-connections.html","<ion-view view-title=\"Connections\">\n  <ion-content>\n    <ion-list>\n      <div class=\"list list-inset\">\n        <label class=\"item item-input\">\n          <i class=\"icon ion-log-in placeholder-icon\"></i>\n          <input id=\"search\" type=\"search\" placeholder=\"From\" ng-click=\"openModal(\'sl\')\" ng-focus=\"scrollTop()\" ng-value=\"sl.id\" ng-model=\"sl.name\">\n        </label>\n        <label class=\"item item-input\">\n          <i class=\"icon ion-log-out placeholder-icon\"></i>\n          <input id=\"search\" type=\"search\" placeholder=\"To\" ng-click=\"openModal(\'zl\')\" ng-change=\"search()\" ng-focus=\"scrollTop()\" ng-value=\"zl.id\" ng-model=\"zl.name\">\n        </label>\n\n        <!-- <div class=\"item item-input-inset\">\n          <button class=\"button button-block button-positive\">Submit</button>\n        </div>\n\n        <div>\n          <button class=\"button button-block button-positive\">Submit</button>\n        </div> -->\n\n      </div>\n\n<!--       <ion-item class=\"item-input-inset\">\n        <label class=\"item-input-wrapper\">\n          <i class=\"icon ion-log-in placeholder-icon\"></i>\n          <input id=\"search\" type=\"search\" placeholder=\"From\" ng-change=\"search()\" ng-focus=\"scrollTop()\" ng-value=\"sl.id\" ng-model=\"sl.name\">\n        </label>\n\n        <form name=\"search_form\" ng-submit=\"clearSearch()\">\n          <button class=\"button button-clear no-margin no-padding\" style=\"text-align: right;\" ng-click=\"clearSearch()\">\n            <i class=\"icon ion-android-cancel\"></i>\n          </button>\n        </form>\n      </ion-item>\n\n      <ion-item class=\"item-input-inset\">\n        <label class=\"item-input-wrapper\">\n          <i class=\"icon ion-log-out placeholder-icon\"></i>\n          <input id=\"search\" type=\"search\" placeholder=\"To\" ng-change=\"search()\" ng-focus=\"scrollTop()\" ng-value=\"zl.id\" ng-model=\"zl.name\">\n        </label>\n\n        <form name=\"search_form\" ng-submit=\"clearSearch()\">\n          <button class=\"button button-clear no-margin no-padding\" style=\"text-align: right;\" ng-click=\"clearSearch()\">\n            <i class=\"icon ion-android-cancel\"></i>\n          </button>\n        </form>\n      </ion-item> -->\n\n\n      <ion-item class=\"item item-divider item-icon-right bold\" ng-if=\"connections\">\n        Nürnberg, Maxfeld > Nürnberg, Aufseßplatz\n        <p>Placeholder</p>\n        <i class=\"icon ion-star {{ favorite? \'energized\' : \'grey\'}}\"></i>\n      </ion-item>\n\n\n\n\n\n        <ion-item class=\"item-icon-left item-icon-multi\" ng-repeat=\"connection in connections\">\n          <span class=\"item-transport {{transport.transport}} {{transport.line}}\" ng-repeat=\"transport in connection.transports\" >\n            {{transport.line}}\n          </span>\n          <b class=\"bold\">{{connection.departure()}}-{{connection.arrival()}}</b>\n          <p>\n            {{connection.info}}\n          </p>\n        </ion-item>\n\n\n\n\n    </ion-list>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-departures.html","<ion-view view-title=\"VGN Departures\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear pulse\" ng-click=\"openModal()\">\n      <i class=\"icon ion-ios-search-strong bold\"></i>\n    </button>\n  </ion-nav-buttons>\n\n  <ion-content class=\"has-header\">\n    <ion-refresher refreshing-icon=\"none\" ng-if=\"station.id\" on-refresh=\"loadDepartures(station)\"></ion-refresher>\n\n\n    <ion-item class=\"item-icon-left item-text-wrap\" ng-if=\"!departures\" ng-click=\"openModal()\">\n      <i class=\"icon ion-ios-help-outline\"></i>\n      How to find departures?\n      <p>Press \'search\' icon in the top right corner</p>\n    </ion-item>\n\n    <ion-item class=\"item-icon-left item-text-wrap\" ng-if=\"!departures && favorites.length == 0\">\n      <i class=\"icon ion-ios-help-outline\"></i>\n      How to add a station to my favorites?\n      <p>Press \'star\' icon on departures tab</p>\n    </ion-item>\n\n    <ion-item class=\"item-divider\" ng-if=\"!departures && favorites.length\">\n      Favorites\n    </ion-item>\n\n    <div class=\"list no-margin no-padding\" ng-if=\"!departures && favorites\">\n      <li class=\"item\" ng-repeat=\"favorite in favorites\" ng-click=\"loadDepartures(favorite)\">\n        <i class= \"icon ion-star energized\"></i>\n        {{favorite.name}}\n      </li>\n    </div>\n\n    <ion-item class=\"item item-divider item-icon-right bold\" ng-if=\"departures\" ng-click=\"favorite ? removeFavorite(station) : addFavorite(station)\">\n      <!-- <i class=\"icon ion-clock\"></i> -->\n      {{ station.name }}\n      <p>{{ date }} {{ time }}</p>\n      <i class=\"icon ion-star {{ favorite? \'energized\' : \'grey\'}}\"></i>\n    </ion-item>\n\n    <ul class=\"tags\" ng-if=\"tags.length > 0\">\n      <li>Filters:</li>\n\n    	<li ng-repeat=\"tag in tags track by $index\" ng-click=\"removeTag(tag)\">\n        <a href=\"#\">{{tag.name}}\n          <i class=\"icon ion-close-circled\"></i>\n        </a>\n      </li>\n    </ul>\n\n    <div class=\"list\">\n      <li class=\"item item-avatar\" ng-repeat=\"departure in departures | orderBy: \'actial_time\' | limitTo:limit\">\n        <span class=\"item-transport {{departure.transport}} {{departure.line}}\" ng-click=\"addTag({ type: \'line\', name: departure.line }); scrollTop()\">\n          {{departure.line}}\n        </span>\n        <h2>\n          <i class=\"icon ion-ios-navigate-outline grey\"></i>\n\n          <a href=\"#\" class=\"dark bold\" ng-click=\"addTag({ type: \'direction\', name: departure.direction}); scrollTop()\">\n            {{ departure.direction }}\n          </a>\n        </h2>\n        <p>\n          <i class=\"icon ion-clock \" ng-class=\"{ assertive: departure.delay != 0}\"></i>\n          <span ng-class=\"{ assertive: departure.delay != 0}\">{{ departure.time() }}</span>\n          <span ng-if=\"departure.delay != 0\" ng-class=\"{ assertive: departure.delay != 0}\">({{ departure.delay }})</span>\n        </p>\n        <span class=\"badge {{ departure.about_to_expire ? \'badge-assertive\' : \'badge-grey\' }}\">\n          {{ departure.time_left() }}\n        </span>\n      </li>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-favorites.html","<ion-view view-title=\"Favorites\">\n  <ion-nav-buttons side=\"left\">\n    <button class=\"button button-clear\" ng-if=\"editMode\" ng-click=\"deleteAll()\">\n      Delete all\n    </button>\n  </ion-nav-buttons>\n\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-if=\"favorites.length !== 0\" ng-click=\"edit()\">\n      <i class=\"icon ion-ios-compose-outline\"></i>\n    </button>\n  </ion-nav-buttons>\n\n  <ion-content class=\"has-header\">\n    <ion-list show-delete=\"editMode\" can-swipe=\"true\">\n      <ion-item class=\"item-icon-left item-text-wrap\" ng-if=\"favorites.length == 0\">\n        <i class=\"icon ion-ios-help-outline\"></i>\n        How to add a station to my favorites?\n        <p>Press \'star\' icon on departures tab</p>\n      </ion-item>\n\n      <ion-item ng-repeat=\"favorite in favorites\" class=\"item-icon-left\" ng-click=\"go(favorite)\">\n        <i class= \"icon ion-star energized\"></i>\n        {{favorite.name}}\n        <ion-option-button class=\"button-assertive\" ng-click=\"delete(favorite)\">Delete</ion-option-button>\n        <ion-delete-button class=\"ion-minus-circled\" ng-click=\"delete(favorite)\"></ion-delete-button>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("tab-info.html","<ion-view view-title=\"Info\">\n  <ion-content class=\"padding-horizontal\">\n\n    <ion-list class=\"list list-inset\">\n      <ion-item class = \"item-image padding stable-bg\">\n        <img src=\"img/qrcode_256.png\" style=\"width: 40%; height: 40%\">\n      </ion-item>\n\n      <ion-item class = \"item-icon-left item-text-wrap\">\n        <i class=\"icon ion-ionic positive\"></i>\n        <h2>Built with Awesome and Powerful Ionic Framework</h2>\n        <a class=\"dark\" href=\"http://ionicframework.com\" target=\"_blank\">http://ionicframework.com</a>\n      </ion-item>\n\n      <ion-item class=\"item-divider\">\n        Share with Friends\n      </ion-item>\n      <ion-item class=\"item-icon-left\" class=\"positive\" href=\"https://twitter.com/intent/tweet?status=VGN Departures web app (http://vgn.herokuapp.com) - built with Awesome and Powerful Ionic Framework!\" target=\"_blank\">\n        <i class=\"icon ion-social-twitter positive\"></i>\n        <a>Tweet</a>\n      </ion-item>\n\n      <ion-item class=\"item-divider\">\n        Need Help?\n      </ion-item>\n      <ion-item class=\"item-icon-left item-text-wrap\" href=\"https://github.com/vlewin/vgn-departures-ionic/issues\" target=\"_blank\">\n        <i class= \"icon ion-social-github\"></i>\n        Open a GitHub issue\n      </ion-item>\n\n      <ion-item class=\"item-icon-left item-text-wrap\" ng-if=\"supportedPlatform()\" ng-click=\"help()\">\n        <i class= \"icon ion-help-circled\"></i>\n        Show me how to pin a webapp to the home screen (supported platforms: iOS, Android)\n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tab-settings.html","<ion-view view-title=\"Settings\">\n  <ion-content class=\"has-header\">\n\n    <div class=\"list list-inset\">\n      <div class=\"item item-divider\">\n        Application settings\n      </div>\n      <label class=\"item item-input\">\n        <span class=\"input-label\">\n          <i class= \"icon ion-link placeholder-icon\"></i>\n          API server\n        </span>\n\n        <input type=\"text\" placeholder=\"http://example.com\" ng-model=\"$parent.api_url\">\n      </label>\n    </div>\n\n    <div class=\"padding\">\n      <button class=\"button button-block button-balanced\" ng-click=\"save()\">Save</button>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("tabs.html","<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\">\n\n  <!-- Departures Tab -->\n  <ion-tab title=\"Departures\" icon-off=\"ion-ios-list-outline\" icon-on=\"ion-ios-list\" href=\"#/tab/departures\">\n    <ion-nav-view name=\"tab-departures\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Connections Tab -->\n  <!-- ion-map -->\n  <!-- ion-network -->\n  <ion-tab title=\"Connections\" icon-off=\"ion-ios-shuffle\" icon-on=\"ion-ios-shuffle-strong\" href=\"#/tab/connections\">\n    <ion-nav-view name=\"tab-connections\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Favorites Tab -->\n  <ion-tab title=\"Favorites\" icon-off=\"ion-ios-star-outline\" icon-on=\"ion-ios-star\" href=\"#/tab/favorites\">\n    <ion-nav-view name=\"tab-favorites\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Info Tab -->\n  <ion-tab title=\"Info\" icon-off=\"ion-ios-information-outline\" icon-on=\"ion-ios-information\" href=\"#/tab/info\">\n    <ion-nav-view name=\"tab-info\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Settings Tab -->\n<!--   <ion-tab title=\"Settings\" icon-off=\"ion-ios-gear-outline\" icon-on=\"ion-ios-gear\" href=\"#/tab/settings\">\n    <ion-nav-view name=\"tab-settings\"></ion-nav-view>\n  </ion-tab>\n -->\n</ion-tabs>\n");}]);