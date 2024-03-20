/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create state for markdown with default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real time 
*/

import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 50vh;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  resize: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
const MarkdownPreview = styled(ReactMarkdown)`
  width: 80%;
  height: 50vh;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: auto;
`;
export default function Home() {
  const [markdown, setMarkdown] = useState('# type markdown here');

  return (
    <EditorContainer>
      <TextArea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      <MarkdownPreview>{markdown}</MarkdownPreview>
    </EditorContainer>
  );
}

