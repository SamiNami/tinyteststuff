const array = [
    { name: 'Kappa', ranking: 1 },
    { name: 'Zuppa', ranking: 234 },
    { name: 'Hupparainen', ranking: 144 }
];
// mutates the orignal array
function sortObjByRanking(arr) {
    return arr.sort((a, b) => {
        return a.ranking - b.ranking;
    });
}

function averageRanking(arr) {
    const sum = arr.reduce((sum, currentObj) => {
        return sum + currentObj.ranking;
    }, 0);
    return sum / arr.length;
}

console.log(averageRanking(array));
