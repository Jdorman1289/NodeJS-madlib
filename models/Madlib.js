class Madlib {
  _story = "";
  get getStory() {
    return this._story;
  }
  setStory() {
    let storyNumber = Math.floor(Math.random() * 3) + 1;

    switch (storyNumber) {
      case 1:
        this._story = `Once upon a time, in a ${this._adj} kingdom, there lived a brave ${this._noun} who was known for their ${this._adv} skills. 
        They were admired by all for their ${this._adj} heart and ${this._noun} spirit. One day, a wicked ${this._noun} appeared in the kingdom, 
        bringing mayhem and ${this._adv} chaos everywhere. Our brave ${this._noun} knew they must stop the evil ${this._noun} to save the kingdom.  
        With their ${this._adj} courage and ${this._adv} wit, they set off on a dangerous quest, overcoming many perils along the way. 
        Finally, after an epic ${this._adj} battle, the brave ${this._noun} prevailed, restoring peace to the land and becoming a beloved ${this._adj} hero.`;
        break;

      case 2:
        this._story = `In a ${this._adj} land, there lived a young ${this._noun} with big dreams of becoming a ${this._adj} champion. 
        They trained ${this._adv} hard each day to improve their skills. One day, a ${this._adj} tournament was announced to determine the greatest ${this._noun} in the kingdom. 
        Our determined ${this._noun} knew this was their chance to prove themselves. After many ${this._adj} battles, they defeated opponent after opponent with their ${this._adv} techniques. 
        In the final matchup, they triumphed over the reigning champion in a legendary duel that would be retold for generations. The crowd roared as the new ${this._adj} champion was crowned.`;
        break;

      case 3:
        this._story = `Long ago in a ${this._adj} land, there was a peaceful village of ${this._noun}s who lived happily together. 
        One dark day, a ${this._adj} monster threatened the village's safety. The villagers turned to their wisest ${this._noun} for help.  
        Using their ${this._adv} magic, the ${this._noun} lured the monster into a trap. After an epic ${this._adj} struggle, the ${this._noun} managed to banish the monster away forever.
        Thanks to the brave ${this._noun}'s actions, the village was saved, and they all celebrated their newfound ${this._adj} freedom.`;
        break;
    }
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
