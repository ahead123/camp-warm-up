function WarmUp() {};

/*
 * bumpVersion
 * Adds 1 to the given version
 *
 * Input:
 *   version: The version that needs to be bumped
 *
 * Return:
 *   The given version incremented by 1
 *
 */

WarmUp.prototype.bumpVersion = function(version) {
  /* Implement Me! */
  version += 1
  return version
};


/*
 * stringLength
 * Returns the number of characters in the given string.
 *
 * Input:
 *   text: The string being measured
 *
 * Return:
 *   The length of the string
 *
 */
WarmUp.prototype.stringLength = function(text) {
  /* Implement Me! */
  	return length = text.length

};


/*
 * currentDate
 * returns a new Date object
 *
 * Return:
 *   new Date()
 *
 */
WarmUp.prototype.currentDate = function() {
  /* Implement Me! */
  return new Date()
};

module.exports = WarmUp;
