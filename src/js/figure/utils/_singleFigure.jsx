import wpawn from '../figureImages/wPawn.png';
import bpawn from '../figureImages/bPawn.png';
import wking from '../figureImages/wKing.png';
import bking from '../figureImages/bKing.png';
import wbishop from '../figureImages/wBishop.png';
import bbishop from '../figureImages/bBishop.png';
import wknight from '../figureImages/wKnight.png';
import bknight from '../figureImages/bKnight.png';
import wqueen from '../figureImages/wQueen.png';
import bqueen from '../figureImages/bQueen.png';
import wrook from '../figureImages/wRook.png';
import brook from '../figureImages/bRook.png';


export default function _singleFigure(color, figure){
    let returnFigure = null;
    switch(color){
        case "white": {
            switch(figure){
                case "bishop": returnFigure = wbishop; break;
                case "king": returnFigure = wking; break;
                case "knight": returnFigure = wknight; break;
                case "pawn": returnFigure = wpawn; break;
                case "queen": returnFigure = wqueen; break;
                case "rook": returnFigure = wrook; break;
                default: returnFigure = null; break;
            }
            break;
        }
        case "black":{
            switch(figure){
                case "bishop": returnFigure = bbishop; break;
                case "king": returnFigure = bking; break;
                case "knight": returnFigure = bknight; break;
                case "pawn": returnFigure = bpawn; break;
                case "queen": returnFigure = bqueen; break;
                case "rook": returnFigure = brook; break;
                default: returnFigure = null;
            }
            break;
        }
        default: returnFigure = null;
    }
    return returnFigure;
}
