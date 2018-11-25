export default (data, value) => {

    let regEx = new RegExp(value, 'ig')

    let filteredArray = data.filter(outerElem => {
        let tempArr = outerElem[1].filter(innerElem => {
            return innerElem.search(regEx) >= 0
        })
        return  tempArr.length > 0
    })

    return filteredArray
}