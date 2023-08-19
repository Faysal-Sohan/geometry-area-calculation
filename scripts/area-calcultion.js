// area of Triangle
function areaOfTriangle(){
    const baseValue = getInputValue('triangle-base');
    const heightValue = getInputValue('triangle-height');
    if(baseValue === undefined || heightValue === undefined){
        alert('Invalid Input');
        return;
    }
    const area = 0.5 * baseValue * heightValue;
    document.getElementById('triangle-area').innerText = area.toFixed(2);
    showAtAreaCalculations('Triangle', area.toFixed(2));
}
// area of Rectangle
function areaOfRectangle(){
    const recWidth = getInputValue('rec-width');
    const recLength = getInputValue('rec-length');
    if(recWidth === undefined || recLength === undefined){
        alert('Invalid Input');
        return;
    }
    const area = recWidth * recLength;
    document.getElementById('rectangle-area').innerText = area.toFixed(2);
    showAtAreaCalculations('Rectangle', area.toFixed(2));
}
// area of paralellogram
function areaOfParallelogram() {
    const parBase = getInputValue('parallelogram-base');
    const parHeight = getInputValue('parallelogram-height');
    if(parBase === undefined || parHeight === undefined){
        alert('Invalid Input');
        return;
    }
    const area = parBase * parHeight;
    document.getElementById('parallelogram-area').innerText = area.toFixed(2);
    showAtAreaCalculations('Parallelogram', area.toFixed(2));
}
// area of ellipse
function areaOfEllipse() {
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');
    if(majorRadius === undefined || minorRadius === undefined){
        alert('Invalid Input');
        return;
    }
    const area = 3.14 * majorRadius * minorRadius;
    document.getElementById('ellipse-area').innerText = area.toFixed(2);
    showAtAreaCalculations('Ellipse', area.toFixed(2));
}

// repeated Functions
function getInputValue(inputId){
    const inputFieldValue = document.getElementById(inputId).value;
    const isValid = isNumber(inputFieldValue);
    if(!isValid) {
        document.getElementById(inputId).value = '';
        return;
    }
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}

function showAtAreaCalculations(shape, valueOfArea) {
    const areaSection = document.getElementById('calculated-areas');
    const count = areaSection.childElementCount;
    const p = document.createElement('p');
    p.classList.add('m-2')
    p.innerHTML = `${count + 1}.  ${shape} ${valueOfArea} cm<sup>2</sup> <button class="btn btn-success">Convert to <span>m<sup>2</sup></span></button>`
    areaSection.appendChild(p);
}   

function isNumber(fieldValue){
    const stringLength = fieldValue.length;
    if(stringLength == 0){
        return false;
    }
    for(const c of fieldValue){
        if(isNaN(c)){
            return false;
        }
    }
    return true;
}
