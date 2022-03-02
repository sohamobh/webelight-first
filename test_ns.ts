/// <reference path = "namespace_1.ts" />   
/// <reference path = "namespace_2.ts" /> 
/// <reference path = "namespace_3.ts" />  

function drawAll(shapes:App.shape){
    shapes.draw();
}

drawAll(new App.circle());
drawAll(new App.triangle());