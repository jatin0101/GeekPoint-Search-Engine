const fs = require('fs');
const { parse } = require('path');
const { finished } = require('stream');


tfd = fs.readFileSync('./data/tf_data.txt', 'utf8').split('\n');
const arr_idf = fs.readFileSync('./data/idf_data.txt', 'utf8').split('\n');
const new_data = fs.createWriteStream('./data/tf_idf_data.txt');
const ss = arr_idf.length;
tfd.forEach((line) => {
    const arr = line.split(' ');
    const id = parseInt(arr[1]);
    arr[2] = (parseFloat(arr[2]) * parseFloat(arr_idf[id-1])).toFixed(6);
    new_data.write(arr.join(' ') + '\n');
})
// for(var i=0; i<1520;i++){
//     const tfd1 = tfd[i].split(' ');
//     for(var j=1; j<ss;j++) tfd1[j] = ((parseFloat(tfd1[j]))*(parseFloat(arr_idf[j]))).toFixed(6);
//     new_data.write(tfd1.join(' ') + '\n');
// }

console.log('done');