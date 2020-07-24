/**
 * Game Definition
 *
 * @constructor
 */
function Game() {
    this.score = 0;
    this.rolls = [];
    this.currentRoll = 0;
}

Game.prototype.addRoll = function(pins) {
    //this.score += pins;

    this.rolls[this.currentRoll] = pins;
    this.currentRoll++;
};

Game.prototype.frames = function() {

};

Game.prototype.totalScore = function() {
    let score = 0;

    for (let i = 0; i < this.rolls.length; i++) {
        score += this.rolls[i];
    }

    return score;
};

Game.prototype.over = function() {

};

/**
 * Frame Definition
 *
 * @constructor
 */
function Frame() {
}

Frame.prototype.pinsRolled = [];
Frame.prototype.score = 0;

