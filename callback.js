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

const addPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

addPost({title: "Post 3", body: "Post Tree"}, getPosts)
