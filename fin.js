const readline = require('readline');

const fs = require('fs');


const rl = readline.createInterface({

input: fs.createReadStream('FoodFacts.csv')
});


var country_ind=0,sugar_ind=0,salt_ind=0,sugar=0;
var arr=[];
var i=0,l=[];
var country=0,sugar=0,salt=0;
var ind=0;
var sugar_arr=[],salt_arr=[],final_country_arr=[];
var country_arr=["Netherlands","Canada","United Kingdom","United States","Australia","France","Germany","Spain","South Africa"];
for(var j=0;j<country_arr.length;j++)
{
sugar_arr[j]=0;
salt_arr[j]=0;
}
rl.on('line', (line) =>
{

l=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

    if(i==0){

        country_ind=l.indexOf("countries");
        sugar_ind=l.indexOf("sugars_100g");
        salt_ind=l.indexOf("salt_100g");
        
        
        console.log("country_ind index:"+country_ind);
        console.log("sugar index:"+sugar_ind);
        console.log("salt index:"+salt_ind);
        i++;

    }    

    
    country=l[country_ind];
    sugar=l[sugar_ind];
    salt=l[salt_ind];

    if(country=="")
        country="not available";
    if(salt=="")
        salt=0;
    if(sugar=="")
        sugar=0;

    ind=country_arr.indexOf(country);
    if(ind!=-1){
        sugar_arr[ind]+=parseFloat(sugar);
        salt_arr[ind]+=parseFloat(salt);
    }    

    
    
    
});

rl.on('close', function() {
 
    for(var m=0;m<country_arr.length;m++) {
   
        var json_obj={};
   
        json_obj["country"]=country_arr[m];
   
        json_obj["Sugar"]=sugar_arr[m].toFixed();
   
        json_obj["salt"]=salt_arr[m].toFixed();
   
        final_country_arr.push(json_obj);
   
        console.log(country_arr[m]+" "+sugar_arr[m]+" "+salt_arr[m]);
 
    }
    
fs.writeFileSync('countryJSON.json', JSON.stringify(final_country_arr) , 'utf-8');

});