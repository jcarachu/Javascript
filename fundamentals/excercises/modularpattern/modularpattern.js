var obj = (function() {
    var privateField = 42;
    var publicField = 'foobar';
    function processInternals() { alert('Internal stuff: ' + privateField); }
    function run() {
    processInternals();
    alert('Still private stuff: ' + privateField);
    alert('Public stuff: ' + publicField);
    }
    return {
    publicField: publicField,
    run: run
    };
})();

obj.run() // three alerts: Internal, still private, public
obj.publicField // foobar
obj.processInternals() // Undefined
obj.privateField // Undefined