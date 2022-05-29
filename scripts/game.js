class Game {
    constructor(){
        this.matrix=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ]
        this.score=0
        this.prey=false
        this.snake=new Snake()
    }
    getNewPrey(){
        let newPrey=[]
        do{
            newPrey=[Math.floor(Math.random()*20),Math.floor(Math.random()*20)]
        }while( !this.snake.positions.some(position=>position[0]===newPrey[0] && position[0]===newPrey[0] ))
        this.prey=newPrey
    }
    // getCurrentBoard(){
    //     const toReturn = this.matrix.map((el,y,fullArray)=>{
    //         return el.map((unit, x, line)=>{
    //             return this.snake.positions.some( coord => coord[0]===y && coord[1]===x) ? 1 : 0
    //         })
    //     })
    //     return toReturn
    // }
    nextStep(){
        this.snake.currentDirection=this.snake.nextDirection
        this.snake.moveLengthen()
    }

    isGameLost(){
        console.log(this.snake.positions[0])
        return (this.snake.positions[0][0]===-1 || this.snake.positions[0][0]===20) || (this.snake.positions[0][1]===-1 || this.snake.positions[0][1]===20) ? true : false
    }
    changeSnakeDirection(key){
        console.log(key)
        this.snake.nextDirection=this.snake.currentDirection
        if(key==='ArrowLeft'){
            this.snake.nextDirection = (this.snake.nextDirection-1)%4
            if(this.snake.nextDirection===-1){
                this.snake.nextDirection=3
            }
        }else if(key==='ArrowRight'){
            this.snake.nextDirection = (this.snake.nextDirection+1)%4
        }
        console.log('---->',this.snake.nextDirection)
    }
}