import { CgProfile } from "react-icons/cg";
import { BsTelephoneOutbound, BsPinMap, BsGlobeAmericas } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

export const labelArr = [
  {
    id: 1,
    LabelName: "your name",
    helper: "first, middle and lastname",
    icon: <CgProfile />,
  },
  {
    id: 2,
    LabelName: "city",
    helper: "your location",
    icon: <BsPinMap />,
  },
  {
    id: 3,
    LabelName: "telephone number",
    helper: "",
    icon: <BsTelephoneOutbound />,
  },
  {
    id: 4,
    LabelName: "House address",
    helper: "",
    icon: <BiHome />,
  },
  {
    id: 5,
    LabelName: "country of residence",
    helper: "",
    icon: <BsGlobeAmericas />,
  },
];
