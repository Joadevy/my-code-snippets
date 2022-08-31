export default Array.prototype.sameStructureAs = function (other) {
    // First case: compare the length of both.
      if (this.length !== other.length) {
        return false;
      }
    
    // Then checks the elements inside
      for (const element in this) {
        // If the two elements are arrays then use recursion to check the inner structure.
        if (Array.isArray(this[element]) && Array.isArray(other[element])) {
            if (!this[element].sameStructureAs(other[element])) return false
        } 
        // Checks if the two elements have different structure: arrays or something else 
        else if (!Array.isArray(this[element]) && Array.isArray(other[element])) return false;
        else if (Array.isArray(this[element]) && !Array.isArray(other[element])) return false;
      }
      return true
  };

