function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const fnctn = function fn() {};
    return fnctn;
}
function returnsAnAnonymousFunction(){
   return function(){};
}