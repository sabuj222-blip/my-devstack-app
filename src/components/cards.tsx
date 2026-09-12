import { use, useState } from "react";
import Card from "../components/card";
import type { cardType } from "../type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface cardPropsType {
  cardsPromise: Promise<cardType[]>;
}

export default function Cards({ cardsPromise }: cardPropsType) {
  const cards = use(cardsPromise);
  const [selectedStack, setSelectedStack] = useState<cardType[]>([]);

  const handleAddToStack = (card: cardType) => {
    if (!selectedStack.some((item) => item.id === card.id)) {
      setSelectedStack([...selectedStack, card]);
      toast.success(`${card.name} stack is added`);
    }
  };

  const handleRemoveItem = (id: string | number, name: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.error(`${name} stack is removed`);
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.warn("All stack are removed");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />

        <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Explore the{" "}
                <span className="text-pink-500 font-extrabold">
                  Technologies
                </span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
               {cards.map((card) => {const isSelected = selectedStack.some((item) => item.id === card.id);
                 return (
                    <Card key={card.id} card={card} onSelect={handleAddToStack} isSelected={isSelected}/>
                 );
                })}
            </div>
            
            <div className="lg:col-span-1 border border-slate-100 rounded-2xl p-4 sm:p-5 bg-white shadow-sm lg:sticky lg:top-24">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Your Stack
                </h2>
                <p className="text-xs text-slate-400 mb-4">
                   {selectedStack.length === 0
                   ? "No technologies selected yet."
                   : `${selectedStack.length} ${selectedStack.length === 1 ? "Technology" : "Technologies"} Selected`}
                </p>

                    <div className="flex flex-col gap-2.5 max-h-[350px] overflow-y-auto">
                       {selectedStack.length === 0 ? (
                        <p className="text-xs text-slate-400 border border-dashed border-slate-300 rounded-lg p-3 text-center">
                           Your stack is empty.
                        </p>
                         ) : ( selectedStack.map((item) => (
                        <div key={item.id}
                           className="flex items-center justify-between border border-gray-100 rounded-xl p-2.5 bg-slate-50/50">
                            <div className="flex items-center gap-2.5">
                                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                                    <div className="flex flex-col">
                                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                                          {item.name}
                                        </span>
                                        <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
                                         {item.category}
                                        </span>
                                    </div>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id, item.name)}
                              className="text-slate-400 hover:text-red-500 text-xs px-1.5 py-1">
                              ✕
                            </button>
                        </div>
                        ))
                      )}
                    </div>
                {selectedStack.length > 0 && (
                <button onClick={handleRemoveAll}
                  className="mt-4 w-full py-2 sm:py-2.5 rounded-xl border border-red-200
                  text-red-500 hover:bg-red-50 text-xs font-semibold transition-colors">
                   Remove All
                </button>
               )}
            </div>
        </div>
    </div>
  );
}