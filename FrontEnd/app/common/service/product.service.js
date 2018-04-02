function productService($http) {
    var service = this;

    service.getAllProducts = function (offset, limit, typesIds, minPrice, maxPrice) {
        var url = "http://localhost:8081/rest/products?offset=" + offset + "&limit=" + limit;
        if (minPrice) {
            url = url + "&minPrice=" + minPrice;
        }
        if (maxPrice) {
            url = url + "&maxPrice=" + maxPrice;
        }
        if (typesIds) {
            typesIds.forEach(function (item, i, typesIds) {
                url = url + "&type=" + item;
            });
        }
        return $http({
            method: "GET",
            url: url
        }).then(function (response) {
            return {
                productList: response.data,
                totalCount: response.headers("X-Total-Count")
            };
        });
    };

    service.getProductById = function (productId) {
        return $http({
            method: "GET",
            url: "http://localhost:8081/rest/products/" + productId
        }).then(function (response) {
            return response.data;
        });
    };

    service.addProduct = function (product) {
        return $http({
            method : "POST",
            url : "http://localhost:8081/rest/products",
            data : product
        }).then(function (response) {
            return response.data;
        });
    };

    service.editProduct = function (product) {
        return $http({
            method : "PUT",
            url : "http://localhost:8081/rest/products/" + product.id,
            data : product
        }).then(function (response) {
            return response.data;
        });
    };

    service.deleteProduct = function (productId) {
        return $http({
            method : "DELETE",
            url : "http://localhost:8081/rest/products/" + productId
        });
    };
}
