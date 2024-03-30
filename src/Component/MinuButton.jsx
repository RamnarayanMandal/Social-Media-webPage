import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
import { BsThreeDotsVertical } from "react-icons/bs";
export function MinuButton() {
  return (
    <Menu >
      <MenuHandler>
        <Button className=" bg-white w-0 py-2 ps-3 pe-3 self-center m-0  "><BsThreeDotsVertical className=" text-black"/></Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View profile</MenuItem>
        <MenuItem>share profile</MenuItem>
      </MenuList>
    </Menu>
  );
}