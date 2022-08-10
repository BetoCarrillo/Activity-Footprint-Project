////// popover bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


///// FETCH DATA

let url = "https://beta3.api.climatiq.io/search?results_per_page=10";
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* function fetchData() {
    fetch(url, requestOptions)
        .then((response) => {
            return response.json();
        }).then((result) => {myController(result);})
        .catch((error) => console.log(error)); 

} */

const fetchData = async () => {
try {  fetch(url, requestOptions)
        .then((response) => {
            return response.json();
        }).then((result) => {
            LD = result.results
            myController(result.results)
        })}catch (error) {
    console.log(error)
   
}

}


////////////// ACCORDION
const divAccordion = document.getElementById("accordionFlushExample");
const createAcc = (data) => {

    for (let i = 0; i < data.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item container")
    divAcItem.setAttribute("style", "background-color: #e7f1ff")
    divAcItem.setAttribute("id", "noPad")


    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("id", "flush-headingOne")
    h2Ac.setAttribute("class", "accordion-header ")
 

    let button = document.createElement("button")
    button.setAttribute("class", "text-start accordion-button collapsed row")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#flush-collapseOne"+i)
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-controls", "flush-collapseOne")
    button.setAttribute("id", "noMargin")
  
/// AJUSTAR TITULOS PEQUE
    let divName = document.createElement("div")
    divName.setAttribute("class", "col-md-3")
    divName.innerHTML = data[i].name

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-md-3")
    divCat.innerHTML = data[i].category

    let divReg = document.createElement("div")
    divReg.setAttribute("class", "col-md-3")
    divReg.innerHTML = data[i].region_name

    let divSource = document.createElement("div")
    divSource.setAttribute("class", "col-md-3")
    divSource.innerHTML = data[i].source
////// LINKEAR SOURCE LINK
    
    let divCollpse = document.createElement("div")
    divCollpse.setAttribute("id", "flush-collapseOne"+i)
    divCollpse.setAttribute("class", "accordion-collapse collapse container text-start")
        divCollpse.setAttribute("aria-labelledby", "flush-headingOne")
        divCollpse.setAttribute("data-bs-parent", "#accordionFlushExample")

    let divAcBody = document.createElement("div")
    divAcBody.setAttribute("class", "accordion-body row")

    let divBodyTwo = document.createElement("div")
    divBodyTwo.setAttribute("class", "col-md-4")

    let divDesc = document.createElement("div")
    divDesc.innerHTML = data[i].description
    divDesc.setAttribute("class", "col-md-8")

    let divEm = document.createElement("div")
    divEm.innerHTML = "Emission Factors: " + data[i].factor
    divEm.setAttribute("class", "col-md-12")

    let divUn = document.createElement("div")
    divUn.innerHTML = "Unit Type: " + data[i].unit
    divUn.setAttribute("class", "col-md-12")

    let divSOr = document.createElement("div")
    divSOr.innerHTML = "Origin: " + data[i].factor_calculation_origin
    divSOr.setAttribute("class", "col-md-12")
   
    let divYear = document.createElement("div")
    divYear.innerHTML = "Year: " + data[i].year
    divYear.setAttribute("class", "col-md-12")

    let divCalc = document.createElement("div")
    divCalc.innerHTML =  
        "Calculation Method: "
    + data[i].factor_calculation_method 
    divCalc.setAttribute("class", "col-md-12")

    divAcBody.appendChild(divDesc)
    divBodyTwo.appendChild(divEm)
    divBodyTwo.appendChild(divUn)
    divBodyTwo.appendChild(divSOr)
    divBodyTwo.appendChild(divYear)
    divBodyTwo.appendChild(divCalc)
    divAcBody.appendChild(divBodyTwo)
    divCollpse.appendChild(divAcBody)
 
    button.appendChild(divName)
    button.appendChild(divCat)
    button.appendChild(divReg)
    button.appendChild(divSource) 
    h2Ac.appendChild(button)
    divAcItem.appendChild(h2Ac)
    divAcItem.appendChild(divCollpse)
   divAccordion.appendChild(divAcItem)   
}

}

//////// Dropdown options
/// NAME
const createDropdown = (liveData) => {
    const dropdown = document.querySelector("#nameIn");
    const activities = liveData.map((data) => {return data.name; });
    const uniqueActivity = [...new Set(activities)];
    //console.log(uniqueActivity); 
    uniqueActivity.forEach((uniqueName) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueName;
    option.value = uniqueName;
    dropdown.appendChild(option);
    })
}; 


/////// FUNCTION CONTROLLER 
function myController(LD) {
    createAcc(LD);
    createDropdown(LD);
    setEventlisteners(LD);
    
};

//// event listeners
const setEventlisteners = (data) => {
    document.querySelector("#nameIn").addEventListener("change", (event) => {
        //console.log('selectorworking');
        console.log(event.target.value);
        let nameValue = event.target.value
        filterDropdown(data);
        return nameValue;
    });
};

//// filter dropdown

const filterDropdown = (data) => {
    //console.log(actName);
    const dropDownValue = document.querySelector("#nameIn").value; 
    const filteredName = data.filter((data) => {
    
        return data.name === dropDownValue;
 
    })
    createAcc(filteredName);
};

fetchData();






