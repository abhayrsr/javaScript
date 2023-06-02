const getProfile = new Promise((resolve, reject) =>{
    resolve("profile");
})

const getFriends = new Promise((resolve, reject) => {
    resolve("friend's profile");
})

const getFemaleFriends = new Promise((resolve, reject) => {
    resolve("female friends")
})

/* promise nesting: affects the readability of code and complex to implement */
getProfile.then((profile) => {
    getFriends.then((friends) =>{
        getFemaleFriends.then((females) => {
            console.log(females);
        })
    })
})

/* in order to overcome the nesting problem and increase the readbility of code, the concept of async/await was introduced.
Async makes the asynchronous code seems to be executed in sequential manner and more readable. Async is used declare
a asynchronous function. When a function is marked by async it means it will return a promise */

async function getFemaleFriend(){
    const profile = await getProfile;
    const friends = await getFriends;
    const females = await getFemaleFriends;
    return females;
}

getFemaleFriend().then((femaleFriends) => {
    console.log(femaleFriends);
})
/* await can only be used with async. it pause the execution of code and wait for promise to resolve. If the promise is
rejected, an exception is thrown which can be handled by try-catch block*/