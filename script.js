


let btn = document.querySelector('.mdc-button');



btn.addEventListener("click", () => {
  //console.log("hello");
  var x = document.getElementById("SecondButton");
  var y = document.getElementById("firstButton");
  var z = document.getElementById("thirdbutton");

   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";

  var g = document.getElementById("Uni_List");
  g.style.display = "block";
  var  backB = document.getElementById("backButton");
   backB.style.display = "block";

  // var  backB = document.getElementById("backButton");
  // backB.style.display = "block";
  

   let text =  document.querySelector('.mdc-top-app-bar__title');
  text.innerText = "Age Predictor";
  document.querySelector(".search button").addEventListener("click", function () {
    var val = document.querySelector(".search-bar").value;
    console.log(val);
    let url = "https://api.agify.io?name="+val;
    console.log(url);
    
    fetch(url).then((response) => {
      console.log("im here");
       if(!response.ok) {
         console.log(error);
       }
       return response.json();
    }).then((data) => {
        console.log(data.age);
       document.getElementById("Name").style.fontSize = "1.17em";
      document.getElementById("Name").innerText = "Name: " +data.name;
       document.getElementById("Age").innerText = "Age: " +data.age;

       document.getElementById("Count").innerText = "Days Count: " +data.count;
         
    });
    
});



});
// hi




let map  = document.querySelector('.second-button')

map.addEventListener("click", () => {

    let text1 =  document.querySelector('.mdc-top-app-bar__title');
  text1.innerText = "Traffic Heat";
  
  var back = document.getElementById("map");
  back.style.display = "block";

  var back = document.getElementById("backButton");
  back.style.display = "block";

  
   var x = document.getElementById("SecondButton");
   var y = document.getElementById("firstButton");
   var z = document.getElementById("thirdbutton");

   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";




     let text =  document.querySelector('.mdc-top-app-bar__title');
  text.innerText = "Traffic Heat";

  
  

  

     const traffic = new AerisWeather('vuPFWjlOiL3c5k7xJPe7w', 'XXbp590VAwOV2TvGieX3X4pCkjf7CX2Dx1VFn0MN');
        const val = traffic.utils;

        traffic.views().then(views => {
            const map = new views.InteractiveMap(document.getElementById('map'), {
                center: {
                    lat: 34.04924594193164,
                    lon: -118.24104309082031
                },
                zoom: 4,
                strategy: 'google',
                accessToken: 'AIzaSyD99B_ZRHPEcCbCUCdeRMYnAimmN5r69Lo',
                layers: 'traffic,alerts',
                timeline: {
                    from: -6 * 3600,
                    to: 0
                }
            });
        });


});








// hi



//hello
let btn3 = document.querySelector('.mdc_button3');




btn3.addEventListener("click", () => {
  var x = document.getElementById("SecondButton");
  var y = document.getElementById("firstButton");
  var z = document.getElementById("thirdbutton");

   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";

   let text =  document.querySelector('.mdc-top-app-bar__title');
  text.innerText = "Comedy For Fun!";

 

  
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";



   var g = document.getElementById("ComedyMovies");
    g.style.display = "block";

  document.getElementById("chart_div").style.height = "1000px";






  
var back = document.getElementById("backButton");
back.style.display = "block";

document.getElementById("chart_div2").style.height = "800px";
google.charts.setOnLoadCallback(drawchart2);
});




//hello

var  backB = document.getElementById("backButton");

backB.addEventListener("click", () => {

 


var uni = document.getElementById("Uni_List");
uni.style.display = "none";

var back = document.getElementById("backButton");
back.style.display = "none";


var x = document.getElementById("SecondButton");
var y = document.getElementById("firstButton");
var z = document.getElementById("thirdbutton");

x.style.display = "block";
y.style.display = "block";
z.style.display = "block";

document.body.style.backgroundColor = "white"; 
  
});