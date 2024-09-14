import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MarkdownPreview = ({ content }) => {
  return (<ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      code(props) {
        const { children, className, node, ...rest } = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            // eslint-disable-next-line react/no-children-prop
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={oneDark}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
  >
    {content}
  </ReactMarkdown>
  )
};

export default MarkdownPreview;