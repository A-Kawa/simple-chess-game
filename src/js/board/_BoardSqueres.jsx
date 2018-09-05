import SingleSquere from './_singleSquere';

let helper = false;
let key = 0;

export default function _boardSqueres(){
    const squeres = [];
    for(let i=0;i<8;i++){
        helper = !helper;
        for(let j=0;j<8;j++){
            key++;
            squeres.push({image:SingleSquere(helper), key: key,color:helper,position:{x: j*300, y: i*300}});
            helper = !helper;
        }
    }
    return squeres;
}