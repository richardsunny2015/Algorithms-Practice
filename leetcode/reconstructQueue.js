var reconstructQueue = function(people) {
    let finalArr = []
    people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
    for (let i = 0; i < people.length; i++) {
        const person = people[i]
        finalArr.splice(person[1], 0, person)
    }
    return finalArr
};
