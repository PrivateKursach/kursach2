import angular from 'angular';
import ngCookies from 'angular-cookies';
import uirouter from 'angular-ui-router';
import pascalprechttranslate from 'angular-translate';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './routing';

import registrationService from './common/service/registration.service';
import sessionService from './common/service/session.service';
import productService from './common/service/product.service';

import {esIndexComponent} from './es-index/es-index.component';
import {esProductListComponent} from './es-product-list/es-product-list.component';
import {esLoginComponent} from './es-login/es-login.component';
import {esRegistrationComponent} from './es-registration/es-registration.component';
import {esProductListSidebarComponent} from './es-product-list-sidebar/es-product-list-sidebar.component';
import {esProductListPaginationComponent} from './es-product-list-pagination/es-product-list-pagination';

angular.module("app", [ngCookies, uirouter, pascalprechttranslate, uibootstrap])
    .config(routing)
    .service("registrationService", registrationService)
    .service("sessionService", sessionService)
    .service("productService", productService)
    .component("esIndex", esIndexComponent)
    .component("esProductList", esProductListComponent)
    .component("esLogin", esLoginComponent)
    .component("esRegistration", esRegistrationComponent)
    .component("esProductListSidebar", esProductListSidebarComponent)
    .component("esProductListPagination", esProductListPaginationComponent);