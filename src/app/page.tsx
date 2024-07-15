import style from './sass/Home.module.scss'

export default function Home() {
  return (
    <div className={style.container}>
    <main className={style.main}>
        <h1>Welcome to our wedding! &#127802;</h1>
        <p>
        We have the great pleasure of inviting you to our wedding. Come share this special day with us as we say &quot;I do&quot; to each other and celebrate our love with family and friends.</p>
        <h3>
          Date: 31 dec 2024
          <br />
          Place: Stockholm, Sweden
        </h3>
    </main>
</div>
  );
}
