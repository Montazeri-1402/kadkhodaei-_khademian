function deepCopy(obj) {
    const copiedObject = {}
    for (const key in obj) {
        if (obj.hasOwnProperty.call(obj,key)) {
            copiedObject[key] = deepCopy(obj[key])
        }
        else
        {
            copiedObject[key] = key 
        }
    }
    return copiedObject;
}

