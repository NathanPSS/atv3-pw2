let count=0

export default function compareStrings(a :Array<string>,b :Array<string>){
   let newArray :Array<any> = []
   if(a.length !== b.length){
    return undefined;
   }
   do{
    if(a[count] === b[count]){
       newArray.push(a[count])
    } else {
        newArray[count] = undefined
    }
     count++
   }while(count < a.length || count < b.length)
   count = 0
   return newArray;
}