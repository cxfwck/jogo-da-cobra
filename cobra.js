const cobra = {
    x:400,
    y:260,
    tamanho:10,
    largura:10,
    cor:"black" ,
    desenhar(){
        cCtx.fillStyle=this.cor
        cCtx.fillRect(this.x,this.y,this.tamanho,this.largura);
    }
}
cobra.desenhar();
