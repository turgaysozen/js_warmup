// for (let i = 0; i < 10; ++i) {
//     setTimeout(() => console.log(i), 1000);
// }

// var x = 0;
// (function X () {
//     x = 20;
//     {
//         const x = 10;
//         console.log('X1: ', x);
//     }
//     var x;
//     console.log('X2: ', x);
// })();
// console.log('X3: ', x);




// 6, 5, 2, 3

// setTimeout(cb1, 1000)
// setTimeout(cb3, 0)
// Promise.resolve("OK").then(cb2)
// setImmediate(cb4)
// process.nextTick(cb5)
// cb6();

// Welcome to QPIEN Interview task.
// This task is a combination of intensive IO and CPU processes.
// We like to see how you handle this situation in a real production environment.
//
const cdnManager = async () => {
    const filesDataSet = new FilesDataSetAdapter('files.qpien.com');
    // Generator
    // Very large more than 10TB.
    // {path: "image path", _id: "Image Id", postId: "Related post Id"}
    //
    const postsDataSet = new PostsAdapter('posts.qpien.com'); // Generator

    // Generator
    // Small -> Can be loaded into memory at runtime.
    // {_id: "PostId", text: "Post's text", createdAt:"Post creattion time", ... other fields}
    //
    // Note: Posts can have multiple attached files.
    // Note: Not all files have a related post.

    var someHash = {
        'item1' : '5',
        'item2' : '7',
        'item3' : '45',
        'item4' : '09'
      };
      
      function getKeyByValue(hash, value) {
        var key;
        for(key in hash) {
          if (hash[key] == value) return key;
        }
      }
      
      console.log(getKeyByValue(someHash, '7'));

    for (let file in filesDataSet) {
        for (let post in postsDataSet) {
            if (file.postId === post._id) {
                file.post = post;
            }
        }
    }
    // after assigning each file now start downloading and processing fileContent. ))
    try {
        for (let file in filesDataSet) {
            const fileData = await donwloadFile(file); // avg 3sec per file.
            await processFile(file); // CPU intensive, heavy process, each file will take 5sec.
        }

        /*
        If you want to read the files in parallel, we should not use forEach. Each of the async callback function calls does return a promise, but it is throwing them away instead of awaiting them. We should use MAP instead, and we can await the array of promises that we'll get with Promise.all
        */

        (async () => {

            await Promise.all(filesDataSet.map(async (file) => {
                const fileData = donwloadFile(file)
                processFile(file)
                
            }));
        })()

    } catch (err) {
        console.log('Some Error happened, ', err);
    }
}


