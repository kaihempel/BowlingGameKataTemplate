describe('Frame class', function () {
    var frame;

    beforeEach(function () {
        frame = new Frame();
    });

    it('Should add a roll', function () {

        frame.addRoll(5);
        frame.addRoll(5);

        expect(frame.score).toBe(10);
    });

    it('should know if it was a spare game', function () {

        frame.addRoll(5);
        frame.addRoll(5);

        expect(frame.isSpare()).toBe(true);
    });

    it('Should know if it was a strike', function () {

        frame.addRoll(10);
        //frame.addRoll(1); // Error

        expect(frame.isStrike()).toBe(true);
        expect(frame.isSpare()).toBe(false);
    });

    it('Should know if the frame is finished', function () {

        frame.addRoll(4);

        expect(frame.isFinished()).toBe(false);

        frame.addRoll(0);

        expect(frame.isStrike()).toBe(false);
        expect(frame.isSpare()).toBe(false);
        expect(frame.isFinished()).toBe(true);

    });
});
