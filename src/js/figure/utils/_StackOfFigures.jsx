import figure from './_singleFigure';

const mapOfFigures = ['rook','knight','bishop','queen','king','bishop','knight','rook'];


export default function _stackOfFigures(){
    let figures = [];
    let key = 0;

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            for(let k = 0; k<8 ; k++){
                if(i===0){
                    if(j===0){
                        figures.push({image: figure('black',mapOfFigures[k]), type: mapOfFigures[k], color: true, key: key, position:{y: 0, x: (k*300)}});         
                    }else if(j===1){
                        figures.push({image: figure('black','pawn'), type: 'pawn', color: true, key: key, position:{y: j*300, x: (k*300)}});
                    }
                }else if(i===1){
                    if(j===0){
                        figures.push({image: figure('white',mapOfFigures[k]), type: mapOfFigures[k], color: false, key: key, position:{y: 2100, x: (k*300)}});         
                    }else if(j===1){
                        figures.push({image: figure('white','pawn'), type: 'pawn', color: false, key: key, position:{y: 1800, x: (k*300)}});
                    } 
                }
                key++;
            }
        }
    }
    return figures;
}