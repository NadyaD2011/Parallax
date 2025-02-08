document.addEventListener('DOMContentLoaded', function(){
    let parallax = document.querySelector('.parallax')
    if (parallax){
        let clouds = document.querySelector('.images__clouds')
        let mountains = document.querySelector('.images__mountains')
        let human = document.querySelector('.images__human')
        let parallaxContent = document.querySelector('.parallax__content')

        let forClouds = 40
        let forMountains = 20
        let forHuman = 10
        let animationSpeed = 0.05

        let positionX = 0
        let positionY = 0
        let coordXpercent = 0
        let coordYpercent = 0

        function setParalaxAnimation(){
            let distX = coordXpercent - positionX
            let distY = coordYpercent - positionY
            positionX = positionX + distX * animationSpeed 
            positionY = positionY + distY * animationSpeed
        
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            requestAnimationFrame(setParalaxAnimation)
        }

        setParalaxAnimation()

        parallax.addEventListener('mousemove', function(event){
            let parallaxWidth = parallax.getBoundingClientRect().width
            let parallaxHeight = parallax.getBoundingClientRect().height

            let coordX = event.pageX - parallaxWidth / 2
            let coordY = event.pageY - parallaxHeight / 2

            coordXpercent = coordX / parallaxWidth * 100
            coordYpercent = coordY / parallaxHeight * 100
        })
    }
})