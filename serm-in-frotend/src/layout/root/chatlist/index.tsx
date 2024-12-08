import CogConfig from "../../../assets/config_cog.svg";
import ChatResume from "../../../components/custom/ChatResume";

const ChatList = () => {
  const chatListobj = [
    {
      contactName: "Alexsander Alves Cordeiro",
      lastMessage: "Eae Tudo certo?",
      statusLastMessage: "algumacoisa",
    },
    {
      contactName: "Joelma",
      lastMessage: "Bom dia!",
      statusLastMessage: "algumacoisa",
    },
  ];

  return (
    <>
      <div className="flex border-x w-1/4 flex-col h-screen">
        <div className="flex items-center justify-evenly bg-neutral-200 w-full p-2">
          <div className="w-15 h-15 flex items-center justify-center">
            <button className="">
              <img src={CogConfig} alt="Configuração" className="w-10 h-10" />
            </button>
          </div>
          <div className="w-3/4 mr-6">
            <input
              className="outline-none w-full p-1 rounded"
              placeholder="Pesquisar..."
            />
          </div>
        </div>

        <div className="overflow-x-auto w-full divide-y">
          {chatListobj.map((value) => (
            <>
              <ChatResume
                contactName={value.contactName}
                lastMessage={value.lastMessage}
                statusLastMessage={value.statusLastMessage}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatList;
