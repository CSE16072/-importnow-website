
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import ChinaPresence from "./components/ChinaPresence";
import ChinaTrips from "./components/ChinaTrips";
import RecentlyDelivered from "./components/RecentlyDelivered";
import ClientStories from "./components/ClientStories";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import BlogArticlePage from "./components/BlogArticlePage";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const currentPath = window.location.pathname;

  const isBlogPage =
    currentPath === "/blog" || currentPath === "/blog/";

  const isArticlePage =
    currentPath === "/post" ||
    currentPath === "/post/" ||
    currentPath === "/post.html";

  if (isArticlePage) {
    return (
      <>
        <Navbar />
        <main>
          <BlogArticlePage />
        </main>
        <Footer />
      </>
    );
  }

  if (isBlogPage) {
    return (
      <>
        <Navbar />
        <main>
          <BlogPage />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Products />
        <ChinaPresence />
        <ChinaTrips />
        <RecentlyDelivered />
        <ClientStories />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
