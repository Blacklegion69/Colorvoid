import { Loader } from "lucide-react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Root = lazy(() => import("@/pages/Root"));
const Notfound = lazy(() => import("@/pages/Notfound"));
const Colors = lazy(() => import("@/pages/Colors"));
const Color = lazy(() => import("@/pages/Color"));
const Converters = lazy(() => import("@/pages/Converters"));
const Aboutme = lazy(() => import("@/pages/Aboutme"));
const Palette = lazy(() => import("@/pages/Palette"));
const Gradientgenerators = lazy(() => import("@/pages/Gradientgenerators"));
const Hexa2rgb = lazy(() => import("@/pages/Hexa2rgb"));
const Rgb2hexa = lazy(() => import("@/pages/Rgb2hexa"));
const Gradient = lazy(() => import("@/pages/Gradient"));
const Mesh = lazy(() => import("@/pages/Mesh"));

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <Loader className="w-[200px] h-[200px] animate-spin" />
    </div>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Root />
          </Suspense>
        }
      />
      <Route path="/home">
        <Route path="colors">
          <Route
            path=""
            element={
              <Suspense fallback={<Loading />}>
                <Colors />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<Loading />}>
                <Color />
              </Suspense>
            }
          />
        </Route>
        <Route path="converters">
          <Route
            path=""
            element={
              <Suspense fallback={<Loading />}>
                <Converters />
              </Suspense>
            }
          />
          <Route
            path="rgb2hexa"
            element={
              <Suspense fallback={<Loading />}>
                <Rgb2hexa />
              </Suspense>
            }
          />
          <Route
            path="hexa2rgb"
            element={
              <Suspense fallback={<Loading />}>
                <Hexa2rgb />
              </Suspense>
            }
          />
        </Route>
        <Route path="gradientgenerators">
          <Route
            path=""
            element={
              <Suspense fallback={<Loading />}>
                <Gradientgenerators />
              </Suspense>
            }
          />
          <Route
            path="gradient"
            element={
              <Suspense fallback={<Loading />}>
                <Gradient />
              </Suspense>
            }
          />
          <Route
            path="gradient/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Gradient />
              </Suspense>
            }
          />
          <Route
            path="mesh"
            element={
              <Suspense fallback={<Loading />}>
                <Mesh />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="aboutme"
          element={
            <Suspense fallback={<Loading />}>
              <Aboutme />
            </Suspense>
          }
        />
        <Route
          path="palette"
          element={
            <Suspense fallback={<Loading />}>
              <Palette />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <Notfound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
