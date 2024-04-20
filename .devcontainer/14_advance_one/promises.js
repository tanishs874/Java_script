const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async taks is complete');
        resolve()//Here the resolve is connected with .then function 
    },1000)
});

//How to consume the Promise
//resolve has a connection with .then 
promiseOne.then(function(){
    console.log("Promise consumed");// If resolve() is not there then resolve will not be connected here and the output will be only Async task is complete
                                   // If we use resolve() as used in the 6th line then it will be connected and then Promise consumed will also be printed after Async task is complete
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

// The above code is same as the first code 


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"ts777@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);// { username: 'chai', email: 'ts777@gmail.com' }
})


const proimseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
        resolve({username:"Tanish",password:"123"});
        }
        else{
            reject('Error!!! something went wrong');
        }
    },2000)
})

// proimseFour.then().catch().finally();

proimseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() =>{
    console.log("The promise is either resolved or rejected");
})

// If error is true then the output will be ---> 
//Error!!! something went wrong
//The promise is either resolved or rejected

// If the error is false then the output wil be ---->

//{ username: 'Tanish', password: '123' }
//Tanish
//The promise is either resolved or rejected


const proimseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
        resolve({username:"Java script",password:"123"});
        }
        else{
            reject('Error!!! JS went wrong');
        }
    },2000)
})

//async , await 

async function consumeproimseFive (){
    const response = await proimseFive
    console.log(response);
}
consumeproimseFive();

//If error is false then there will be no problem here but if error is true then the problem may occur because asycn await cannot handle errors directly

//We can use try and catch here to resolve this issue as in the below code--->>

async function consumeproimseFive(){
    try {
        const response = await proimseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeproimseFive();

// Here we have used try and catch so now no problem is there for error --->>>

// async function getallusers(){
//    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json();//the data will be converted to json format and it will also take some time so we need to write await here also 
//    console.log(data);
// }
// getallusers();

//This can be done by using try catch also 

async function getallusers(){
    try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("EEERRRRRR!!!!!",error);
    }
}

// WE can do the above code by using fetch and catch operation also 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


//According to the above written code firstly the output should be --->

// Async taks is complete
// Promise consumed
// Async task two
// Async two resolved
// { username: 'chai', email: 'ts777@gmail.com' }
// { username: 'Tanish', password: '123' }
// Tanish
// The promise is either resolved or rejected
// Error!!! JS went wrong
// Error!!! JS went wrong

// and after that the output should be --->

// {
//     login: 'hiteshchoudhary',
//     id: 11613311,
//     node_id: 'MDQ6VXNlcjExNjEzMzEx',
//     avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/hiteshchoudhary',
//     html_url: 'https://github.com/hiteshchoudhary',
//     followers_url: 'https://api.github.com/users/hiteshchoudhary/followers',
//     following_url: 'https://api.github.com/users/hiteshchoudhary/following{/other_user}',
//     gists_url: 'https://api.github.com/users/hiteshchoudhary/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/hiteshchoudhary/subscriptions',
//     organizations_url: 'https://api.github.com/users/hiteshchoudhary/orgs',
//     repos_url: 'https://api.github.com/users/hiteshchoudhary/repos',
//     events_url: 'https://api.github.com/users/hiteshchoudhary/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/hiteshchoudhary/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Hitesh Choudhary',
//     company: null,
//     blog: 'https://www.youtube.com/c/HiteshChoudharydotcom',
//     location: 'India',
//     email: null,
//     hireable: null,
//     bio: 'I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out',
//     twitter_username: 'hiteshdotcom',
//     public_repos: 83,
//     public_gists: 4,
//     followers: 20211,
//     following: 0,
//     created_at: '2015-03-23T13:03:25Z',
//     updated_at: '2024-04-10T13:18:57Z'
//   }


// But in the output firstly this is displayle
// {
//     login: 'hiteshchoudhary',
//     id: 11613311,
//     node_id: 'MDQ6VXNlcjExNjEzMzEx',
//     avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/hiteshchoudhary',
//     html_url: 'https://github.com/hiteshchoudhary',
//     followers_url: 'https://api.github.com/users/hiteshchoudhary/followers',
//     following_url: 'https://api.github.com/users/hiteshchoudhary/following{/other_user}',
//     gists_url: 'https://api.github.com/users/hiteshchoudhary/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/hiteshchoudhary/subscriptions',
//     organizations_url: 'https://api.github.com/users/hiteshchoudhary/orgs',
//     repos_url: 'https://api.github.com/users/hiteshchoudhary/repos',
//     events_url: 'https://api.github.com/users/hiteshchoudhary/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/hiteshchoudhary/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Hitesh Choudhary',
//     company: null,
//     blog: 'https://www.youtube.com/c/HiteshChoudharydotcom',
//     location: 'India',
//     email: null,
//     hireable: null,
//     bio: 'I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out',
//     twitter_username: 'hiteshdotcom',
//     public_repos: 83,
//     public_gists: 4,
//     followers: 20211,
//     following: 0,
//     created_at: '2015-03-23T13:03:25Z',
//     updated_at: '2024-04-10T13:18:57Z'
//   }

// and after that ---> this is displayed 

// Async taks is complete
// Promise consumed
// Async task two
// Async two resolved
// { username: 'chai', email: 'ts777@gmail.com' }
// { username: 'Tanish', password: '123' }
// Tanish
// The promise is either resolved or rejected
// Error!!! JS went wrong
// Error!!! JS went wrong

// This is because fetch() has more priority then all other so this is the reason for that 
