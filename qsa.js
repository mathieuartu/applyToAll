//-- Definition
//Select nodes via a common querySelector request
//Then do whatever you want with all these nodes inside the callback function
document.applyToAll = function(nodes, callback){
    var a = document.querySelectorAll(nodes);
    for(var k in a){
        if(typeof(a[k]) == "object"){
            callback(a[k]);
        }
    }
}

//-- Usage
// document.applyToAll("p", function(node){
//     node.addEventListener("click", clicked);
// });
