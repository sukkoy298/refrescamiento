const mypromises = new Promise(( reject) => { 
    setTimeout(()=> {
    reject('mi amigo se perdio con el dinero');
}, 2000);
});

mypromises
    .catch((reason) => {
        console.warn(reason)
    });