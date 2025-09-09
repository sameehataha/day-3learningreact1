import Navbar from "./Navbar";
import Card from "./Card";
import Data from "./Data"
import style from "./style.css"
export default function App() {
   const cards = Data.map (destination => { 
       let displayText = `★ ${destination.stats.rating} (${destination.stats.reviewCount})`

    return (
          <Card 
          coverImg={destination.coverImg}
          title={destination.title}
          location={destination.location}
          stats={destination.stats}
          reviewCount={destination.stats.reviewCount}
          description={destination.description}
          />
        ) 
      })  
return (
   <div>
      <Navbar/>
      <section className="cards-list">{cards}</section>
   </div>
)
}
