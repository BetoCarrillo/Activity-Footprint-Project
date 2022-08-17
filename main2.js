/* /// To Dos
.Acs.desc emmissions 
.Deploy
.Fetch more pages
*/



// ///// FETCH DATA

// let urlOne = `https://beta3.api.climatiq.io/search?results_per_page=100&page=1&uuid = ${id}`;
// let urlTwo = "https://beta3.api.climatiq.io/search?results_per_page=100&page=2";
// let urls = [urlOne,urlTwo]
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };
     
// try {  
//     fetch(urlOne, requestOptions)
//         .then((response) => {
//             return response.json();
//         }).then((result) => {
//             LD = result.results
//             myController(LD);
//             const spinner = document.getElementById("spinner");
//             spinner.classList.remove("invisible");
//             const accTitles = document.getElementById("titles");
//             accTitles.classList.add("invisible")
//         })}catch (error) {
//     console.log(error)
   
//     }
    
    // Promise.all(urls.map((url) => {
      
    // return fetch(url,requestOptions).then(response=> response.json())
    // })).then((results) => console.log('allData :>> ', results))

    //const accTitles = document.getElementById("titles");
    //accTitles.classList.add("invisible")
///POPOVERS 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



////////////////// Geolocation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getRegLocation);
  } else {
    alert("Geolocation not accepted")
  }
}

async function getRegLocation(position) {
    //console.log(position);
    const {latitute, longitude} = position.coords
    let url = `//api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitute}&longitude=${longitude}&localityLanguage=en`
    try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data);
        fetchDataGeo(data.countryCode);
    } catch (error) {
        console.log(error);
    }

}
/////// FETCH DATA GEOLOCATION

const fetchDataGeo = async (countryCode) => {

let urlOne = `https://beta3.api.climatiq.io/search?results_per_page=100&page=1&region=${countryCode}`;
let urlTwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=2&region=${countryCode}`; 
let urlThree = `https://beta3.api.climatiq.io/search?results_per_page=100&page=3&region=${countryCode}`; 
let urlfour = `https://beta3.api.climatiq.io/search?results_per_page=100&page=4&region=${countryCode}`; 
let urlfive = `https://beta3.api.climatiq.io/search?results_per_page=100&page=5&region=${countryCode}`; 
let urlsix = `https://beta3.api.climatiq.io/search?results_per_page=100&page=6&region=${countryCode}`; 

    let urls = [urlOne, urlTwo, urlThree, urlfour, urlfive, urlsix];
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
 
     try {
         const responses = await Promise.all(urls.map((url) => {
            
             const response = fetch(url, requestOptions);
             
            return response;
        })); 
        const resultOne = await responses[0].json();
         const resultTwo = await responses[1].json();
         const resultThree = await responses[2].json();
         const resultFour = await responses[3].json();
         const resulFive = await responses[4].json();
         const resultSix = await responses[5].json();
         const allData = [...resultOne.results, ...resultTwo.results, ...resultThree.results, ...resultFour.results, ...resulFive.results, ...resultSix.results]
        
        createAcc(allData)
        
     } catch (error) {
         console.log('error :>> ', error);
    } 
    
}; 


