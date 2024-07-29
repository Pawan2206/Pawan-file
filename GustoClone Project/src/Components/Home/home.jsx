import "./home.css";
import { Wrap, Button } from "@chakra-ui/react";
import "../../assets/block-style.css";
import NavBar from "../nav-bar/nav-bar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container relative z-index-2">
        <div className="row relative hp-hero-padding-left-md-24px hp-hero-padding-right-md-24px align-items-center">
          <div className="col-12 hp-hero-padding-max-md-none col-lg-7">
            <h1 className="margin-bottom-24px">
              Hire, pay, and manage your team all in one place.
            </h1>
            <p className="text-large c-black-900 margin-bottom-24px">
              Put the joy back in running your business. Work faster and reduce
              errors with automated payroll, HR, and more.
            </p>
            <div className="row">
              <Wrap spacing={6}>
                <Button colorScheme="red" size="Xlg" className="largeButton">
                  How Gusto works
                </Button>
                <Button colorScheme="gray" size="Xlg" className="largeButton">
                  Create account
                </Button>
              </Wrap>
            </div>
            <div className="d-flex align-items-center padding-top-24px-padding-bottom-8px">
              <div className="c-black-900 text-small d-inline-flex align-items-center">
                <img
                  alt=""
                  className="img-width-16px padding-right-5px"
                  src="https://prod.gusto-assets.com/assets/svg/icons/checkmark-759f12f7035cfc23beb2dfe3de87b4a33866325b5e3f872892b396a83740e555.svg"
                />
                #1 Payroll Software of 2023
              </div>
            </div>
            <div className="d-flex align-items-center padding-none">
              <div className="c-black-900 text-small d-inline-flex align-items-center">
                <img
                  alt=""
                  className="img-width-16px padding-right-5px"
                  src="https://prod.gusto-assets.com/assets/svg/icons/checkmark-759f12f7035cfc23beb2dfe3de87b4a33866325b5e3f872892b396a83740e555.svg"
                />
                3 out of 4 customers say they run payroll in 10 minutes or less
              </div>
            </div>
            <p className="c-black-900 hp-hero-sign-in">
              Already using Gusto?
              <a
                className="text-underline text-default-bold"
                data-instrument-click='{"eventName":"LoginClick","extraProps":{"identifier":"sign_in_hero","name":""},"view":"hero"}'
                href="https://app.gusto.com/login"
                id="hero-login-"
              >
                Sign in
              </a>
            </p>
            <p />
          </div>
          <div className="col-12 col-lg-5 margin-auto hp-hero-padding-max-md-none">
            <div className="d-flex padding-none justify-content-center width-100">
              <div className="caption-image-wrapper relative width-100">
                <img
                  className="lazy img-mobile-fit width-100 lazy-loaded"
                  alt="Gusto image"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  data-src="https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan.png.webp"
                  data-srcset="https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan@mobile.png.webp 600w,https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan.png.webp 700w, https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan@2x.png.webp 1400w"
                  src="https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan.png.webp"
                  srcSet="https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan@mobile.png.webp 600w,https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan.png.webp 700w, https://prod.gusto-assets.com/wp-content/uploads/Small-Business-Retirement-Plan@2x.png.webp 1400w"
                  data-lazy-loaded="true"
                />
                <div className="absolute c-white d-sm-flex flex-column justify-content-end caption-image-overlay-right text-right mobile_updates">
                  <p className="text-small-bold margin-bottom-none">
                    Huckleberry Roasters,
                  </p>
                  <p className="text-small">Gusto customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
