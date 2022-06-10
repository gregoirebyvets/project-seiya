import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const MentionsLegalesPage = () => {
  return (
    <Layout>
      <div className="mentions-page">
        <h1>Mentions légales</h1>
        <h3>Dénomination sociale </h3>
        <p>ByVets</p>
        <h3>Forme juridique </h3>
        <p>Société Coopérative</p>
        <h3>Adresse établissement </h3>
        <p>
          67, Rue Joseph Wauters <br />
          B-4500 Huy
        </p>
        <h3>Coordonnées </h3>
        <p>
          67, Rue Joseph Wauters <br />
          B-4500 Huy <br />
          <a href="mailto:administration@byvets.be">administration@byvets.be</a>
        </p>
        <h3>Numéro d'entreprise</h3>
        <p>0753.452.052</p>
        <h3>Siège social</h3>
        <p>4500 HUY (Bel) - rue Joseph Wauters, 67</p>
        <h3>Conditions générales</h3>
        <p>
          Voir notre page{" "}
          <Link to="/conditions-generales-de-vente">
            « 
            <span className=" underline">Conditions générales de vente</span>
             »
          </Link>
        </p>
        <h3>Législation applicable et juridictions compétentes</h3>
        <p>
          Les conditions générales de ByVets prévoient l’application du droit
          belge et la compétence exclusive des juridictions de Huy en cas de
          litige.
        </p>
        <h3>Prix des services</h3>
        <p>
          Le prix des services de ByVets n’est pas déterminé au préalable et
          fait l’objet de conditions particulières de vente.
        </p>
        <h3>Activité économique</h3>
        <p>
          ByVets promeut et administre principalement le développement, la
          diffusion et la commercialisation d’outils de gestion informatique et
          toute activité connexe se rapportant à la profession de vétérinaire
          afin d’en assurer la qualité et la continuité.
        </p>

        <br />
      </div>
    </Layout>
  );
};

export default MentionsLegalesPage;
