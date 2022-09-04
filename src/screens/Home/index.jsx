import React from "react";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { Heading, Paragraph } from "../../components/Text";
import { Phone, MessageCircle } from "react-feather";
import { Figure } from "../../components/Figure";
import { Banner } from "../../components/Banner";
import avoidContact from "./images/avoid-contact.svg";
import cleanHands from "./images/clean-hands.svg";
import facemask from "./images/facemask.svg";
import woman from "./images/woman.svg";

export const Home = ({ countries }) => {
  console.log("twoja stara");
  return (
    <React.Fragment>
      <div className="home">
        <header className="header">
          <div className="header__heading">
            <Heading type="h1" white>
              Covid-19
            </Heading>
            <Dropdown options={countries} />
          </div>
          <section className="header__contact">
            <Heading type="h2" white>
              Are you feeling sick?
            </Heading>
            <Paragraph type="p1" white>
              If you feel sick with any of covid-19 symptoms please call or SMS
              us immediately for help.
            </Paragraph>
            <div className="header__contact__buttons">
              <Button red long>
                <Phone size={24} />
                Call Now
              </Button>
              <Button blue long>
                <MessageCircle size={24} />
                Send SMS
              </Button>
            </div>
          </section>
        </header>
        <main className="main">
          <section className="main__prevention">
            <Heading type="h2" mb={16}>
              Prevention
            </Heading>
            <div className="main__prevention__container">
              <Figure imgPath={avoidContact} caption="Avoid close contact" />
              <Figure imgPath={cleanHands} caption="Clean your hands often" />
              <Figure imgPath={facemask} caption="Wear a facemask" />
            </div>
          </section>
          <Banner imgPath={woman}>
            <Heading type="h3" white>
              Do your own test!
            </Heading>
            <Paragraph type="p1" white>
              Follow the instructions to do your own test.
            </Paragraph>
          </Banner>
        </main>
      </div>
    </React.Fragment>
  );
};
