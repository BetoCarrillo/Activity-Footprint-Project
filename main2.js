// console.log(data.results);
console.log(response2)
const myData = response2.results;

const divAccordion = document.getElementById("accordionPanelsStayOpenExample");

for (let i = 0; i < response2.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item")
    divAcItem.setAttribute("class", "container")

    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("class", "accordion-header")
    h2Ac.setAttribute("class", "row")
    h2Ac.setAttribute("id", "panelsStayOpen-headingOne" + i)

    let divName = document.createElement("div")
    divName.setAttribute("class", "col-sm-3")
    divName.innerHTML = response2[i].name

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-sm-2")
    divCat.innerHTML = response2[i].category

let divReg = document.createElement("div")
    divReg.setAttribute("class", "col-sm-3")
    divReg.innerHTML = response2[i].region_name

    let divSource = document.createElement("div")
    divSource.setAttribute("class", "col-sm-2")
    divSource.innerHTML = response2[i].source
    
   /*  let divBut = document.createElement("div")
    divBut.setAttribute("class", "col-sm-2") */
    


    let button = document.createElement("button")
    button.setAttribute("class", "accordion-button collapsed")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne"+i)
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-controls", "panelsStayOpen-collapseOne" + i)

  

    let divCollpse = document.createElement("div")
    divCollpse.setAttribute("id", "panelsStayOpen-collapseOne"+i)
    divCollpse.setAttribute("class", "accordion-collapse collapse")
    divCollpse.setAttribute("aria-labelledby", "panelsStayOpen-headingOne"+i)

    let divAcBody = document.createElement("div")
    divAcBody.setAttribute("class", "accordion-body")
    divAcBody.setAttribute("class", "row")
    
    let p = document.createElement("p")
    p.innerHTML = response2[i].factor

    divAcBody.appendChild(p)
    
    divCollpse.appendChild(divAcBody)
    button.appendChild(divName)
    button.appendChild(divCat)
    button.appendChild(divReg)
    button.appendChild(divSource)
    h2Ac.appendChild(button)
    //h2Ac.appendChild(divBut)
   // divBut.appendChild(button)
    divAcItem.appendChild(h2Ac)

    divAcItem.appendChild(divCollpse)
    divAccordion.appendChild(divAcItem)
    
    
}
