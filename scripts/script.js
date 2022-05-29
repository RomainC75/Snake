const gameBoard = document.querySelector('.game')
const score = document.querySelector('.score')
for(let i=0 ; i<400 ; i++){
    const newDiv = document.createElement('div')
    gameBoard.appendChild(newDiv)
}

const game = new Game()
game.getNewPrey()
let intervalId = false

const dyingSound = new Audio("./audio/dying.mp3")
let audioOnOff=true

window.addEventListener('keydown',(e)=>{
    game.changeSnakeDirection(e.key)
})

const display = () =>{
    console.log('--- New Display !!! --------------------------------------------------')
    let line = 0
    for(let i=0 ; i<400 ; i++){
        line=Math.floor(i/20)
        const div = gameBoard.querySelector(`div:nth-child(${i+1})`)
        div.removeAttribute('class')
        div.style.backgroundColor=""
        div.innerHTML=''
        div.style.transform=""
        if(game.snake.positions[0][0]*20+game.snake.positions[0][1]===i){
            div.classList.add('head')
            div.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>'
            div.style.transform=`rotate(${game.snake.currentDirection*90}deg)`
        }
        const snakeIndex= game.snake.positions.findIndex(coords=>coords[0]===line&&coords[1]===i-(20*line))
        if(snakeIndex>0){
            div.style.backgroundColor=`rgb(0,${snakeIndex<50 ? snakeIndex*5 : 255},0)`
            div.classList.add('snake')
        }
    }
    const preyCoords=game.prey
    const preyDive = gameBoard.querySelector(`div:nth-child(${preyCoords[0]*20+preyCoords[1]+1})`)
    if(!preyDive.classList.contains('snake')){
        preyDive.classList.add('prey')
    }
    
    score.textContent=game.score
    
}

const start = () =>{
    intervalId = setInterval( ()=>{
        const scoreUp = game.nextStep()
        if(scoreUp && audioOnOff){
            console.log('dying Sound')
            dyingSound.play()
        }
        if(game.isGameLost()){
            console.log('----> Looser ! ')
            clearInterval(intervalId)
            const head=document.querySelector('.head')
            head.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M383.1 160v64c0 17.62-14.37 32-31.1 32h-96v224c0 17.62-14.38 32-31.1 32H160c-17.62 0-32-14.38-32-32V256h-96C14.37 256-.0008 241.6-.0008 224V160c0-17.62 14.38-32 32-32h96V32c0-17.62 14.38-32 32-32h64c17.62 0 31.1 14.38 31.1 32v96h96C369.6 128 383.1 142.4 383.1 160z"/></svg>'
            head.style.backgroundColor="white"
            Array.from(document.querySelectorAll('.snake')).forEach(piece=>{
                piece.classList.add('deadSnake')
            })
        }else{
            display()
        }

        
    },300)
}

display()
start()


