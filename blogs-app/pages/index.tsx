import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blogs App</title>
				<meta name="description" content="A simple blog app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar></Navbar>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
};

export default Home;
