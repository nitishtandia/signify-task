const fs = require('fs')



fs.readFile('./alexa.json',(err, data) =>{
    
    if(err) console.log(err);
    else {
        let a = data.toString();
        let splite  = a.split("\n");
        let result = [];
        splite.map(ele=>{
            if(IsValidJSONString(ele)) result.push(JSON.parse(ele));

        })

        console.log(result);
        fs.writeFile('./alexa1.json', JSON.stringify(result),()=>{
            console.log('done')
        });
    }
})


function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
