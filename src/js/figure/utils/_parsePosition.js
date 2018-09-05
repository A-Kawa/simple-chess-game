export default function _parsePosition(figure){
    figure.position.y = parseInt(figure.position.y,10);
    figure.position.x = parseInt(figure.position.x,10);
    return figure;
}