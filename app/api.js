

var api = (function () {
    return {
        url: "",
        method: "",
        result: {},
        call: function (url, method) {
            this.url = url;
            this.method = method;
            return $.ajax({
                url: this.url,
                method: this.method
            });
        }
    }
})();
