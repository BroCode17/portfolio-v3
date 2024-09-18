import CodeSnippet from "./codesnippet"


const javascriptCode = `
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
`

const typescriptCode = `
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(\`Hello, \${person.name}! Happy \${person.fun}!.\`);
}

const person: Person = { name: 'Eben', fun: 'Coding' };
greet(person);
`

const reactCode = `
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
    {children}
  </button>
);

export default Button;
`

export default function ShowCode({show}: {show: 'one'|'two'|'three'}) {

  const render = (show:string) => {
    switch(show){
      case 'one':
        return  <CodeSnippet 
        code={javascriptCode.trim()} 
        language="javascript" 
        title="Coding is hard! 😭" 
      />
      break;
      case 'two':
        return   <CodeSnippet 
        code={typescriptCode.trim()} 
        language="typescript" 
        title="Coding is hard!! 😭😭" 
      />
      break;
      default:
        return   <CodeSnippet 
        code={reactCode.trim()} 
        language="tsx" 
        title="Coding is hard!!! 😭😭😭" 
      />
    
    }
  }

  return render(show)
    
  
  
}