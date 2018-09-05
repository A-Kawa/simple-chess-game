import _parsePosition from '../utils/_parsePosition';
import _checkNextSquere from '../utils/_checkNextSquere';
import _validateMoves from '../utils/_validateMoves';
import _checkNextSquereColor from '../utils/_checkNextSquereColor';

export default function _bishopMoves (figure,stack) {
    let moves = [];
    figure = _parsePosition(figure);
    for(let i = 0; i<4;i++){
        let xPosition = 0, yPosition = 0;
        switch(i){
            case 0:
                for(let j = 0;j<8;j++){
                    xPosition += 300; yPosition += 300;
                    if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                        if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                            moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                            break;
                        }else{
                            break;
                        }    
                    }else{
                        moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition})  
                    }   
                }
                break;
                case 1:
                for(let j = 0;j<8;j++){
                    xPosition += 300; yPosition -= 300;
                    if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                        if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                            moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                            break;
                        }else{
                            break;
                        }
                    }else{
                        moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition})  
                    }   
                }
                break;
                case 2:
                for(let j = 0;j<8;j++){
                    xPosition -= 300; yPosition += 300;
                    if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                        if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                            moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                            break;
                        }else{
                            break;
                        }
                    }else{
                        moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition})  
                    }   
                }
                break;
                case 3:
                for(let j = 0;j<8;j++){
                    xPosition -= 300; yPosition -= 300;
                    if(_checkNextSquere(stack,figure.position.x+xPosition,figure.position.y+yPosition)){
                        if(_checkNextSquereColor(stack,figure.position.x+xPosition,figure.position.y+yPosition)!==figure.color){
                            moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition});
                            break;
                        }else{
                            break;
                        }
                    }else{
                        moves.push({x: figure.position.x + xPosition, y: figure.position.y+yPosition})  
                    }   
                }
                break;    
            default: moves = null;
        }
    }  
  
    return _validateMoves(moves);
}