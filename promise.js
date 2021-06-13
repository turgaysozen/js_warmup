let parent = {
    func2: function () {
        return new Promise(function (resolve, reject) {
            return resolve(1);
        });
    },
    func1: function () {
        const function2 = this.func2()
        function2.then(count => {
            return new Promise(function (resolve, reject) {
                console.log(count + 1)
            });
        })
    }
}

parent.func1()

const posts = [
    { title: "Post 1", body: "Post One" },
    { title: "Post 2", body: "Post Two" }
]

const getPosts = () => {
    setTimeout(() => {
        let output = ""
        posts.forEach((post, index) => {
            output += index + 1 + " " + post.title + " " + post.body + "\n"
        })
        console.log(output)
    }, 1000)
}

const addPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            resolve()
        }, 6000)
    })
}

const prom1 = new Promise((res, rej) => {
    res("Hello World")
})
const prom2 = 10
const prom3 = "This is normal"
const prom4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Finish!!")
})

const fetch = require("node-fetch");

const data = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
data.then(d => d.forEach((element, index) => {
    console.log(index + 1, element["name"] + "-" + element["email"])  
}))

console.log(prom1, prom2, prom3, prom4)
Promise.all([prom1, prom2, prom3, prom4]).then(val => console.log(val))

prom1.then(v => console.log(v))

const getProm4 = async () => {
    await addPost({ title: "Post 3", body: "Post Tree" })
    getPosts()

}

getProm4()