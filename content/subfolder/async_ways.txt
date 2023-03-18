// If you decide to promisify what 'fs' module (along with 'readFile' and 'writeFile' methods) returns through the 'util' module, 
// then resort to the code on lines 5, 6 and 7. Otherwise just use exported module 'promises' (like in below code).

const {readFile,writeFile} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const { result } = require('lodash');

// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }   
//         })
//     })
// }

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-mind-grenade.txt',
        `THIS IS AWESOME : ${first} ${second}`,
        {flag:'a'})
    console.log(first, second);
    } catch (error) {
        console.log(error);
    }    
}

start()

// getText('./content/first.txt')
// .then((result)=>{console.log(result);})
// .catch((err)=>{console.log(err);})

