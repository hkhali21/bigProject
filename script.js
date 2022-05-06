


let btn = document.querySelector('.mdc-button');



btn.addEventListener("click", () => {
  console.log("hello");
  var x = document.getElementById("SecondButton");
  var y = document.getElementById("firstButton");
  var z = document.getElementById("thirdbutton");
    var w = document.getElementById("quote");
   var v = document.getElementById("gify");
  
   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";
   w.style.display = "none";
  v.style.display = "none";

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
    var w = document.getElementById("quote");
   var v = document.getElementById("gify");
  
   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";
   w.style.display = "none";
  v.style.display = "none";




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
    var w = document.getElementById("quote");
   var v = document.getElementById("gify");
  
   x.style.display = "none";
   y.style.display = "none";
   z.style.display = "none";
   w.style.display = "none";
  v.style.display = "none";

   let text =  document.querySelector('.mdc-top-app-bar__title');
  text.innerText = "Comedy For Fun!";

   var  backB = document.getElementById("backButton");
   backB.style.display = "block";

  
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";



   var g = document.getElementById("ComedyMovies");
    g.style.display = "block";

  document.getElementById("chart_div").style.height = "1000px";

const ctx = document.getElementById("mychart").getContext("2d");
let delayed;
  let delayed1;
// gradient
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,213,1)");
  gradient.addColorStop(1, "rgba(0,210,255,0.3)");



  const ctx1 = document.getElementById("mychart1").getContext("2d");
let gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, "rgba(230, 0, 0, 0.2)");
  gradient1.addColorStop(1, "rgba(213, 15, 61, 0.6)");



  
  const labels = [
    "Will Ferrell",
    "Adam Sandler",
    "Eddie Murphy",
    "Jim Carrey",
  "Ben Stiller",
  "Steve Martin",
   "Robert De Niro",
  "Dustin Hoffman",
"Vince Vaughn",
"Owen Wilson",	
"Together Together",
"Honsla Rakh",
"Scott Pilgrim vs. The World",
"Un rescate de huevitos",
"French Exit",
"Ghostbusters",
"Jathi Ratnalu",
"Bo Gia",
"Blithe Spirit",
"I’m Your Man",
"Délicieux",
"Once I Was Engaged",
"Half Brothers",
"Together",
"Shiva Baby",
"Walking with Herb",	
"Tango Shalom",
"Christmas Vs The Walters",
"The Nowhere Inn",
"Last Call",
"Senior Moment",
"Mainstream",
"La daronne",
"France",
"Our Ladies",
"The Ladykillers",
"Mandibules",
"How It Ends",
"First Date",
"Best Sellers",
"Secret Agent",
"The Incredible", 
"Zombie Bro",
"El Planeta",
"Here After",
"Rock Paper Scissors",
"Deux",
"Project Space",
"Opération Portugal",
"Elbow Grease",
"Killer" 	
  ];

  
  const labels1 = [
  "Owen Wilson",
     "Jim Carrey",
    "Adam Sandler",
     "Robert De Niro",
      "Will Ferrell",
      "Dustin Hoffman",
    "Eddie Murphy",
  "Ben Stiller",
    "Vince Vaughn",
  "Steve Martin"
  ];

  
  const data = {
   labels: labels,
    datasets: [
      {
      data:[1, 2, 3, 4,5,6,7,8,9,10,
           11,12,13,14,15,16,17,18,19,20,
           21,22,23,24,25,26,27,28,29,30,
           31,32,33,34,35,36,37,38,39,40,
           41,42,43,44,45,46,47,48,49,50],
      label: "Comedy Movies Ranking 2021",
      fill: true,
      backgroundColor: gradient,
      borderColor: '#fff',
        pointBackgroundColor: "rgb(189,195,199)",
        tension: 0.4,
      }
    ],
  };

  

    const data2 = {
   labels: labels1,
    datasets: [
      {
       data:[10, 4, 2, 7, 1, 8,, 3, 5, 9,6],
      label: "Comedy Actors Ranking 2021",
      fill: true,
      backgroundColor: gradient1,
      borderColor: '#fff',
        pointBackgroundColor: "rgb(189,195,199)",
        tension: 0.4,
      }
    ],
  };

const config = {
  type: 'line',
  data: data,
  options: {
    radius: 5,
    hitRadius: 30,
    hoverRadius: 12,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 100 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  },
};


const config1 = {
  type: 'bar',
  data: data2,
  options: {
    radius: 5,
    hitRadius: 30,
    hoverRadius: 12,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed1 = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed1) {
          delay = context.dataIndex * 500 + context.datasetIndex * 500;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  },
};


const myChart1 = new Chart(ctx1, config1);
const myChart = new Chart(ctx, config); 
var back = document.getElementById("backButton");
back.style.display = "block";


});




//hello

var  backB = document.getElementById("backButton");

backB.addEventListener("click", () => {

 


var uni = document.getElementById("Uni_List");
uni.style.display = "none";

  var comdyMov = document.getElementById("ComedyMovies");
comdyMov.style.display = "none";

   var back = document.getElementById("map");
  back.style.display = "none";

var back = document.getElementById("backButton");
back.style.display = "none";



var x = document.getElementById("SecondButton");
var y = document.getElementById("firstButton");
var z = document.getElementById("thirdbutton");
var w = document.getElementById("quote");

  var v = document.getElementById("gify");

v.style.display = "block";
w.style.display = "block";
x.style.display = "block";
y.style.display = "block";
z.style.display = "block";
  
  let text1 =  document.querySelector('.mdc-top-app-bar__title');
  text1.innerText = "🔥 Fun Point 🔥";
  
document.body.style.backgroundColor = "white"; 
  
});