///// FETCH DATA
const fetchData = async (data) => {

let urlOne = `https://beta3.api.climatiq.io/search?results_per_page=100&page=1`;
    let urlTwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=2`; 
    let urlThree = `https://beta3.api.climatiq.io/search?results_per_page=100&page=3`; 
    let urlFour = `https://beta3.api.climatiq.io/search?results_per_page=100&page=4`; 
    let urlFive = `https://beta3.api.climatiq.io/search?results_per_page=100&page=5`; 
    let urlSix = `https://beta3.api.climatiq.io/search?results_per_page=100&page=6`; 
    let urlSeven = `https://beta3.api.climatiq.io/search?results_per_page=100&page=7`; 
    let urlEight = `https://beta3.api.climatiq.io/search?results_per_page=100&page=8`; 
    let urlNine = `https://beta3.api.climatiq.io/search?results_per_page=100&page=9`; 
    let urlTen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=10`; 
     let urlEleven = `https://beta3.api.climatiq.io/search?results_per_page=100&page=11`; 
    let urlTwelve = `https://beta3.api.climatiq.io/search?results_per_page=100&page=12`; 
    let urlThirteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=13`; 
    let urlFourteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=14`; 
    let urlFifteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=15`; 
    let urlSixteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=16`; 
    let urlSeventeen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=17`; 
    let urlEighteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=18`; 
    let urlNineteen = `https://beta3.api.climatiq.io/search?results_per_page=100&page=19`; 
    let urlTwenty = `https://beta3.api.climatiq.io/search?results_per_page=100&page=20`; 
    let urlTwone = `https://beta3.api.climatiq.io/search?results_per_page=100&page=21`; 
    let urlTwtwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=22`; 
    let urlTwthree = `https://beta3.api.climatiq.io/search?results_per_page=100&page=23`; 
    let urlTwfour = `https://beta3.api.climatiq.io/search?results_per_page=100&page=24`; 
    let urlTwfive = `https://beta3.api.climatiq.io/search?results_per_page=100&page=25`; 
    let urlTwsix = `https://beta3.api.climatiq.io/search?results_per_page=100&page=26`; 
    let urlTwseven = `https://beta3.api.climatiq.io/search?results_per_page=100&page=27`; 
    let urlTweight = `https://beta3.api.climatiq.io/search?results_per_page=100&page=28`; 
    let urlTwnine = `https://beta3.api.climatiq.io/search?results_per_page=100&page=29`; 
    let urlThirty = `https://beta3.api.climatiq.io/search?results_per_page=100&page=30`; 
    let urlThone = `https://beta3.api.climatiq.io/search?results_per_page=100&page=31`; 
    let urlThtwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=32`; 
    let urlThthree = `https://beta3.api.climatiq.io/search?results_per_page=100&page=33`; 
    let urlThfour = `https://beta3.api.climatiq.io/search?results_per_page=100&page=34`; 
    let urlThfive = `https://beta3.api.climatiq.io/search?results_per_page=100&page=35`; 
    let urlThsix = `https://beta3.api.climatiq.io/search?results_per_page=100&page=36`; 
    let urlThseven = `https://beta3.api.climatiq.io/search?results_per_page=100&page=37`; 
    let urlTheight = `https://beta3.api.climatiq.io/search?results_per_page=100&page=38`; 
    let urlThnine = `https://beta3.api.climatiq.io/search?results_per_page=100&page=39`; 
    let urlForty = `https://beta3.api.climatiq.io/search?results_per_page=100&page=40`; 
    let urlFoone = `https://beta3.api.climatiq.io/search?results_per_page=100&page=41`; 
    let urlFotwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=42`; 
    let urlFothree = `https://beta3.api.climatiq.io/search?results_per_page=100&page=43`; 
    let urlFofour = `https://beta3.api.climatiq.io/search?results_per_page=100&page=44`; 
    let urlFofive = `https://beta3.api.climatiq.io/search?results_per_page=100&page=45`; 
    let urlFosix = `https://beta3.api.climatiq.io/search?results_per_page=100&page=46`; 
    let urlFoseven = `https://beta3.api.climatiq.io/search?results_per_page=100&page=47`; 
    let urlFoeight = `https://beta3.api.climatiq.io/search?results_per_page=100&page=48`; 
    let urlFonine = `https://beta3.api.climatiq.io/search?results_per_page=100&page=49`; 
    let urlFifty = `https://beta3.api.climatiq.io/search?results_per_page=100&page=50`; 
    
let urls = [urlOne,urlTwo, urlThree, urlFour, urlFive, urlSix, urlSeven, urlEight, urlNine, urlTen, urlEleven, urlTwelve, urlThirteen, urlFourteen, urlFifteen, urlSixteen, urlSeventeen, urlEighteen, urlNineteen, urlTwenty, urlTwone, urlTwtwo, urlTwthree, urlTwfour, urlTwfive, urlTwsix, urlTwseven, urlTweight, urlTwnine, urlThirty, urlThone, urlThtwo, urlThthree, urlThfour, urlThfive, urlThsix, urlThseven, urlTheight, urlThnine, urlForty, urlFoone, urlFotwo, urlFothree, urlFofour, urlFofive, urlFosix,urlFoseven, urlFoeight,urlFonine, urlFifty]
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
  
     try {
         const responses = await Promise.all(urls.map((url) => {
            
             const response = fetch(url, requestOptions);
             
            return response;
        })); 
        const resultOne = await responses[0].json();
         const resultTwo = await responses[1].json();
         const resultThree = await responses[2].json();
         const resultFour = await responses[3].json();
         const resultFive = await responses[4].json();
         const resultSix = await responses[5].json();
         const resultSeven = await responses[6].json();
         const resultEight = await responses[7].json();
         const resultNine = await responses[8].json();
          const resultTen = await responses[9].json();
         const resultEleven = await responses[10].json();
         const resultTwelve = await responses[11].json();
         const resultThirteen = await responses[12].json();
         const resultFourteen = await responses[13].json();
         const resultFifteen = await responses[14].json();
         const resultSixteen = await responses[15].json();
          const resultSeventeen = await responses[16].json();
         const resultEighteen = await responses[17].json();
         const resultNineteen = await responses[18].json();
         const resultTwenty = await responses[19].json();
         const resultTwone = await responses[20].json();
         const resultTwtwo = await responses[21].json();
         const resultTwthree = await responses[22].json();
          const resultTwfour = await responses[23].json();
         const resultTwfive = await responses[24].json();
         const resultTwsix = await responses[25].json();
         const resultTwseven = await responses[26].json();
         const resultTweight = await responses[27].json();
         const resultTwnine = await responses[28].json();
         const resultThirty = await responses[29].json();
          const resultThone = await responses[30].json();
         const resultThtwo = await responses[31].json();
         const resultThthree = await responses[32].json();
         const resultThfour = await responses[33].json();
         const resultThfive = await responses[34].json();
         const resultThsix = await responses[35].json();
         const resultThseven = await responses[36].json();
         const resultTheight = await responses[37].json();
         const resultThnine = await responses[38].json();
          const resultForty = await responses[39].json();
         const resultFoone = await responses[40].json();
         const resultFotwo = await responses[41].json();
         const resultFothree = await responses[42].json();
         const resultFofour = await responses[43].json();
         const resultFofive = await responses[44].json();
         const resultFosix = await responses[45].json();
         const resultFoseven = await responses[46].json();
         const resultFoeight = await responses[47].json();
          const resultFonine = await responses[48].json();
         const resultFifty = await responses[49].json();
                     
         const allData = [...resultOne.results, ...resultTwo.results, ...resultThree.results, ...resultFour.results, ...resultFive.results, ...resultSix.results, ...resultSeven.results, ...resultEight.results, ...resultNine.results, ...resultTen.results, ...resultEleven.results, ...resultTwelve.results, ...resultThirteen.results, ...resultFourteen.results, ...resultFifteen.results, ...resultSixteen.results, ...resultSeventeen.results, ...resultEighteen.results, ...resultNineteen.results, ...resultTwenty.results, ...resultTwone.results, ...resultTwtwo.results, ...resultTwthree.results, ...resultTwfour.results, ...resultTwfive.results, ...resultTwsix.results, ...resultTwseven.results, ...resultTweight.results, ...resultTwnine.results, ...resultThirty.results,...resultThone.results, ...resultThtwo.results, ...resultThthree.results, ...resultThfour.results, ...resultThfive.results, ...resultThsix.results, ...resultThseven.results, ...resultTheight.results, ...resultThnine.results, ...resultForty.results, ...resultFoone.results, ...resultFotwo.results, ...resultFothree.results, ...resultFofour.results, ...resultFofive.results, ...resultFosix.results, ...resultFoseven.results, ...resultFoeight.results, ...resultFonine.results, ...resultFifty.results]
        
         myController(allData)
        
     } catch (error) {
         console.log('error :>> ', error);
    } 
    
}; 

