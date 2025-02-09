import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import languages from "../../assets/languages.jpg"
import dev from "../../assets/dev.jpg"
import dsa from "../../assets/dsa.jpg"
import aptitude from "../../assets/aptitude.jpg"
import comp from "../../assets/comp.jpg"
import "./Engineering.css"
import SideBar from '../SideBar/SideBar'
const Enginnering = () => {

    const examsDetails = [
        {
            key : 1,
            CardImage: languages,
            CardName: "Languages",
            CardBody: "Programming Languages",
        },
        {
            key : 2,
            CardImage: dev,
            CardName: "Development",
            CardBody: "Development",
        }
        ,
        {
            key : 3,
            CardImage: comp ,
            CardName: "Computer",
            CardBody: "Computer Subjects",
        },

        {
            key : 4,
            CardImage: dsa,
            CardName: "DSA",
            CardBody: "DSA",
        },
        {
            key : 5,
            CardImage: aptitude,
            CardName: "Aptitude",
            CardBody: "Aptitude and Reasoning",
        }
    ]

    
    return (
        <>
       
        <div className="flex-main-eng" >
            <h1>Enginnering</h1>
            {examsDetails && examsDetails.map((card) => {
                return (
                    <Card card={card} />
                )
            })}
        </div>
        </>
    )
}

export default Enginnering