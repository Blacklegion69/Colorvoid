import { Routes, Route } from "react-router-dom";
import Root from "@/pages/Root";
import Notfound from "@/pages/Notfound";
import Colors from "@/pages/Colors";
import Color from "@/pages/Color";
import Converters from "@/pages/Converters";
import Aboutme from "@/pages/Aboutme";
import Palette from "@/pages/Palette";
import Gradientgenerators from "@/pages/Gradientgenerators";
import Hexa2rgb from "@/pages/Hexa2rgb";
import Rgb2hexa from "@/pages/Rgb2hexa";
import Gradient from "@/pages/Gradient";
import Mesh from "@/pages/Mesh";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home">
        <Route path="colors">
          <Route path="" element={<Colors />} />
          <Route path=":id" element={<Color />} />
        </Route>
        <Route path="converters">
          <Route path="" element={<Converters />} />
          <Route path="rgb2hexa" element={<Rgb2hexa />} />
          <Route path="hexa2rgb" element={<Hexa2rgb />} />
        </Route>
        <Route path="gradientgenerators">
          <Route path="" element={<Gradientgenerators />} />
          <Route path="gradient" element={<Gradient />} />
          <Route path="gradient/:id" element={<Gradient />} />
          <Route path="mesh" element={<Mesh />} />
        </Route>
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="palette" element={<Palette />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;
