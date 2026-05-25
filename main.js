console.log("Main funcionando");

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./serviceworker.js')

    .then(function(registration) {
        console.log('Service Worker registrado com sucesso');
    })

    .catch(function(error) {
        console.log('Falha ao registrar o Service Worker');
    });

} else {
    console.log('Service Worker não suportado');
}