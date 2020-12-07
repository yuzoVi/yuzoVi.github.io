//custom sort
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};


let contagemOcorr = (string, word) => {
    return string.split(word).length - 1;
}




window.onload = function () {


    //ex1
    let form1 = document.getElementById("formEx1")

    form1.addEventListener('submit', (e) => {

        const formData = new FormData(e.target);

        let numInputEx1 = [parseInt(formData.get('primeiroNum')), parseInt(formData.get('segundoNum')), parseInt(formData.get('terceiroNum')), parseInt(formData.get('quartoNum'))]

        let resultado = [];
        resultado = bubbleSort(numInputEx1);

        let solucaoEx1 = document.getElementById("solucaoEx1")

        solucaoEx1.innerHTML = resultado;

    })

    //ex2

    let form2 = document.getElementById("formEx2")

    form2.addEventListener('submit', (e) => {

        const formData = new FormData(e.target);

        let txtInputEx2 = formData.get('stringMaria');

        let nome = "MARIA";

        let resultado = '';
        resultado = contagemOcorr(txtInputEx2, nome)

        solucaoEx2.innerHTML = resultado;
    })


    //ex3
    let form3 = document.getElementById("formEx3")

    form3.addEventListener('submit', (e) => {

        const formData = new FormData(e.target);

        let dataInputEx3 =formData.get('dataHoje')
        console.log(dataInputEx3)
        let dateParts = dataInputEx3.split("/");
        console.log(dateParts)
        let auxiliar;
        switch (dateParts[1]){
            case '01':
                auxiliar = 0;
            break;
            
            case '02':
                auxiliar = 31;
            break;

            case '03':
                auxiliar = 59;
            break;

            case '04':
                auxiliar = 90;
            break;

            case '05':
                auxiliar = 120;
            break;

            case '06':
                auxiliar = 151;
            break;

            case '07':
                auxiliar = 181;
            break;

            case '08':
                auxiliar = 212;
            break;

            case '09':
                auxiliar = 242;
            break;

            case '10':
                auxiliar = 273;
            break

            case '11':
                auxiliar = 303;
            break

            case '12':
                auxiliar = 334;
            break

        }
        
    

        solucaoEx3.innerHTML = parseInt(dateParts[0]) + auxiliar;

    })
}
