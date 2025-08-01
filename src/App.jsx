import "./styles.css";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      <MsgList />
      {/* <UserList /> */}
    </div>
  );
}

function MsgList() {
  const names = ["Abhishek", "Murkesh", "Veera", "Vicky", "Latha"];

  // Array of Strings -> Array of JSX (Transform)
  return (
    <div>
      {names.map((name) => (
        <Msg name={name} />
      ))}
    </div>
  );
}

// JSX rule - only one parent element
// React fragments

// Smart Component (data)
// Task - UserList (DRY)
function UserList() {
  return (
    <section className="user-list-container">
      <User
        name="Ashok"
        pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <User
        name="Latha"
        pic="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
      />
      <User
        name="Vicky"
        pic="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      />
    </section>
  );
}

// Task - User (Component)
// Presentation Component - Reusablity ⬆️
function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={`${name}'s profile pic`} />
      <p>
        Hello, <span>{name} </span>🎉🎉
      </p>
    </div>
  );
}

// Component Rules
// 1. PascalCase
// 2. return JSX
// props - name  (property)
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name} 🎊</h1>
    </div>
  );
}

// {} -> Interpolation

// App()

// XML vs HTML
// JavaScript XML
// JSX -> JS

// Reserved Keyword
// 1. class -> className
// 2. for -> htmlFor
