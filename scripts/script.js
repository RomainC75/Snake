const gameBoard = document.querySelector('.game')

for(let i=0 ; i<400 ; i++){
    const newDiv = document.createElement('div')
    gameBoard.appendChild(newDiv)
}

const game = new Game()
game.getNewPrey()
let intervalId = false

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
        if(game.snake.positions.some(coords=>coords[0]===line&&coords[1]===i-(20*line))){
            div.classList.add('snake')    
        }
    }
    const preyCoords=game.prey
    const preyDive = gameBoard.querySelector(`div:nth-child(${preyCoords[0]*20+preyCoords[1]+1})`)
    if(!preyDive.classList.contains('snake')){
        preyDive.classList.add('prey')
    }
    
    
}

const start = () =>{
    intervalId = setInterval( ()=>{
        game.nextStep()
        if(game.isGameLost()){
            console.log('----> Looser ! ')
            clearInterval(intervalId)
        }
        display()
        
    },300)
}

display()
start()


