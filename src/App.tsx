import { Button } from './components/Button';
import { Input } from './components/Input';
import { TextArea } from './components/TextArea/TextArea';

function App() {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-4">
      <Button variant="secondary">Secondary Variant</Button>
      <Button isDisabled>Disabled</Button>
      <Input label="Name" placeholder="Enter name" description="User's name" />
      <Input label="Name" variant="underline" placeholder="Enter name" />
      <Input label="Name" variant="filled" placeholder="Enter name" />
      <Input label="Name" placeholder="Enter name" type="text" isDisabled />

      <TextArea
        label="Standard TextArea"
        placeholder="Standard styling..."
        variant="standard"
      />

      <TextArea
        label="Filled TextArea"
        placeholder="Filled background..."
        variant="filled"
      />

      <TextArea
        label="Underline TextArea"
        placeholder="Underline only..."
        variant="underline"
      />
      <TextArea
        label="Message"
        description="Tell us what you think"
        placeholder="Your message..."
        variant="filled"
        size="lg"
        resize="horizontal"
        onBlur={() => console.log('TextArea blurred')}
        onFocus={() => console.log('TextArea focused')}
      />
    </div>
  );
}

export default App;
