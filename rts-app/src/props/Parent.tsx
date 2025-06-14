import Child, { ChildAsFC } from './Child';

function Parent() {
  return (
    <>
    <div>
      <Child color="red" onClick={() => console.log('Clicked Child')} >
        <span>Child Content</span>
      </Child>
    </div>
    <div>
      <ChildAsFC color="red" onClick={() => console.log('Clicked ChildFC')} >
        <span>Child Content</span>
      </ChildAsFC>
    </div>
    </>
  );
}

export default Parent;
