import _pawn from '../figureMoves/_pawnMoves';
import _king from '../figureMoves/_kingMoves';
import _rook from '../figureMoves/_rookMoves';
import _bishop from '../figureMoves/_bishopMoves';
import _queen from '../figureMoves/_queenMoves';
import _knight from '../figureMoves/_knightMove';

export default function _checkPossibleMove (target,figure,stack){
    let possibleMoves = [];
    target = {
        x: parseInt(target.style.left,10),
        y: parseInt(target.style.top,10)
    };
    console.log(figure);
    console.log(target);
    console.log(stack);
    switch(figure.type){
        case 'pawn':
            possibleMoves = _pawn(figure,stack);
            break;
        case 'king': 
            console.log('king');
            possibleMoves = _king(figure,stack);
            break;
        case 'rook':
            possibleMoves = _rook(figure,stack);
            break;
        case 'bishop':
            possibleMoves = _bishop(figure,stack);
            break;
        case 'queen':
            possibleMoves = _queen(figure,stack);
            break;
        case 'knight':
            possibleMoves = _knight(figure,stack);
            break;
        default: possibleMoves = null;
    }
    console.log(possibleMoves);
    return possibleMoves.some(move => move.x === target.x && move.y === target.y);
}