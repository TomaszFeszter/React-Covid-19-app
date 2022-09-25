import React from "react";
import { Button } from "../../components/Button";
import { Heading, Paragraph } from "../../components/Text";
import { Phone, MessageCircle } from "react-feather";
import { Figure } from "../../components/Figure";
import { Banner } from "../../components/Banner";
import avoidContact from "./images/avoid-contact.svg";
import cleanHands from "./images/clean-hands.svg";
import facemask from "./images/facemask.svg";
import woman from "./images/woman.svg";
import { Page } from "../../layouts";
import { Header } from "../../features/Header";

export const Home = () => {
  return (
    <Page>
      <div className="home">
        <Header title="Covid-19">
          <section className="header__contact">
            <Heading type="h2" white>
              Are you feeling sick?
            </Heading>
            <Paragraph type="p1" white opacity>
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
        </Header>
        <main className="main">
          <section className="main__prevention">
            <Heading type="h2" mb={12}>
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
            <Paragraph type="p1" white opacity>
              Follow the instructions to do your own test.
            </Paragraph>
          </Banner>
        </main>
      </div>
    </Page>
  );
};
