
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
   { name: "black",
   means: ' you are often artistic and sensitive',
   objImage: 'img/1.jpg'

},
{
    name:"white",
    means:'you are often organized and logical',
    objImage:'img/2.jpg'
},
{
    name:"red",
    means:'you are action oriented with a deep need for physical fulfillment and to experience life through the five senses.',
    objImage:'img/3.jpg'

},
{
    name:"yellow",
    means:'as your favorite means you have a deep need for logical order in your everyday life and to be able to express your individuality by using your logical mind to inspire and create new ideas',
    objImage:'img/4.jpg'

},
{
    name:"blue",
    means:'you have a deep need to find inner peace and truth, to live their life according to their ideals and beliefs without having to change their inflexible viewpoint of life to satisfy others.',
    objImage:'img/5.jpg'

},
{
    name:"pink",
    means:'you have a deep need to be accepted and loved unconditionally',
    objImage:'img/6.jpg'

    
}

];
var input = document.getElementById("colorsname");
var myh1 = document.getElementById("name");
var myh2 = document.getElementById("means");
var myImg = document.getElementById("image");



function getinfo(){
    for (var i=0 ; i < colors.length; i++){
        if(input.value == colors[i].name){
myh1.innerText = colors[i].name;
myh2.innerText = colors[i].means;

myImg.src = colors[i].objImage;
        }
    };

}
document.body.style.color = "white";
document.body.style.fontSize= "50px";
document.body.style.padding="150px";
