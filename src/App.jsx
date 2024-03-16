import Nav from './Components/Nav';
import {Hero,
        Footer, 
        CustomerReviews,
        PopularProducts,
        Services,
        SpecialOffers,
        SuperQuality,
        Subscribe } from './sections'

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-b padding-r">
      <Hero />
    </section>
    <section className="padding">
    <PopularProducts />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding-x py-10">
    <Services />
    </section>
    <section className="padding">
    <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
    <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8 text-white">
    <Footer />
    </section>

    </main>
)

export default App;
