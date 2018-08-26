(function ($) {
    $(document).ready(function ($) {
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
            queryTokenizer: Bloodhound.tokenizers.whitespace
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
                    '<div class="list-group search-results-dropdown">',
                    '<div class="list-group-item">Nothing found.</div>',
                    '</div>'
                ].join('\n'),
                header: [
                    '<div class="list-group search-results-dropdown">'
                ],

                suggestion: function (data) {
                    var id = data.id;
                    var title = data.volumeInfo.title;

                    if (data && data.volumeInfo && data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail) {
                        var image = data.volumeInfo.imageLinks.thumbnail;
                    }
                    else {
                        image = 'http://static.springfree.com/sites/springfreetrampoline.com/files/images/headers/book-image.png';
                    }

                    if (data && data.volumeInfo && data.volumeInfo.authors) {
                        var authors = data.volumeInfo.authors.join(' ');
                    }
                    else {
                        authors = '';
                    }

                    return [
                        '<div>',
                            '<div>',
                        '<img width="50" src="' + image + '"/> ',
                        '<span>' + title + '</span>',
                        '<sub> - ' + authors + '</sub>',
                        '</div>'
                    ].join('\n');
                }
            }
        });

        $('.search-input').on('typeahead:select', function (event, suggestion) {
            console.log(event);
            console.log(suggestion);
        });
    });
})(jQuery);
