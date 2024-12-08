import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { ChatResumeProps } from "./interface";

const ChatResume = ({
  contactName,
  lastMessage,
  statusLastMessage,
}: ChatResumeProps) => {
  return (
    <div className="w-full p-2">
      <div className="flex flex-row items-center gap-4 p-2">
        <Avatar>
          <AvatarImage src="https://www.petz.com.br/cachorro/racas/corgi/img/corgi-filhote.webp" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col lg:w-auto md:w-30 p-2">
          <strong className="text-ellipsis">{contactName}</strong>
          <p>{lastMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatResume;
