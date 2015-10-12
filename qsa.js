//-- Definition
//Select nodes via a common querySelector request
//Then do whatever you want with all these nodes inside the callback function
//Set parentNode to false if you don't use it
document.applyToAll = function(nodes, parentNode, callback){
    var a;
    if(parentNode){
      a = parentNode.querySelectorAll(nodes);
    } else {
      a = document.querySelectorAll(nodes);
    } 
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
