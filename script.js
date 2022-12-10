let text = document.querySelector("#text");
let btn = document.querySelector("#convert-btn");
let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");
let snakeCase = document.querySelector("#snake-case");
let screamingCase = document.querySelector("#screaming-snake-case");
let kebabCase = document.querySelector("#kebab-case");
let ScreKebCas = document.querySelector("#screaming-kebab-case");


const camelCaseF = () => {
    let final;
    let val = text.value;
    let ary = val.split(" ")
    let x = ary[0];
    let ay = [x];
    for (let i = 1; i < ary.length; i++) {
        final = ary[i].charAt(0).toUpperCase() + ary[i].slice(1)
        ay.push(final)
        x = x + (`${ay[i]}`)
    } return x

}


const pascalCaseF = () => {
    let final;
    let val = text.value;
    let ary = val.split(" ")
    let x = "";
    let ay = [];
    for (let i = 0; i < ary.length; i++) {
        final = ary[i].charAt(0).toUpperCase() + ary[i].slice(1)
        ay.push(final)
        x = x + (`${ay[i]}`)
    } return x

}

const snakeCaseF = () => {
    let val = text.value;
    return val.replaceAll(" ", "_")
}

const snakeCaseFU = () => {
    return snakeCaseF().toUpperCase()
}

const kebabCaseF = () => {
    let val = text.value;
    return val.replaceAll(" ", "-")
}
function kebabCaseFU() {
    // let val = text.value;
    return kebabCase.innerHTML.toLocaleUpperCase()
}








btn.addEventListener('click', () => {


    camelCase.innerHTML = camelCaseF()
    pascalCase.innerHTML = pascalCaseF();
    snakeCase.innerHTML = snakeCaseF();
    screamingCase.innerHTML = snakeCaseFU();
    kebabCase.innerHTML = kebabCaseF();
    ScreKebCas.innerHTML = kebabCaseFU();
})