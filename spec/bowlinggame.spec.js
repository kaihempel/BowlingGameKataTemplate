describe("Bowling Game Kata", function() {
    var game;

    var rollMany = function(number, pins) {
        for (let i = 0; i < number; i++) {
            game.addRoll(pins);
        }
    };

    beforeEach(function() {
        game = new Game();
    });

    it('should roll a gutter game', function () {

        rollMany(20, 0);

        expect(game.totalScore()).toBe(0);
    });

    it('should roll only ones', function () {

        rollMany(20, 1);

        expect(game.totalScore()).toBe(20);
    });

    it('should roll a spare', function () {

        game.addRoll(5);
        game.addRoll(5); // Spare
        game.addRoll(3);

        rollMany(17, 0);

        expect(game.totalScore()).toBe(16);
    });
});
