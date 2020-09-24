const fileInfo = "  2"
let pointerIndex = 0
const numbers = ["0","1",'2','3','4','5','6','7','8','9']
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ"
const next = () => pointerIndex += 1

const lexico = (type, info) => {
    e1()
}
const e1 = () => {
    while(fileInfo[pointerIndex] === " " || fileInfo[pointerIndex] === "\n"){
        next()
    }
    console.log(fileInfo[pointerIndex], pointerIndex)
    switch(fileInfo[pointerIndex]){
        case "%":
            console.log("porcentagem", pointerIndex)
            next()
            e1()
            break
        case ":":
            console.log("dois pontos", pointerIndex)
            next()
            e1()
            break
        case numbers.find(curr => curr === fileInfo[pointerIndex]):
            console.log("numero", pointerIndex)
            next()
            e1()
            break
        case letters.includes(fileInfo[pointerIndex]):
            console.log("letra", pointerIndex)
            break
        default:
            return
    }
}

lexico("a", "")