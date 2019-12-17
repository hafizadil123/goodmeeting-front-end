function g_meeting(){
    $('#doughnut1').remove();
    $('.doughnut1').append('<canvas height="180" id="doughnut1"><canvas>');

    $('#howmeet2').remove();
    $('.howmeet2').append('<canvas height="200" id="howmeet2"><canvas>');

    $('#doughnut2').remove();
    $('.doughnut2').append('<canvas height="155" id="doughnut2"><canvas>');

    $('#howmeet4').remove();
    $('.howmeet4').append('<canvas height="200" id="howmeet4"><canvas>');

}
function ng_meeting(){
    $('#doughnut3').remove();
    $('.doughnut3').append('<canvas height="155" id="doughnut3"><canvas>');

    $('#howmeet3').remove();
    $('.howmeet3').append('<canvas height="200" id="howmeet3"><canvas>');

    $('#doughnut4').remove();
    $('.doughnut4').append('<canvas height="180" id="doughnut4"><canvas>');

    $('#howmeet5').remove();
    $('.howmeet5').append('<canvas height="200" id="howmeet5"><canvas>');

}


$(document).ready(function(){
Chart.defaults.global.defaultFontFamily = "'Biryani', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('howmeet1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['Not a Good Meeting', 'No Response', 'Good Meeting'],
        datasets: [{
        
            label: ['Not a Good Meeting - 7 (10%)','sad','asd'],
            data: [10, 10,20],
            backgroundColor: [
            '#F55B4F',
            '#AFC4D5',
            '#0D4EE0'
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false        }
    }
    
});
document.getElementById('js-legend').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
//console.log(this,e.view.myChart,);
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        //var meta = ci.getDatasetMeta(index);
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
       /*if (meta.dataset) {
            meta.hidden = !meta.hidden;
       } else {
            meta.data[index].hidden = !meta.data[index].hidden;
        }*/

        // We hid a dataset ... rerender the chart
        ci.update();
})

});

$( document ).ready(function() {

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

e.target // newly activated tab
Chart.defaults.global.defaultFontFamily = "'Biryani', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";  



var ctx = document.getElementById('doughnut2').getContext('2d');
var blue_gradient = ctx.createLinearGradient(0, 0, 0, 150);
blue_gradient.addColorStop(0, '#0D4EE0');
blue_gradient.addColorStop(1, '#0DB7E0');

var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['There was no preparation', 'There was very little preparation','There was some preparation','There was good preparation','The preparation was fantastic'],
        datasets: [{
        
            label: ['There was no preparation','There was very little preparation','There was some preparation','There was good preparation','The preparation was fantastic'],
            data: [10, 30,20,15,10],
            backgroundColor: [
            '#F55B4F',
            blue_gradient
            
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false        
        }
    }
    
});
document.getElementById('js-legend3').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
      
        ci.update();
})

document.getElementById('js-legend4').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
      
        ci.update();
})

var ctx = document.getElementById('doughnut3').getContext('2d');
var black_gradient = ctx.createLinearGradient(0, 0, 0, 150);
black_gradient.addColorStop(0, '#2F343E');
black_gradient.addColorStop(1, '#868C98');

var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['There was no preparation', 'There was very little preparation','There was some preparation','There was good preparation','The preparation was fantastic'],
        datasets: [{
        
            label: ['There was no preparation', 'There was very little preparation','There was some preparation','There was good preparation','The preparation was fantastic'],
            data: [500, 50,10,20,15],
            backgroundColor: [
            '#F55B4F',
            black_gradient
            
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false        
        }
    }
    
});
document.getElementById('js-legend4').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
//console.log(this,e.view.myChart,);
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        //var meta = ci.getDatasetMeta(index);
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
       /*if (meta.dataset) {
            meta.hidden = !meta.hidden;
       } else {
            meta.data[index].hidden = !meta.data[index].hidden;
        }*/

        // We hid a dataset ... rerender the chart
        ci.update();
})

var ctx = document.getElementById('doughnut1').getContext('2d');
var blue_gradient = ctx.createLinearGradient(0, 0, 0, 150);
blue_gradient.addColorStop(0, '#0D4EE0');
blue_gradient.addColorStop(1, '#0DB7E0');

