export default (data, value) => {

    let filteredArray  = data.filter((elem) => {
        return elem[1].includes(value)
    })

    return filteredArray
}