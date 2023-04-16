
let count=0
export default function compareStrings(a :Array<string>,b :Array<string>){
    do{
      if(a[count] !== b[count]){
        return false;
      }
     count++
    } while(count < a.length)
    return true;
}
