
function FetchApi(){
    let post=null;

    fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
           .then((Response)=>{
            if(!Response.ok){
                throw new Error('nteork response was not found')
            }
            return Response.json();
           }
           
        )
        .then(data=>{
            post=data;
            console.log(post);
        })
           .catch((error)=>{console.log(error)

           });

}
FetchApi()


function FetchApiUser(){
    let post=null;

    fetch("https://jsonplaceholder.typicode.com/users/3")
           .then((Response)=>{
            if(!Response.ok){
                throw new Error('nteork response was not found')
            }
            return Response.json();
           }
           
        )
        .then(data=>{
            post=data;
            console.log(post);
        })
           .catch((error)=>{console.log(error)

           });

}
FetchApiUser()

function FetchApiComment(){
    let post=null;

    fetch("https://jsonplaceholder.typicode.com/users/4/comments")
           .then((Response)=>{
            if(!Response.ok){
                throw new Error('nteork response was not found')
            }
            return Response.json();
           }
           
        )
        .then(data=>{
            post=data;
            console.log(post);
        })
           .catch((error)=>{console.log(error)

           });

}
FetchApiComment()



function FetchApiComment(){
    let post=null;

    fetch("https://jsonplaceholder.typicode.com/users/5/posts")
           .then((Response)=>{
            if(!Response.ok){
                throw new Error('nteork response was not found')
            }
            return Response.json();
           }
           
        )
        .then(data=>{
            post=data;
            console.log(post);
        })
           .catch((error)=>{console.log(error)

           });

}
FetchApiComment()

