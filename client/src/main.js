console.log('is this thing on?')

// library imports
import angular from "angular";

import ListCtrl from "./controllers/list.controller.js";
import MapCtrl from "./controllers/map.controller.js";


angular.module("jsApp", [])
	.controller("ListCtrl", ListCtrl)
	.controller("MapCtrl", MapCtrl);




