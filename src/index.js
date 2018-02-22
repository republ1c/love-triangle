/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [ ]) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] !== 0) {
      let znachA = preferences[i];
      let znachB = preferences[znachA-1];
      if (znachA !== znachB) {
        let znachC = preferences[znachB-1];
        if (znachC === preferences.indexOf(znachA)+1) {
          count++;
          preferences[preferences.splice(znachA-1,1,0)];
          preferences[preferences.splice(znachB-1,1,0)];
          preferences[preferences.splice(znachC-1,1,0)];
        }
      }
    }
  }
return count;
};
