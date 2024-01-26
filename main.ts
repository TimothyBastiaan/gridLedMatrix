let strip = neopixel.create(DigitalPin.P8, 160, NeoPixelMode.RGB)
strip.setMatrixWidth(8)
basic.forever(function () {
    grid.LedMatrixWS2812b(`
        # # . . # # . # # # # # # . # # # # # #
        # # . . # # . # # # # # # . # # # # # #
        # # . . # # . # # . . # # . . . # # . .
        # # # # # # . # # . . # # . . . # # . .
        # # # # # # . # # . . # # . . . # # . .
        # # . . # # . # # . . # # . . . # # . .
        # # . . # # . # # # # # # . . . # # . .
        # # . . # # . # # # # # # . . . # # . .
        `, strip, NeoPixelColors.Red)
    grid.LedMatrixWS2812b(`
        # # . . # # . # # # # # # . # # # # # #
        # # . . # # . # # # # # # . # # # # # #
        # # . . # # . # # . . # # . . . # # . .
        # # # # # # . # # . . # # . . . # # . .
        # # # # # # . # # . . # # . . . # # . .
        # # . . # # . # # . . # # . . . # # . .
        # # . . # # . # # # # # # . . . # # . .
        # # . . # # . # # # # # # . . . # # . .
        `, strip, NeoPixelColors.Red)
})
