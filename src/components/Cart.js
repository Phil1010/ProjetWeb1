import React from "react";

function Cart() {
  const divCartStyle = {
    width: "20vw",
    height: "50vh",
    backgroundColor: "#A2CDB0",
    padding: "1%",
    position: "relative", // Ajout de la position relative au conteneur
    margin:"1%",
    color:"#FFFFFF",

  };

  const buttonFermerStyle = {
    position: "absolute", // Positionnement absolu pour le bouton
    top: "0", // Alignement en haut
    right: "0", // Alignement à droite
    margin: "5%", // Marge pour espacer du coin
    backgroundColor:"transparent",
    border:"none",
    fontSize:"1em",
    // mettre le texte en gras
    fontWeight:"bold",
    color:"#FFFFFF",

  };

  const listeDuPanier = [
    "Monstera",
    "Lierre",
    "Bouquet de fleurs",
  ];

  const prixMonstera = 8;
    const prixLierre = 10;
const prixBouquet = 15;

    const prixTotal = prixMonstera + prixLierre + prixBouquet;


  return (
    <div style={divCartStyle}>
      <button id="bouttonFermer" style={buttonFermerStyle}>Fermer</button>
        <br />
      <h1>Panier</h1>
        <ul>
            <li>{listeDuPanier[0]} {prixMonstera}€</li>
            <li>{listeDuPanier[1]} {prixLierre}€</li>
            <li>{listeDuPanier[2]} {prixBouquet}€</li>
        </ul>
        <p>Total : {prixTotal}€</p>
        <button>Vider le panier</button>
    </div>
  );
}

export default Cart;
