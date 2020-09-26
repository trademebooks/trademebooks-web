import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import './SearchBook.scss';

import config from '../../../../config';

const SearchBooks = ({ addBook, book }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (inputValue.length > 2) {
        let url = `https://www.googleapis.com/books/v1/volumes?key=${config.google.ApiKey}&q=${inputValue}`;
        const response = await fetch(url);
        const data = await response.json();
        let books = data.items.map((book) => {
          let bookVolumeInfo = book['volumeInfo'];

          console.log(bookVolumeInfo['authors'])
          return {
            title: bookVolumeInfo['title'],
            authors: bookVolumeInfo['authors'] || [],
            publisher: bookVolumeInfo['publisher'],
            description: bookVolumeInfo['description'],
            //image_url: bookVolumeInfo["imageLinks"]['smallThumbnail'],
            //isbn_10: bookVolumeInfo['industryIdentifiers'][0]['identifier'],
            //isbn_13: bookVolumeInfo['industryIdentifiers'][1]['identifier']
          };
        });

        if (active) {
          setOptions(books);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [inputValue]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <div className="search-books-container">
        <div>
          <p>Search millions of books!</p>
        </div>
        <div>
          <Autocomplete
            style={{ width: '100%' }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionSelected={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            value={value}
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
              addBook(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type in a book name, author name, or isbn number..."
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            renderOption={(option) => {
              return (
                <div>
                  <span><strong>{option.title}</strong></span> - <span><i>{option.authors.join(', ')}</i></span>
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBooks;
