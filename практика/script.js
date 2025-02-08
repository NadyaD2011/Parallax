// let red = document.querySelector('#red')
// let redWidth = red.getBoundingClientRect().width
// let redНeight = red.getBoundingClientRect().height
// console.log(redWidth, redНeight)

// const divEl = document.querySelector('.container')
// divEl.addEventListener('mouseover', function (event) {
//     id = event.target.id
//     console.log(`курсор вошел в границы ${id}!`)
// })
// divEl.addEventListener('mouseout', function (event) {
//     id = event.target.id
//     console.log(`курсор вышел в границы ${id}!`)
// })

let red = document.querySelector('#red')
red.addEventListener('mousemove', function (event) {
    let invisibleWidth = event.clientX
    let invisibleBlock = document.querySelector('.invisible-block')
    invisibleBlock.style.width = `${invisibleWidth}px`
})