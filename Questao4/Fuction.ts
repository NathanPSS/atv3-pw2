export default function compareMatriz(a: Array<Array<string>>, b: Array<Array<string>>){
    if (a.length !== b.length) {
      return undefined;
    }
    const result: (string | undefined)[] = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i].length !== b[i].length) {
        return undefined;
      }
      const subResult: (string | undefined)[] = [];
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] === b[i][j]) {
          subResult.push(a[i][j]);
        } else {
          subResult.push(undefined);
        }
      }
      result.push(...subResult);
    }
    return result;
  }
/*

["maca","banana","mamao"]
["maca","caju","limao"]

["maca","banana","mamao"]
["pera","uva","limao"]
*/