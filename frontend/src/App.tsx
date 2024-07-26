import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Publish } from "./pages/Publish"
import { TextEditor } from "./pages/TextEditor"
import { BloggerProfilePage } from "./pages/BloggerPage"
// import { EditBlog } from "./components/EditBlog"
import { UpdateBlogPage } from "./pages/UpdateBlogPage"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/createBlog" element={<TextEditor />} />
          <Route path="/edit/:id" element={<UpdateBlogPage />} />
          <Route path="/blogger-profile" element={<BloggerProfilePage />} />

          {/* <Route path="/myStories" element={<YourStoriesPage />} /> */}
          {/* <Route path="/publish" element={<Publish></Publish>}></Route> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
