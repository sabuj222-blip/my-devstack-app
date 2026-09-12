import { use, useState } from "react";
import Card from "../components/card";
import type { cardType ,ToastItem} from "../type";
import { Bell } from "lucide-react";


export interface cardPropsType {
    cardsPromise: Promise<cardType[]>;
}


export default function Cards({ cardsPromise }: cardPropsType) {
    const cards = use(cardsPromise);

    const [selectedStack, setSelectedStack] = useState<cardType[]>([]);
const [toasts, setToasts] = useState<ToastItem[]>([]);
const addToast = (message: string, type: "add" | "remove") => {
    const newToastId = Date.now();
    const newToast: ToastItem = { id: newToastId, message, type };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToastId));
    }, 3000);
  };



    const handleAddToStack = (card: cardType) => {
        if (!selectedStack.some((item) => item.id === card.id)) {
            setSelectedStack([...selectedStack, card]);
            addToast(`${card.name}stack is added `, "add");
        }
    };

    const handleRemoveItem = (id: string | number,name:string) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
        addToast(`${name} stack is removed `, "remove");
    };

    const handleRemoveAll = () => {
        if (selectedStack.length === 0)return;
        setSelectedStack([]);
    addToast(" All stack are removed", "remove");
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

           <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 text-white px-5 py-3 rounded-xl shadow-xl transition-all duration-300 pointer-events-auto ${
              toast.type === "add"
                ? "bg-pink-600"
                : "bg-slate-800 border border-slate-700"
            }`}
          >
            <Bell className="w-5 h-5 shrink-0 text-white" />
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        ))}
      </div>


            <div className="mb-8">
                <h1 className="text-[36px] font-extrabold text-slate-900">
                    Explore the{" "}
                    <span className="text-pink-500 font-extrabold">Technologies</span>
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => {
                        const isSelected = selectedStack.some((item) => item.id === card.id);
                        return (
                            <Card
                                key={card.id}
                                card={card}
                                onSelect={handleAddToStack}
                                isSelected={isSelected}>
                            </Card>   
                               
                        );
                    })}
                </div>
                <div className="lg:col-span-1 rounded-2xl border border-dashed border-sky-300 p-5 bg-white shadow-sm sticky top-6">
                    <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
                   <p className="text-xs text-slate-400 mb-4">
                       {selectedStack.length === 0
                         ? "No technologies selected yet."
                          : `${selectedStack.length} ${selectedStack.length === 1 ? "Technology" : "Technologies"} Selected`}
                    </p>
                    <div className="flex flex-col gap-3 min-h-12.5">
                        {selectedStack.length === 0 ? (
                            <p className="text-xs text-slate-400 border border-dashed border-slate-300 rounded-lg p-3 text-center">
                               Your stack is empty.
                            </p>
                        ) : (
                            selectedStack.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border border-gray-100 rounded-xl p-3 bg-slate-50/50">
                                    <div className="flex items-center gap-3">
                                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                                          <div className="flex flex-col">
                                             <span className="text-sm font-semibold text-slate-800 leading-tight">
                                              {item.name}
                                             </span>
                                            <span className="text-[11px] font-medium text-slate-400">
                                             {item.category}
                                             </span>
                                           </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.id,item.name)}
                                        className="text-slate-400 hover:text-red-500 text-sm px-1">✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    {selectedStack.length > 0 && (
                        <button
                            onClick={handleRemoveAll}
                            className="mt-6 w-full py-2.5 rounded-xl border border-red-200 text-red-500
                            hover:bg-red-50 text-xs font-semibold transition-colors">Remove All
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}