// imports work with our front end
// requires does not
// nodejs != ecmascript / JS
// back end JS is a little different from front end JS

import Head from "next/head"
//import Image from "next/image"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader></ManualHeader>*/}
            <Header></Header>
            <LotteryEntrance></LotteryEntrance>
            Hello!
        </div>
    )
}
