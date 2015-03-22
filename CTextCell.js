function CTextCell(text) {
  TextCell.call(this, text);
}
CTextCell.prototype = Object.create(TextCell.prototype);
CTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    var center = (width - line.length)/2;
	if (line.length %2 != 0) {
		var space = center - 1;
	}
	else {
		var space = center;
	}
    result.push(repeat(" ", (center)) + line + repeat(" ", (space)));

  }

  return result;
};

