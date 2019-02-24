/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    let count = 0;
    for(let i = 0; i < preferences.length; i++) {
      const first = preferences[i]; 
      const second = preferences[first - 1]; 
      const third = preferences[second - 1]; 
  
      const conditionOne = third === i + 1; 
      const conditionTwo = first !== i + 1; 
  
      if (conditionOne && conditionTwo) {
        count++; 
      }
      
    }
  
    return count / 3; 
};
