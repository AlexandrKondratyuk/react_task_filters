export default (array, number) => {

    let result = []

    array.forEach(elem => result = result.concat(elem[number]))

    result = Array.from(new Set(result)).sort()

    return result
}