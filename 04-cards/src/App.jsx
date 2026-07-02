import React from 'react'
import Card from './component/Card'
import Users from './component/Users'


const App = () => {

const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpghttps://www.keyweo.com/wp-content/uploads/2021/09/Diseno-sin-titulo-9.png",
    companyName: "Google",
    postedTime: "2 days ago",
    position: "Senior Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    postedTime: "5 days ago",
    position: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    postedTime: "1 week ago",
    position: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Amazon",
    postedTime: "3 days ago",
    position: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    companyName: "Netflix",
    postedTime: "2 weeks ago",
    position: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    postedTime: "4 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.clipartmax.com/png/middle/39-396698_tesla-logo-%5Beps-motors%5D-tesla-logo-icon.png",
    companyName: "Tesla",
    postedTime: "10 days ago",
    position: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Color-NVIDIA-Logo.jpg",
    companyName: "NVIDIA",
    postedTime: "3 weeks ago",
    position: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    companyName: "Adobe",
    postedTime: "6 days ago",
    position: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732135.png",
    companyName: "Uber",
    postedTime: "8 days ago",
    position: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Mumbai, India"
  }
];

console.log(jobs);
  return (
    <>
    <div className="parent">
      {jobs.map(function(elem){
        return <Card companyName={elem.companyName} 
        brandLogo={elem.brandLogo} 
        postedTime={elem.postedTime} 
        position={elem.position} 
        tag1={elem.tag1} 
        tag2={elem.tag2} 
        pay={elem.pay} 
        location={elem.location} 
        />
      })}
    </div>
    </>
  )
}

export default App