class Madlib {
  _story = "";
  getStory() {
    return this._story;
  }
  setStory(value) {
    this._story = `Once upon a time, in a ${this._adj} kingdom, there lived a brave ${this._noun} who was known for their ${this._adv} skills. 
They were admired by all for their ${this._adj} heart and ${this._noun} spirit. One day, a second ${this._noun} appeared in the kingdom, 
causing chaos and ${this._adv}, spreading fear among the people. Our brave ${this._noun} knew they had to take action and ${this._verb} the ${this._noun} to restore peace and harmony.
With their ${this._adj} determination and ${this._adv} quick thinking, they embarked on a thrilling adventure, facing numerous challenges along the way.
Finally, after a ${this._adj} battle, the brave ${this._noun} emerged victorious, saving the kingdom and becoming a ${this._adj} legend in the process.`;
  }

  _savedStories = [];
  getSavedStories() {
    return this._savedStories;
  }
  setSavedStories(value) {
    this._savedStories.push(value);
  }

  _adj = "";
  getAdj() {
    return this._adj;
  }
  setAdj(value) {
    this._adj = value;
  }

  _noun = "";
  getNoun() {
    return this._noun;
  }
  setNoun(value) {
    this._noun = value;
  }

  _adv = "";
  getAdv() {
    return this._adv;
  }
  setAdv(value) {
    this._adv = value;
  }

  _verb = "";
  getVerb() {
    return this._verb;
  }
  setVerb(value) {
    this._verb = value;
  }

  constructor() {
    console.log("you init the class! lucky you");
  }
}

module.exports = Madlib;