/////// FETCH DATA SEARCH

const fetchDataSearch = async () => {

let urlOne = `https://beta3.api.climatiq.io/search?results_per_page=100&page=1&query=${query}`;
let urlTwo = `https://beta3.api.climatiq.io/search?results_per_page=100&page=2&query=${query}`; 

let urls = [urlOne,urlTwo]
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

     try {
         const responses = await Promise.all(urls.map((url) => {
            
             const response = fetch(url, requestOptions);
             
            return response;
        })); 
        const resultOne = await responses[0].json();
        const resultTwo = await responses[1].json();
         const allData = [...resultOne.results, ...resultTwo.results]
        
         myController(allData)
        
     } catch (error) {
         console.log('error :>> ', error);
    } 
    
}; 
    
/* function fetchData() {
    fetch(url, requestOptions)
        .then((response) => {
            return response.json();
        }).then((result) => {myController(result);})
        .catch((error) => console.log(error)); 

} */


///// FILTERS Initial Q.

////////////// ACCORDION

const createAcc = (data) => {
    
    const divAccordion = document.getElementById("accordionFlushExample");
    divAccordion.innerHTML = "";
    document.getElementById("searchBar").value = "";
    const spinner = document.getElementById("spinner");
    spinner.classList.add("invisible");
    const butClean = document.getElementById("butClean");
    butClean.classList.remove("invisible");
/*     const butOrder = document.getElementById("butOrder");
    butOrder.classList.remove("invisible"); */
    const butDone = document.getElementById("butDone");
    butDone.classList.remove("invisible");
    const accTitles = document.getElementById("titles");
    accTitles.classList.remove("invisible")
 
    for (let i = 0; i < data.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", " shadow-sm  accordion-item containers")
    divAcItem.setAttribute("style", "background-color: rgb(221, 221, 221);")
   
    
    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("id", "flush-headingOne")
    h2Ac.setAttribute("class", " accordion-header ")
    h2Ac.setAttribute("style", "background-color: rgb(221, 221, 221) !important;")
 

    let button = document.createElement("button")
    button.setAttribute("class", " text-start accordion-button collapsed row")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#flush-collapseOne"+i)
    button.setAttribute("aria-expanded", "true")
    button.setAttribute("aria-controls", "flush-collapseOne")
    button.setAttribute("id", "noMargin")
    button.setAttribute("style", "background-color: white !important; color: black; padding:8px;  box-shadow: black !important;")
       
    let divName = document.createElement("div")
    divName.setAttribute("class", "col-md-3 nameSize")
    divName.setAttribute("style","word-wrap: break-word")
    divName.innerHTML = data[i].name 

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-md-3 infoSize")
    divCat.setAttribute("style","word-wrap: break-word")
  
    divCat.innerHTML = data[i].category

    let divReg = document.createElement("div")
        divReg.setAttribute("class", "col-md-3 infoSize")
        divReg.setAttribute("style","word-wrap: break-word")
    divReg.innerHTML = data[i].region_name

    let divSource = document.createElement("a")
        divSource.setAttribute("class", "col-md-3 sourceSize")
        divSource.setAttribute("href", `${data[i].source_link}`)
    divSource.innerHTML = data[i].source
    
    
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
    divEm.innerHTML = "<b>Emission Factors: </b>" + data[i].factor
    divEm.setAttribute("class", "col-md-12")

    let divUn = document.createElement("div")
    divUn.innerHTML = "<b>Unit type: </b>" + data[i].unit
    divUn.setAttribute("class", "col-md-12")

    let divSOr = document.createElement("div")
    divSOr.innerHTML = "<b>Origin: </b>" + data[i].factor_calculation_origin
    divSOr.setAttribute("class", "col-md-12")
   
    let divYear = document.createElement("div")
    divYear.innerHTML = "<b>Year: </b>" + data[i].year
    divYear.setAttribute("class", "col-md-12")

    let divCalc = document.createElement("div")
    divCalc.innerHTML =  
        "<b>Calculation Method: </b>"
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

//////// Dropdown options////////////////////////////////////////////
////////// Display

/// NAME
const createDropdown = (liveData) => {
    const dropdown = document.querySelector("#nameIn");
    const activities = liveData.map((data) => { return data.name; });
    const uniqueActivity = [...new Set(activities)];
    uniqueActivity.sort();
    //console.log(uniqueActivity); 
    uniqueActivity.forEach((uniqueName) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueName;
    option.value = uniqueName;
    dropdown.appendChild(option);
    })
}; 

/////CATEGORY

const createDropdownCat = (liveData) => {
    const dropdown = document.querySelector("#catIn");
    const categories = liveData.map((data) => {return data.category;});
    const uniqueCat = [...new Set(categories)];
    uniqueCat.sort();
    uniqueCat.forEach((uniqueCat) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueCat;
    option.value = uniqueCat;
    dropdown.appendChild(option);
    })
}; 