var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['Option 1', 'Option 2'],
        datasets: [{
        
            label: ['Option 1','Option 2'],
            data: [10, 30],
            backgroundColor: [
            '#F55B4F',
            blue_gradient
            
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false        }
    }
    
});
document.getElementById('js-legend2').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
//console.log(this,e.view.myChart,);
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        //var meta = ci.getDatasetMeta(index);
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
       /*if (meta.dataset) {
            meta.hidden = !meta.hidden;
       } else {
            meta.data[index].hidden = !meta.data[index].hidden;
        }*/

        // We hid a dataset ... rerender the chart
        ci.update();
});

var ctx = document.getElementById('doughnut4').getContext('2d');
var black_gradient = ctx.createLinearGradient(0, 0, 0, 150);
black_gradient.addColorStop(0, '#2F343E');
black_gradient.addColorStop(1, '#868C98');

var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {

        labels: ['Option 1', 'Option 2'],
        datasets: [{
        
            label: ['Option 1','Option 2'],
            data: [10, 30],
            backgroundColor: [
            '#F55B4F',
            black_gradient
            
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false        
        }
    }
    
});
document.getElementById('js-legend5').innerHTML = myChart1.generateLegend();

$("#js-legend > ul > li").on("click",function(e){
//console.log(this,e.view.myChart,);
        var index = $(this).index();
        $(this).toggleClass("strike")
        var ci = e.view.myChart1;
        console.log(index)
        //var meta = ci.getDatasetMeta(index);
        console.log();
        var curr = ci.data.datasets[0]._meta[0].data[index];
        
        curr.hidden = !curr.hidden
       /*if (meta.dataset) {
            meta.hidden = !meta.hidden;
       } else {
            meta.data[index].hidden = !meta.data[index].hidden;
        }*/

        // We hid a dataset ... rerender the chart
        ci.update();
})


var ctx = document.getElementById('howmeet2').getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 150);
purple_orange_gradient.addColorStop(0, '#F55B4F');
purple_orange_gradient.addColorStop(1, '#7B2E28');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'pink'],
        datasets: [{
        
            
            data: [12, 19, 3,8],
            backgroundColor: purple_orange_gradient,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 1'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    
                },
                gridLines: {
                display:false
            }
               
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 2'
                },
                barPercentage: 0.1,
                ticks: {
                    beginAtZero: true,
                    display: false,
                },
                gridLines: {
                display:false
            }
            }]
        }
    }
});

var ctx = document.getElementById('howmeet4').getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 150);
purple_orange_gradient.addColorStop(0, '#AFC4D5');
purple_orange_gradient.addColorStop(1, '#58626B');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'pink'],
        datasets: [{
        
            
            data: [12, 19, 3,8],
            backgroundColor: purple_orange_gradient,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 1'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    
                },
                gridLines: {
                display:false
            }
               
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 2'
                },
                barPercentage: 0.1,
                ticks: {
                    beginAtZero: true,
                    display: false,
                },
                gridLines: {
                display:false
            }
            }]
        }
    }
});

var ctx = document.getElementById('howmeet3').getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 150);
purple_orange_gradient.addColorStop(0, '#AFC4D5');
purple_orange_gradient.addColorStop(1, '#58626B');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'pink'],
        datasets: [{
        
            
            data: [12, 19, 3,8],
            backgroundColor: purple_orange_gradient,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 1'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    
                },
                gridLines: {
                display:false
            }
               
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 2'
                },
                barPercentage: 0.1,
                ticks: {
                    beginAtZero: true,
                    display: false,
                },
                gridLines: {
                display:false
            }
            }]
        }
    }
});

var ctx = document.getElementById('howmeet5').getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 150);
purple_orange_gradient.addColorStop(0, '#AFC4D5');
purple_orange_gradient.addColorStop(1, '#58626B');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'pink'],
        datasets: [{
        
            
            data: [12, 19, 3,8],
            backgroundColor: purple_orange_gradient,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 1'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    
                },
                gridLines: {
                display:false
            }
               
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Point 2'
                },
                barPercentage: 0.1,
                ticks: {
                    beginAtZero: true,
                    display: false,
                },
                gridLines: {
                display:false
            }
            }]
        }
    }
});


});
    
});

