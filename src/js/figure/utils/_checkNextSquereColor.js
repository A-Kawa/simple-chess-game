export default function _checkNextSquereColor(stack,x,y){
    let color = null;
    stack.some(target => {
        if(target.position.x === x && target.position.y === y){
            color = target.color;
        }
        return color;
    })
    return color;
} 