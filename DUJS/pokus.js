/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe:function(expected)
        {
            if(val===expected)
            {
                return true;
            }
            else
            {
                return "Not Equal";
            }


        },
        notToBe:function(expected)
        {
            if(val!==expected)
            {
                return true;
            }
            else
            {
                return "Equal";
            }
        }

    }
    
    
};


console.log(expect(5).toBe(10)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
