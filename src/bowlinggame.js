/**
 * Game Definition
 *
 * @constructor
 */
function Game() {
    this.frames = [];
    this.currentFrame = 0;
}

Game.prototype.addRoll = function(pins) {

    if (typeof this.frames[this.currentFrame] === 'undefined') {
        this.frames[this.currentFrame] = new Frame();
    }

    this.frames[this.currentFrame].addRoll(pins);

    if (this.frames[this.currentFrame].isFinished()) {
        this.currentFrame++;
    }
};

Game.prototype.frames = function() {

};

Game.prototype.totalScore = function() {
    let score = 0;

    for (let i = 0; i < 10; i++) {

        // Strike
        if (this.frames[i].isStrike()) {
            score += 10 + this.frames[i + 1].score;
        }
        // Spare
        else if (this.frames[i].isSpare()) {
            score += 10 + this.frames[i + 1].pinsRolled[0];
        }
        else {
            score += this.frames[i].score;
        }
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
    this.pinsRolled = [];
    this.score = 0;
}

Frame.prototype.addRoll = function (pins) {
    this.pinsRolled.push(pins);
    this.score += pins;
};

Frame.prototype.isSpare = function () {
    return (this.pinsRolled.length === 2 && this.score === 10);
};

Frame.prototype.isStrike = function () {
    return (this.pinsRolled.length === 1 && this.score === 10);
};

Frame.prototype.isFinished = function () {
    return (this.score === 10 || this.pinsRolled.length === 2);
};

