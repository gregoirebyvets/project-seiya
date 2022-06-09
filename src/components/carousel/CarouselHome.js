import React, { useState, useEffect, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import imgCharlyLeyder from "../../images/testimonials/charly_leyder.png";
import imgPLDaffnay from "../../images/testimonials/pierre-laurent_d_affnay.png";
import imgPierrePaindaveine from "../../images/testimonials/pierre_paindaveine.png";
import imgJMHancq from "../../images/testimonials/jean-michel_hancq.png";
import imgADebailleux from "../../images/testimonials/debailleux_alex.png";
import imgADeveux from "../../images/testimonials/deveux_alain.png";
import imgEPierret from "../../images/testimonials/pierret_eric.png";
import imgCSwinnen from "../../images/testimonials/swinnen_charlotte.png";
import imgLBraeckman from "../../images/testimonials/braeckman_laurent.png";
import imgAPauls from "../../images/testimonials/pauls_annette.png";
import imgGBury from "../../images/testimonials/bury_gaetan.png";
import imgTMatheise from "../../images/testimonials/matheise_thierry.png";
import imgPMichiels from "../../images/testimonials/michiels_pauline.png";
import imgJPPeeters from "../../images/testimonials/peeters_jp.png";

import imgPlaceholder from "../../images/testimonials/testimonial_placeholder.png";
SwiperCore.use([Pagination]);
const CarouselHome = () => {
  let [swiper, setSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const swiperRef = useRef(null);

  const testimonials = [
    {
      img: imgCharlyLeyder,
      name: "Dr Charly Leyder",
      role: "Pratique rurale",
      location: "Ebly (Neufchâteau)",
      msg: `Le contrôle de l'AFMPS s'est assez bien passé (...) Quand on regarde l'arsenal de lois et d'arrêtés qui nous concernent, l'exercice de la médecine vétérinaire devrait être classé dans les sports extrèmes ! C'est vrai que dans le monde actuel, il ne suffit pas d'être compétent, de veiller à bien faire, bien servir ses clients, veiller à la sécurité alimentaire, au bien-être des animaux et des hommes,  il faut avant tout songer à protéger son cul...\n\nMERCI Pégase !`,
    },
    {
      img: imgPLDaffnay,
      name: "Dr Pierre-Laurent d’Affnay",
      role: "Pratique mixte",
      location: "Xhoris (Hamoir)",
      msg: `Un merci tout particulier à toute l'équipe Pégase pour les précieux conseils et la disponibilité permanente.\n\nPierre-Laurent`,
    },
    {
      img: imgPierrePaindaveine,
      name: "Dr Pierre Paindaveine",
      role: "Pratique équine",
      location: "Mettet",
      msg: `Quel bel enthousiasme, autour de notre projet.\nC’est un vrai plaisir de faire partie de cette aventure…\nPierre`,
    },
    {
      img: imgJMHancq,
      name: "Dr Jean-Michel Hancq",
      role: "Pratique animaux de compagnie",
      location: "Marcinelle",
      msg: `Merci pour la qualité de votre travail.\nBelle et bonne journée, continuez comme cela!`,
    },
    {
      img: imgGBury,
      name: "Dr Gaëtan Bury",
      role: "Pratique rurale",
      location: "Vaux-Sur-Sûre",
      msg: `Voilà des années que j'essaie de faire au mieux pour être en phase avec Bigame, et c'est seulement depuis que j'ai Pégase que j'y arrive, j'en profite pour vous remercier pour votre super travail\u00A0!!\nPégase est génial\u00A0!!\n\nEt grand merci pour les réponses rapides\u00A0!!`,
    },
    {
      img: imgPMichiels,
      name: "Dr Pauline Michiels",
      role: "Pratique équine",
      location: "Perwez",
      msg: `Merci l’équipe pour votre réactivité, pour le bon sens et le coté humain. Ayant testé d’autres programmes vétos, je ne fais que vanter les avantages de pégases aux non-équipés. Mon comptable l’a facilement pris en main et je n’ai aucun soucis de ce coté là. Les améliorations sont toujours intéressantes et la flexibilité du programme est impressionnante. Il est peu lourd et rempli quasi toutes mes attentes... Pour le reste on en discute au souper annuel.`,
    },
    {
      img: imgPMichiels,
      name: "Dr Pauline Michiels",
      role: "Pratique équine",
      location: "Perwez",
      msg: `Moi je suis déjà fan de vous\u00A0!\nJ'ai le même plaisir à découvrir pégase et le "plus" qu'il y a avec, que d'utiliser tous les jours mon Fairphone.`,
    },
    {
      img: imgJPPeeters,
      name: "Dr Jean-Pierre Peeters",
      role: "Pratique animaux de compagnie",
      location: "Verviers",
      msg: `En remerciement de votre incroyable service, votre sympathie et gentillesse au téléphone, et la disponibilité dont vous faites preuve. Disponibilité qui ferait rougir n'importe quel marketeux chevronné.\n\nJ'en veux pour preuve cette citation traduite de l'américain :\n«Toute la stratégie de mon service client est dictée par la façon de faire de l'équipe ByVets, en Belgique. Une inspiration quotidienne.\nJeff Bezos, Fondateur Amazon»\n\nElia, Jean-Pierre, Céline, Véronique, Camille, Ambre\nCentre Vétérinaire Abyssin`,
    },
    {
      img: imgTMatheise,
      name: "Dr Thierry Matheise",
      role: "Pratique animaux de compagnie",
      location: "Éghezée",
      msg: `Bravo à François et à son équipe pour la gestion quotidienne de l'association et pour l'organisation de la soirée d'hier!`,
    },
    {
      img: imgLBraeckman,
      name: "Dr Laurent Brackman",
      role: "Pratique mixte",
      location: "Rhisnes (La Bruyère - Namur)",
      msg: `Merci à notre beau programme pour toutes ses fonctionnalités.\nMerci à tous ceux qui ont mis leurs commentaires sur le forum  suite à un contrôle de l'afmps \nJe n'ai d'ailleurs pas de conseil à rajouter à tout ce qui a été déjà dit.\n\n A+`,
    },
    {
      img: imgADebailleux,
      name: "Dr Alex Debailleul",
      role: "Pratique mixte",
      location: "Baugnies (Tournai)",
      msg: `Merci les gars, vous faites du bon boulot et un super service!`,
    },
    {
      img: imgADeveux,
      name: "Dr Alain Deveux",
      role: "Pratique animaux de compagnie",
      location: "Sauvenière (Gembloux)",
      msg: `Purée quel service 10 étoiles\u00A0!! Et ça marche, super!`,
    },
    {
      img: imgEPierret,
      name: "Dr Eric Pierret",
      role: "Pratique animaux de compagnie",
      location: "Gerpinnes",
      msg: `Merci d'avoir pu résoudre aussi rapidement mon problème informatique, et ce un dimanche après-midi.`,
    },
    {
      img: imgCSwinnen,
      name: "Dr Charlotte Swinnen",
      role: "Pratique animaux de compagnie",
      location: "Robertville",
      msg: `Nous tenons à remercier toute l'équipe qui fait de PEGASE bien plus qu'un programme informatique!\n\nMerci et B.R.A.V.O :-)\n\nAlbert et Charlotte`,
    },
    {
      img: imgCSwinnen,
      name: "Dr Charlotte Swinnen",
      role: "Pratique animaux de compagnie",
      location: "Robertville",
      msg: `Juste un petit message pour dire que nous apprécions beaucoup tout ce qui est fait pour que Pégase continue à progresser et s'adapter sans cesse à l'évolution des contraintes auxquelles nous sommes tous soumis. Nous en sommes très reconnaissants et disons juste un grand MERCI.\n\nAmicalement\n\nAlbert et Charlotte`,
    },
    {
      img: imgAPauls,
      name: "Dr Annette Pauls",
      role: "Pratique animaux de compagnie",
      location: "Bul­lange",
      msg: `Merci pour l'excellent service. C'est vraiment incroyable à quel point vous êtes présents.`,
    },
    {
      img: imgAPauls,
      name: "Dr Annette Pauls",
      role: "Pratique animaux de compagnie",
      location: "Bul­lange",
      msg: `Merci de même répondre le dimanche !`,
    },
    {
      img: imgPlaceholder,
      name: "Dr Geraldine Ducuroir",
      role: "Pratique animaux de compagnie",
      location: "Kortenberg (BXL)",
      msg: `Je ne connais aucun autre programme qui ait un service aussi rapide, amical et effectif :) Tout tout grand merci.`,
    },
    {
      img: imgPlaceholder,
      name: "Dr Henri Brumagne",
      role: "Pratique rurale",
      location: "Seloignes (Chimay)",
      msg: `Encore merci pour tout ce temps consacré à Pégase, c'est-à-dire à nous.\nA bientôt.`,
    },
    {
      img: imgPlaceholder,
      name: "Dr Claude Wuidar",
      role: "Pratique rurale",
      location: "Bastogne",
      msg: `Après plusieurs essais ma i80 imprime enfin.\nMerci pour les conseils. Mélange eau très chaude + alcool à 5 reprises. Coût 0 €.\nChapeau !`,
    },
    {
      img: imgPlaceholder,
      name: "Dr Claude Wuidar",
      role: "Pratique rurale",
      location: "Bastogne",
      msg: `Très bonne formation et très conviviale.\nChapeau à vous trois.`,
    },
    {
      img: imgPlaceholder,
      name: "Dr Hubert Léonard",
      role: "Pratique animaux de compagnie",
      location: "Namur",
      msg: `Juste un petit mot pour remercier une fois encore ce merveilleux programme qui m'a permis de traverser haut la main et sans remarque le contrôle de ce jour avec Dominique Gillard.\nEt aussi, merci à tous ceux qui ont partagé leurs expériences de contrôle et les stratégies mises en oeuvre suite aux non-conformités relevées.\nJ'aborde donc mon WE, grâce à vous, l'esprit tranquille.\nBien à vous.`,
    },
    // {
    //   img: imgLBraeckman,
    //   name: "Dr Laurent Brackman",
    //   role: "Pratique mixte",
    //   location: "Rhisnes (La Bruyère - Namur)",
    //   msg: `Salut à tous\nJ'ai eu la visite d'olivier gillard cette apm.\nTout s'est bien passé ;-))\n\nMerci à notre beau programme pour toutes ses fonctionnalités.\nMerci à tous ceux qui ont mis leurs commentaires sur le forum  suite à un contrôle de l'afmps \nJe n'ai d'ailleurs pas de conseil à rajouter à tout ce qui a été déjà dit.`,
    // },
  ];
  let testiArray = testimonials;

  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const theMagicMethod = useCallback(
    (elementsCount, specificUniqueProperty) => {
      if (testiArray.length < elementsCount) {
        testiArray = testimonials;
      }
      let shuffled = shuffle(testiArray.slice());
      let uniqueValues = new Set();
      let unique = shuffled.filter((el) => {
        const value = el[specificUniqueProperty];
        const keep = !uniqueValues.has(value);
        uniqueValues.add(value);
        return keep;
      });
      testiArray = shuffled.slice(elementsCount, shuffled.length);
      setSelectedTestimonials(unique.slice(0, elementsCount));
      if (!!swiper) {
        setTimeout(() => {
          swiper.updateAutoHeight();
        }, 1);
      }
    },

    []
  );

  useEffect(() => {
    theMagicMethod(3, "name");
  }, []);

  return (
    <div className="home-carousel bg-blueish-500 px-2 py-6 sm:p-8 transform transition-all">
      <h2 className=" text-2xl sm:text-4xl font-light text-trinidad-500 ml-4 mt-2 sm:ml-4 mb-8">
        Qu’en pensent nos utilisateurs ?
      </h2>
      <div className="my-swiper hidden">
        {selectedTestimonials.map((testimonial, i) => {
          return (
            <div
              key={i}
              className="testimonial flex flex-wrap sm:flex-nowrap mb-16"
            >
              <div className="w-full sm:w-1/4 sm:mr-4">
                <img alt="Client" src={testimonial.img} className="mx-auto" />
              </div>
              <div className="testimonial_body w-full p-4 sm:p-0 sm:pl-4 sm:w-3/4 ">
                <div className=" text-sm sm:text-base italic font-light text-midnight-blue-500">
                  {testimonial.msg.split("\n").map((item, i) => {
                    return (
                      <div key={i}>
                        {item}
                        <br />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 text-midnight-blue-500 text-sm">
                  <span className="block font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="block font-light ">{testimonial.role}</span>
                  <span className="block text-xs font-light italic ">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        className="pb-10"
        autoHeight={true}
        breakpoints={{ 820: { slidesPerView: 2, spaceBetween: 50 } }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={(e) => {
          if (e.isEnd === true) {
            setIsLastSlide(true);
          } else {
            setIsLastSlide(false);
          }
        }}
        ref={swiperRef}
        pagination={{
          clickable: true,
        }}
      >
        {selectedTestimonials.map((testimonial, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="testimonial flex flex-wrap sm:flex-nowrap mb-16">
                <div className="w-full sm:w-1/4 sm:mr-4">
                  <img alt="Client" src={testimonial.img} className="mx-auto" />
                </div>
                <div className="testimonial_body w-full p-4 sm:p-0 sm:pl-4 sm:w-3/4 ">
                  <div className=" text-sm sm:text-base italic font-light text-midnight-blue-500">
                    {testimonial.msg.split("\n").map((item, i) => {
                      return (
                        <div key={i}>
                          {item}
                          <br />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8 text-midnight-blue-500 text-sm">
                    <span className="block font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="block font-light ">
                      {testimonial.role}
                    </span>
                    <span className="block text-xs font-light italic ">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="text-center">
        <button
          className={`${
            isLastSlide ? "block" : "hidden"
          } text-center text-sm font-light text-midnight-blue-500 mt-4 mb-2 mx-auto cursor-pointer hover:underline`}
          onClick={() => {
            theMagicMethod(3, "name");
            setIsLastSlide(false);
            setTimeout(() => {
              swiper.slideTo(0);
            }, 1);
          }}
        >
          Voir d'autres avis au hasard
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
