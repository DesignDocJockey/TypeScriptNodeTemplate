const main = async(greeting:string) => {
    try {
        console.log(greeting);
    }
    catch (e) {
        console.log(e);
    }
};

main('Hello World');

console.log('This is just for restarting the nodemon watch process...');