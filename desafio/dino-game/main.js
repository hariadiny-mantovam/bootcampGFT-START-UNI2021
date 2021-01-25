const dino = document.querySelector('div.dino');
const background = document.querySelector('div.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if(event.keyCode === 32){
        if(!isJumping){
            jump()
        }
        
    }
}

function jump() {
    isJumping = true
    let upInterval = setInterval(()=> {
        if(position >= 150){
            //Parar no ar e descer
            clearInterval(upInterval)
            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px'
                } 
            }, 20)
        } else{
            //Para subir
            position += 20;
        dino.style.bottom = position + 'px'
        } 
    }, 20) 
    
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    console.log(randomTime)

    cactus.style.left = 1000 + 'px';
    cactus.classList.add('cactus');
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
        //Game over
           clearInterval(leftInterval);
           document.body.innerHTML = `<h1 class="gameover">Fim de jogo! \u{1F625}</h1>`;
           document.body.style.background = `#38307e`

        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 30);
    setTimeout(createCactus, randomTime)
}

createCactus();
document.addEventListener('keyup', handleKeyUp);