import PlaneLogo from "../../../assets/paper_plane.svg";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

const Topbar = () => {
  return (
    <div className="flex flex-row w-full bottom-2 h-14 bg-slate-500 drop-shadow-md">
      <div className="flex flex-row  items-center w-1/2 p-1">
        <img src={PlaneLogo} alt="Logo" className="w-12 mx-2" />
        <h1>SermIn</h1>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="px-6 flex flex-row items-center justify-around">
          <div className="mx-4">
            <h2>Alexsander Cordeiro</h2>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
