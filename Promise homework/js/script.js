// / Homework Promise

                 // / *** Task 01 ***
function testNumber(number) {
    return new Promise((resolve, reject) => {
        if (number <= 10) {
            setTimeout(() => {
                resolve(`It's successfull!`);
            }, 2000);
        }
        setTimeout(() => {
            reject(`Rejected!`);
        }, 2000);
    })
}

testNumber(15).then(success => {
        console.log(success);
    })
    .catch(error => {
        console.log(error);
    })
    

                            //  /*** / Task 02***
                                       
let words = [`circle`, `square`, `triangle`, `rectangle`, `oval`];

                                // Part 01

function changeAllToCaps(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < words.length; i++) {
                if (typeof words[i] === 'string') {
                    words[i] = words[i].toUpperCase();
                }
            }
            resolve(words);
        }, 2000);
        setTimeout(() => {
            reject(`Reject!`);
        }, 2000);
    })
}

                        // ***// Part 02
function sortAscending(array) {
    if (array.length <= 1) {
        console.log(`There are not enough words to be sorted.`);
    }
    return array.sort();
}

console.log(sortAscending(words));

changeAllToCaps(words).then(words => {
        sortAscending(words);
        console.log(words);
    })
    .catch(error => {
        console.log(error);
    })
  