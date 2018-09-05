import WhiteSquere from './boardImages/whiteSquere.bmp';
import BlackSquere from './boardImages/blackSquere.bmp';

export default function _singleSquere(props){
    return props ? WhiteSquere : BlackSquere;
}