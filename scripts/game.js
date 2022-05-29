class Game {
    constructor(){
        this.score=0
        this.prey=[]
        this.snake=new Snake()
        this.score=0
    }
    getNewPrey(){
        let y=0
        let x=0
        do{
            y=Math.floor(Math.random()*20)
            x=Math.floor(Math.random()*20)
        }while( this.snake.positions.some(position=>position[0]===y && position[1]===x ))    
        this.prey[0]=y
        this.prey[1]=x
    }
    nextStep(){
        this.snake.currentDirection=this.snake.nextDirection

        if(this.snake.positions[0][0]===this.prey[0] && this.snake.positions[0][1]===this.prey[1] ){
            this.snake.moveLengthen( true)
            this.getNewPrey()
            this.score++
            return true
        }else{
            this.snake.moveLengthen()
            return false
        }
    }
    isGameLost(){
        console.log(this.snake.positions[0])
        return (this.snake.positions[0][0]===-1 
            || this.snake.positions[0][0]===20) 
            || (this.snake.positions[0][1]===-1 
            || this.snake.positions[0][1]===20 )
            || this.snake.positions.some((coords,i,positions) =>{
                console.log('++',positions[0],':',coords)
                if(i>0 && positions[0][0]===coords[0] && positions[0][1]===coords[1]){
                    return true
                }
            }) ? true : false
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
    }
}