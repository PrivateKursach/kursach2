function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var welcomeState = {
        name: "welcome",
        url: "/?page&limit&type&minPrice&maxPrice",
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
        url: "/products?page&limit&type&minPrice&maxPrice",
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
    
    var cartState = {
        name: "cart",
        url: "/cart",
        component: "esCart"
    };

    var productState = {
        name : "product",
        url : "/products/{productId}",
        component : "esProduct",
        resolve : {
            product: function (productService, $stateParams) {
                return productService.getProductById($stateParams.productId);
            }
        },
        params : {
            prevState: {}
        }
    };

    var ordersState = {
        name : "orders",
        url : "/orders",
        component : "esOrderList"
    };
    
    var productTypesState = {
        name: "productTypes",
        url: "/productTypes",
        component: "esProductTypeList"
    };

    $stateProvider.state(welcomeState);
    $stateProvider.state(productListState);
    $stateProvider.state(registrationState);
    $stateProvider.state(loginState);
    $stateProvider.state(cartState);
    $stateProvider.state(productState);
    $stateProvider.state(ordersState);
    $stateProvider.state(productTypesState);
}