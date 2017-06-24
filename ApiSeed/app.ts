/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angular-ui-bootstrap/index.d.ts" />
/// <reference path="../scripts/typings/moment/moment.d.ts" />
/// <reference path="../scripts/typings/kendo/2016.1.412/kendo.all.d.ts" />

module entrustpermal.tradebook {
    angular.module('entrustpermal.tradebook', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        "ui.bootstrap",
        "ngReportGrid",
        "ui.select2",
        'kendo.directives',
        'ui.bootstrap',
        'ui.select'
    ]);
}