export default function _setFigurePosition(target,pawn,container){
    pawn[container].position.x = parseInt(target.style.left,10);
    pawn[container].position.y = parseInt(target.style.top,10);
    return pawn;    
}