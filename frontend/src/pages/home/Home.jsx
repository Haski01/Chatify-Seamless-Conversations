import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border p-4">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
