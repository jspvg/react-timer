import Button from "./components/Button";

function App() {
  return (
    <main>
      <p>
        <Button element="button">A Button</Button>
      </p>
      <p>
        <Button element="anchor" href="https://google.com">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
