const gameBoard = document.querySelector('.game')

for(let i=0 ; i<400 ; i++){
    const newDiv = document.createElement('div')
    gameBoard.appendChild(newDiv)
}

const game = new Game()
let intervalId = false

window.addEventListener('keydown',(e)=>{
    game.changeSnakeDirection(e.key)
})



const display = () =>{
    game.getCurrentBoard().flat().forEach( (unit, i) =>{
        const div = gameBoard.querySelector(`div:nth-child(${i+1})`)
        div.removeAttribute('class')
        if(unit==1){
            div.classList.add('snake')    
            console.log('add snake')
        }else if(unit==2){
            div.classList.add('prey')
        }
    })
}



const start = () =>{
    intervalId = setInterval( ()=>{
        game.nextStep()
        if(game.isGameLost()){
            console.log('----> Looser ! ')
            clearInterval(intervalId)
        }
        display()
        
    },500)
}

display()
start()


