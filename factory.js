var Ritsu = 'core/ritsu';

var Factory = (function () {
    function Factory(name) {
        this.name = name;
        this.name = name;
        this._map = {
            'Ritsu': function () {
                return new Ritsu();
            }
        };
    }
    Factory.prototype.get = function () {
        var class_name = this.name.charAt(0).toUpperCase() + this.name.substr(1);
        console.log(class_name);
        console.log(this._map);
    };
    return Factory;
})();
module.exports = Factory;

