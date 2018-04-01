import angular from 'angular';
import ngCookies from 'angular-cookies';
import uirouter from 'angular-ui-router';
import pascalprechttranslate from 'angular-translate';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './routing';

import {esIndexComponent} from './es-index/es-index.component';
import {esProductListComponent} from './es-product-list/es-product-list.component';
import {esLoginComponent} from './es-login/es-login.component';
import {esRegistrationComponent} from './es-registration/es-registration.component';

angular.module("app", [ngCookies, uirouter, pascalprechttranslate, uibootstrap])
    .config(routing)
    .component("esIndex", esIndexComponent)
    .component("esProductList", esProductListComponent)
    .component("esLogin", esLoginComponent)
    .component("esRegistration", esRegistrationComponent);