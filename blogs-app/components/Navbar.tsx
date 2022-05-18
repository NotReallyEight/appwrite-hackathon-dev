import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles["app-name"]}>
				Blogs<br></br>App
			</div>
			<button className={styles["login-button"]} type="button">
				Login
			</button>
		</div>
	);
};

export default Navbar;
