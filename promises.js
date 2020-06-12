const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
  ]
  
  function getPosts() {
    setTimeout(function(){
      let output = '';
  
      posts.forEach((post, index) => {
        output += '<li>'+ post.title +'</li>'
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            posts.push(post);
            const err = false;

            if(!err){
                res();
            }else{
                rej('Error: Something is wrong')
            }
          }, 2000)
    });
  }
// I. PROMISE
//   createPost({title: 'Post three', body: 'This is post three'})
//   .then(getPosts).catch(err => console.log(err));

// III. Async Await
// async function init(){
//     await createPost({title: 'Post three', body: 'This is post three'});

//     getPosts();
// }

// init();

// IV. Async Await with fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

fetchUsers();


// II. Promise.all
/* const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); */