function App() {
    return (
      <div>
        <Person
          name="Muscleman"
          age={38}
          hobbies={["golf carts", "watching tv", "my mom"]}
        />
        <Person name="Mordecai" age={34} hobbies={["videogames", "gambling"]} />
        <Person
          name="Rigby"
          age={10}
          hobbies={["videogames", "making prank calls"]}
        />
        <Person
          name="Oppenheimer"
          age={100}
          hobbies={["reading", "Nuclear Fission", "Winning"]}
        />
      </div>
    );
  }