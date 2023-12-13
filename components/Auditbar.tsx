export default function Auditbar({
  onChildValueChange,
  items,
}: {
  onChildValueChange: (value: string) => void;
  items: { name: string; href: string }[];
}) {
  const handleChange = (categorie: string) => {
    const newValue = categorie;
    onChildValueChange(newValue);
  };

  return (
    <aside className="h-full bg-sidebar p-4 absolute right-0 overflow-y-scroll auditbar">
      <div className="w-max-content flex items-center gap-4 pb-4 mb-4 border-b border-gray-300 ">
        <p
          className="
          text-white
            text-text2 
            text-base
            font-bold
            text-center
            tracking-tight
            text-shadow
            "
        >
          {' '}
          Les différentes thématiques
        </p>
      </div>
      <ul className="list-none">
        {items.map(({ name }) => (
          <li className="text-center items-center justify-center" key={name}>
            <div className="justify-center items-center flex">
              <button
                type="button"
                onClick={() => handleChange(name)}
                value={name}
                className="
                text-xs 
                no-underline 
                text-black 
                py-2 
                px-4 
                flex 
                items-center 
                bg-buttonSidebar 
                mb-4 
                w-full
                rounded-lg 
                transition 
                duration-300 
                hover:bg-orange 
                hover:text-white 
                focus:bg-orange 
                focus:text-white 
                justify-center"
              >
                <span className="items-center justify-center">{name}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
