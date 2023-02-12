let posts =[];
let lastActivity=0;
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

function createupdateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            lastActivity = new Date().getTime();
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
           if(posts.length>0){
               let del=posts.pop();
               res(del);
           }else{
               rej("ERROR")
           }
       })
   },1000)
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
    console.log(lastActivity);
}
create1stBlog().then(createupdateLastUserActivityTime).then(printPost)
.then(deleteBlog).then(createupdateLastUserActivityTime).then(printPost)