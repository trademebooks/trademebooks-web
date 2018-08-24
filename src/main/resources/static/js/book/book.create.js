jQuery(document).ready(function ($) {
    // Set the Options for "Bloodhound" suggestion engine
    var engine = new Bloodhound({
        remote: {
            url: 'https://www.googleapis.com/books/v1/volumes?q=%QUERY%',
            wildcard: '%QUERY%',
            transform: function (response) {
                return response.items;
            }
        },
        datumTokenizer: Bloodhound.tokenizers.whitespace('q'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
    });

    $(".search-input").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        source: engine.ttAdapter(),

        // This will be appended to "tt-dataset-" to form the class name of the suggestion menu.
        name: 'items',

        display: 'items',

        // the key from the array we want to display (name,id,email,etc...)
        templates: {
            empty: [
                '<div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
            ],
            header: [
                '<div class="list-group search-results-dropdown">'
            ],
            suggestion: function (data) {
                return '<div><a href="' + data.id + '" class="list-group-item">' + data.volumeInfo.title + ' - ' + data.volumeInfo.authors[0] + '<img src="' + data.volumeInfo.imageLinks.thumbnail + '"/> ' + '</a></div>'
            }
        }
    });
});