export default function _refutation(firstFigure, secondFigure, stack){
    
    stack[firstFigure].position.x = stack[secondFigure].position.x;
    stack[firstFigure].position.y = stack[secondFigure].position.y;

    stack[secondFigure].position.x = 2400;
    stack[secondFigure].position.y = 2400;
    stack[secondFigure].image = null;
    stack[secondFigure].type = null;

    return stack;
}