load('calcFuncs.js');
load('drawFuncs.js');
load('TextCell.js');
load('UnderlinedCell.js');
load('CTextCell.js');
load('RTextCell.js');
load('hangmhigh.js');
load('houses.js');
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
	var value = row[name];
	 if ((typeof value == "number"))
	 
        return new CTextCell(String(value));
	else 
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}

print(drawTable(dataTable(OUTLAWS)));
