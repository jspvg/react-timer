import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="name" id="name" />
        <Input type="number" label="age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
