import Link from "next/link"

const Galerias = () => {
  return (
    <section className="galeriasContainer" id="galerias">
      <h2>GALERIAS</h2>
      <p>Entrá a las galerías para ver los diferentes trabajos y la &quot;Feria Picante&quot;</p>
      <Link href={'/galeria/papel'} className="galBtnA">TRABAJOS EN PAPEL</Link>
      <Link href={'/galeria/tela'} className="galBtnB">TRABAJOS EN TELA</Link>
      <Link href={'/galeria/feria'} className="galBtnC">FERIA PICANTE</Link>
    </section>
  )
}

export default Galerias