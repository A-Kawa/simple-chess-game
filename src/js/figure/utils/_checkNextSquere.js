export default function _checkNextSquere(stack,x,y){
    return stack.some(target => target.position.x === x && target.position.y === y);
} 