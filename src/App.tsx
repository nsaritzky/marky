import { useEffect, useState } from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import './App.scss';
import MarkdownInput from './components/MarkdownInput';
import { marked } from 'marked';
import { sanitize } from 'dompurify';

function App(): JSX.Element {
    const placeHolder = `
# This is a heading.
- I can make lists
- with many items!

## I can have subheadings
I'm **bold**.
I speak with *emphasis*.
I'm visual
![art](https://upload.wikimedia.org/wikipedia/commons/0/07/Lascaux2.jpg)
I speak Latin:
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

And, of course, I can \`code\`
\`\`\`
const foo = bar => bar + 1;
\`\`\`

Learn more about the syntax [here](https://www.markdownguide.org/basic-syntax/).
`;

    marked.setOptions({
    gfm: true,
    breaks: true
  });

  const renderOutput = (md: string) => {
    return ({
      __html: sanitize(marked.parse(md))
    })
  }

  const handleInputChange = (inp: string) => {
    setInput(inp);
  }

  const [input, setInput] = useState(placeHolder);
  const [output, setOutput] = useState(renderOutput(placeHolder));

  useEffect(() => {
    setOutput(renderOutput(input));
  }, [input]);


  return (
    <div className="App">
      <Container fluid className="p-2">
        <Row className="pb-3 vh-100">
          <Col>
            <MarkdownInput id="editor" defaultValue={placeHolder} handleInputChange={handleInputChange} />
          </Col>
          <Col>
            <div id="preview" className="text-start" dangerouslySetInnerHTML={output} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
