export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var welcomeState = {
        name: "welcome",
        url: "/",
        component: "esProductList"
    };

    var productListState = {
        name: "productList",
        url: "/products",
        component: "esProductList"
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