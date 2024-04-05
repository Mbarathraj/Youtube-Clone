const API_KEY="AIzaSyAzIdSnWTqrTEWiVtIr6eYOH8gkIncPj74";
export default API_KEY;

export const valueConverter=(value)=>{
 if(value>=1000000){
    return Math.floor(value/1000000)+"M";
 }
 else if(value >=1000){
    return Math.floor(value/1000)+"K";
 }
 else{
    return value;
 }
}