///<reference path='./Scripts/typings/moment/moment.d.ts' />
(function (_Person) {
    (function (TypeScript) {
        var Person = (function () {
            function Person(birthDate, name) {
                this._birthDate = birthDate;
                this._name = name;
            }
            Person.prototype.toString = function () {
                return this._name + ", " + this._birthDate;
            };

            Object.defineProperty(Person.prototype, "birthDate", {
                get: function () {
                    return this._birthDate;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Person.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            return Person;
        })();
        TypeScript.Person = Person;
    })(_Person.TypeScript || (_Person.TypeScript = {}));
    var TypeScript = _Person.TypeScript;
})(exports.Person || (exports.Person = {}));
var Person = exports.Person;
//# sourceMappingURL=Person.js.map
