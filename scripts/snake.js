class Snake{
    constructor(){
        this.positions = [[10,10], [10,9]]
        this.currentDirection=1
        this.nextDirection=1
    }
    moveLengthen(lengthen){
        if(!lengthen){
            this.positions.pop()
        }
        // 0 top // 1 right // 2 bottom // 3 left
        console.log(this.currentDirection)
        switch(this.currentDirection){
            case 0:
                this.positions.unshift([this.positions[0][0]-1,this.positions[0][1]])
                break
            case 1:
                console.log(this.currentDirection)
                console.log(this.positions)
                this.positions.unshift([this.positions[0][0],this.positions[0][1]+1])
                break
            case 2:
                this.positions.unshift([this.positions[0][0]+1,this.positions[0][1]])
                break
            case 3:
                this.positions.unshift([this.positions[0][0],this.positions[0][1]-1])
                break
        }
    }
}