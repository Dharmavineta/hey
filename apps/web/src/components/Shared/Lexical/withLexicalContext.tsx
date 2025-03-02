import { CodeNode } from '@lexical/code';
import { HashtagNode } from '@lexical/hashtag';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import type { FC } from 'react';

import { MentionNode } from './Nodes/MentionsNode';

const initialConfig = {
  namespace: 'composer',
  theme: {
    text: {
      bold: 'bold',
      italic: 'italic',
      code: 'text-sm bg-gray-300 rounded-lg dark:bg-gray-700 px-[5px] py-[2px]'
    },
    link: 'text-brand-500',
    hashtag: 'text-brand-500'
  },
  nodes: [CodeNode, MentionNode, HashtagNode, AutoLinkNode, LinkNode],
  editorState: null,
  onError: () => {}
};

const withLexicalContext = (Component: FC<any>) => {
  const LexicalContext = (props: any) => (
    <LexicalComposer initialConfig={{ ...initialConfig }}>
      <Component {...props} />
    </LexicalComposer>
  );

  return LexicalContext;
};

export default withLexicalContext;
