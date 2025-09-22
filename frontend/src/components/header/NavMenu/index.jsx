import { Dialog, DialogPanel } from "@headlessui/react";
import CloseIcon from "./CloseIcon";
import NavLinks from "../../NavLinks";
import { useAuth } from "../../../context/AuthContext";
import UserAvatar from "../Auth/UserAvatar";
import { useState } from "react";

export default function NavMenu() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-3 py-2 text-2xl hover:text-gray-200 capitalize cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <UserAvatar size={30} />
        {user && <span className="text-base md:text-lg">{user.name}</span>}
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel
          transition
          className="fixed z-1 right-0 top-0 border-l border-l-gray-500 opacity-95 h-full w-2/4 lg:w-1/4 bg-gray-700 px-6 py-3 transition duration-200 ease-in data-closed:translate-x-full data-closed:opacity-0"
        >
          <div className="flex w-full justify-end">
            <button
              className="py-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <NavLinks type="user" />
        </DialogPanel>
      </Dialog>
    </>
  );
}
