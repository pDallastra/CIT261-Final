var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
        var data = JSON.parse(this.responseText);
        var China = data.response[0];
        var Italy = data.response[1];
        var BR = data.response[19];
        var USA = data.response[3];
        
        let Grafico = {
            saveLocal: function(obj){
                localStorage.setItem(`${obj.name}`, JSON.stringify(obj))
            }
        };

        let china1 = {
            name: 'china1',
            active: China.cases.active,
            critical: China.cases.critical,
            novo: China.cases.new
        }
        let china2 = {
            name: 'china2',
            total: China.cases.total,
            recovered: China.cases.recovered,
            deaths: China.deaths.total
        }
        let italy1 = {
            name: 'italy1',
            active: Italy.cases.active,
            critical: Italy.cases.critical,
            novo: Italy.cases.new
        }
        let italy2 = {
            name: 'italy2',
            total: Italy.cases.total,
            recovered: Italy.cases.recovered,
            deaths: Italy.deaths.total
        }
        let usa1 = {
            name: 'usa1',
            active: USA.cases.active,
            critical: USA.cases.critical,
            novo: USA.cases.new
        }
        let usa2 = {
            name: 'usa2',
            total: USA.cases.total,
            recovered: USA.cases.recovered,
            deaths: USA.deaths.total
        }
        let br1 = {
            name: 'br1',
            active: BR.cases.active,
            critical: BR.cases.critical,
            novo: BR.cases.new
        }
        let br2 = {
            name: 'br2',
            total: BR.cases.total,
            recovered: BR.cases.recovered,
            deaths: BR.deaths.total
        }

        let saveChina1 = Object.create(Grafico).saveLocal(china1);
        let saveChina2 = Object.create(Grafico).saveLocal(china2);
        let saveItaly1 = Object.create(Grafico).saveLocal(italy1);
        let saveItaly2 = Object.create(Grafico).saveLocal(italy2);
        let saveUSA1 = Object.create(Grafico).saveLocal(usa1);
        let saveUSA2 = Object.create(Grafico).saveLocal(usa2);
        let saveBR1 = Object.create(Grafico).saveLocal(br1);
        let saveBR2 = Object.create(Grafico).saveLocal(br2);

        }
    });

xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics");
xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "724e1901a5mshdd731b38d81adeep13b42djsneb82489803b3");

xhr.send(data);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }