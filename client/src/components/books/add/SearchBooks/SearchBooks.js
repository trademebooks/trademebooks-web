import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import debounce from 'lodash/debounce'

import './SearchBook.scss'

const SearchBooks = ({ addBook }) => {
  const [value, setValue] = useState(null)
  // const [inputValue, setInputValue] = useState('')

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  const handleInputChange = debounce(async (e, inputValue) => {
    if (inputValue.length > 2) {
      const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCpl497dKbKN-piJBJJ5zOf3sCPk7CKuJg&q=${inputValue}`
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.items) {
        const books = data.items.map((book) => {
          const bookVolumeInfo = book['volumeInfo']

          const bookPrettified = {
            title: bookVolumeInfo['title'],
            authors: bookVolumeInfo['authors'] || [],
            publisher: bookVolumeInfo['publisher'],
            imageUrl:
              bookVolumeInfo['imageLinks'] &&
              bookVolumeInfo['imageLinks']['thumbnail']
                ? bookVolumeInfo['imageLinks']['thumbnail']
                : '',
            isbn_10:
              bookVolumeInfo['industryIdentifiers'] &&
              bookVolumeInfo['industryIdentifiers'][0] &&
              bookVolumeInfo['industryIdentifiers'][0]['identifier']
                ? bookVolumeInfo['industryIdentifiers'][0]['identifier']
                : '',
            isbn_13:
              bookVolumeInfo['industryIdentifiers'] &&
              bookVolumeInfo['industryIdentifiers'][1] &&
              bookVolumeInfo['industryIdentifiers'][1]['identifier']
                ? bookVolumeInfo['industryIdentifiers'][1]['identifier']
                : ''
          }
          return bookPrettified
        })
        console.log('inputValue:', inputValue)
        console.log(books.map((book) => book.title).join('\n'))
        setOptions(books)
        console.log({ options })
      }
    } else {
      setOptions([])
    }
  }, 1250)

  return (
    <>
      <div className="search-books-container">
        <div className="m-2 text-center">
          <p className="search-books-header">Search over millions of books!</p>
        </div>
        <div>
          <Autocomplete
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option, value) => option.title === value.title}
            open={open}
            onOpen={() => {
              setOpen(true)
            }}
            onClose={() => {
              setOpen(false)
            }}
            options={options}
            loading={loading}
            value={value}
            onChange={(event, newValue) => {
              console.log({ newValue })
              setOptions(newValue ? [newValue, ...options] : options)
              setValue(newValue)
              addBook(newValue)
            }}
            onInputChange={handleInputChange}
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
                  )
                }}
              />
            )}
            renderOption={(option) => {
              return (
                <div>
                  <span>
                    <strong>{option.title}</strong>
                  </span>{' '}
                  -{' '}
                  <span>
                    <i>{option.authors.join(', ')}</i>
                  </span>
                </div>
              )
            }}
          />
        </div>
      </div>
    </>
  )
}

export default SearchBooks
