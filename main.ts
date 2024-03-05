radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    radio.setGroup(1)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(1)
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(2)
    }
})
