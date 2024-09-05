import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownPreview;