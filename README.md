# Dev Stack Builder

A modern, interactive web application that helps developers explore, compare, and assemble their ideal technology stack for upcoming projects.

---

## About The Project

**Dev Stack Builder** is an intuitive platform designed to streamline your development workspace setup. Browse through various frontend tools, backend frameworks, databases, and utility libraries, then build your customized technology stack side-by-side with real-time feedback.

---

## Tech Stack

- **Frontend Library:** React (TypeScript)
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify
- **Icons:** Lucide React

---

## Key Features

- **Interactive Stack Management:** Add or remove technologies to your custom stack with real-time updates and notification alerts.
- **Responsive Grid & Side Panel:** Fluid layout optimized seamlessly for Mobile, Tablet, and Desktop screens.
- **Empty State & Duplicate Guards:** Built-in validation prevents adding duplicate stack items and gracefully guides users when no items are selected.

---

##  React Conceptual Q&A

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets us write HTML-like markup directly inside JavaScript code. It is used in React because it makes building components visual, readable, and easier to maintain compared to writing raw `React.createElement()` statements.

### 2. What is the difference between props and state?
* **Props (Properties):** Read-only data passed from a parent component down to a child component. They cannot be modified by the receiver.
* **State:** Internal data managed within a component that can change over time. When state updates, the component re-renders to reflect those changes visually.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage local state. In this project, it was used inside `Cards.tsx` as `const [selectedStack, setSelectedStack] = useState<cardType[]>([])` to keep track of the array of technologies selected by the user.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects in functional components, such as fetching data from an external API or local JSON file when the component mounts. It ensures that data fetching occurs after the component renders, keeping the initial rendering process fast and predictable.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique `key` props to track, reorder, add, or delete specific items efficiently in the DOM. Without unique keys, React cannot reliably determine which element changed, leading to unnecessary re-renders or unexpected visual bugs.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means rendering specific UI elements based on logical conditions (like `if` statements or ternary operators). In this project, it was used to display an empty state message when no tech items were selected:

```tsx
{selectedStack.length === 0 ? (
  <p className="text-xs text-slate-400 border border-dashed border-slate-300 rounded-lg p-3 text-center">
    Your stack is empty.
  </p>
) : (
  /* Render Selected Stack Items */
)}
