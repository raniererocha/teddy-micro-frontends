import { CloseIcon } from "../../atoms/Icons";
import { Text } from "../../atoms/Text";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    title?: string;
    onClose: () => void;
}
export const Modal = (props: ModalProps) => {
    const { children, isOpen, onClose } = props;
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white px-5 rounded-lg shadow-lg z-10 min-w-[400px]">
       
            <div className="flex justify-between w-full py-5">
                <Text variant="title" className="">{props.title || ""}</Text>
                <button onClick={onClose} className="">
                <CloseIcon />
                </button>
            </div>
        <div className="pb-5">
        {children}
        </div>
      </div>
    </div>
  );
};