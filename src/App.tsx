import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-4">
      <Button href="https://www.google.com/" target="_blank">
        Default Variant
      </Button>
      <Button variant="outline" onPress={() => console.log('test')}>
        Outline Variant
      </Button>
      <Button variant="secondary">Secondary Variant</Button>
      <Button isDisabled>Disabled</Button>

      <Input label="Name" placeholder="Enter name" description="User's name" />
      <Input label="Name" variant="underline" placeholder="Enter name" />
      <Input label="Name" variant="filled" placeholder="Enter name" />
      <Input label="Name" placeholder="Enter name" isDisabled />
    </div>
  );
}

export default App;
