import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';

function loadScript(src, position, id) {
	if (!position) {
		return;
	}

	const script = document.createElement('script');
	script.setAttribute('async', '');
	script.setAttribute('id', id);
	script.src = src;
	position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.text.secondary,
		marginRight: theme.spacing(2),
	},
}));

export default function GoogleMaps() {
	const classes = useStyles();

	const [value, setValue] = React.useState(null);
	const [inputValue, setInputValue] = React.useState('');
	const [options, setOptions] = React.useState([]);

	const loaded = React.useRef(false);

	if (typeof window !== 'undefined' && !loaded.current) {
		if (!document.querySelector('#google-maps')) {
			loadScript(
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyCpl497dKbKN-piJBJJ5zOf3sCPk7CKuJg&libraries=places',
				document.querySelector('head'),
				'google-maps',
			);
		}

		loaded.current = true;
	}

	const fetch = React.useMemo(
		() =>
			throttle((request, callback) => {

				let x = autocompleteService.current.getPlacePredictions(request, callback);

			}, 200),
		[],
	);

	React.useEffect(() => {
		let active = true;

		if (!autocompleteService.current && window.google) {
			autocompleteService.current = new window.google.maps.places.AutocompleteService();
		}
		if (!autocompleteService.current) {
			return undefined;
		}

		if (inputValue === '') {
			setOptions(value ? [value] : []);
			return undefined;
		}

		fetch({ input: inputValue }, (results) => {
			if (active) {
				console.log({ results });

				let newOptions = [];

				if (value) {
					newOptions = [value];
				}

				if (results) {
					newOptions = [...newOptions, ...results];
				}

				setOptions(newOptions);
			}
		});

		return () => {
			active = false;
		};
	}, [value, inputValue, fetch]);

	return (
		<Autocomplete
			id="google-map-demo"
			style={{ width: 300 }}
			getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
			filterOptions={(x) => x}
			options={options}
			autoComplete
			includeInputInList
			filterSelectedOptions
			value={value}
			onChange={(event, newValue) => {
				console.log({ newValue });
				setOptions(newValue ? [newValue, ...options] : options);
				setValue(newValue);
			}}
			onInputChange={(event, newInputValue) => {
				console.log({newInputValue});
				setInputValue(newInputValue);
			}}
			renderInput={(params) => (
				<TextField {...params} label="Add a location" variant="outlined" fullWidth />
			)}
			renderOption={(option) => {
				return (
					<div>
						<h3>{option.structured_formatting.secondary_text}</h3>
					</div>
				);
			}}
		/>
	);
}
