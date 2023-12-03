//Get all the countries from asia continent-Using filter fn:

var obj = new XMLHttpRequest();
obj.open("GET", "https://restcountries.com/v3.1/all");
obj.send();
obj.onload = function() {
    var result = JSON.parse(obj.response);
   // console.log(result);
   console.log("Q1-Filtering Asian continents: ")
   var output = result.filter((ele)=> ele.continents === 'Asia');
   console.log(output);

    var Population = result.filter((ele)=>ele.population<200000);
    console.log("Filtering population less than 2 lakhs: ")
    console.log(Population);

    // console.log(`Sec:C-"Name, Capital, Flag`);
    // var expected = function(item){
    //   console.log(`${item}`);
    // }
    // result.forEach(expected);
        
    console.log("Total population");
    var population1 = result.filter((popu1)=>popu1.population);
    var peo = population1.map((people)=>people.population);
    console.log(peo);
    var total=peo.reduce((acc,ele)=>acc+ele);
    console.log("Total population: "+total);

    console.log("countries that uses US dollar currency");
    var currency=result.filter((cur)=>cur.currencies);
    console.log(currency);
    var curname=currency.map((curn)=>curn.currencies);
    console.log(curname);
    var dollar=curname.filter((dol)=>dol.USD);;
    console.log(dollar); 
    
}