function addNumber(num1,num2){
    return num1+num2;
}
function subNumber(num1,num2){
    return num1-num2;
}
function mulNumber(num1,num2){
    return num1*num2;
}
function divNumber(num1,num2){
    return num1/num2;
}

function calculator(inputNum1,choice,inputNum2){
switch (choice) {
    case '1':
        return addNumber(inputNum1, inputNum2);
        break;
    case '2':
        return subNumber(inputNum1, inputNum2);
        break;
    case '3':
        return mulNumber(inputNum1, inputNum2);
        break;
    case '4':
        return divNumber(inputNum1, inputNum2);
        break;
    default:
        return "연산 입력을 정확히 하세요";
        break;
}}