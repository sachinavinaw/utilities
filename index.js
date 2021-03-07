function longestRepetition (str) {
    //Check if string is not empty
    if (str.length === 0) {
       return null;
    }
    let longestSeq = '';
    let sequence = '';
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        if (str[i] === str[i + 1]) {
          sequence += str[i];
        }
      }
      if (i > 0) {
        if (str[i] === str[i - 1]) {
          sequence += str[i];
        }
        if (str[i] !== str[i - 1]) {
          sequence = str[i];
        }

        //Check if sequence is longer than longestSeq
        if (sequence.length > longestSeq.length) {
          longestSeq = sequence;
        }

      }
    }
    return longestSeq;
  }


function main(){
    let str="DDUUUUDDDDD";
    console.log(longestRepetition(str));
}

main();