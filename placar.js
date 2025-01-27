const placar = {
    largura:800,
    altura:60,
    corfundo:"black",
    corTexto:"white",
    nomeJogo:"cobra do caio",
    recorde: 0,
    pontuacao: 0,
    desenhar(){
        cCtx.fillStyle=this.corfundo;
        cCtx.fillRect(0,0,this.largura,this.altura);
        cCtx.fillStyle=this.corTexto ;
        cCtx.font = '16px Fantasy';
        cCtx.textAligh = 'center'
        cCtx.textBaseline = 'middle'
        cCtx.fillText(this.nomeJogo,400,30)
        cCtx.font= '14px Fantasy';
        cCtx.textAligh= 'right'
        cCtx.textBaseline = 'buttom'
        cCtx.fillText("Recorde"+this.recorde,750,20)
        cCtx.textBaseline = 'top'
        cCtx.fillText("Vida ",750,25)
        cCtx.textAligh = 'left'
        cCtx.textAligh = 'bottom'
        cCtx.fillText("Pontuação :"+this.pontuacao,15,25)
    }
}
placar.desenhar();
