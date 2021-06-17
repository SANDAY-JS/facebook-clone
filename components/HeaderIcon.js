function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="group flex items-center rounded-xl cursor-pointer
    sm:h-14 md:px-10 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 "
    >
      <Icon
        className={`text-gray-500 h-5 text-center sm:h-7 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