/////REGION
const createDropdownReg = (liveData) => {
    const dropdown = document.querySelector("#regIn");
    const regions = liveData.map((data) => {return data.region_name;});
    const uniqueReg = [...new Set(regions)];
    uniqueReg.sort();
    uniqueReg.forEach((uniqueReg) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueReg;
    option.value = uniqueReg;
    dropdown.appendChild(option);
    })
}; 


/////SOURCE
const createDropdownSo = (liveData) => {
    const dropdown = document.querySelector("#soIn");
    const sources = liveData.map((data) => {return data.source;});
    const uniqueSo = [...new Set(sources)];
    uniqueSo.sort();
    uniqueSo.forEach((uniqueSo) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueSo;
    option.value = uniqueSo;
    dropdown.appendChild(option);
    })
}; 

/////ORIGIN

const createDropdownOr = (liveData) => {
    const dropdown = document.querySelector("#orIn");
    const origins = liveData.map((data) => {return data.factor_calculation_origin;});
    const uniqueOr = [...new Set(origins)];
    uniqueOr.forEach((uniqueOr) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueOr;
    option.value = uniqueOr;
    dropdown.appendChild(option);
    })
}; 

/////YEAR

const createDropdownYe = (liveData) => {
    const dropdown = document.querySelector("#yeIn");
    const years = liveData.map((data) => {return data.year;});
    const uniqueYe = [...new Set(years)];
    uniqueYe.sort();
    uniqueYe.forEach((uniqueYe) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueYe;
    option.value = uniqueYe;
    dropdown.appendChild(option);
    })
}; 


