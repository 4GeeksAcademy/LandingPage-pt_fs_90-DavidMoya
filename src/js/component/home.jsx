import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "../Footer";


//create your first component
const Home = () => {
	return (

		<div>
			<Navbar></Navbar>
			<div className="container mx-5">
				<Jumbotron></Jumbotron>
				<div className=" row  justify-content-between">
					<div className="col d-flex justify-content-center">
						<Card
							image="https://imag.bonviveur.com/paella-valenciana-tradicional.jpg"
							title="Paella Valenciana"
							description="La mejor paella del mundo">
						</Card>
					</div>
					<div className="col d-flex justify-content-center">
						<Card
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsv-S3Wd1n7J-Z63lLoazQN3tEArWqoWDNg&s"
							title="Bichón Maltés"
							description="Un amigo para toda la vida">
						</Card>
					</div>
					<div className="col d-flex justify-content-center">
						<Card
							image="https://desdelafe.mx/wp-content/uploads/2019/10/rosario.jpg"
							title="Rogando a Dios"
							description="Por una correción favorable">
						</Card>
					</div>
					<div className="col d-flex justify-content-center">
						<Card
							image="https://thoracicandsleep.com.au/wp-content/uploads/2019/05/exploding-head.jpg"
							title="My Brain"
							description="Así estoy después de hacer JSX">
						</Card>
					</div>
				</div>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>

	);
};

export default Home;
