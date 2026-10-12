input.onButtonPressed(Button.A, function () {
    play()
})
function Feed () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    energy += 10
    happiness += 5
}
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . # .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    happiness += 5
    energy += -5
})
function play () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    energy += -10
    happiness += 10
}
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        # # # . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    _default()
})
// When there is any loud sounds, the pet whimpers and happiness decreases.
input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    happiness += -5
})
// Shows the stats of the pet. Energy comes first then happiness. Originally this was to debug if the stat decay was working however even after it worked, I kept it because it was a useful tool for users to view as it allows them to know what stat to increase in order for the pet to live. A+B also works as a reset button when the pet dies for some reason.
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("ENERGY")
    basic.showString("" + (energy))
    basic.showString("HAPPINESS")
    basic.showString("" + (happiness))
})
input.onButtonPressed(Button.B, function () {
    Feed()
})
function _default () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
}
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # .
        . . # # #
        . . . . .
        `)
})
// Petting animation. Looks bad because of the microbit's limited LEDs. Increases happiness.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    happiness += 5
})
// On start, I have set the stats to 50. The reason I did that is because the stat decay wouldn't take too long to kill the pet, punishing people who aren't doing anything to their pets in a quick way. + 50 is a smaller number, it is easier to view when your looking at the stats on the microbit (A+B).
let happiness = 0
let energy = 0
basic.pause(100)
energy = 50
happiness = 50
_default()
// Randomly does a pooping animation from 0-10 minutes, decreases happiness.
basic.forever(function () {
    basic.pause(randint(0, 600000))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        # # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        # # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . # . # .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    happiness += -10
    basic.pause(1000)
})
// This block of code states that if any of the stats (energy and happiness) is below or equal to 0, the pet will die and its game over. In the else statement it states if the pet isn't dead, then it should lose -1 energy and happiness every 3 seconds, this is called a stat decay; we have this feature to punish people who do not take care of their pets.
basic.forever(function () {
    if (energy <= 0 || happiness <= 0) {
        basic.clearScreen()
        game.gameOver()
    } else {
        basic.pause(3000)
        energy += -1
        happiness += -1
    }
})
// This is how the pet sleeps. When you press pin 0 the pet will sleep for 10 seconds, get reenergized and wake up. Originally the pet was going to sleep using the light sensor however, due to weird light readings in my house (thought the light level was 0), I had to make it a button instead.
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . # # # #
            `)
        energy += 10
    }
})
// This block of code is a stat cap. Basically if it detects that energy or happiness is greater than 50, it sets it 50. The game has a stat cap feature in order for balancing (preventing the user to get like 1000 hunger and happiness, then do nothing).
basic.forever(function () {
    if (energy > 50) {
        energy = 50
    }
    if (happiness > 50) {
        happiness = 50
    }
})
