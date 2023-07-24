function Recommandation() {
  const moisCourant = new Date().getMonth();
  const printemps = false;

  if (moisCourant === 2 || moisCourant === 3 || moisCourant === 4) {
    printemps = true;
    return <p>C'est le moment de rempoté</p>;
  }

  return <p>C'est n'est pas le moment de rempoté</p>;
}

export default Recommandation;
