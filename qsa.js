//-- Definition
//Select nodes via a common querySelector request
//Then do whatever you want with all these nodes inside the callback function
//Set parentNode to false if you don't use it
document.applyToAll = function(nodes, parentNode, callback){
    parentNode = parentNode || document;
    var a = parentNode.querySelectorAll(nodes);

    for(var k in a){
        if(typeof(a[k]) == "object"){
            callback(a[k]);
        }
    }
}

//-- Usage
// document.applyToAll("p", false, function(node){
//     node.addEventListener("click", clicked);
// });

// document.applyToAll("p", ".parent", function(node){
//     node.addEventListener("click", clicked);
// });
