
// var colors =[
//     {name:"black",
//     img:,
//  say:"People who choose black as their favorite color are often artistic and sensitive."
//     },
//     {name:"white",
//     img:,
// say: People who like white are often organized and logical and don't
//  have a great deal of clutter in their lives.
//     }
// ];

var colors = [
   { name: 1,
   means: ' you are often artistic and sensitive'
  
},
{
    name:2,
    means:'you are often organized and logical',
   
}

];
var input = document.getElementById("colorsname");
var myh1 = document.getElementById("name");
var myh2 = document.getElementById("means");
var myimg1 = document.getElementById("1");



function getinfo(){
    for (var i=0 ; i < colors.length; i++){
        if(input.value == colors[i].name){
myh1.innerText = colors[i].name;
myh2.innerText = colors[i].means;

myimg1.setAttribute("src", "1.jpg");
        }
    };

}
document.body.style.color = "yellow";
document.body.style.fontSize= "100px";
