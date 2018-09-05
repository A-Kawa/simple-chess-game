import _parsePosition from '../utils/_parsePosition';
import _checkNextSquere from '../utils/_checkNextSquere';
import _validateMoves from '../utils/_validateMoves';
import _checkNextSquereColor from '../utils/_checkNextSquereColor';

export default function _figureMoves (figure,stack){
    let moves = [];

    figure = _parsePosition(figure);

    if(figure.color === true){
        if(figure.position.y <= 1800){
            if(!_checkNextSquere(stack,figure.position.x,figure.position.y+300)){
                moves.push({x: figure.position.x, y: figure.position.y + 300});
            }
            if(figure.position.y === 300){
                moves.push({x: figure.position.x, y: figure.position.y + 600})
            }
        }
        if(_checkNextSquere(stack,figure.position.x+300, figure.position.y+300)){
            if(_checkNextSquereColor(stack,figure.position.x+300, figure.position.y+300)!==figure.color){
                moves.push({x: figure.position.x + 300 , y: figure.position.y + 300})
            }
        }
        if(_checkNextSquere(stack,figure.position.x-300, figure.position.y+300)){
            if(_checkNextSquereColor(stack,figure.position.x-300, figure.position.y+300)!==figure.color){
                moves.push({x: figure.position.x - 300 , y: figure.position.y + 300})
            }
        }
    }else{
        if(figure.position.y >= 300){
            if(!_checkNextSquere(stack,figure.position.x,figure.position.y - 300)){
                moves.push({x: figure.position.x, y: figure.position.y - 300});
            }
            if(figure.position.y === 1800){
                moves.push({x: figure.position.x, y: figure.position.y - 600})
            }
        }
        if(_checkNextSquere(stack,figure.position.x-300, figure.position.y-300)){
            if(_checkNextSquereColor(stack,figure.position.x-300, figure.position.y-300)!==figure.color){
                moves.push({x: figure.position.x - 300 , y: figure.position.y - 300})
            }
        }
        if(_checkNextSquere(stack,figure.position.x+300, figure.position.y-300)){
            if(_checkNextSquereColor(stack,figure.position.x-300, figure.position.y-300)!==figure.color){
                moves.push({x: figure.position.x + 300 , y: figure.position.y - 300})
            }
        }
    }
    

    return _validateMoves(moves);
}