let isOk = true

let cartJuegos = (time,task) => {
    return new Promise ((resolve,reject) =>{
        if (isOk) {
            setTimeout(() => {
                resolve(task)
            },time);
        }else {
            reject("Error")
        }
    });
}