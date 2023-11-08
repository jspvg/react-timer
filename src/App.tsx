import List from "./components/List";

function App() {
  const users = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
  ];

  const hobbies = ["Sports", "Reading", "Cooking"];
  return (
    <main>
      <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>
    </main>
  );
}

export default App;
