import Head from 'next/head';
import styles from './InfoPage.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image'


export default function Home() {

  const headerTitle = 'Welcome, {user}!';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.iphoneFrame}>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
        <main className={`${styles.main}`}>
        <div>
            <h1>Ansa Oodom</h1>
        </div>
        <div>
            <Image
                src='/images/mentors/ansa-odoom.png'
                width={382}
                height={336}
            />
        </div>
        <div>
            <h2>Bio</h2>
            <p>
            “With over a decade of experience in the marketing realm, I am dedicated to mentoring aspiring marketers. 
            My passion for the dynamic world of marketing is evident in my commitment to guiding and inspiring individuals in the industry.
            </p>
        </div>
        {/* add line */}
        <div>
            <div>
                <h2>Skills</h2>
                <p>Marketing, SEO Optimization</p>
            </div>
            <div>
                <h2>Description</h2>
                <ul>
                <li>Over a decade of marketing experience.</li>
                <li>Proven success in campaigns and projects.</li>
                <li>Effective communication and mentoring skills.</li>
                <li>Continuous professional development.</li>
                <li>Leadership in guiding mentees.</li>
                </ul>
            </div>
        </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
} 



// export default function InfoPage({ name, }) {
//     return(
//         <>
//         <div>
//             <h1>{name}</h1>
//         </div>
//         <div>
//             <Image/>
//         </div>
//         <div>
//             {sectionName}
//             {bio}
//         </div>
//         {/* add line */}
//         <div>
//             <div>
//                 {skills}
//             </div>
//             <div>
//                 {description}
//             </div>
//         </div>

//         </>
//     )
// }