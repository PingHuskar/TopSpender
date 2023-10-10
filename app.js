const initialAmt = document.querySelector(`#initialAmt`)
const buy = document.querySelector(`#buy`)
const sell = document.querySelector(`#sell`)
const target = document.querySelector(`#target`)

const btn = document.querySelector(`button`)

initialAmt.value = 32350//1000000
buy.value = 32050
sell.value = buy.value - 100

const calTargetShort = () => {
    let amt = parseFloat(initialAmt.value)
    let vBuy = parseFloat(buy.value)
    let vSell = parseFloat(sell.value)
    let tar = 0
    // console.log(typeof amt)
    // console.log(typeof vBuy)
    // console.log(typeof vSell)
    if (vSell >= vBuy) return
    console.clear()
    let diff = vBuy - vSell
    tar = (Math.floor((amt-vSell)/diff)*vBuy)-vBuy
    target.value = tar
    // console.log(tar)
}

// const calTarget = () => {
//     let amt = parseFloat(initialAmt.value)
//     let vBuy = parseFloat(buy.value)
//     let vSell = parseFloat(sell.value)
//     let tar = 0
//     // console.log(typeof amt)
//     // console.log(typeof vBuy)
//     // console.log(typeof vSell)
//     if (vSell >= vBuy) return
//     // console.clear()
//     while (amt > vBuy) {
//         let thisTrade = Math.floor(amt/vBuy)
//         // console.log(thisTrade)
//         tar += vBuy*thisTrade 
//         amt -= vBuy*thisTrade
//         amt += thisTrade * vSell
//         // console.log(thisTrade,tar,amt)
//     }
//     target.value = tar
//     return tar
// }

btn.addEventListener(`click`,calTargetShort)