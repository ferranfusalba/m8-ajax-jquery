$(document).ready(function() {
    $('#btnAcudit').click(function(e) {
        e.preventDefault();
        $('#mostraAcudit').html('');
        $.getJSON("http://api.icndb.com/jokes/random", function(data) {
            $.each(data, function(index, item) {
                $('#mostraAcudit').html(`
                 ${item.joke}
                 `);
            });
        });
    });
});