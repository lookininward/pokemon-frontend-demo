import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism.min.css'; // Choose a Prism theme you like

interface CodeSnippetProps {
    code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
    const highlightedCode = Prism.highlight(code, Prism.languages.typescript, 'typescript');
    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} className="language-typescript" />
        </pre>
    );
};

export default CodeSnippet;
