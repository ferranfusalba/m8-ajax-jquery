$(document).ready(function() {
    $('#btnAcudit').click(function(e) {
        e.preventDefault();
        $('#mostraAcudit').html('');

        fetch("http://api.icndb.com/jokes/random")
            .then(resp => resp.json())
            .then(resp => {
                let joke = resp.value.joke;
                $('#mostraAcudit').html(`
                                ${joke}
                                `);
                console.log("success!");
            })
            .catch(error => {
                console.log(error + " / error!");
            })
    });
});