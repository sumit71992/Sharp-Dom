// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// // const promiseWifeBringingTickets = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve('ticket'), 3000);
// // });
// // const getPopcorn = promiseWifeBringingTickets.then((t) => {
// //     console.log("husband: we should go in");
// //     console.log("wife: no i am hungry");
// //     return new Promise((res, rej) => {
// //         res(`${t} popcorn`)
// //     })
// // });
// // const getButter = getPopcorn.then((t) => {
// //     console.log("husband: we should go in");
// //     console.log("wife: I need butter");
// //     return new Promise((res, rej) => {
// //         res(`${t} butter`)
// //     })
// // });
// // const getColdDrink = getButter.then((t) => {
// //     console.log("cold drinks added");
// //     return new Promise((res, rej) => {
// //         res(`${t} colddrink`)
// //     })
// // });

// // getColdDrink.then((t) => console.log(t));
// // console.log('person1 shows ticket');
// // console.log('person2 shows ticket');
// //async
// const preMovie = async () => {
//     const promiseWifeBringingTickets = new Promise((res, rej) => {
//         setTimeout(() => res('ticket'), 3000);
//     });
//     const getPopcorn = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('popcorn'), 3000);
//     });

//     const addButter = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('butter'), 2000);
//     });
//     const addColdDrink = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('colddrink'), 1000);
//     });
//     const ticket = await promiseWifeBringingTickets;
//     console.log(`got the ${ticket}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "i am hungry"`);
//     let popcorn = await getPopcorn;
//     console.log(`Husband: here is ${popcorn}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "I dont like popcorn without butter!"`);
//     let butter = await addButter;
//     console.log(`added ${butter}`);
//     console.log(`Husband:Anything else darling`);
//     console.log(`Wife: lets go we are going to miss the preivew`);
//     let colddrink = await addColdDrink;
//     console.log(`added ${colddrink}`);
//     console.log(`Husband:Anything else darling`);
//     console.log(`Wife: lets go we are going to miss the preivew`);
//     console.log(`Husband: thanks for the reminder *grin*`);
    
//      return ticket;
// }
// preMovie()
let blog = async () => {
    let posts = [];
    let lastActivity = 0;
    const create1stBlog = await new Promise((res, rej) => {
        setTimeout(() => {
            posts.push({ title: 'BLOG1' });
            res(posts);
        }, 3000)
    })
        console.log(create1stBlog)
    
}
blog();