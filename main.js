sq = document.getElementById('sq');

document.addEventListener('keydown', (tecla_apertada)=>{
    if(tecla_apertada.key === 'a' || tecla_apertada.key === 'A'){
        var posX = sq.style.left ? parseInt(sq.style.left) : 30;
        sq.style.left = posX - 30 + 'px';
    }
    else if(tecla_apertada.key === 'd' || tecla_apertada.key === 'D'){
        var posX = sq.style.left ? parseInt(sq.style.left) : 30;
        sq.style.left = posX + 30 + 'px';
    }
    else if(tecla_apertada.key === 'w' || tecla_apertada.key === 'W'){
        var posY = sq.style.top ? parseInt(sq.style.top) : 30;
        sq.style.top = posY - 30 + 'px';
    }
    else if(tecla_apertada.key === 's' || tecla_apertada.key === 'S'){
        var posY = sq.style.top ? parseInt(sq.style.top) : 30;
        sq.style.top = posY + 30 + 'px';
    }
});