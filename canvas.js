const canvasElemento =  document.querySelector("canvas");
const cCtx = canvasElemento.getContext('2d');

function setup(){
    canvasElemento.width = cCtx.width = screen.width;
    canvasElemento.height = cCtx.height = screen.height;
}
setup();
