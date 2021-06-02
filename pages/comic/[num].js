import { useRouter } from 'next/router'
import Head from 'next/head'
import content from '../../data.json'
import styles from '../../styles/Home.module.css'

const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

export default function Page({ data }) {

    return (
        <>
            <div className={styles.container}>

                <main className={styles.main}>
                    <div className={styles.carder}>
                        <div className={styles.centerdiv}>
                            <a href={data.back}>&#8592;</a>
                            <a href={data.next} className={styles.right}>&#8594;</a>
                        </div>

                        <h1 className={styles.title}>
                            {
                                data.title
                            }
                        </h1>

                        <br />
                        <img src={data.url}></img>
                        <br />

                        <p className={styles.description}>
                            {
                                data.alt
                            }
                        </p>

                        <div className={styles.centerdiv}>
                            <a href={data.back}>&#8592;</a>
                            <a href={data.next} className={styles.right}>&#8594;</a>
                        </div>

                    </div>
                </main>

            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { num } = context.query

    var title = content.comics[num].title;
    var alt = content.comics[num].alt;

    var data = {
        title: title,
        alt: alt,
        url: "/images/" + num + '.png',
        next: "/comic/" + (parseInt(num) + 1).toString(),
        back: "/comic/" + (parseInt(num) - 1).toString()
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

