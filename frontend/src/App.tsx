import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Publish } from "./pages/Publish"
import { TextEditor } from "./pages/TextEditor"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/createBlog" element={<TextEditor />} />
          {/* <Route path="/myStories" element={<YourStoriesPage />} /> */}
          {/* <Route path="/publish" element={<Publish></Publish>}></Route> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
