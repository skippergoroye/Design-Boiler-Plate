import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      {/* <Nav />  */}
      <secction className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </secction>
      <section className='bg-purple-400 padding'>
        <PopularProducts />
      </section>
      <section className='bg-yellow-500 padding'>
        <SuperQuality />
      </section>
      <section className='bg-blue-500 padding-x py-10'>
        <Services />
      </section>
      <section className='bg-red-500 padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='bg-lime-500 padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
