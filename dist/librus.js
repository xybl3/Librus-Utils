const gradesTable = document.querySelectorAll("table")[5];
insertGrades();
function insertGrades() {
    gradesTable.children[0].appendChild(document.createElement("td")); //empty
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML =
        "<p>Librus-Utils Średnia</p>"; //Info
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML =
        "<p style='text-align: center;'>-></p>"; //Oceny biezace
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML = `${calcSemestr1()}`; //sr1
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML = `<p>${calcProponowane1()}</p>`; //(I)
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML = `<p>${calcKoncowe1()}</p>`; //I
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML =
        "<p style='text-align: center;'>-></p>"; //Oceny biezace
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML = `<p>${calcSemestr2()}</p>`; //Sr2
    gradesTable.children[0].appendChild(document.createElement("td")).innerHTML = `<p>${calcProponowane2()}</p>`; //II
    gradesTable.children[0].appendChild(document.createElement("td")); //Sr.R
    gradesTable.children[0].appendChild(document.createElement("td")); //R
}
function calcSemestr1() {
    let semestr1Grades = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        const entry = val.querySelector("td.right");
        if (entry === null)
            return;
        if (entry.innerHTML === "-")
            return;
        semestr1Grades.push(Math.round(parseFloat(entry.innerHTML)));
    });
    return parseFloat((semestr1Grades.reduce((a, b) => a + b) / semestr1Grades.length).toFixed(2));
}
function calcProponowane1() {
    let semestr1Proponowane = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        let entry = val.querySelectorAll("td.center")[2];
        if (entry.firstChild.textContent === " - " ||
            idX === przedmiotyLibrus.length - 1)
            return;
        semestr1Proponowane.push(parseInt(entry.querySelector("span").querySelector("a").innerText));
    });
    return parseFloat((semestr1Proponowane.reduce((a, b) => a + b) / semestr1Proponowane.length).toFixed(2));
}
function calcKoncowe1() {
    let semestr1Koncowe = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        let entry = val.querySelectorAll("td.center")[2];
        if (entry.firstChild.textContent === " - " ||
            idX === przedmiotyLibrus.length - 1)
            return;
        semestr1Koncowe.push(parseInt(entry.querySelector("span").querySelector("a").innerText));
    });
    console.log(semestr1Koncowe);
    return parseFloat((semestr1Koncowe.reduce((a, b) => a + b) / semestr1Koncowe.length).toFixed(2));
}
function calcSemestr2() {
    let semestr2Grades = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        const entry = val.querySelectorAll("td.right")[1];
        if (entry === null)
            return;
        if (entry.innerHTML === "-")
            return;
        semestr2Grades.push(Math.round(parseFloat(entry.innerHTML)));
    });
    return parseFloat((semestr2Grades.reduce((a, b) => a + b) / semestr2Grades.length).toFixed(2));
}
function calcProponowane2() {
    let semestr2Proponowane = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        let entry = val.querySelectorAll("td.center")[3];
        if (entry.firstChild.textContent === " - " ||
            idX === przedmiotyLibrus.length - 1)
            return;
        semestr2Proponowane.push(parseInt(entry.querySelector("span").querySelector("a").innerText));
    });
    return parseFloat((semestr2Proponowane.reduce((a, b) => a + b) / semestr2Proponowane.length).toFixed(2));
}
function calcKoncowe2() {
    let semestr2Koncowe = [];
    const przedmiotyLibrus = Array.from(gradesTable.children[1].children).filter((e, idx) => idx % 2 === 0);
    przedmiotyLibrus.forEach((val, idX) => {
        let entry = val.querySelectorAll("td.center")[3];
        if (entry.firstChild.textContent === " - " ||
            idX === przedmiotyLibrus.length - 1)
            return;
        semestr2Koncowe.push(parseInt(entry.querySelector("span").querySelector("a").innerText));
    });
    console.log(semestr2Koncowe);
    return parseFloat((semestr2Koncowe.reduce((a, b) => a + b) / semestr2Koncowe.length).toFixed(2));
}
