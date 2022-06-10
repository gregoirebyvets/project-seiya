import React from "react";
import Layout from "../components/layout";

const DisclaimerPage = () => {
  return (
    <Layout>
      <div className="mentions-page">
        <h1>Disclaimer</h1>
        <p>
          ByVets n’est pas responsable des conséquences ou dommages qui
          pourraient résulter de l’utilisation des informations et données sur
          ce site. ByVets ne reconnait aucune responsabilité pour l’éventuelle
          inaccessibilité temporaire de ce site web ou pour toute perte ou tout
          dommage résultant de la visite du site web.
        </p>
        <p>
          Le site web est actualisé dans la mesure du possible. ByVets n’offre
          aucune garantie quant à l’actualité, la précision, l’exactitude,
          l’exhaustivité ou l’adéquation des informations, données ou
          publications reprises à ce site web. ByVets décline toute
          responsabilité pour les retards causés par des tiers ou pour les
          informations erronées fournies par ceux-ci. Les références ou
          hyperliens renvoyant à d’autres sites Internet sont uniquement
          communiqués à titre indicatif de sorte que ByVets décline toute
          responsabilité quant au contenu de tels sites.
        </p>
        <p>
          Les droits de propriété intellectuelle sur les informations et données
          fournies appartiennent à ByVets ou aux sources mentionnées. Sous
          réserve de l’autorisation expresse écrite et préalable de ByVets ou de
          ses ayants droit, le transfert, la vente, la diffusion ou la
          reproduction, sous quelque forme ou par quelque moyen que ce soit, de
          ces informations, publications ou données sont interdits.
        </p>
      </div>
    </Layout>
  );
};

export default DisclaimerPage;
