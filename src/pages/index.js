import React from "react";
import Carousel from "../components/Carousel";
import { carouselCounter } from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SelectionList from "../components/SelectionList";
import "../styles/Index.css";

function CarouselInformation(title, description, items) 
{
	this.title = title;
	this.description = description;
	this.items = items;
}

function CarouselItem(name, imageUrl, description) 
{
	this.name = name;
	this.imageUrl = imageUrl;
	this.description = description;
}

const carouselInformation = [
    new CarouselInformation(
        "Programming Languages",
        "I like to write code to optimize the solution to a certain problem. My favorite programming languages often use object oriented principles but I often like using languages that can be used to model scientific situations.",
        [
            new CarouselItem(
                "Python",
                "images/Python.png",
                "Python was the first programming language I started learning. I believe it is the best beginner language because its intuitive syntax. Additionally, I like its ability to be used for all sorts of applications such as genomic data science and data visualization with softwares such as matplotlib and Matlab. Although many dislike Python for its pseudocode like syntax, I believe that it serves as a great introductory language to programming."
            ),
            new CarouselItem(
                "Java",
                "images/Java.png",
                "Java was my first foray into object oriented programming. I like the object oriented structure of programming because it makes every declaration systematic and easy to keep track of. Some of the projects I made using Java were an airline baggage calculator and an image manipulator with different filters."
            ),
            new CarouselItem(
                "C++",
                "images/C++.png",
                "C++ is considered to be one of the forefather languages of object oriented programming. I first started using it in my college programming classes and loved the similarities between it and Java. I believe that it highlights the transition between higher level and lower level programming languages and also allows the programmer to grasp what is happening under the hood. Some of my C++ projects include various ciphers and a turn based Pokemon game."
            ),
            new CarouselItem(
                "MATLAB",
                "images/Matlab.jpg",
                "MATLAB in my opinion is the best language to use for data analysis. I believe that it allows optimum data visualization tools as well as the ability to implement machine learning algorithms for data processing. I used it quite a lot in my internship at the National Center for Atmospheric Research for analysis of the HURDAT2 data set and visualization of wind data."
            )
        ]
    ),
    new CarouselInformation(
        "Music",
        "My favorite genre of music is rock and metal. I find that it helps relieve my stress and has allowed me to pick up the electric guitar as another instrument in my repetoire. I am more of a fan of hard rock and thrash metal rather than the more extreme alternatives.",
        [
            new CarouselItem(
                "AC/DC",
                "https://nationalpostcom.files.wordpress.com/2014/04/acdc-retirement.jpg?quality=80&strip=all&w=780",
                "Despite them not playing anymore, AC/DC is one of my favorite rock bands. They constantly have produced hit rock songs starting from 1973. Their first album, High Voltage, introduces the band's signature three power chord style. AC/DC have produced consistantly quality albums like Highway to Hell and The Razor's Edge with songs such as Thunderstruck and Back in Black. The album Back in Black consequently became the second highest selling album of all time only behind Michael Jackson's Thriller."
            ),
            new CarouselItem(
                "Metallica",
                "https://upload.wikimedia.org/wikipedia/commons/9/92/Metallica_Live_at_The_O2%2C_London%2C_England%2C_22_October_2017.jpg",
                "Metallica is my favorite thrash metal band. Debuting in 1983 with the album Kill 'Em All, their fast and agressive style of playing makes their music extremely fast and heavy. They also have consistantly produced albums that continue to push the genre of thrash metal into the main stream. Their latest album, Hardwired...To Self-Destruct, brings together fast guitars and blistering vocals on songs such as Spit out the Bone and Atlas, Rise! Other songs I like from them are Seek & Destroy, ...And Justice For All, and Master of Puppets."
            ),
            new CarouselItem(
                "Guns N' Roses",
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/GNR_London_Stadium_2017_3_%28cropped%29.jpg",
                "Guns N' Roses quite literally saved rock music from the glam and hair metal bands of the early 1980s. Bands like Ratt and Poison dominated rock music at the time and Guns N' Roses changed that paradigm with their debut album Appetite for Destruction. The album features songs like Welcome to the Jungle, Paradise City, and Sweet Child O' Mine which drove it to the best selling debut album of all time. The band broke up in 1994 and was on a hiatus until 2016 when they reformed. They continue to play live shows across the world and may produce a new album in the near future."
            ),
            new CarouselItem(
                "Led Zeppelin",
                "https://ohsmagnet.com/wp-content/uploads/2018/12/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg",
                "Led Zeppelin was a very influential band for the genre of hard rock and eventually metal music. Their story began in 1968 with the debut album Led Zeppelin I. After hit songs like Whole Lotta Love and Stairway to Heaven, the band gained the title of the Biggest Band in the World. Following the death of their drummer, John Bonham, the band broke up citing that they would never play without the original four being together. Guitarist Jimmy Page is one of my personal inspirations for me playing the guitar."
            )
        ]
	),
	new CarouselInformation
	(
		"TV Shows",
		"I like TV shows that allow me to gain relevant general knowledge about the world and make me think about the characters involved. I also like comedic TV shows to give me a good laugh from time to time.",
		[
			new CarouselItem(
				"Billions",
				"https://vignette.wikia.nocookie.net/billions/images/c/ce/S04.jpg/revision/latest?cb=20190424070649",
				"One of my favorite TV shows right now is Billions. This show follows a powerful hedge fund manager named Bobby Axelrod and a shrewd prosecutor named Chuch Rhoades. Axe is known for always squeezing the maximum amount of profit for his investors by any means possible including insider trading techniques while Chuck is always on his heals trying to apprehend him. The series also features intriguing characters such as Taylor Mason, Dollar Bill, and Chuck's wife Wendy Rhoades. I think the writers of this show are incredible given the plethora of allusions in the dialogue as well as the suspense built up with the cat and mouse game of Wall Street."
			),
			new CarouselItem(
				"Designated Survivor",
				"https://upload.wikimedia.org/wikipedia/en/5/5a/Designated_Survivor_titlecard.png",
				"Designated Survivor is a new show I started watching on Netflix that deals with a doomsday scenario for the United States. Out of the ashes, a new President by the name of Tom Kirkman is sworn in and is thrust into many international crises involving the United States. However, he does have a very strong White House staff which allows him to come to consensus solutions to these crises. Overall, I think this show is great for highlighting several key issues currently facing the United States and how bipartisanship is the solution to solving these problems."
			),
			new CarouselItem(
				"Last Week Tonight with John Oliver",
				"https://i.pinimg.com/originals/cc/3a/4b/cc3a4b87c27834f90dc74286a4c10f63.jpg",
				"Last Week Tonight with John Oliver is a show a late night TV show with British comedian John Oliver. The show highlights issues that may not be on the forefront of daily news but are extremely important in resolving given the vast number of people they affect. Oliver does a great job of putting together a twenty minute evidence based narrative on the issue while seemlessly integrating comedic elements. Some of my favorite episodes are Civil Forfeiture, Predatory Lending, and Narendra Modi."
			),
			new CarouselItem(
				"Family Guy",
				"https://img3.hulu.com/user/v3/artwork/3c3c0f8b-7366-4d15-88ab-18050285978e?base_image_bucket_name=image_manager&base_image=a7c29589-82be-4867-9605-8e79bfb7dd14&size=400x600&format=jpeg",
				"Family Guy is one of my favorite comedy shows. It follows the interesting Griffin family in the town of Quahog, Rhode Island. The cutaway gags are a highlight of the show and some of the humor used is of the slapstick variety. Given that the show has been renewed for eighteen seasons, it is one of the most successful TV shows ever produced. I watch this show to get a good laugh in my free time."
			),
		]
	)
];

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSelectedCategory: ""
		};
		this.currentInformation = new CarouselInformation("", "", [new CarouselItem("", "", "")]);
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		this.currentInformation = carouselInformation.find(information => information.title === nextState.currentSelectedCategory);
		if (!this.currentInformation) {
			this.currentInformation = new CarouselInformation("", "", [new CarouselItem("", "", "")]);
		}
	}

	render() {
		return <div>
			<Header />
			<h2>About Me</h2>
			<ResponsiveContainer>
				<img responsiveWidth="3" src={"images/me.jpg"} alt={"Sidhant Puntambekar"} style={{width: "100%"}} />
				<p responsiveWidth="9" style={{margin: "10px"}}>
					Welcome to my portfolio website! My name is Sidhant Puntambekar and I am 
                    currently a freshman undergraduate at the University of Colorado, Boulder. I am currently majoring in Computer Science
                    and plan to minor in Molecular, Cellular, and Developmental Biology and Computational Biology. While my main passions are in the areas of Computer Science and
                    Molecular Biology, I am enfatuated with learning about all subject areas. Some of my other favorite activities are chess, 
                    reading up on military history, playing the guitar, playing the drums, and doing Tae Kwon Do. I also enjoy listening 
                    to music and watching movies.
				</p>
			</ResponsiveContainer>
			<br/>
			<h2>Slideshows</h2>
			<p>Select one of the options from the list in each category. These categories represent four of my favorite items.</p>
			<ResponsiveContainer>
				<div responsiveWidth="4" style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
					<SelectionList items={carouselInformation.map(information => information.title)} onSelection={category => this.setState({ ...this.state, currentSelectedCategory: category })} ariaLabel={"A list of buttons that make the carousel display my favorite items from the button's named category."} ariaControls={`carousel${carouselCounter - 1} categoryDescription`} />
				</div>
				<div responsiveWidth="8" style={{margin: "10px"}}>
					<Carousel title={this.currentInformation.title}>{
						this.currentInformation.items.map(item => <div key={item}>
							<h4>{item.name}</h4>
							<img src={item.imageUrl} alt={item.name} height={150} style={{maxWidth: "295px"}} />
							<p>{item.description}</p>
						</div>)
					}</Carousel>
				</div>
			</ResponsiveContainer>
			<p id={"categoryDescription"} style={{textAlign: "center", minHeight: "85px"}} aria-live={"polite"}>{this.currentInformation.description}</p>
			<br/>
			<Footer />
		</div>
	}

}

export default App