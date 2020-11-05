import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from 'rebass';

// intern components
const Avatar = styled(Box)`
	flex-shrink: 0;
	height: ${props => props.height};
	background-image: url("https://cdn.icon-icons.com/icons2/1371/PNG/512/robot01_90832.png");
	background-size: cover;
	border-radius: 50%;	
`;

Avatar.propTypes = {
	height: PropTypes.string,
}

export default Avatar;