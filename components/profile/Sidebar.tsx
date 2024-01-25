
type SidebarProps = {
    titles: string[];
    onSelectTitle: (title: string) => void;
}

const Sidebar = ({ titles, onSelectTitle }: SidebarProps) => {
    return (
      <div className="w-1/4 bg-slate-100">
        <h1 className="font-bold text-xl text-center p-4 shadow-md">Profile</h1>
        {/* <hr className="border-black"/> */}
        <ul className="w-full h-full">
          {titles.map((title, index) => (
            <li className="cursor-pointer p-4 hover:bg-black hover:text-orange-400" key={index} onClick={() => onSelectTitle(title)}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;