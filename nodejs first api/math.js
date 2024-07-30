function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b; 
}
// module.exports = add;

module.exports = {
    //this is default exports
    add,
    sub
}

module.exports.mul = (a,b)=>a*b;
module.exports.div = (a,b)=>a%b;