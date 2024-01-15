import "./App.css";

import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router";
import Command from "./pages/Command";
import Dru from "./pages/Dru";
import { SignIn } from "./pages/SignIn";
import Headquaters from "./pages/Headquaters";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Home from "./pages/Home";
import UploadPanel from "./pages/uploadpage/UploadPanel";
import ProtectedUploadRoute from "./layouts/ProtectedUploadRoute";
import AdminPage from "./pages/AdminPage";
import AdminProtectedRoute from "./layouts/AdminProtectedRoute";
import DisplayAllDocuments from "./pages/DisplayAllDocuments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* general protected route */}
        <Route element={<ProtectedLayout />}>
          <Route path="headquaters" element={<Headquaters />} />
          <Route path="/commands" element={<Command />} />
          <Route path="/dru" element={<Dru />} />

          {/* protecting upload route */}
          <Route element={<ProtectedUploadRoute />}>
            <Route path="/upload" element={<UploadPanel />} />
          </Route>
          {/* ******************* */}

          {/* protecting admin route */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          {/* ******************* */}
          <Route path="/:routename" element={<DisplayAllDocuments />} />
        </Route>
        {/* *********************** */}
        {/* ************************ */}

        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>

    // <FileUpload />
  );
}

export default App;
