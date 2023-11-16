function calculateResult(number1, number2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = "خطا: تقسیم بر صفر";
            }
            break;
        default:
            result = "خطا: عملگر نامعتبر";
            break;
    }

    return result;
}

function findNestedValueByKey(inputObject, outerKey, innerKey) {

   if (outerKey in inputObject) {

       if (innerKey in inputObject[outerKey]) {

           return inputObject[outerKey][innerKey];
       } else {
           return 
       }
   } else {
       return
   }
}

function applyFunctionToObject(inputObject, customFunction) {
    // اعمال تابع دلخواه بر روی آبجکت و بازگرداندن نتیجه
    return customFunction(inputObject);
}