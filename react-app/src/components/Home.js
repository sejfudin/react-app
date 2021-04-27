import logo from '../assets/images/logo.png';

const styles = {
    image: {
        width: '400px'
    },
    title: {
        fontSize: '2em'
    }
}

const Home = () => {
    return (
        <div className='container'>
            <img src={logo} alt='Logo' style={styles.image} />
            <div style={styles.title}>
                <p>Welcome to </p><p>my first React App</p>
                </div>
        </div>
    );
}
export default Home;