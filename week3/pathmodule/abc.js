const fs = require('fs')
const path = require('path')

let abc = function (dir){
    let result = '';
    let fof = fs.readdirSync('/');
    /* fof is an array of folders & files in root - we need to parse each of them*/
    
        fof.forEach (function (i){
            if (fs.lstatSync(`${result}/${i}`).isDirectory()==true)
            {   if (i!=dir)
                {
                    result = `'${result}/${i}'`;
                    abc(result);
                }
                else 
                {
                    console.log('awesome');
                    return
                }
            }
                else {

                }

        });
    }
    /* fof.forEach(element => {
        if (fs.statSync(element).isDirectory==true && fs.statSync(element)!== dir){
            abc(element);
        }else if (fs.statSync(element).isDirectory==true && fs.statSync(element)== dir){
            return path.dirname(element)
        }else {continue}
    });} */

abc('week3')
