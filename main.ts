function groen () {
    basic.showIcon(IconNames.Heart)
}
function geel () {
    basic.showIcon(IconNames.Skull)
}
function rooi () {
    basic.showIcon(IconNames.Scissors)
}
input.onButtonPressed(Button.A, function () {
    aanvraag = 0
})
function geoen2 () {
    basic.showIcon(IconNames.Heart)
}
let looptyd = 0
let besig = false
let aanvraag = 0
groen()
basic.forever(function () {
    if (aanvraag && besig) {
        aanvraag = false
        besig = true
        geel()
        basic.pause(5000)
        rooi()
        basic.pause(5000)
        looptyd = 5000
    }
})
