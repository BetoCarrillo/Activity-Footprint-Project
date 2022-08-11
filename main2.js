/* /// PENDINGS
.Ajustar flechas accordion
.Poner link source
.AJUSTAR bold titulos: pantalla pequeña
.footer
.combinar rilters 
.Acs.desc emmissions
.Search bar - FINDE
.Style - MARTES 
.Pagination?
.Geolocation?

//// */


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

const createAcc = (data) => {
    const divAccordion = document.getElementById("accordionFlushExample");
   divAccordion.innerHTML=""
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
    button.setAttribute("aria-expanded", "true")
    button.setAttribute("aria-controls", "flush-collapseOne")
    button.setAttribute("id", "noMargin")
  
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

//////// Dropdown options////////////////////////////////////////////
/// NAME
const createDropdown = (liveData) => {
    const dropdown = document.querySelector("#nameIn");
    const activities = liveData.map((data) => { return data.name; });
    const uniqueActivity = [...new Set(activities)];
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



/////// FUNCTION CONTROLLER ////////////////////////////////////////////
function myController(data) {
    createAcc(data);

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

//// event listeners////////////////////////////////////////////
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
        filterDropdownCat(data); 
    });
};

////REGION

const setEventlistenersReg = (data) => {
    document.querySelector("#regIn").addEventListener("change", (event) => {
        let regValue = ""
        //console.log('selectorworking');
        console.log(event.target.value);
        regValue = event.target.value
        filterDropdownReg(data); 
    });
};

/////SOURCE
const setEventlistenersSo = (data) => {
    document.querySelector("#soIn").addEventListener("change", (event) => {
        let soValue = ""
        console.log(event.target.value);
        soValue = event.target.value
        filterDropdownSo(data); 
    });
};


/////ORIGIN

const setEventlistenersOr = (data) => {
    document.querySelector("#orIn").addEventListener("change", (event) => {
        let orValue = ""
        console.log(event.target.value);
        orValue = event.target.value
        filterDropdownOr(data); 
    });
};


/////YEAR

const setEventlistenersYe = (data) => {
    document.querySelector("#yeIn").addEventListener("change", (event) => {
        let yeValue = ""
        console.log(event.target.value);
        yeValue = event.target.value
        filterDropdownYe(data); 
    });
};


/////CALCULATION METHOD

const setEventlistenersMet = (data) => {
    document.querySelector("#metIn").addEventListener("change", (event) => {
        let metValue = ""
        console.log(event.target.value);
        metValue = event.target.value
        filterDropdownMet(data); 
    });
};


/////UNIT TYPE

const setEventlistenersUn = (data) => {
    document.querySelector("#unIn").addEventListener("change", (event) => {
        let unValue = ""
        console.log(event.target.value);
        unValue = event.target.value
        filterDropdownUn(data); 
    });
};


//// filter dropdowns////////////////////////////////////////////
////NAME
const filterDropdown = (data) => {
    //console.log(actName);
    const dropDownValue = document.querySelector("#nameIn").value; 
    const filteredName = data.filter((data) => {
        return data.name === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredName); 
}
};

/////CATEGORY

const filterDropdownCat = (data) => {
    const dropDownValue = document.querySelector("#catIn").value; 
    const filteredCat = data.filter((data) => {
        return data.category === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredCat); 
}
};

/////// REGION

const filterDropdownReg = (data) => {
    const dropDownValue = document.querySelector("#regIn").value; 
    const filteredReg = data.filter((data) => {
        return data.region_name === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredReg); 
}
};

/////SOURCE

const filterDropdownSo = (data) => {
    const dropDownValue = document.querySelector("#soIn").value; 
    const filteredSo = data.filter((data) => {
        return data.source === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredSo); 
}
};


/////ORIGIN

const filterDropdownOr = (data) => {
    const dropDownValue = document.querySelector("#orIn").value; 
    const filteredOr = data.filter((data) => {
        return data.factor_calculation_origin === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredOr); 
}
};


/////YEAR

const filterDropdownYe = (data) => {
    const dropDownValue = document.querySelector("#yeIn").value; 
    const filteredYe = data.filter((data) => {
        return data.year === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredYe); 
}
};


/////CALCULATION METHOD

const filterDropdownMet = (data) => {
    const dropDownValue = document.querySelector("#metIn").value; 
    const filteredMet = data.filter((data) => {
        return data.factor_calculation_method === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredMet); 
}
};


/////UNIT TYPE

const filterDropdownUn = (data) => {
    const dropDownValue = document.querySelector("#unIn").value; 
    const filteredUn = data.filter((data) => {
        return data.unit === dropDownValue;  
    })

   if ( dropDownValue === "all") {createAcc(data)
    createAcc(data);
} else {createAcc(filteredUn); 
}
};


fetchData();


    

