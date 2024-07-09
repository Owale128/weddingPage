import style from './sass/Home.module.scss'

export default function Home() {
  return (
    <div className={style.container}>
    <header className={style.header}>
    </header>
    <main className={style.main}>
        <h1>Welcome to our wedding! &#127802;</h1>
        <p>
        We have the great pleasure of inviting you to our wedding. Come share this special day with us as we say "I do" to each other and celebrate our love with family and friends.</p>
        <h3>Date: 31 dec 2024</h3>
        <h3>Place: Stockholm, Sweden</h3>
    </main>
</div>
  );
}
