import React from 'react';

import { RadioContainer, StyledCheckbox, Label } from './styles';

const Radio = ({ name, value, label, changed }) => {
	return (
		<RadioContainer>
				<StyledCheckbox
						type="radio"
						name={name}
						checked={value}
						onChange={changed}
				/>
				<Label>
						{label}
				</Label>
		</RadioContainer>
	);
}

export default Radio;