let blog = async () => {
    let posts = [];
    let lastActivity = 0;
    const create1stBlog = await new Promise((res, rej) => {
        setTimeout(() => {
            posts.push({ title: 'BLOG1' });
            res();
        }, 3000)
    })
    const createupdateLastUserActivityTime = await new Promise((res, rej) => {
        setTimeout(() => {
            lastActivity = new Date().getTime();
            res(lastActivity)
        }, 2000)
    })
    const deleteBlog = await new Promise((res, rej) => {
        setTimeout(() => {
            if (posts.length > 0) {
                let del = posts.pop();
                res(del);
            } else {
                rej("ERROR")
            }
        }, 1000)
    })
    // const printPosts = await new Promise((res, rej) => {
    //     setTimeout(() => {
    //         posts.forEach((post) => {
    //             res(post.title)
    //         })
    //         res(lastActivity);
    //     }, 300)
    // })
    function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
        console.log(lastActivity);
    }
    create1stBlog;
    createupdateLastUserActivityTime;
    printPost()
    deleteBlog
    printPost()
}
blog();