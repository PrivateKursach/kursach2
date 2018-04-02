export default function errorMessageService() {
    var service = this;

    service.getErrorMessageByHttpCode = function (httpCode) {
        switch (httpCode) {
            case 400:
                return "Ошибка запроса";
            case 404:
                return "Ресурс не найден";
            case 500:
                return "Ошибка сервера";
            default:
                return "Ошибка системы";
        }
    };
}