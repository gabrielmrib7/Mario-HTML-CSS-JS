const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const grass = document.querySelector('footer');
const contadorElemento = document.getElementById('contadorid');
const game = document.querySelector('.gameboard')
const gameover = document.querySelector('.gameover');
let contador = 0;
let pulouObstaculo = false;

var img = document.getElementById("imgmario");
var count = 0;



const jump = () => {
     mario.classList.add('jump');

     setTimeout(() => {

        mario.classList.remove('jump');
        if(pulouObstaculo==true)
    {
        contador++;
        pulouObstaculo=false;
        contadorElemento.innerHTML = contador;
    }
        
     },500);
     
}


const loop = setInterval(() => {
    const pipeposition = pipe.offsetLeft;
    const cloudposition = clouds.offsetLeft;
    const marioposition = window.getComputedStyle(mario).bottom.replace('px','');
    const cloudpositiony = window.getComputedStyle(clouds).bottom.replace('px','');
    const grassposition = window.getComputedStyle(grass).backgroundPosition;  
    contador.innerHTML = count;    
    if(pipeposition <= 120 && pipeposition > 0 && marioposition <= 100 )
    {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;
            img.src = "./static/game-over.png";
            mario.style.width = "75px";
            mario.style.animation = 'none';
            mario.style.bottom = `${marioposition}px`;
            mario.style.marginLeft = "40px";
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudposition}px`;
            clouds.style.bottom = `${cloudpositiony}px`;
            grass.style.animation = 'none';
            grass.style.backgroundPosition = grassposition;
            mario.style.opacity= 0.2;
            pipe.style.opacity= 0.2;
            clouds.style.opacity = 0.2;
            grass.style.opacity= 0.2;
            gameover.style.opacity = 1.0;
            clearInterval(loop);
            
    }

    if (pipeposition <= 120 && marioposition>=110) {
        pulouObstaculo = true;
      }
      

// Função para atualizar o contador

}, 10);

    


document.addEventListener('keydown' , jump);



