function addNumber(num1,num2){
    result = num1+num2;
    return result;
}
function subNumber(num1,num2){
    result = num1-num2;
    return result
}
function mulNumber(num1,num2){
    result = num1*num2;
    return result
}
function divNumber(num1,num2){
    result = num1/num2;
    return result
}


function calculator(inputNum1,choice,inputNum2){
switch (choice) {
    case '1':
        console.log(addNumber(inputNum1, inputNum2));
        break;
    case '2':
        console.log(subNumber(inputNum1, inputNum2));
        break;
    case '3':
        console.log(mulNumber(inputNum1, inputNum2));
        break;
    case '4':
        console.log(divNumber(inputNum1, inputNum2));
        break;
    default:
        console.log(result);
        break;
}}