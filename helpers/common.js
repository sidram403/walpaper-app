import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const wp = (percentage) => {
    return (percentage * windowWidth) / 100;
}

export const hp = (percentage) => {
    return (percentage * windowHeight) / 100;
}

export const getColumnCount = () =>{
    if(windowWidth >= 1024){
        return 4
    }else if(windowWidth >=768){
        return 3
    }else{
        return 2
    }
}

export const getImageSize= (height, width)=>{
        if(width>height){
            return 250;
        }else if(width<height){
            return 300;
        }else{
            return 200;
        }
}

export const capitalize = str=>{
    return str.replace(/\b\w/g, l=> l.toUpperCase())
}