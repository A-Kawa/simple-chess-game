import _parsePosition from '../utils/_parsePosition';
import _checkNextSquere from '../utils/_checkNextSquere';
import _checkNextSquereColor from '../utils/_checkNextSquereColor';
import _validateMoves from '../utils/_validateMoves';

export default function _rookMoves (figure,stack) {
    let moves = [];
    figure = _parsePosition(figure);
    let xPosition = 0, yPosition = 0;
    
    for(let i=0;i<2;i++){
        yPosition = 0;
        xPosition = 0;
        for(let j=0; j<8;j++){
            i===0 ? xPosition=xPosition-300 : xPosition=xPosition+300;
            if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y)){
                if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                    moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                    break;
                }else{
                    break;
                }
            }else{
                moves.push({x: figure.position.x + xPosition, y: figure.position.y})  
            }   
        }
    }
    for(let i=0;i<2;i++){
        xPosition = 0;
        yPosition = 0;
        for(let j=0; j<8;j++){
            i===0 ? yPosition=yPosition-300 : yPosition=yPosition+300;
            if(_checkNextSquere(stack,figure.position.x,figure.position.y+yPosition)){
                if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                    moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                    break;
                }else{
                    break;
                }
            }else{
                moves.push({x: figure.position.x, y: figure.position.y+yPosition})  
            }   
        }
    }
    return _validateMoves(moves);
}