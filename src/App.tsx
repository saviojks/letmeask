
import { BrowserRouter, Route, } from 'react-router-dom'
import { Home, NewRoom } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/new_room" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
