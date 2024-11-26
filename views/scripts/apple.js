class Apple {
    constructor() {
        let randPixelIndex = getRandomPixelIndex([pixelsGridView.length / 2]);
        this.x = pixelsGridView[randPixelIndex].cords[0];
        this.y = pixelsGridView[randPixelIndex].cords[1];
    }
    newRandSpot(tail) {
        let randPixelIndex = getRandomPixelIndex(tail.map(([x, y]) =>
            pixelsGridView.findIndex(pb => pb.cords[0] == x && pb.cords[1] == y)
        ));
        this.x = pixelsGridView[randPixelIndex].cords[0];
        this.y = pixelsGridView[randPixelIndex].cords[1];
    }
    update() {
        changePixelColor(
            pixelsGridView.findIndex(
                pb => pb.cords[0] == this.x && pb.cords[1] == this.y
            ),
            COLORS.APPLE
        );
    }
}