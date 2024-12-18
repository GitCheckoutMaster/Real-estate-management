/* eslint-disable no-unused-vars */
import React from "react";
import luffy from "../assets/luffy.png";
import instagram from "../assets/ig-instagram-icon.png";
import twitter from "../assets/twitter-color-icon.png";
import gmail from "../assets/gmail-icon.png";
import linkedin from "../assets/linkedin-app-icon.png";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import save from "../assets/saved-icon.png";
import { useSelector } from "react-redux";

const Profile = () => {

	const isAdmin = useSelector(state => state.auth.userData.isAdmin);

	const social = [
		{
			item: instagram,
			link: "http://www.instagram.com/mistryjay993",
			text: "@mistryjay993",
		},
		{
			item: twitter,
			link: "http://www.instagram.com/mistryjay993",
			text: "twitter link"
		},
		{
			item: gmail,
			link: "http://www.instagram.com/mistryjay993",
			text: "jaymistry@gmail.com"
		},
		{
			item: linkedin,
			link: "http://www.instagram.com/mistryjay993",
			text: "Linkedin link"
		},
	]

	return (
		<div className=" bg-white text-black">
			<div className="flex flex-wrap max-w-screen-2xl mx-auto" name="root">
				<div className="h-full flex flex-wrap flex-col items-start p-4 gap-8" name="profile-page">
					<div className="h-full flex flex-col gap-8 p-10 mr-10" name="userInfo">
						<div className="" name="savedList">
							<h1 name="heading" className="text-4xl font-medium">
								User Information
							</h1>
						</div>
						<div className="flex flex-col justify-center items-center gap-4" name="profileImage">
							<img src={luffy} alt="" className="rounded-full h-36 w-3/5" />
							<span className="text-4xl font-light">Jay Mistry</span>
						</div>
						<div className="flex flex-col gap-4 text-2xl" name="userDetail">
							{
								social.map((item, index) => {
									return (
										<div className="flex flex-row gap-4 items-center" name="instagram" key={index}>
											<img src={item.item} alt="" className="h-6 w-6" />
											<a href={item.link} className="text-lg">{item.text}</a>
										</div>
									)
								})
							}
							<Link to="/updateProfile" className="bg-blue-400 rounded-lg text-center py-2 mt-4 w-full hover:tracking-widest hover:font-medium duration-500">Update Profile</Link>
						</div>
					</div>
					<div className="flex flex-col gap-14" name="savedList">
						<div className="flex flex-row justify-between" name="savedList">
							<h1 name="heading" className="text-4xl font-medium">
								Saved List
							</h1>
							{
								isAdmin &&
								<Link to="/add-property" className="bg-blue-400 rounded-lg text-center py-2 w-44 max-w-44 hover:tracking-widest hover:font-medium duration-500">Add Property</Link>
							}
						</div>
						<div name="list" className="flex flex-col gap-5">
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
				<div className="text-4xl font-light h-full" name="chatBox">
						Chatting is not provided yet
				</div>
			</div>
		</div>
	);
};

export default Profile;
