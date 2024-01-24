enum RadioMessage {
    message1 = 49434
}
function callProcessingSystem () {
    basic.showString("Alert has been sent to your teacher.")
    radio.sendString(clientname)
    music.setVolume(255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
    savedNumber += 1
    datalogger.log(datalogger.createCV(clientname, savedNumber))
    LEDStrip.showColor(neopixel.colors(NeoPixelColors.Red))
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    LEDStrip.showColor(neopixel.colors(NeoPixelColors.White))
    music.stopAllSounds()
})
let LEDStrip: neopixel.Strip = null
let savedNumber = 0
let clientname = ""
clientname = "user_3019011"
savedNumber = 0
LEDStrip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
radio.setGroup(173)
LEDStrip.showColor(neopixel.colors(NeoPixelColors.White))
basic.forever(function () {
    if (input.soundLevel() == 255) {
        callProcessingSystem()
    }
})
