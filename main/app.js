function decompress(a, result){
    for (let i = 0; i < a.length; i++) {
        let number = parseInt(a[i + 1], 10); 
        let character = a[i]; 

        result += character.repeat(number);

        i++; 
    }
    return result;
}

const compress = (a, b = true) => {

    let count = 1;
    let result = ''; 

    if (typeof a !== 'string') {
        throw new Error("InvalidType");
    }

    if (b) {
        for (let i = 0; i < a.length; i++) {
            let j = i + 1;
            while (a[i] === a[j]) {
                count++;
                if (count === 9) {
                    j++;
                    break;
                } else {
                    j++;
                }
            }
            result += `${a[i]}${count}`;
            count = 1; 
            i = j - 1;
        }
        return result;
    } 
    else {
        
        return decompress(a, result);
    }       
}

module.exports = compress;