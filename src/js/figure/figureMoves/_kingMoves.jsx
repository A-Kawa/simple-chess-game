import _parsePosition from '../utils/_parsePosition';
import _validateMoves from '../utils/_validateMoves';
import _checkNextSquere from '../utils/_checkNextSquere';
import _checkNextSquereColor from '../utils/_checkNextSquereColor';

export default function _kingMoves(figure,stack){
    let moves = [];

    figure = _parsePosition(figure);

    let xPosition = -300, yPosition = -300;

    for(let i = 1;i<=3;i++){
        for(let i = 1;i<=3;i++){
            if(xPosition === 0 && yPosition === 0){xPosition+=300;}else{
                if(_checkNextSquere(stack,figure.position.x + xPosition,figure.position.y + yPosition)){
                    if(_checkNextSquereColor(stack,figure.position.x + xPosition,figure.position.y + yPosition)!==figure.color){
                        moves.push({x: figure.position.x + xPosition, y: figure.position.y + yPosition});
                    }else{
                        xPosition+=300;
                    }
                }else{
                    moves.push({x: figure.position.x + xPosition, y: figure.position.y + yPosition});
                    xPosition+=300;  
                }  
            }
        }
        xPosition = -300;
        yPosition+=300;
    }
    return _validateMoves(moves);
}

