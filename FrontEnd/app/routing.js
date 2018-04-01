export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var welcomeState = {
        name: "welcome",
        url: "/?page&limit",
        component: "esProductList",
        params: {
            page: {
                value: '1',
                squash: true
            },
            limit: {
                value: '10',
                squash: true
            }
        }
    };

    var productListState = {
        name: "productList",
        url: "/products?page&limit",
        component: "esProductList",
        params: {
            page: {
                value: '1',
                squash: true
            },
            limit: {
                value: '10',
                squash: true
            }
        }
    };

    var registrationState = {
        name: "registration",
        url: "/registration",
        component: "esRegistration"
    };

    var loginState = {
        name: "login",
        url: "/login",
        component: "esLogin"
    };

    $stateProvider.state(welcomeState);
    $stateProvider.state(productListState);
    $stateProvider.state(registrationState);
    $stateProvider.state(loginState);
}