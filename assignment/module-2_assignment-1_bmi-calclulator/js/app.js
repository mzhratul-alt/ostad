//Dom Element Selection
let weight = document.getElementById('weightInput');
let height = document.getElementById('heightInput');
let calculateBtn = document.getElementById('calculateBtn');
let alert_box = document.getElementById('alert_box');
let resultBox = document.getElementById('resultBox');
let result_title = document.getElementById('result_title');
let result_img = document.getElementById('result_img');
let root = document.querySelector(':root');


//Calculate BMI
calculateBtn.addEventListener('click', function () {
    let weightValue = parseFloat(weight.value);
    let heightValue = parseFloat(height.value);

    if (weight.value.length < 1) {
        alertmsg('Please, Insert Your Weight.')
    } else if (height.value.length < 1) {
        alertmsg('Please, Insert Your Height.');
    }else {
        let BMI = (weightValue / heightValue ** 2).toFixed(2);

        //Check BMI Condition
        if (BMI > 30) {
            showResult(`<span>${BMI}</span> Obese`, './img/obese.gif','#B03A2E','#E74C3C')
        } else if (BMI >= 25 && BMI < 30) {
            showResult(`<span>${BMI}</span> Overweight`, './img/overweight.gif','#922B21','#C0392B')
        } else if (BMI >= 18.5 && BMI < 25) {
            showResult(`<span>${BMI}</span>Normal`, './img/normal.gif','#239B56','#2ECC71')
        } else if (BMI < 18.5) {
            showResult(`<span>${BMI}</span>Underweight`, './img/underweight.gif','#B9770E','#F39C12')
        } else {
            showResult('<span>Oops! Invalid Result!</span>', './img/oops.gif','#B03A2E','#E74C3C')
        }
    }
})

// Empty Input Validation Message
function alertmsg(msg) {
    alert_box.innerText = msg;
    alert_box.classList.add('active');
    setTimeout(function () {
        alert_box.classList.remove('active');
    }, 3000)
}

//Show BMI Result
function showResult(comment, img,primaryAlertColor,secondaryAlertColor) {
    resultBox.classList.add('active');
    result_title.innerHTML = comment;
    result_img.src = img;

    //Change Result Modal Animation Color
    root.style.setProperty('--primary-alert-color', primaryAlertColor)
    root.style.setProperty('--secondary-alert-color', secondaryAlertColor)
}

//Close Result Modal
function boxClose() {
    resultBox.classList.remove('active');
    weight.value = '';
    height.value = '';
}
