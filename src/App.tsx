import { Button } from './components/Button';

function App() {
  return (
    <div className="inline-flex flex-1 flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold text-neutral-600 underline">
        Hello world!
      </h1>
      <Button href="https://www.google.com/" target="_blank">
        Click Me
      </Button>
      <Button variant="outline" onPress={() => console.log('test')}>
        Click Me
      </Button>
      <Button variant="secondary" size="lg">
        Click Me
      </Button>
      <Button isDisabled>Click Me</Button>
    </div>
  );
}

export default App;
