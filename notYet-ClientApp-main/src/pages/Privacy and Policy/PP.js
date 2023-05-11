import React from "react";
import classes from "./PP.module.css";
import Footer from "../../UI/Footer";
import Header from "../../UI/Header";
import Backgroundgif from "../../UI/Backgroundgif";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
function PP() {
  return (
    <div>
      <Header />
      <div>
        <Backgroundgif />
      </div>
      <div>
        <div className={classes.header1}>
          <h1>Privacy & Policy</h1>
          <p className={classes.line}>______________________</p>
          <div className={classes.text}>
            <p>
              Introduction Protecting your private information is our priority.
              This Statement of Privacy applies to the Site and AlgoExpert LLC
              and governs data collection and usage. For the purposes of this
              Privacy Policy, unless otherwise noted, all references to
              AlgoExpert include the Site and AlgoExpert LLC. The AlgoExpert
              website is a Technical Interview Preparation site. By using the
              AlgoExpert website, you consent to the data practices described in
              this statement. Collection of your Personal Information If you
              purchase AlgoExpert's products and services, we collect billing
              and credit card information. This information is used to complete
              the purchase transaction. AlgoExpert encourages you to review the
              privacy statements of websites you choose to link to from
              AlgoExpert so that you can understand how those websites collect,
              use and share your information. AlgoExpert is not responsible for
              the privacy statements or other content on websites outside of the
              AlgoExpert website. Use of your Personal Information AlgoExpert
              collects and uses your personal information to operate its
              website(s) and deliver the services you have requested. AlgoExpert
              may also use your personally identifiable information to inform
              you of other products or services available from AlgoExpert.
              AlgoExpert may also contact you via surveys to conduct research
              about your opinion of current services or of potential new
              services that may be offered. AlgoExpert does not sell, rent or
              lease its customer lists to third parties. AlgoExpert may share
              data with trusted parties to help perform statistical analysis,
              send you email or postal mail, provide customer support, or
              arrange for deliveries. All such third parties are prohibited from
              using your personal information except to provide these services
              to AlgoExpert, and they are required to maintain the
              confidentiality of your information. AlgoExpert will disclose your
              personal information, without notice, only if required to do so by
              law or in the good faith belief that such action is necessary to:
              (a) conform to the edicts of the law or comply with legal process
              served on AlgoExpert; (b) protect and defend the rights or
              property of AlgoExpert; and, (c) act under exigent circumstances
              to protect the personal safety of users of AlgoExpert, or the
              public. Automatically Collected Information Information about your
              computer hardware and software may be automatically collected by
              AlgoExpert. This information can include: your IP address, browser
              type, domain names, access times and referring website addresses.
              This information is used for the operation of the service, to
              maintain quality of the service, and to provide general statistics
              regarding use of the AlgoExpert website. What are Cookies? A
              cookie is a small text file that is placed on your hard disk by a
              web page server to uniquely identify your browser or to store
              information in your browser. Cookies cannot be used to run
              programs or deliver viruses to your computer. A “web beacon” links
              web pages to servers and may be used to transmit information
              collected through cookies back to a web server. Most cookies
              expire after a certain period of time depending on what they are
              used for. AlgoExpert uses both first-party cookies (which are set
              by our website when it is being visited) and third-party cookies
              (which are set by a server located outside the domain of our
              website). If you would like to learn more about this practice and
              to know your choices about not having this information collected
              and shared with third parties, visit
              http://networkadvertising.org/ or review our "Managing your
              Cookies" section further below. Types of Cookies we use Essential
              Cookies Certain cookies are necessary in order for AlgoExpert's
              website to operate properly. For example, we use cookies to
              authenticate you. When you log on to our platform, authentication
              cookies are set which let us know who you are during a browsing
              session. These cookies also facilitate the social media login
              functionality (e.g., via Google, GitHub, Facebook, or LinkedIn) on
              our website. Essential cookies do not include advertising cookies,
              which are discussed further below. Personalization/Customization
              Cookies In some cases, we use cookies to remember the choices you
              make while browsing the AlgoExpert website and to store your
              preferences for you. When you return to the same AlgoExpert
              website, the information you previously provided can be retrieved,
              so you can easily use the AlgoExpert features that you customized.
              This functionality improves user experience and allows us to
              customize your site experience accordingly. Analytics Cookies
              Through our service providers, we may use analytics to collect
              information about your use of the AlgoExpert website to create
              reports and statistics on the performance of the website.
              Analytics collect information such as your IP address, type of
              device, operating system, geolocation, referring URLs, time and
              date of page visits, and which pages you visit. The information
              allows us to quantify our audience size, see the overall patterns
              of usage on the platform, help us record any difficulties you have
              with the website, and show us whether our advertising is effective
              or not. Advertising Cookies We may use advertising cookies to
              market AlgoExpert products or services to you on third-party
              websites. For example, if you visit the AlgoExpert website, you
              may then see an advertisement for AlgoExpert products or services
              on certain third-party websites you visit in the future. We
              sometimes use cookies delivered by third parties to track the
              performance of our advertisements. For example, these cookies
              remember which browsers have visited our websites. The information
              provided to third parties does not include personal information.
              This process helps us manage and track the effectiveness of our
              marketing efforts. Managing your Cookies You have the ability to
              accept or decline cookies. Most desktop web browsers automatically
              accept cookies, but you can usually modify your browser settings
              to decline cookies if you prefer. You'll want to refer to your
              browser's help section to do this since the instructions are
              usually browser-specific. Mobile devices typically allow you to
              control cookies through their system settings. Refer to your
              device manufacturer’s instructions for more information on how to
              do this. If you choose to decline cookies, you may not be able to
              fully experience the interactive features of the AlgoExpert
              services. Security of your Personal Information AlgoExpert secures
              your personal information from unauthorized access, use, or
              disclosure. AlgoExpert uses the SSL Protocol for this purpose:
              When personal information (such as a credit card number) is
              transmitted to other websites, it is protected through the use of
              encryption - the Secure Sockets Layer (SSL) protocol. Children
              under Thirteen AlgoExpert does not knowingly collect personally
              identifiable information from children under the age of thirteen.
              Changes to this Statement AlgoExpert will occasionally update this
              Statement of Privacy to reflect company and customer feedback.
              AlgoExpert encourages you to periodically review this Statement to
              be informed of how AlgoExpert is protecting your information.
              Contact Information AlgoExpert welcomes your questions or comments
              regarding this Statement of Privacy. If you believe that
              AlgoExpert has not adhered to this Statement, please contact
              AlgoExpert’s team by sending a message through the website.
            </p>
          </div>
          <Link to="/login">
            <Button>Join !YET</Button>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default PP;
