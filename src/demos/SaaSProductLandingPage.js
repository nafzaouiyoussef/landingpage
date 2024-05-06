import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>(section 1) Fonctionnalités</Subheading>}
        heading={
          <>
            Élaboré par <HighlightedText> des professionnels des ressources humaines. </HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>(section 2) Solution en action</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>(section 3) ETAPES</Subheading>}
        heading={
          <>
            Facile à <HighlightedText>Démarrer.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      
      
      <Blog />
      
      <Testimonial 
      subheading="Témoignages (section 5)"
      heading={
        <>
          SIRH : <span tw="text-primary-500">quels retours d'expérience ?</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "SmarTalents a transformé notre façon de gérer nos ressources humaines. C'est une solution puissante et flexible qui s'adapte parfaitement à nos besoins en évolution.",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Grâce à SmarTalents, nous avons amélioré l'efficacité de notre processus de recrutement et de gestion des performances.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle"
        }
      ]}
      textOnLeft={true}
    />
    <Pricing
          subheading={<Subheading>Pricing (section 6)</Subheading>}
          heading={
            <>
              Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
            </>
          }
          plans={[
            {
              name: "Personal",
              price: "$17.99",
              duration: "Monthly",
              mainFeature: "For Individuals",
              features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
            },
            {
              name: "Business",
              price: "$37.99",
              duration: "Monthly",
              mainFeature: "For Small Businesses",
              features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
              featured: true
            },
            {
              name: "Enterprise",
              price: "$57.99",
              duration: "Monthly",
              mainFeature: "For Large Companies",
              features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
            }
          ]}
        />
      <FAQ
        subheading={<Subheading>FAQS (section 7)</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?  (section 8)</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are all the templates easily customizable ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
}
