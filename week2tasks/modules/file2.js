var file2 = function () {
    console.log("File2 from Function");
};
var x = console.log("outside of function");// Will be able to call without exporting
var fun1 = function () {
    console.log("fun1 from file2");
}
var fun2 = function () {
    return "fun2 from Function";
}

var epic = {
    age : 20,
    country: "india",
    location : "hyderabad"

}


module.exports = {
    fun1,
    fun2

}
/*module.exports is used to prepare functions to be exported, we can selectively export functions or objects as we need*/
