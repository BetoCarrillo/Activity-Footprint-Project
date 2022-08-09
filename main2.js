// Local data results

//console.log(response)
//console.log(response2)

const divAccordion = document.getElementById("accordionPanelsStayOpenExample");


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
            myController(result); 
            let liveData = result.results;
            createAcc(liveData);
            createDropdown(liveData);
        })
     
    
} catch (error) {
    console.log(error)
}

}

fetchData()

////////////// ACCORDION


const createAcc = (liveData) => {

    for (let i = 0; i < liveData.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item container")
    divAcItem.setAttribute("style", "background-color: #e7f1ff")
    divAcItem.setAttribute("id", "noPad")


    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("id", "panelsStayOpen-headingOne")
    h2Ac.setAttribute("class", "accordion-header ")
 

    let button = document.createElement("div")
    button.setAttribute("class", "text-start accordion-button  row")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne"+i)
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-controls", "panelsStayOpen-collapseOne")
    button.setAttribute("id", "noMargin")
  
/// AJUSTAR TITULOS PEQUE
    let divName = document.createElement("div")
    divName.setAttribute("class", "col-md-3")
    divName.innerHTML = liveData[i].name

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-md-3")
    divCat.innerHTML = liveData[i].category
    //divCat.classList.add("red")
    //divCat.setAttribute("style", "color: red")

    let divReg = document.createElement("div")
    divReg.setAttribute("class", "col-md-3")
    divReg.innerHTML = liveData[i].region_name

    let divSource = document.createElement("div")
    divSource.setAttribute("class", "col-md-3")
    divSource.innerHTML = liveData[i].source
     // LINKEAR SOURCE LINK
    
    let divCollpse = document.createElement("div")
    divCollpse.setAttribute("id", "panelsStayOpen-collapseOne"+i)
    divCollpse.setAttribute("class", "accordion-collapse collapse container text-start")
    divCollpse.setAttribute("aria-labelledby", "panelsStayOpen-headingOne")

    let divAcBody = document.createElement("div")
    divAcBody.setAttribute("class", "accordion-body row")

    let divBodyTwo = document.createElement("div")
    divBodyTwo.setAttribute("class", "col-md-4")

    let divDesc = document.createElement("div")
    divDesc.innerHTML = liveData[i].description
    divDesc.setAttribute("class", "col-md-8")

    let divEm = document.createElement("div")
    divEm.innerHTML = "Emission Factors: " +liveData[i].factor
    divEm.setAttribute("class", "col-md-12")

    let divUn = document.createElement("div")
    divUn.innerHTML = "Unit Type: " +liveData[i].unit
    divUn.setAttribute("class", "col-md-12")

    let divSOr = document.createElement("div")
    divSOr.innerHTML = "Origin: " + liveData[i].factor_calculation_origin
    divSOr.setAttribute("class", "col-md-12")
   
    let divYear = document.createElement("div")
    divYear.innerHTML = "Year: " +liveData[i].year
    divYear.setAttribute("class", "col-md-12")

    let divCalc = document.createElement("div")
    divCalc.innerHTML =  
        "Calculation Method: "
    + liveData[i].factor_calculation_method 
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
const createDropdown = (liveData) => {
    const dropdown = document.getElementById("name");
    liveData.forEach((name)=> {console.log(liveData.name)})

}; 


/////// CONTROLLER 

function myController(result) {
   

   
}

//// event listeners
const setEvent = () => {
    document.querySelector("#Name").addEventListener("change", (event) => {});
 
}

//// filter dropdown

const filterDropdown = () => {
    const dropDownValue = document.querySelector("#Name").value;
};







