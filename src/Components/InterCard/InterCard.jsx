import React from 'react'
import jeeImage from "../../assets/jee.jpg"
import neetImage from "../../assets/neet'.jpg"
import eamcetImage from "../../assets/eamcet.jpg"
import "./InterCard.css"
import { Card } from '../Card/Card'
const InterCard = ({field}) => {

    const examsDetails = [
        {
            CardImage: jeeImage,
            CardName: "Engineering",
            CardBody: "Exam for entrance test",
        },
        {
            CardImage: neetImage,
            CardName: "Medical",
            CardBody: "Exam for entrance test",
        }
        ,
        // {
        //     CardImage: eamcetImage,
        //     CardName: "JEE MAINS",
        //     CardBody: "Exam for entrance test",
        // }
    ]
    return (

        <div className="flex-main">
            {examsDetails && examsDetails.map((card) => {
                return(
                <Card card={card}/>)
            })}
        </div>
    )
}

export default InterCard