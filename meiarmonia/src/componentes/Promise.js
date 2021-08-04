 new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 3000);
    
    }).then((dataResolve)=>{
console.log('data resolve',data)
    })
