import angular from 'angular';
import ngCookies from 'angular-cookies';
import uirouter from 'angular-ui-router';
import pascalprechttranslate from 'angular-translate';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './routing';

import registrationService from './common/service/registration.service';
import sessionService from './common/service/session.service';
import productService from './common/service/product.service';
import orderService from './common/service/order.service';
import modalService from './common/service/modal.service';
import errorMessageService from './common/service/error-message.service';

import {esIndexComponent} from './es-index/es-index.component';
import {esProductListComponent} from './es-product-list/es-product-list.component';
import {esLoginComponent} from './es-login/es-login.component';
import {esRegistrationComponent} from './es-registration/es-registration.component';
import {esProductListSidebarComponent} from './es-product-list-sidebar/es-product-list-sidebar.component';
import {esProductListPaginationComponent} from './es-product-list-pagination/es-product-list-pagination';
import {esCartComponent} from './es-cart/es-cart.component';
import {esBackButtonComponent} from './es-back-button/es-back-button.component';
import {esProductComponent} from './es-product/es-product.component';
import {esAddProductModalComponent} from './es-add-product-modal/es-add-product-modal.component';

angular.module("app", [ngCookies, uirouter, pascalprechttranslate, uibootstrap])
    .config(routing)
    .service("registrationService", registrationService)
    .service("sessionService", sessionService)
    .service("productService", productService)
    .service("orderService", orderService)
    .service("modalService", modalService)
    .service("errorMessageService", errorMessageService)
    .component("esIndex", esIndexComponent)
    .component("esProductList", esProductListComponent)
    .component("esLogin", esLoginComponent)
    .component("esRegistration", esRegistrationComponent)
    .component("esProductListSidebar", esProductListSidebarComponent)
    .component("esProductListPagination", esProductListPaginationComponent)
    .component("esCart", esCartComponent)
    .component("esBackButton", esBackButtonComponent)
    .component("esProduct", esProductComponent)
    .component("esAddProductModal", esAddProductModalComponent);