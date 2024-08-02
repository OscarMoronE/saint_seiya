import { Link } from "react-router-dom"

const Home = () => {
    const lista = ["Aries", "Tauro", "Cancer", "Geminis", "Leo", "Virgo", "Libra", "Escorpion", "Sagitario", "Capricornio", "Aquario", "Piscis"]

    return (
        <div className="home">
            {
                lista.map(unCaballero => <Link key={unCaballero} to={`/caballero/${unCaballero}`}><img src={`${process.env.PUBLIC_URL}/armaduras/${unCaballero}` + '.png'} alt="Gold Armor" /></Link>)
            }
        </div>
    )
}

export default Home