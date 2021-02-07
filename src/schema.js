import { gql } from '@apollo/client';

const Submit_Form = gql`
	query SubmitForm($level: Int!, $user: String!, $pass: String!) {
		message
	}
`;

export { Submit_Form };