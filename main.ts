enum RadioMessage {
    message1 = 49434
}
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Alert has been sent to your teacher.")
    savedNumber += 1
    datalogger.log(datalogger.createCV(clientname, savedNumber))
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(20000)
    basic.clearScreen()
})
let strip: neopixel.Strip = null
let savedNumber = 0
let clientname = ""
clientname = "user_3019011"
savedNumber = 0
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
strip.showBarGraph(input.soundLevel(), 200)
