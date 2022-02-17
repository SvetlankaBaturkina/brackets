module.exports = function check(str, bracketsConfig) {
  var array = [bracketsConfig];
    let brackets = array.join('').replace(/,/g, '');
    let arrayNew = [];

    for (let bracket of str) {
            let bracketsIndex = brackets.indexOf(bracket);


            if (bracketsIndex % 2 === 0) {
                
                if (bracket === brackets[bracketsIndex + 1] && arrayNew[arrayNew.length - 1] === bracketsIndex){
                  arrayNew.pop();
                } else if (bracket === brackets[bracketsIndex + 1] && arrayNew[arrayNew.length - 1] !== bracketsIndex) {
                  arrayNew.push(bracketsIndex)
                }
                else{
                  arrayNew.push(bracketsIndex)
                }
            } 
            else {
                if (arrayNew.pop() !== bracketsIndex-1) {
                    return (false);
                };
            };
            
    };
        return (arrayNew.length === 0);// your solution
};
