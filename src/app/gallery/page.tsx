import { Fragment } from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import PageBanner from "@/component/PageBanner";
import LightGalleryData from "@/component/LightGalleryData";
import { IMAGES } from "@/constant/theme";

function GalleryPage() {
  return (
    <Fragment>
      <Header />
      <main className="page-content">
        <PageBanner title="Gallery" bnrimage={IMAGES.bnr1.src} />
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-1 text-center m-b40">
              <h2 className="title m-b0">Our Gallery</h2>
              <p className="m-b0">
                Moments from our medical travel and emergency care journey.
              </p>
            </div>
          </div>
          <LightGalleryData />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default GalleryPage;
