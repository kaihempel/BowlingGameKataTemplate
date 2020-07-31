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

        // First frame
        game.addRoll(5);
        game.addRoll(5); // Spare

        // Second frame
        game.addRoll(3);
        game.addRoll(0);

        rollMany(16, 0);

        expect(game.totalScore()).toBe(16);
    });

    it('should roll a strike', function() {

        // Frist frame
        game.addRoll(10); // Strike: no further rolls in this frame

        // Second frame
        game.addRoll(3);
        game.addRoll(3);

        rollMany(16, 0);

        expect(game.totalScore()).toBe(22);
    });

    it('Should roll a max game', function () {

        rollMany(10, 10);

        expect()
    });
});
