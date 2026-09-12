
import type { cardType} from "../type";

export interface CardProps {
  card: cardType;
  onSelect: (card: cardType) => void;
  isSelected: boolean;
}

export default function Card({ card, onSelect, isSelected }: CardProps) {
  return (
    <div
       className={`flex flex-col justify-between border shadow-sm rounded-2xl p-4 sm:p-5 md:p-6 bg-white 
       hover:shadow-md transition-all ease-out duration-300 hover:-translate-y-1 ${
       isSelected ? "border-2 border-pink-500" : "border-gray-100"
       }`}>
        <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain"src={card.icon} alt={card.name}/>
                 {card.badge && (
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-sky-500 border border-sky-100">
                 {card.badge}
                </span>
               )}
            </div>
            <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 font-sans">
                 {card.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                 {card.description}
                </p>
            </div>
        </div>

        <div>
            <div className="flex items-center justify-between mb-4 text-xs">
                <div className="flex items-center gap-2 sm:gap-3">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 font-medium text-slate-600 text-[11px] sm:text-xs">
                      {card.category || "Frontend"}
                    </span>
                    <span className="font-medium text-slate-500 text-[11px] sm:text-xs">
                     {card.difficulty || "Intermediate"}
                    </span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-slate-700 text-xs">
                    <span className="text-amber-400">★</span>
                    <span>{card.rating || 4.9}</span>
                </div>
            </div>
                <button onClick={() => onSelect(card)}disabled={isSelected}
                  className={`w-full rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors active:scale-[0.99] ${
                  isSelected ? "bg-pink-100 text-pink-500 cursor-not-allowed"
                  : "bg-[#0b0f19] text-white hover:bg-slate-800"
                  }`}>
                  {isSelected ? "✔ Added to stack" : "Add to Stack"}
                </button>
        </div>
    </div>
  );
}