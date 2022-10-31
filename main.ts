input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 0)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, 0)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(0, index)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(200)
    }
})
