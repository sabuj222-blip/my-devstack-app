// import { useState } from "react";
// import { Bell } from "lucide-react";
// import type { cardType } from "../type";
// interface CardProps {
//     card: cardType;
//     onSelect: (card: cardType) => void;
//     isSelected: boolean;
// }

// export default function Card({ card, onSelect, isSelected }: CardProps) {
//  const [showAlert, setShowAlert] = useState(false);
//  const handleSelect = () => {
//     onSelect(card);
//     setShowAlert(true);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 3000);
//   };

//     return (<>
// {showAlert && (
//         <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-pink-200 text-pink-600 px-5 py-3 rounded-xl shadow-xl animate-bounce">
//           <Bell className="w-5 h-5" />
//           <span className="font-medium text-sm">
//             <strong>{card.name}</strong> is added to stack
//           </span>
//         </div>
//       )}

  


//         <div className={`flex flex-col justify-between border border-gray-100 shadow-sm rounded-2xl p-6 bg-white hover:shadow-md transition-transform ease-out duration-500  hover:-translate-y-2
//          ${isSelected ? "border-2 border-pink-500" : "border border-gray-100"}`}>
//             <div>
//                 <div className="flex items-center justify-between mb-4">
//                     <img
//                         className="w-10 h-10 object-contain"
//                         src={card.icon}
//                         alt={card.name} />
//                       {card.badge && (
//                         <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500 border border-sky-100">
//                             {card.badge}
//                         </span>
//                     )}
//                 </div>
//                 <div className="mb-6">
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">{card.name}</h3>
//                     <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
//                         {card.description}
//                     </p>
//                 </div>
//             </div>

//             <div>
//                 <div className="flex items-center justify-between mb-5 text-xs">
//                     <div className="flex items-center gap-3">
//                         <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
//                             {card.category || "Frontend"}
//                         </span>
//                         <span className="font-medium text-slate-500">
//                             {card.difficulty || "Intermediate"}
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-1 font-semibold text-slate-700">
//                         <span className="text-amber-400">★</span>
//                         <span>{card.rating || 4.9}</span>
//                     </div>
//                 </div>
//                 <button
//                     onClick={handleSelect}//{() => onSelect(card)}
//                     disabled={isSelected}
//                     className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors active:scale-[0.99] ${isSelected
//                             ? "bg-pink-100 text-pink-500  cursor-not-allowed"
//                             : "bg-[#0b0f19] text-white hover:bg-slate-800"
//                         }`}>
//                     {isSelected ? "✔ Added to stack" : "Add to Stack"}
//                 </button>
//             </div>
//         </div>
//     </>
//     )
// }



import type { cardType } from "../type";

interface CardProps {
  card: cardType;
  onSelect: (card: cardType) => void;
  isSelected: boolean;
}

export default function Card({ card, onSelect, isSelected }: CardProps) {
  return (
    <div
      className={`flex flex-col justify-between border shadow-sm rounded-2xl p-6 bg-white hover:shadow-md transition-all ease-out duration-500 hover:-translate-y-2 ${
        isSelected ? "border-2 border-pink-500" : "border-gray-100"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <img
            className="w-10 h-10 object-contain"
            src={card.icon}
            alt={card.name}
          />
          {card.badge && (
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500 border border-sky-100">
              {card.badge}
            </span>
          )}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">
            {card.name}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
            {card.description}
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-5 text-xs">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
              {card.category || "Frontend"}
            </span>
            <span className="font-medium text-slate-500">
              {card.difficulty || "Intermediate"}
            </span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
            <span>{card.rating || 4.9}</span>
          </div>
        </div>

        {/* সরাসরি onSelect(card) ব্যবহার করা হয়েছে */}
        <button
          onClick={() => onSelect(card)}
          disabled={isSelected}
          className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors active:scale-[0.99] ${
            isSelected
              ? "bg-pink-100 text-pink-500 cursor-not-allowed"
              : "bg-[#0b0f19] text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? " ✔ Added to stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}