"use client";
interface MenuItemPros {
  onClick: () => void;
  lable: string;
}
const MenuItem: React.FC<MenuItemPros> = ({ onClick, lable }) => {
  return (
    <div
      onClick={onClick}
      className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
            
            "
    >
      {lable}
    </div>
  );
};

export default MenuItem;
