import _parsePosition from '../utils/_parsePosition';
import _validateMoves from '../utils/_validateMoves';
import _checkNextSquereColor from '../utils/_checkNextSquereColor';
import _checkNextSquere from '../utils/_checkNextSquere';

export default function _knightMove(figure,stack){
    let moves = [];
    figure = _parsePosition(figure);
    let xPosition = 0;
    let yPosition = 0;

    for(let i=0;i<2;i++){
        xPosition = 0;
        yPosition = 0;
        i===0 ? yPosition=yPosition-600 : yPosition=yPosition+600;
        for(let j=0; j<2;j++){
            xPosition = 0;
            j===0 ? xPosition=xPosition-300 : xPosition=xPosition+300;
            if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                    moves.push({x: figure.position.x+xPosition, y: figure.position.y+yPosition})
                }
            }else{
                moves.push({x: figure.position.x+xPosition, y: figure.position.y+yPosition})
            }     
        }
    }
    for(let i=0;i<2;i++){
        xPosition = 0;
        yPosition = 0;
        i===0 ? xPosition=xPosition-600 : xPosition=xPosition+600;
        for(let j=0; j<2;j++){
            yPosition = 0;
            j===0 ? yPosition=yPosition-300 : yPosition=yPosition+300;
            if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                    moves.push({x: figure.position.x+xPosition, y: figure.position.y+yPosition})
                }
            }else{
                moves.push({x: figure.position.x+xPosition, y: figure.position.y+yPosition})
            }     
        }
    }

    return _validateMoves(moves);
}
