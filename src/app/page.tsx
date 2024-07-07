import style from './sass/Home.module.scss'
import wedPic from './image/WeddingPic.png'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={style.container}>
    <header className={style.header}>
        <h1>Välkommen till vårt bröllop!</h1>
    </header>
    <main className={style.main}>
        {/* <section className={style.hero}>
           <Image src={wedPic} alt="Wedding picture" className={style.heroImg} />
        </section > */}
        <section className={style.details}>
        <h2>Datum: 31 dec 2024</h2>
        <h2>Plats: Stockholm, Sverige</h2>
        </section>
    </main>
</div>
  );
}
