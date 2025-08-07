import {
  Check,
  CircleAlert,
  CircleQuestionMark,
  Facebook,
  Instagram,
  Linkedin,
  RefreshCcw,
  Truck,
  Twitter,
} from "lucide-react";

const SPRT = ({ txt, dsc1, dsc2, dsc3, dsc4, dsc5 }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg tracking-widest">{txt}</h4>
      <p className="text-gray-500">{dsc1}</p>
      <p className="text-gray-500">{dsc2}</p>
      <p className="text-gray-500">{dsc3}</p>
      <p className="text-gray-500">{dsc4}</p>
      <p className="text-gray-500">{dsc5}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="space-y-8 w-full px-8 py-6 border-t border-gray-500 mt-10 font-copperplate">
      <div className="grid grid-cols-1 w-full h-fit py-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-md text-gray-500">
            Abonnez-vous dès aujourd'hui. Profitez de -10% sur votre première
            commande et soyez informé(e) des nouveautés & collections exclusives
            en avant-première.
          </p>
          <button className="w-fit px-6 py-2 bg-black text-white">
            Inscriver vous
          </button>
        </div>
        <div className="flex gap-4">
          <Instagram className="text-gray-700" />
          <Facebook className="text-gray-700" />
          <Twitter className="text-gray-700" />
          <Linkedin className="text-gray-700" />
        </div>
      </div>
      <div className="grid grid-cols-1 w-full h-fit py-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg tracking-widest">Aide & Information</h3>
          <ul className="space-y-4 text-gray-500">
            <li className="flex items-center gap-2">
              <CircleAlert className="fill-gray-500 text-white " />{" "}
              Contactez-nous
            </li>
            <li className="flex items-center gap-2">
              <CircleQuestionMark className="fill-gray-500 text-white " /> Aide
              & Support
            </li>
            <li className="flex items-center gap-2">
              <RefreshCcw className=" text-gray-500" /> Politics de retour
            </li>
            <li className="flex items-center gap-2">
              <Truck /> Condition de livraison
            </li>
            <li className="flex items-center gap-2">
              <Check /> Avantages el line
            </li>
          </ul>
        </div>
        <div className="flex gap-6 justify-between flex-col lg:flex-row">
          <SPRT
            txt="L'entreprise"
            dsc1="Notre Histoire"
            dsc2="L'art du millésime"
            dsc3="La promesse de durabilité"
            dsc4="One Tree Planted"
            dsc5=""
          />
          <SPRT
            txt="Conditions Générale de Vente"
            dsc1="Politique de Confidentialité"
            dsc2="Conditions Générales d'Utilisation"
            dsc3="Politique des Cookies"
            dsc4="Klarana"
            dsc5=""
          />
          <SPRT
            txt="International"
            dsc1="Australie"
            dsc2="Etats Unis"
            dsc3="Royaum Unis"
            dsc4="Allemagne"
            dsc5="Espagne"
          />
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm ">
        © 2023 Creeweb. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
