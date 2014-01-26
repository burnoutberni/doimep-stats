var spreadsheetUrl = 'https://docs.google.com/spreadsheet/pub?key=0Ar3KSfz0LI8kdG5jdzhPNWowZFBjZzl3WjY5VGg3YkE&single=true&gid=0&output=csv';
var startRow = 3;
var columnNumbers = {
  'id': 0,
  'first_name': 1,
  'name': 2,
  'group' : 6,
  'decl_date': 7,
  'url': 9,
  'finished': 10,
  'blank': 15,
  'nothingToDeclare': 16,
  'cCat1': 40,
  'cCat2': 42,
  'cCat3': 44,
  'cCat4': 46,
  'cCat5': 48
};

var roundToFixed2 = function(value) {
  return (Math.round(value * 100)/100).toFixed(2);
};

var convertObjectToPlotArray = function(mepsPerVersionNumbers) {
  var plotArray = [];
  for (var key in mepsPerVersionNumbers) {
    if (mepsPerVersionNumbers.hasOwnProperty(key)) {
      plotArray.push([key, mepsPerVersionNumbers[key]])
    }
  }
  return plotArray;
};

var additionalSalary = function(documentsArray) {
  var catCsum = {"name":"Additional salaries","children":[]};

  var currentGroup = 0;
  for (var i = startRow; i < documentsArray.length; i++) {
   if ((documentsArray[i][columnNumbers['finished']] === 1 || documentsArray[i][columnNumbers['finished']] === '1')) {
    var k = 0;
    var found = false;
    for (; k < catCsum.children.length; k++) {
      if (catCsum.children[k].name === documentsArray[i][columnNumbers['group']]) {
        currentGroup = catCsum.children[k];
        found = true;
        break;
      }
    }

    if (found === false) {
      catCsum.children.push({"name":documentsArray[i][columnNumbers['group']],"children":[]});
      currentGroup = catCsum.children[catCsum.children.length-1];
    }

    if ((documentsArray[i][columnNumbers['finished']] === 1 ||
            documentsArray[i][columnNumbers['finished']] === '1')) {
      currentGroup.children.push({"name":documentsArray[i][columnNumbers['id']],"size":0});
      switch (parseInt(documentsArray[i][columnNumbers['cCat1']])) {
        case 1: currentGroup.children[currentGroup.children.length-1].size += 500; break;
        case 2: currentGroup.children[currentGroup.children.length-1].size += 1001; break;
        case 3: currentGroup.children[currentGroup.children.length-1].size += 5001; break;
        case 4: currentGroup.children[currentGroup.children.length-1].size += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat2']])) {
        case 1: currentGroup.children[currentGroup.children.length-1].size += 500; break;
        case 2: currentGroup.children[currentGroup.children.length-1].size += 1001; break;
        case 3: currentGroup.children[currentGroup.children.length-1].size += 5001; break;
        case 4: currentGroup.children[currentGroup.children.length-1].size += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat3']])) {
        case 1: currentGroup.children[currentGroup.children.length-1].size += 500; break;
        case 2: currentGroup.children[currentGroup.children.length-1].size += 1001; break;
        case 3: currentGroup.children[currentGroup.children.length-1].size += 5001; break;
        case 4: currentGroup.children[currentGroup.children.length-1].size += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat4']])) {
        case 1: currentGroup.children[currentGroup.children.length-1].size += 500; break;
        case 2: currentGroup.children[currentGroup.children.length-1].size += 1001; break;
        case 3: currentGroup.children[currentGroup.children.length-1].size += 5001; break;
        case 4: currentGroup.children[currentGroup.children.length-1].size += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat5']])) {
        case 1: currentGroup.children[currentGroup.children.length-1].size += 500; break;
        case 2: currentGroup.children[currentGroup.children.length-1].size += 1001; break;
        case 3: currentGroup.children[currentGroup.children.length-1].size += 5001; break;
        case 4: currentGroup.children[currentGroup.children.length-1].size += 10000; break;
	default: break;
      }
    }
   }
  }
  return catCsum;
};

var additionalSalaryMep = function(documentsArray, mepId) {
  var catCmep = {"id":mepId,"salary":0};

  for (var i = startRow; i < documentsArray.length; i++) {
   if ((documentsArray[i][columnNumbers['finished']] === 1 || documentsArray[i][columnNumbers['finished']] === '1') && documentsArray[i][columnNumbers['id']] === mepId) {
      catCmep.first_name = documentsArray[i][columnNumbers['first_name']];
      catCmep.name = documentsArray[i][columnNumbers['name']];
      catCmep.url = documentsArray[i][columnNumbers['url']];
      catCmep.group = documentsArray[i][columnNumbers['group']];
      catCmep.group = documentsArray[i][columnNumbers['group']];
      switch (parseInt(documentsArray[i][columnNumbers['cCat1']])) {
        case 1: catCmep.salary += 500; break;
        case 2: catCmep.salary += 1001; break;
        case 3: catCmep.salary += 5001; break;
        case 4: catCmep.salary += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat2']])) {
        case 1: catCmep.salary += 500; break;
        case 2: catCmep.salary += 1001; break;
        case 3: catCmep.salary += 5001; break;
        case 4: catCmep.salary += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat3']])) {
        case 1: catCmep.salary += 500; break;
        case 2: catCmep.salary += 1001; break;
        case 3: catCmep.salary += 5001; break;
        case 4: catCmep.salary += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat4']])) {
        case 1: catCmep.salary += 500; break;
        case 2: catCmep.salary += 1001; break;
        case 3: catCmep.salary += 5001; break;
        case 4: catCmep.salary += 10000; break;
	default: break;
      }
      switch (parseInt(documentsArray[i][columnNumbers['cCat5']])) {
        case 1: catCmep.salary += 500; break;
        case 2: catCmep.salary += 1001; break;
        case 3: catCmep.salary += 5001; break;
        case 4: catCmep.salary += 10000; break;
	default: break;
      }
   }
  }
  return catCmep;
};
