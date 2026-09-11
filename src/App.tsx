import Cards from "./components/cards"
import { Suspense } from "react";
import HeroSection from "./components/hero";
import Nav from "./components/nav";
import type { cardType } from "./type";

const cardsPromise= async():Promise<cardType[]>=>{
  const res=await fetch("data.json")
  const cardsData = await res.json()
return cardsData;
}

function App() {
  return (
  <>
  <Nav></Nav>
  <HeroSection></HeroSection>
  <Suspense fallback={<p>Loading...</p>}>
    <Cards cardsPromise={cardsPromise()}></Cards>
  </Suspense>
  </>
  );
}

export default App;
