// console.log(data.results);
console.log(response2)
const myData = response2.results;
const divAccordion = document.getElementById("accordionPanelsStayOpenExample");




///////////////////////// THIRD TRY
/* 



for (let i = 0; i < response2.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item")
    
    let h2Ac = document.createElement("h2")
    h2Ac.classList.add("class", "accordion-header")
    h2Ac.setAttribute("id", "panelsStayOpen-headingOne")
    

    let divBut = document.createElement("div")
    

    let button = document.createElement("button")
    button.classList.add("class", "accordion-button")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne"+[i])
    button.setAttribute("aria-expanded", "true")
    button.setAttribute("aria-controls", "panelsStayOpen-collapseOne")
    

    let divName = document.createElement("div")
    divName.innerHTML = response2[i].name
  

    let divCat = document.createElement("div")
    divCat.innerHTML = response2[i].category
  

    let divReg = document.createElement("div")
    divReg.innerHTML = response2[i].region_name


    let divSource = document.createElement("div")
    divSource.innerHTML = response2[i].source
  


    let divColl = document.createElement("div")
    divColl.setAttribute("id", "panelsStayOpen-collapseOne"+[i])
    divColl.classList.add("class", "accordion-collapse", "collapse")
    divColl.setAttribute("aria-labelledby", "panelsStayOpen-headingOne")

    let divAcBody = document.createElement("div")
    divAcBody.classList.add("class", "accordion-body")
     divAcBody.innerHTML = response2[i].category
    
    divColl.appendChild(divAcBody)
    button.appendChild(divName)
    button.appendChild(divCat)
    button.appendChild(divReg)
    button.appendChild(divSource)
    divBut.appendChild(button)
    h2Ac.appendChild(divBut)
    divAcItem.appendChild(h2Ac)
    divAcItem.appendChild(divColl)
    divAccordion.appendChild(divAcItem)
}
 */

////////////////////////SECOND TRY


/* const divAccordion = document.getElementById("accordionPanelsStayOpenExample");

for (let i = 0; i < response2.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item")

    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("id", "panelsStayOpen-headingOne")

    let button = document.createElement("div")
    button.setAttribute("class", "accordion-button")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne"+i)
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("display", "grid")
    button.setAttribute("grid-template-columns", "1fr 1fr 1fr 1fr")

    let divBut = document.createElement ("div")

    let gridName = document.createElement("div")
    gridName.setAttribute("display", "grid")
    gridName.innerHTML = response2[i].name

    let gridCat = document.createElement("div")
gridCat.setAttribute("display", "grid")
    gridCat.innerHTML = response2[i].category
 
   
    let gridReg = document.createElement("div")
gridReg.setAttribute("display", "grid")
    gridReg.innerHTML = response2[i].region_name


    let gridSource = document.createElement("div")
gridSource.setAttribute("display", "grid")
    gridSource.innerHTML = response2[i].source

    let divCollpse = document.createElement("div")
    divCollpse.setAttribute("id", "panelsStayOpen-collapseOne"+i)
    divCollpse.setAttribute("class", "accordion-collapse collapse")
    divCollpse.setAttribute("aria-labelledby", "panelsStayOpen-headingOne")

     let divAcBody = document.createElement("div")
    divAcBody.setAttribute("class", "accordion-body")
  
    let p = document.createElement("div")
    p.innerHTML = response2[i].factor

    
    divAcBody.appendChild(p)
    divCollpse.appendChild(divAcBody)
    button.appendChild(gridName)
    button.appendChild(gridCat)
    button.appendChild(gridReg)
    button.appendChild(gridSource)
    h2Ac.appendChild(button)

    divAcItem.appendChild(h2Ac)
    divAcItem.appendChild(divCollpse)
   divAccordion.appendChild(divAcItem)


}
 */


////////////////////////FIRST TRY






for (let i = 0; i < response2.length; i++) {
    let divAcItem = document.createElement("div")
    divAcItem.setAttribute("class", "accordion-item container")
    divAcItem.setAttribute("style", "background-color: #e7f1ff")


    let h2Ac = document.createElement("div")
    h2Ac.setAttribute("id", "panelsStayOpen-headingOne")
    h2Ac.setAttribute("class", "text-center accordion-header ")
 

    let button = document.createElement("div")
    button.setAttribute("class", "accordion-button  row")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne"+i)
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-controls", "panelsStayOpen-collapseOne")
  
   
    let divName = document.createElement("div")
    divName.setAttribute("class", "col-sm-3")
    divName.innerHTML = response2[i].name

    let divCat = document.createElement("div")
    divCat.setAttribute("class", "col-sm-3")
    divCat.innerHTML = response2[i].category
    //divCat.classList.add("red")
    //divCat.setAttribute("style", "color: red")

    let divReg = document.createElement("div")
    divReg.setAttribute("class", "col-sm-3")
    divReg.innerHTML = response2[i].region_name

    let divSource = document.createElement("div")
    divSource.setAttribute("class", "col-sm-3")
    divSource.innerHTML = response2[i].source
    
    let divCollpse = document.createElement("div")
    divCollpse.setAttribute("id", "panelsStayOpen-collapseOne"+i)
    divCollpse.setAttribute("class", "accordion-collapse collapse")
    divCollpse.setAttribute("aria-labelledby", "panelsStayOpen-headingOne")

    let divAcBody = document.createElement("div")
    divAcBody.setAttribute("class", "accordion-body")
  
    let p = document.createElement("div")
    p.innerHTML = response2[i].factor
     
    divAcBody.appendChild(p)
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
