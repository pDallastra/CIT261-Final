function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
var china1 = JSON.parse(localStorage.china1);
var china2 = JSON.parse(localStorage.china2);
var italy1 = JSON.parse(localStorage.italy1);
var italy2 = JSON.parse(localStorage.italy2);
var usa1 = JSON.parse(localStorage.usa1);
var usa2 = JSON.parse(localStorage.usa2);
var br1 = JSON.parse(localStorage.br1);
var br2 = JSON.parse(localStorage.br2);

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Active Cases", "Critical Cases", "New Cases"],
        datasets: [{
            label: 'China',
            data: [china1.active, china1.critical, china1.novo],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Total Cases", "Recovered Cases", "Deaths"],
        datasets: [{
            label: 'China 2',
            data: [china2.total, china2.recovered, china2.deaths],
            backgroundColor: [
                'rgb(182, 11, 48)',
                'rgb(5, 48, 77)',
                'rgba(161, 118, 7, 0.87)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Active Cases", "Critical Cases", "New Cases"],
        datasets: [{
            label: 'Italy',
            data: [italy1.active, italy1.critical, italy1.novo],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx4 = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["Total Cases", "Recovered Cases", "Deaths"],
        datasets: [{
            label: 'Italy 2',
            data: [italy2.total, italy2.recovered, italy2.deaths],
            backgroundColor: [
                'rgb(182, 11, 48)',
                'rgb(5, 48, 77)',
                'rgba(161, 118, 7, 0.87)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx5 = document.getElementById("myChart5").getContext('2d');
var myChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ["Active Cases", "Critical Cases", "New Cases"],
        datasets: [{
            label: 'USA',
            data: [usa1.active, usa1.critical, usa1.novo],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx6 = document.getElementById("myChart6").getContext('2d');
var myChart = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ["Total Cases", "Recovered Cases", "Deaths"],
        datasets: [{
            label: 'USA 2',
            data: [usa2.total, usa2.recovered, usa2.deaths],
            backgroundColor: [
                'rgb(182, 11, 48)',
                'rgb(5, 48, 77)',
                'rgba(161, 118, 7, 0.87)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx7 = document.getElementById("myChart7").getContext('2d');
var myChart = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ["Active Cases", "Critical Cases", "New Cases"],
        datasets: [{
            label: 'Brazil',
            data: [br1.active, br1.critical, br1.novo],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx8 = document.getElementById("myChart8").getContext('2d');
var myChart = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ["Total Cases", "Recovered Cases", "Deaths"],
        datasets: [{
            label: 'Brazil 2',
            data: [br2.total, br2.recovered, br2.deaths],
            backgroundColor: [
                'rgb(182, 11, 48)',
                'rgb(5, 48, 77)',
                'rgba(161, 118, 7, 0.87)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});