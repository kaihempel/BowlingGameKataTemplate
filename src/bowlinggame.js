/**
 * Game Definition
 *
 * @constructor
 */
function Game() {
    this.frames = [];
    this.currentRoll = 0;
}

Game.prototype.addRoll = function(pins) {

    this.frames[this.currentRoll] = pins;
    this.currentRoll++;
};

Game.prototype.frames = function() {

};

Game.prototype.totalScore = function() {
    let score = 0;
    let index = 0;

    for (let i = 0; i < 10; i++) {

        // Spare
        if ((this.frames[index] + this.frames[index + 1]) === 10) {
            score += 10 + this.frames[index + 2];

        } else {
            score += this.frames[index] + this.frames[index + 1];
        }

        index += 2;
    }

    return score;
};

Game.prototype.isSpare = function() {
    // Move spare
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

