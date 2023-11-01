class Madlib {
  _story = "";
  get getStory() {
    return this._story;
  }
  setStory() {
    this._story = `Once upon a time, in a ${this._adj} kingdom, there lived a brave ${this._noun} who was known for their ${this._adv} skills. 
They were admired by all for their ${this._adj} heart and ${this._noun} spirit. One day, a second ${this._noun} appeared in the kingdom, 
causing chaos and ${this._adv}, spreading fear among the people. Our brave ${this._noun} knew they had to take action and ${this._verb} the ${this._noun} to restore peace and harmony.
With their ${this._adj} determination and ${this._adv} quick thinking, they embarked on a thrilling adventure, facing numerous challenges along the way.
Finally, after a ${this._adj} battle, the brave ${this._noun} emerged victorious, saving the kingdom and becoming a ${this._adj} legend in the process.`;
  }

  _savedStories = {};
  get getSavedStories() {
    return this._savedStories;
  }
  set setSavedStories(value) {
    let newNameKey = `Story${Object.keys(this._savedStories).length + 1}`;
    this._savedStories[newNameKey] = value;
  }

  _adj = "";
  get getAdj() {
    return this._adj;
  }
  set setAdj(value) {
    this._adj = value;
  }

  _noun = "";
  get getNoun() {
    return this._noun;
  }
  set setNoun(value) {
    this._noun = value;
  }

  _adv = "";
  get getAdv() {
    return this._adv;
  }
  set setAdv(value) {
    this._adv = value;
  }

  _verb = "";
  get getVerb() {
    return this._verb;
  }
  set setVerb(value) {
    this._verb = value;
  }
}

module.exports = Madlib;