/////CALCULATION METHOD

const createDropdownMet = (liveData) => {
    const dropdown = document.querySelector("#metIn");
    const methods = liveData.map((data) => {return data.factor_calculation_method;});
    const uniqueMet = [...new Set(methods)];
    uniqueMet.forEach((uniqueMet) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueMet;
    option.value = uniqueMet;
    dropdown.appendChild(option);
    })
}; 


/////UNIT TYPE

const createDropdownUn = (liveData) => {
    const dropdown = document.querySelector("#unIn");
    const units = liveData.map((data) => {return data.unit;});
    const uniqueUn = [...new Set(units)];
    uniqueUn.forEach((uniqueUn) => {
    let option = document.createElement("option");
    option.innerHTML = uniqueUn;
    option.value = uniqueUn;
    dropdown.appendChild(option);
    })
}; 


//// EVENTS////////////////////////////////////////////
/// NAME
const setEventlisteners = (data) => {
    
    document.querySelector("#nameIn").addEventListener("change", (event) => {
        let nameValue = ""
        //console.log('selectorworking');
        console.log(event.target.value);
        nameValue = event.target.value
        filterDropdown(data); 
    });
};

/////CATEGORY

const setEventlistenersCat = (data) => {
    document.querySelector("#catIn").addEventListener("change", (event) => {
        let catValue = ""
        console.log(event.target.value);
        catValue = event.target.value
        filterDropdown(data); 
    });
};

////REGION

const setEventlistenersReg = (data) => {
    document.querySelector("#regIn").addEventListener("change", (event) => {
        let regValue = ""
        //console.log('selectorworking');
        console.log(event.target.value);
        regValue = event.target.value
        filterDropdown(data); 
    });
};

/////SOURCE
const setEventlistenersSo = (data) => {
    document.querySelector("#soIn").addEventListener("change", (event) => {
        let soValue = ""
        console.log(event.target.value);
        soValue = event.target.value
        filterDropdown(data); 
    });
};


/////ORIGIN

const setEventlistenersOr = (data) => {
    document.querySelector("#orIn").addEventListener("change", (event) => {
        let orValue = ""
        console.log(event.target.value);
        orValue = event.target.value
        filterDropdown(data); 
    });
};


/////YEAR

const setEventlistenersYe = (data) => {
   
    document.querySelector("#yeIn").addEventListener("change", (event) => {
        let yeValue = ""
        console.log(event.target.value);
        yeValue = event.target.value
        filterDropdown(data); 
    });
};


/////CALCULATION METHOD

const setEventlistenersMet = (data) => {
    document.querySelector("#metIn").addEventListener("change", (event) => {
        let metValue = ""
        console.log(event.target.value);
        metValue = event.target.value
        filterDropdown(data); 
    });
};


/////UNIT TYPE

const setEventlistenersUn = (data) => {
    document.querySelector("#unIn").addEventListener("change", (event) => {
        let unValue = ""
        console.log(event.target.value);
        unValue = event.target.value
        filterDropdown(data); 
    });
};


//// filter dropdowns////////////////////////////////////////////
////FILTERS DROPDOWN

