import _parsePosition from '../utils/_parsePosition';
import _rook from './_rookMoves';
import _bishop from './_bishopMoves';

export default function _queenMoves(figure,stack){
    let moves = [];
    figure = _parsePosition(figure);
    moves = _rook(figure,stack);
    _bishop(figure,stack).forEach(position => {
        moves.push(position);
    });

    return moves;
}