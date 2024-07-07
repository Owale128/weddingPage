import style from './sass/Home.module.scss'

export default function Home() {
  return (
    <div className={style.container}>
    <header className={style.header}>
        <h1>Välkommen till vårt bröllop!</h1>
    </header>
    <main className={style.main}>
        <section className={style.hero}>
            <img src="" alt="" className={style.heroImg} />
        </section >
        <section className={style.details}>
        <h2>Datum: 31 dec 2024</h2>
        <h2>Plats: Stockholm, Sverige</h2>
        </section>
    </main>
</div>
  );
}
