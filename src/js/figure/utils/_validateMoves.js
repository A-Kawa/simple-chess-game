export default function _validateMoves(moves){
   return moves.filter(move => move.x <= 2100 && move.x >= 0 && move.y <= 2100 && move.y >= 0);
}