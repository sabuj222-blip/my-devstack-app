export interface cardType {
    id: number
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
},
export interface ToastItem {
  id: number;
  message: string;
  type: "add" | "remove";
}