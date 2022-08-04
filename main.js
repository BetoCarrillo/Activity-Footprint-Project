console.log(data.results);
 const myData = data.results

// COLLAPSIBLE SECOND TRY
/*  const divContainer = document.getElementById('container');
const table = document.createElement('table');
table.classList.add("table", "table-hover");
//table.setAttribute("style", "width", "100px");
divContainer.appendChild(table);
const tHead = document.createElement('thead');
table.appendChild(tHead);
const th1 = document.createElement("th");
    th1.innerHTML = "Activity";
const th2 = document.createElement("th");
   th2.innerHTML = "Category";
const th3 = document.createElement("th");
   th3.innerHTML = "Region";
const th4 = document.createElement("th");
th4.innerHTML = "Source";
tHead.appendChild(th1);
tHead.appendChild(th2);
tHead.appendChild(th3);
tHead.appendChild(th4);
const tBody = document.createElement('tbody');
table.appendChild(tBody);

for (let i = 0; i < data.results.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerHTML = data.results[i].name;
    td2.innerHTML = data.results[i].category;
    td3.innerHTML = data.results[i].region_name;
    td4.innerHTML = data.results[i].source;
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tBody.appendChild(tr)

} */

/* $('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').collapse('hide');
});
  */

// table first 


// const divContainer = document.getElementById('container');
// const table = document.createElement('table');
// table.classList.add("table", "table-hover");
// divContainer.appendChild(table);
// const tHead = document.createElement('thead');
// table.appendChild(tHead);
// const th1 = document.createElement("th");
//     th1.innerHTML = "Activity";
// const th2 = document.createElement("th");
//    th2.innerHTML = "Category";
// const th3 = document.createElement("th");
//    th3.innerHTML = "Region";
// const th4 = document.createElement("th");
// th4.innerHTML = "Source";
// const th5 = document.createElement("th");
// th5.innerHTML = "Emissions";
// tHead.appendChild(th1);
// tHead.appendChild(th2);
// tHead.appendChild(th3);
// tHead.appendChild(th4);
// tHead.appendChild(th5);
// const tBody = document.createElement('tbody');
// table.appendChild(tBody);


// for (let i = 0; i < data.results.length; i++) {
//     const tr = document.createElement("tr");
//     tr.classList.add("accordion");
//     tr.setAttribute("id", "accordionPanelsStayOpenExample");

   
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     const td3 = document.createElement("td");
//     const td4 = document.createElement("td");
//     const td5 = document.createElement("td");
//     td1.innerHTML = data.results[i].name;
//     td2.innerHTML = data.results[i].category;
//     td3.innerHTML = data.results[i].region_name;
//     td4.innerHTML = data.results[i].source;
//     td5.classList.add("accordion-item");
//     td5.setAttribute("id", "panelsStayOpen-headingOne");
//     const button = document.createElement("button");
//     button.classList.add("accordion-button", "collapsed");
//     button.setAttribute("type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseOne", "aria-expanded", "false", "aria-controls", "panelsStayOpen-collapseOne");
//     const divAcc = document.createElement("div");
//     divAcc.classList.add("accordion-collapse","collapse","show");
//     divAcc.setAttribute("id", "panelsStayOpen-collapseOne", "aria-labelledby", "panelsStayOpen-headingOne");
//     const divAccInfo = document.createElement("div");
//     divAccInfo.classList.add("accordion-body");
//     divAccInfo.innerHtml ='hello';
//     td5.appendChild(button);
//     td5.appendChild(divAcc);
//     divAcc.appendChild(divAccInfo);
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     tr.appendChild(td5)
//     tBody.appendChild(tr)
// }

 




/* const tBody = document.querySelector("tBody");
for (let i = 0; i < data.results.length; i++){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      const td7 = document.createElement("td");
    td1.innerHTML = data.results[i].category;
    td2.innerHTML = data.results[i].name;
    td3.innerHTML = data.results[i].region_name;
    td4.innerHTML = data.results[i].description;
    td5.innerHTML = data.results[i].factor;
    td6.innerHTML = data.results[i].unit;
    td7.innerHTML = data.results[i].source;
  

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
     tr.appendChild(td5)
     tr.appendChild(td6)
     tr.appendChild(td7)

    tBody.appendChild(tr)
} */




