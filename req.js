const readline = require('readline');

const fs = require('fs');


const rl = readline.createInterface({

input: fs.createReadStream('FoodFacts.csv')
});

var northEurope=["United Kingdom","Denmark","Sweden","Norway"];
var centralEurope=["France","Belgium","Germany","Switzerland","Netherlands"];
var southEurope=["Portugal","Greece","Italy","Spain","Croatia","Albania"];



var i=0,l=[];
var fats=0,pros=0,cars=0;
var countryIn=0,fatIn=0,proIn=0,carIn=0;
var norEur=0,cenEur=0,souEur=0,fat=0,pro=0,car=0;
var ind1=0,ind2=0,ind3=0;
var y=0,z=0;
var x1=0,y1=0;z1=0;
var x2=0,y2=0,z2=0;
var fatArr=[],proArr=[],carArr=[];
var fatArr1=[],proArr1=[],carArr1=[];
var fatArr2=[],proArr2=[],carArr2=[],
final_europe=[];
for(var j=0;j<northEurope.length;j++)
{
fatArr[j]=0;
proArr[j]=0;
carArr[j]=0;
}

for(var k=0;k<centralEurope.length;k++)
{
fatArr1[k]=0;
proArr1[k]=0;
carArr1[k]=0;
}

for(var n=0;n<southEurope.length;n++)
{
fatArr2[n]=0;
proArr2[n]=0;
carArr2[n]=0;
}

rl.on('line', (line) =>
{

l=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

    if(i==0){

        countryIn=l.indexOf("countries");
        fatIn=l.indexOf("fat_100g");
        proIn=l.indexOf("proteins_100g");
        carIn=l.indexOf("carbohydrates_100g");

        
        
        console.log("country index:"+countryIn);
        console.log("fat index:"+fatIn);
        console.log("protein index:"+proIn);
        console.log("carbs index:"+carIn);
        i++;

    }   

    country=l[countryIn];
    fats=l[fatIn];
    pros=l[proIn];
    carbs=l[carIn];

    if(fats=="")
        fats=0;
    if(pros=="")
        pros=0;
    if(carbs=="")
        carbs=0;

    ind1=northEurope.indexOf(country);
    if(ind1!=-1){
        fatArr[ind1]+=parseFloat(fats);
        proArr[ind1]+=parseFloat(pros);
        carArr[ind1]+=parseFloat(carbs);
    } 

    ind2=centralEurope.indexOf(country);
    if(ind2!=-1){
         if(typeof(fatArr[n])=="undefined" || typeof(proArr[n])=="undefined" || typeof(carArr[n])=="undefined"){
            fatArr[n]==0;
            proArr[n]==0;
            carArr[n]==0;

        }

        fatArr1[ind2]+=parseFloat(fats);
        proArr1[ind2]+=parseFloat(pros);
        carArr1[ind2]+=parseFloat(carbs);
    } 
    ind3=southEurope.indexOf(country);
    if(ind3!=-1){
        fatArr2[ind3]+=parseFloat(fats);
        proArr2[ind3]+=parseFloat(pros);
        carArr2[ind3]+=parseFloat(carbs);
    } 

});

rl.on('close', function() {
 
    var x=0;
    for(var m=0;m<northEurope.length;m++) {
   
        
       x+=fatArr[m];
      y=y+proArr[m];
       z=z+carArr[m];
    //console.log(fatArr[m]);

    
       

        var ab="Region: North europe "+" Fat: "+x.toFixed()+" Protein: "+y.toFixed()+" Carbohydrates: "+z.toFixed();
       
       
    }
    final_europe.push(ab);
     console.log(ab);
     
  
    for(var n=0;n<centralEurope.length;n++) {
   

        x1=x1+fatArr1[n];
        y1=y1+proArr1[n];
        z1=z1+carArr1[n];
        

        var ab1="Region: Central europe "+" Fat: "+x1.toFixed()+" Protein: "+y1.toFixed()+" Carbohydrates: "+z1.toFixed();
        
       
    }
            
    final_europe.push(ab1);
    console.log(ab1);

    for(var o=0;o<southEurope.length;o++) {
   
        //var json_obj3={};
        x2=x2+fatArr2[o];
        y2=y2+proArr2[o];
        z2=z2+carArr2[o];

        var ab2="Region: South europe "+" Fat: "+x2.toFixed()+" Protein: "+y2.toFixed()+" Carbohydrates: "+z2.toFixed();
        
        
        
    }
    final_europe.push(ab2);
    console.log(ab2);

    
 fs.writeFileSync('eurJSON.json', JSON.stringify(final_europe) , 'utf-8');

});




/*--------------------------------------------------------------------------*/





