interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, children, onClick }: ChildProps) => {
  return (
    <>
      <div>
        {color}
        {children}
        <button onClick={onClick}>Click me</button>
      </div>
      ;
    </>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, children, onClick }) => {
  return (
    <>
      <div>
        {color}
        {children}
        <button onClick={onClick}>Click me</button>
      </div>
      ;
    </>
  );
};

ChildAsFC.displayName = 'ChildAsFC';

export default Child;
