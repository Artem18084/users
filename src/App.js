import UsersList from "./Components/UsersList/UsersList";
import { Routes, Route } from "react-router-dom";
import UserPostList from "./Components/UserPostList/UserPostList";

function App() {
  return (
    <div className="flex  justify-center">
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user'sPosts" element={<UserPostList />} />
      </Routes>
    </div>
  );
}

export default App;
