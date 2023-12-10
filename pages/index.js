// import Feature from "../components/Feature";
import Skills from "../components/Skills";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero2";
import About from "../components/About";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ContactForm from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title='Raúl Gómez Calero, Full Stack Developer' />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <ContactForm />
      </Layout>
    </>
  );
}
