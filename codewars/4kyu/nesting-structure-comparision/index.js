export default Array.prototype.sameStructureAs = function (other) {
    // First case: compare the length of both.
      if (this.length !== other.length) {
        return false;
      }
    
    // Then checks the elements into
      for (const element in this) {
        if (Array.isArray(this[element]) && Array.isArray(other[element])) {
            if (!this[element].sameStructureAs(other[element])) return false
          } 
        else if (!Array.isArray(this[element]) && Array.isArray(other[element])) return false;
        else if (Array.isArray(this[element]) && !Array.isArray(other[element])) return false;
      }
      return true
  };
