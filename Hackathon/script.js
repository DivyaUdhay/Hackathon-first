var form=document.createElement("form")
var label=document.createElement("label");
label.innerHTML="Enter the city name";
label.setAttribute("for","text");

var br=document.createElement("br");

var h3=document.createElement("h3")
h3.innerHTML=`Brewery Shop<br>
<p>Welcome to brewery shop,its best beer-producing regions in the entire country
</p>`


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","")
input.setAttribute("placeholder","city name")

var br1=document.createElement("br");

var button=document.createElement("button")
button.setAttribute("type","button")
button.addEventListener("click",foo);

button.innerHTML="search"
form.append(h3,label,br,input,br1,button)
document.body.append(form);

form.style.textAlign="center";

    
async function foo(){
    try{

        let cityName=document.getElementById("text").value
        var res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityName}`)
        var res1=await res.json();
        
        if(cityName==0){
            alert("Please Enter Cityname");
        }
        else{
        for(var i=0;i<res1.length;i++){
    var breweryDetails=document.createElement("div")
    breweryDetails.className="a"
            var nameType=document.createElement("div");
            var h3=document.createElement("h3")
            h3.innerHTML="Name"
           
            nameType.innerHTML=`Name:${res1[i].name}  Type:${res1[i].brewery_type}`
            
            var Address=document.createElement("div");
             Address.innerHTML=`Address:${res1[i].street},
             ${res1[i].address_2},
             ${res1[i].address_3},
             ${res1[i].city},
             ${res1[i].state},
             ${res1[i].postal_code},
             ${res1[i].country}.`

             var webSite=document.createElement("div");
             webSite.innerHTML=`Website:${res1[i].website_url}`

             var phoneNumber=document.createElement("div");
             phoneNumber.innerHTML=`Phone number:${res1[i].phone}`

             breweryDetails.append(nameType,Address,webSite,phoneNumber)
        document.body.append(breweryDetails);

        }
  
    }
}
catch(error){
   var err=document.createElement("div")
   err.innerHTML=error.message
   document.body.append(err);
}
}