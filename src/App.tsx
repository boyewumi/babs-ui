import { Button } from './components/Button';

function App() {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-4">
      <Button href="https://www.google.com/" target="_blank">
        Default Variant
      </Button>
      <Button variant="outline" onPress={() => console.log('test')}>
        Outline Variant
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Variant
      </Button>
      <Button isDisabled>Disabled</Button>
    </div>
  );
}

export default App;
