import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/hero/Hero";
import ReviewBox from "../components/reviewBox/ReviewBox";

// This is the index route, it will be rendered at the root path
// It created the route "/". The "/" is the path of the route
export const Route = createFileRoute("/")({
  // When the route "/" is accessed, the Index component will be rendered
  component: Index,
});

function Index() {
  return (
    <div className="frontpageContainer">
      <Hero />
      <div className="reviewSection">
        <h2>Det siger vores brugere</h2>
        <div className="reviewContainer">
          <ReviewBox
            reviewEnsemble="Fra kvartetten Klassisk Amok"
            reviewImg="/img/reviewPerson1.png"
            reviewName="Sofie"
            reviewText="Musik Samspil hjalp os med at finde sammen. Først var det meningen, at vi bare skulle mødes en enkelt gang, men det var bare så fedt, at nu mødes vi hver anden uge!"
          ></ReviewBox>
          <ReviewBox
            reviewEnsemble="Koordinator i VirumOrkestret"
            reviewImg="/img/reviewPerson2.png"
            reviewName="Anitta"
            reviewText="“Vi stod over for at mangle både en trompetist og en fløjtenist til vores nytårskoncert - men med Musik Samspil fandt vi assistenter i løbet af få timer. Noget der ellers kan holde mig søvnløs i flere nætter!"
          ></ReviewBox>
          <ReviewBox
            reviewEnsemble="Fra kvartetten Klassisk Amok"
            reviewImg="/img/reviewPerson1.png"
            reviewName="Sofie"
            reviewText="Musik Samspil hjalp os med at finde sammen. Først var det meningen, at vi bare skulle mødes en enkelt gang, men det var bare så fedt, at nu mødes vi hver anden uge!"
          ></ReviewBox>
        </div>
      </div>
      <div className="postContainer">
        <h2>Seneste opslag</h2>
        <h2>COMING SOON</h2>
      </div>
    </div>
  );
}
