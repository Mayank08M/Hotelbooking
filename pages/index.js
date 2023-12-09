import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from '../components/Loader'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Hourlyrooms
        </title>
        <link rel="icon" href="/hor.png" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.hourlyrooms.co.in/" target='blank'>
          <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.logo} /></a>
        </h1>
        <p className={styles.description}>
          Book Now by <a className={styles.refer} href="https://www.hourlyrooms.co.in/" target='blank'>Clicking Here</a>
        </p>

        <div className={styles.grid}>
          <a href="https://www.hourlyrooms.co.in/search?service_name=MUMBAI%2C+MAHARASHTRA%2C+INDIA&start=2023-11-30&starttime=13&room_type=1" className={styles.card}>
            <h3>Budget Friendly&rarr;</h3>
            <p>Find budget friendly hotels near you!</p>
          </a>

          <a href="https://www.hourlyrooms.co.in/search?service_name=MUMBAI%2C+MAHARASHTRA%2C+INDIA&start=2023-11-30&starttime=13&room_type=1" className={styles.card}>
            <h3>Luxury &rarr;</h3>
            <p>Find the most luxury hotels near your location!</p>
          </a>

          <a
            href="https://www.hourlyrooms.co.in/search?service_name=MUMBAI%2C+MAHARASHTRA%2C+INDIA&start=2023-11-30&starttime=13&room_type=1"
            className={styles.card}
          >
            <h3>Devotee Special &rarr;</h3>
            <p>Find best hotels for your religious travles.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Buisness Boutique &rarr;</h3>
            <p>
              Find the best places to do a Buisness meet.
            </p>
          </a>
        </div>
      </main>
      </div>

      <style jsx>{`
        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          background-color: darkgrey;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
