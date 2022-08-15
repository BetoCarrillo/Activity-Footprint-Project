/* /// PENDINGS
.Header
.Acs.desc emmissions - FINDE
.Search bar - LUNES

.combinar Filters - LUNES
.Style - MARTES 
    Flechas acc
.Ajustar Texto modal - MARTES
.Done filters button?

//// */


////// popover bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


///// FETCH DATA

let urlOne = "https://beta3.api.climatiq.io/search?results_per_page=100&page=1";
let urlTwo = "https://beta3.api.climatiq.io/search?results_per_page=100&page=2";
let urls = [urlOne,urlTwo]
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EKJJG1Y80WM90VK4107XJR1JWYDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const fetchData = async () => {
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

    const accTitles = document.getElementById("titles");
    accTitles.classList.add("invisible")
    const butClean = document.getElementById("butClean");
    butClean.classList.add("invisible");
     try {
         const responses = await Promise.all(urls.map((url) => {
            
            const response = fetch(url, requestOptions);
            return response;
        })); 
        const resultOne = await responses[0].json();
        const resultTwo = await responses[1].json();
         const allData = [...resultOne.results, ...resultTwo.results]
        
        //  displayData(allData);
        // const LD  = responses[i].results
        const spinner = document.getElementById("spinner");
         spinner.classList.remove("invisible");
        myController(allData);
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
    divAccordion.innerHTML = ""
    const spinner = document.getElementById("spinner");
    spinner.classList.add("invisible");
    const butClean = document.getElementById("butClean");
    butClean.classList.remove("invisible");
    const accTitles = document.getElementById("titles");
    accTitles.classList.remove("invisible")
  
    for (let i = 0; i < data.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item container ")
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
    button.setAttribute("aria-expanded", "true")
    button.setAttribute("aria-controls", "flush-collapseOne")
    button.setAttribute("id", "noMargin")
  
    let divName = document.createElement("div")
    divName.setAttribute("class", "col-md-3")
    divName.setAttribute("style","word-wrap: break-word")
    divName.innerHTML = data[i].name 

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-md-3")
    divCat.setAttribute("style","word-wrap: break-word")
  
    divCat.innerHTML = data[i].category

    let divReg = document.createElement("div")
        divReg.setAttribute("class", "col-md-3")
        divReg.setAttribute("style","word-wrap: break-word")
    divReg.innerHTML = data[i].region_name

    let divSource = document.createElement("a")
        divSource.setAttribute("class", "col-md-3")
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
////// Display
/* const setEventlistenersOrder = (data) => {
    document.querySelector("#butOrder").addEventListener("change", (event) => {
        let orderValue = ""
        console.log('selectorworking')
    console.log(event.target.value);
    orderValue = event.target.value
    filterOrder(data); 
    });
} */


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
///// display
const filterOrder = (data) => {
    const dropDownValueOrder = document.querySelector("#butOrder").value;
    const order =
        orderFunction((order) => {
        if (dropDownValueOrder[0].clicked == true) { console.log (data.factor.sort((a, b) => b - a))
        }
        else {
            console.log (data.factor.sort((a, b) => a - b))
        } 
    });
    createAcc(order);
}; 

////NAME

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
        return (data.name === dropDownValueAct || dropDownValueAct === "all") 
            && (data.category === dropDownValueCat || dropDownValueCat === "all")
            && (data.region_name === dropDownValueReg || dropDownValueReg === "all")
            && (data.source === dropDownValueSo || dropDownValueSo === "all")
            && (data.factor_calculation_origin === dropDownValueOr || dropDownValueOr === "all")
            && (data.year === dropDownValueYe || dropDownValueYe === "all")
            && (data.factor_calculation_method === dropDownValueMet || dropDownValueMet === "all")
            && (data.unit === dropDownValueUn || dropDownValueUn === "all");
    })
    console.log(filteredData);
    createAcc(filteredData)
};

/////CATEGORY

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
/////// REGION


/* const filterDropdownReg = (data) => {
    const dropDownValue = document.querySelector("#regIn").value; 
    const filteredReg = data.filter((data) => {
        return data.region_name  === dropDownValue;  
    })
   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredReg); 
}
}; 

/////SOURCE

/* const filterDropdownSo = (data) => {
    const dropDownValue = document.querySelector("#soIn").value; 
    const filteredSo = data.filter((data) => {
        return data.source === dropDownValue || dropDownValue === "all"; 
    })
   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredSo); 
}

};  */
 

/////ORIGIN

/* const filterDropdownOr = (data) => {
    const dropDownValue = document.querySelector("#orIn").value; 
    const filteredOr = data.filter((data) => {
        return data.factor_calculation_origin  === dropDownValue || dropDownValue === "all"; 
    })
   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredOr); 
}
};  */


/////YEAR

/* const filterDropdownYe = (data) => {
    const dropDownValue = document.querySelector("#yeIn").value; 
    const filteredYe = data.filter((data) => {
        return data.year  === dropDownValue;  
    })
   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredYe); 
}
};  */
 

/////CALCULATION METHOD

/* const filterDropdownMet = (data) => {
    const dropDownValue = document.querySelector("#metIn").value; 
    const filteredMet = data.filter((data) => {
        return data.factor_calculation_method  === dropDownValue || dropDownValue === "all";   
    })
if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredMet); 
}
};
 */

/////UNIT TYPE

/* const filterDropdownUn = (data) => {
    const dropDownValue = document.querySelector("#unIn").value; 
    const filteredUn = data.filter((data) => {
        return data.unit  === dropDownValue || dropDownValue === "all";   
    })
if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredUn); 
}
};  */



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


/////// FUNCTION CONTROLLER ////////////////////////////////////////////
function myController(data) {
    
//setEventlistenersOrder(data);
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
fetchData();