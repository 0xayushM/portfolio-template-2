import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const aboutData = [
  {
    icons: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <FaReact />,
      <SiNextdotjs />,
      <SiTailwindcss/>,
      <SiTailwindcss/>
    ],
  },
]

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.50}
          maxWidth={3.0}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
    
      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};