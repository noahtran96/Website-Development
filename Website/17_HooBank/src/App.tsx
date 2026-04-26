import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/specific";
import styles from "./style";

function App() {
  return (
    <div className="w-full overflow-hidden bg-black">
      {/* navbar */}
      <div className="bg-primary fixed top-0 left-0 z-[50] w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      {/* hero */}
      <div
        className={`bg-primary ${styles.flexStart} ${styles.paddingX} pt-[50px]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* others */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
