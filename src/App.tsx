import { Button } from './components/Button';
import { Input } from './components/Input';
import { Text } from './components/Text';

function App() {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-4">
      <Button href="https://www.google.com/" target="_blank">
        Click me
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

      <Text as="h1" variant="heading-4xl" weight="bold" color="neutral-900">
        Page Title
      </Text>
      <Text as="p" variant="body-lg" color="neutral-600" className="max-w-2xl">
        This is an introduction paragraph that provides context for the page
        content.
      </Text>
      <Text
        as="label"
        variant="label"
        weight="medium"
        color="neutral-700"
        htmlFor="username"
      >
        Username
      </Text>
      <Text variant="label-sm" color="error" className="mt-1">
        This field is required
      </Text>
      <Text
        as="span"
        variant="label-sm"
        weight="medium"
        color="success"
        className="bg-success-100 rounded px-2 py-1"
      >
        Active
      </Text>
    </div>
  );
}

export default App;
