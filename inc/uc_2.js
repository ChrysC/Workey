var jsonList = '{"schedules":[{"date":"2014-08-04","schArr":[{"name":"Terrence Epperson","id":"tepperson","schedule":"oooooooooooooooooooooooooooooooooooooooooooooooo"},{"name":"Chrys Collier","id":"chrcollier","schedule":"ooooooooooooooooccccccccccllccccoooooooooooooooo"},{"name":"JR Hayth","id":"jhayth","schedule":"ooooooooooooooooppppppppllppppppoooooooooooooooo"},{"name":"Sarah Zmina","id":"szmina","schedule":"ooooooooooooooooooooooooppccccccbcllccccoooooooo"},{"name":"Eric Engle","id":"eengle","schedule":"ooooooooooooooooooooooooooooooooccccccppllcccccc"},{"name":"Charles Pryor","id":"cpryor","schedule":"oooooooooooooooooooooooooooooooooooooooooooooooo"},{"name":"Arthur Carter","id":"acarter","schedule":"ooooooooooooooooooooooooooooooooccccccppccllcccc"},{"name":"Rhetlen Fenimore","id":"rfenimore","schedule":"ooooooooooooooooooooooooooooooooppppppllpppppppp"}]},{"date":"2014-08-05","schArr":[{"name":"Terrence Epperson","id":"tepperson","schedule":"bbbbbbbbbbllbbbboooooooooooooooooooooooooooooooo"},{"name":"Chrys Collier","id":"chrcollier","schedule":"ooooooooooooooooccccccccccllccccoooooooooooooooo"},{"name":"JR Hayth","id":"jhayth","schedule":"ooooooooooooooooppppppppllppppppoooooooooooooooo"},{"name":"Sarah Zmina","id":"szmina","schedule":"ooooooooooooooooooooooooppccccccbpllppppoooooooo"},{"name":"Eric Engle","id":"eengle","schedule":"oooooooooooooooooooooooooooooooobbbbbbbbbbllbbbb"},{"name":"Charles Pryor","id":"cpryor","schedule":"ooooooooooooooooooooooooooooooooccccccllcccccccc"},{"name":"Arthur Carter","id":"acarter","schedule":"ooooooooooooooooooooooooooooooooppppppppllpppppp"},{"name":"Rhetlen Fenimore","id":"rfenimore","schedule":"ooooooooooooooooooooooooooooooooccccccccppllcccc"}]}]}';
var jsonObj = JSON.parse(jsonList);
var selDate = '2014-08-04';
var dateExists = false;

for (var i = 0; i < jsonObj.schedules.length; i++) {
  var schedule = jsonObj.schedules[i];

  if(schedule.date === "2014-08-06"){
    hasMatch = true;
    break;
  }
}
if (hasMatch === false) {alert('Value doesn\'t exist.');}