const filterDropdown = (data) => {
    const dropDownValueAct = document.querySelector("#nameIn").value; 
    const dropDownValueCat = document.querySelector("#catIn").value; 
    const dropDownValueReg = document.querySelector("#regIn").value; 
    const dropDownValueSo = document.querySelector("#soIn").value; 
    const dropDownValueOr = document.querySelector("#orIn").value; 
    const dropDownValueYe = document.querySelector("#yeIn").value; 
    const dropDownValueMet = document.querySelector("#metIn").value; 
    const dropDownValueUn = document.querySelector("#unIn").value; 
    const filteredData = data.filter((data) => {
        return ((  dropDownValueAct === "all"||data.name === dropDownValueAct ||  dropDownValueAct === 0) 
            && ( dropDownValueCat === "all"||data.category === dropDownValueCat ||dropDownValueCat === 0 ) 
            && (data.region_name === dropDownValueReg || dropDownValueReg === "all" ||dropDownValueReg === 0)  
            && (data.source === dropDownValueSo || dropDownValueSo === "all" ||dropDownValueSo === 0)
            && (data.factor_calculation_origin === dropDownValueOr || dropDownValueOr === "all"||dropDownValueOr === 0)
            && (data.year === dropDownValueYe || dropDownValueYe === "all"||dropDownValueYe === 0)
            && (data.factor_calculation_method === dropDownValueMet || dropDownValueMet === "all"||dropDownValueMet === 0)
            && (data.unit === dropDownValueUn || dropDownValueUn === "all"||dropDownValueUn === 0)); 
    })
   
    createAcc(filteredData)
};


////////////// Back to top button
/* topButton = document.getElementById("buttonTop");
window.onscroll = function () {scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; 
} */


/////// Clean button
const butClean = document.getElementById('butClean');
butClean.addEventListener('click', () => { 
    window.location.reload()
}); 


//////// ORDER
////EVENT 
/* const setEventlistenersOrder = (data) => { 
    document.querySelector("#butOrder").addEventListener("change", (event) => {
        let orderValue = ""
        console.log(event.target.value);
        orderValue = event.target.value
        filterOrder(data); 
    });
}  */


/* const setEventlistenersOr = (data) => {
    document.querySelector("#orIn").addEventListener("change", (event) => {
        let orValue = ""
        console.log(event.target.value);
        orValue = event.target.value
        filterDropdown(data); 
    });
}; */


///// filter ORDER
/* const filterOrder = (data) => {
    const dropDownValueOrder = document.querySelector("#butOrder").index;   
    let order = ""
    order.forEach(data => {data.factor.sort((a, b) => a - b)  
    });

    // createAcc(ordered);
    
    


    //const ordered = orderFunction((data) => {
      //  console.log('works');
    //});
   
};  */

/* const filterDropdownCat = (data) => {
    const dropDownValue = document.querySelector("#catIn").value; 
    const filteredCat = data.filter((data) => {
        return data.category === dropDownValue || dropDownValue === "all";
    })
  if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredCat); 
}
}; 
 */

////////////////////// SEARCH BAR /////////////////////
////// Event
const searchEvent = () => {
    const search = document.getElementById("searchBar");
    const buttonSearch = document.getElementById("searchBut");
    search.addEventListener("input", (event) => {
    query = event.target.value;
     
    });
    search.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            fetchDataSearch(query)
            //createAcc(query);
        }
    });
    
    buttonSearch.addEventListener("click", () => {
        if (searchBar.value === "") {
    window.alert("Please search for something (or use the filters)")
        } else { fetchDataSearch(query); }
        
    });

}  

/////// Clean button
/* const butClean = document.getElementById('butClean');
butClean.addEventListener('click', () => { 
    window.location.reload()
}); 
 */

/////// FUNCTION CONTROLLER ////////////////////////////////////////////
function myController(data) {
   
    getLocation(data);
    fetchDataGeo(data);
    searchEvent(data);
 //   setEventlistenersOrder(data);
  //  filterOrder (data);
    createDropdown(data);
    setEventlisteners(data);
    createDropdownReg(data);
    setEventlistenersReg(data);
    createDropdownCat(data);
    setEventlistenersCat(data);
    createDropdownSo(data);
    setEventlistenersSo(data);
    createDropdownOr(data);
    setEventlistenersOr(data);
    createDropdownYe(data);
    setEventlistenersYe(data);
    createDropdownMet(data);
    setEventlistenersMet(data);
    createDropdownUn(data);
    setEventlistenersUn(data);
    
};

fetchData()
 

