import { FormControl } from 'react-bootstrap';

type PropsType = {
    handleInputChange: (inp: string) => void;
    defaultValue?: string;
    id?: string
}

const MarkdownInput = (props: PropsType) => {
    return (
        <FormControl className="h-100" id={props.id} as="textarea" onChange={e => props.handleInputChange(e.target.value)}>
            {props.defaultValue}
        </FormControl>
    )
};

export default MarkdownInput;
