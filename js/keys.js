export default class Key{

    constructor(posX, posY, canvasWidth, keySound){
        this.width = canvasWidth/8;
        // assuming canvas width == 800 
        this.height = 400;
        this.keySound = keySound;

        this.position={
            x: posX,
            y: posY
        };

      
       
    }

    draw(ctx){
        ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }

    lightUp(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle='#fff';


    }

    

    playSound(){
        this.keySound.play();

    }

    
}