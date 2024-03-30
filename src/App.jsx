import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import PostListProvider from "./Store/Posts-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <PostListProvider>
        <NavBar className="my-10"/>
       
          <Outlet />
      
        <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
