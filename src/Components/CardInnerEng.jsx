import React from "react";
import "../App.css";
import MapCardEng from "./MapCardEng";

const CardInnerEng = () => {
  const Info = [
    {
      name: "Mathematics",
      chapters: [
        {
          name: "Area under the curve",
          link: "https://www.youtube.com/watch?v=T7UYxyYOLOY&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX",
        },
        {
          name: "Definite integration",
          link: "https://www.youtube.com/watch?v=xeEjV7YAo1M&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=2",
        },
        {
          name: "Differential Equations",
          link: "https://www.youtube.com/watch?v=JdzU63Oe4Wg&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=3",
        },
        {
          name: "Vector Algebra",
          link: "https://www.youtube.com/watch?v=AuU-tUqZuC8&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=4",
        },
        {
          name: "3D Geometry",
          link: "https://www.youtube.com/watch?v=t_ABiQEA4c8&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=5",
        },
        {
          name: "Probability",
          link: "https://www.youtube.com/watch?v=sZSwBOMtChA&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=6",
        },
        {
          name: "Sets and Relations",
          link: "https://www.youtube.com/watch?v=0KCLAfpZ2zY&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=7",
        },
        {
          name: "Inequalities",
          link: "https://www.youtube.com/watch?v=BVNaeS8T5uQ&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=8",
        },
        {
          name: "Functions",
          link: "https://www.youtube.com/watch?v=qgk0a-W0LQ4&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=9",
        },
        {
          name: "Quadratic Equations",
          link: "https://www.youtube.com/watch?v=mv4mVz_ccWk&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=10",
        },
        {
          name: "Trigonometry",
          link: "https://www.youtube.com/watch?v=FTai93ssi1Q&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=11",
        },
        {
          name: "Trigonometric Equations",
          link: "https://www.youtube.com/watch?v=HmStb2FSRyw&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=12",
        },
        {
          name: "Sequences and Series",
          link: "https://www.youtube.com/watch?v=-rgM3Z2zF18&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=13",
        },
        {
          name: "Solutions of triangles",
          link: "https://www.youtube.com/watch?v=OJxqv6duMic&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=14",
        },
        {
          name: "Binomial theorem",
          link: "https://www.youtube.com/watch?v=eAMCL-mMmcY&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=15",
        },
        {
          name: "Permutations and Combinations",
          link: "https://www.youtube.com/watch?v=lmk1sJo0728&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=16",
        },
        {
          name: "Linear Programming",
          link: "https://www.youtube.com/watch?v=6lGUchGmkbs&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=17",
        },
        {
          name: "Complex Numbers",
          link: "https://www.youtube.com/watch?v=b7HhgvaFF5Q&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=18",
        },
        {
          name: "Straight Lines",
          link: "https://www.youtube.com/watch?v=Ah-JjIq2bQk&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=19",
        },
        {
          name: "Circles",
          link: "https://www.youtube.com/watch?v=qv7YTq5THew&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=20",
        },
        {
          name: "Parabola",
          link: "https://www.youtube.com/watch?v=LsYvJc56yag&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=21",
        },
        {
          name: "Ellipse",
          link: "https://www.youtube.com/watch?v=8asqPexzYzc&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=22",
        },
        {
          name: "Hyperbola",
          link: "https://www.youtube.com/watch?v=Es6IoDqItuc&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=23",
        },
        {
          name: "Relations and Functions",
          link: "https://www.youtube.com/watch?v=__XBcqZl5oQ&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=24",
        },
        {
          name: "Inverse Trigonometric functions",
          link: "https://www.youtube.com/watch?v=03GvcVZM1kU&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=25",
        },
        {
          name: "Limits",
          link: "https://www.youtube.com/watch?v=2kWgjIYNeCg&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=26",
        },
        {
          name: "Continuity",
          link: "https://www.youtube.com/watch?v=dvzXDXDagaQ&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=27",
        },
        {
          name: "Differentiability",
          link: "https://www.youtube.com/watch?v=hNFQLLgocCU&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=28",
        },
        {
          name: "Methods of Differentiation",
          link: "https://www.youtube.com/watch?v=gf0-OEvLHG4&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=29",
        },
        {
          name: "Indefinite integration",
          link: "https://www.youtube.com/watch?v=kNusX-7Nhm0&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=30",
        },
        {
          name: "Applications of derivatives",
          link: "https://www.youtube.com/watch?v=jVeCha6iI84&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=31",
        },
        {
          name: "Matrices",
          link: "https://www.youtube.com/watch?v=yXJJGyHELz8&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=32",
        },
        {
          name: "Determinants",
          link: "https://www.youtube.com/watch?v=orc2FHIKZA8&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=33",
        },
        {
          name: "Statistics",
          link: "https://www.youtube.com/watch?v=fjgu_j2Xvjo&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=34",
        },
        {
          name: "Mathematical Reasoning",
          link: "https://www.youtube.com/watch?v=zbxVS7Y5NZc&list=PLYFlGICvnvLi-6VMmu2Safry84f-jXoOX&index=35",
        },
      ],
    },
    {
      name: "Physics",
      chapters: [
        {
          name: "Units and Dimensions",
          link: "https://www.youtube.com/watch?v=SyA3qCzgZ-c&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM",
        },
        {
          name: "Kinematics-1D",
          link: "https://www.youtube.com/watch?v=Jo0DUg7zj4Y&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=2",
        },
        {
          name: "Kinematics-2D",
          link: "https://www.youtube.com/watch?v=E0pdsnUCpPY&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=3",
        },
        {
          name: "Newtons Laws of Motion",
          link: "https://www.youtube.com/watch?v=yJ2RtjmId74&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=4",
        },
        {
          name: "Friction and Circular Motion",
          link: "https://www.youtube.com/watch?v=0iNkGKc0iSI&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=5",
        },
        {
          name: "Work Energy and Power",
          link: "https://www.youtube.com/watch?v=TtvXiSGy8hg&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=6",
        },
        {
          name: "Linear Momentum and Collision",
          link: "https://www.youtube.com/watch?v=fKF_Om9tgLE&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=7",
        },
        {
          name: "Rotational Motion-1",
          link: "https://www.youtube.com/watch?v=WiFReEDId44&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=8",
        },
        {
          name: "Rotational Motion-2",
          link: "https://www.youtube.com/watch?v=1FWZahO1lRU&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=9",
        },
        {
          name: "Gravitation",
          link: "https://www.youtube.com/watch?v=2jfFyNefgxg&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=10",
        },
        {
          name: "Properties of Solids",
          link: "https://www.youtube.com/watch?v=5ILswq2DH2U&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=11",
        },
        {
          name: "Fluids part-1",
          link: "https://www.youtube.com/watch?v=0svSSlBi0M0&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=12",
        },
        {
          name: "Fluids part-2",
          link: "https://www.youtube.com/watch?v=la5I41FNDMA&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=13",
        },
        {
          name: "Calorimeter and Thermal Expansion",
          link: "https://www.youtube.com/watch?v=nFdlZx9pVdQ&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=14",
        },
        {
          name: "Heat transfer and Ktg",
          link: "https://www.youtube.com/watch?v=INFz1ztreI4&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=15",
        },
        {
          name: "SHM",
          link: "https://www.youtube.com/watch?v=cIHYWkt3rdU&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=16",
        },
        {
          name: "Thermodynamics",
          link: "https://www.youtube.com/watch?v=rqD3aSV98hg&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=17",
        },
        {
          name: "Waves",
          link: "https://www.youtube.com/watch?v=0qzkApm0lJI&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=18",
        },
        {
          name: "Sound and Doppler Effect",
          link: "https://www.youtube.com/watch?v=azKdNEaNzBM&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=19",
        },
        {
          name: "Ray Optics",
          link: "https://www.youtube.com/watch?v=wuSOA3Wz1Xg&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=20",
        },
        {
          name: "Wave Optics",
          link: "https://www.youtube.com/watch?v=QS8ebCNC4H0&list=PLYFlGICvnvLi1GBjojJkTjJW6zW79SvbM&index=21",
        },
        {
          name: "Electric Charge and Electric field",
          link: "https://www.youtube.com/watch?v=8xIS1x3gPdo&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=1",
        },
        {
          name: "Electric Potential, Dipole, Energy",
          link: "https://www.youtube.com/watch?v=kGqZD992J80&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=2",
        },
        {
          name: "Capacitors",
          link: "https://www.youtube.com/watch?v=JCtOoJoKB-g&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=3",
        },
        {
          name: "Current Electricity",
          link: "https://www.youtube.com/watch?v=i9k8AcnUtTI&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE",
        },
        {
          name: "Magnetism",
          link: "https://www.youtube.com/watch?v=15KbQ4az1Pw&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=5",
        },
        {
          name: "Electro Magnetic Induction",
          link: "https://www.youtube.com/watch?v=aVplNKe0kxI&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=6",
        },
        {
          name: "Alternating Current",
          link: "https://www.youtube.com/watch?v=uGUhKuHLJCU&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=7",
        },
        {
          name: "Modern Physics-1",
          link: "https://www.youtube.com/watch?v=azqpdXRBTJ8&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=10",
        },
        {
          name: "Modern Physics-2",
          link: "https://www.youtube.com/watch?v=l0faAv-dK3g&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=11",
        },
        {
          name: "SemiConductors and Logic Gates",
          link: "https://www.youtube.com/watch?v=Ups-PKKpX_o&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=12",
        },
        {
          name: "Lens Theory",
          link: "https://www.youtube.com/watch?v=I3Brqz2eSNU&list=PLYFlGICvnvLhVoQLwMHf2XJPpjmdH9eiE&index=13",
        },
      ],
    },
    {
      name: "Chemistry",
      chapters: [
        {
          name: "Bio Molecules",
          link: "https://www.youtube.com/watch?v=xuKRxlEcJvM&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=10",
        },
        {
          name: "Polymers",
          link: "https://www.youtube.com/watch?v=k5g6LEaBOe0&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=11",
        },
        {
          name: "Practical Organic Chemistry",
          link: "https://www.youtube.com/watch?v=okCmFv1-iwk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=12",
        },
        {
          name: "Chemistry in Everyday Life",
          link: "https://www.youtube.com/watch?v=_2dOz0DxhYk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=13",
        },
        {
          name: "Mole Concept",
          link: "https://www.youtube.com/watch?v=_2dOz0DxhYk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=13",
        },
        {
          name: "Atomic Structures",
          link: "https://www.youtube.com/watch?v=1KX4IKAiv-s&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=15",
        },
        {
          name: "Periodic Classification",
          link: "https://www.youtube.com/watch?v=wk3JfK7MG64&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=16",
        },
        {
          name: "Chemical Bonding",
          link: "https://www.youtube.com/watch?v=tTNOFm7R1ik&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=17",
        },
        {
          name: "Hydrogen",
          link: "https://www.youtube.com/watch?v=V7ykQ5yiik0&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=18",
        },
        {
          name: "S-block Elements",
          link: "https://www.youtube.com/watch?v=aU6MPFdyjmo&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=19",
        },
        {
          name: "P block Elements-1",
          link: "https://www.youtube.com/watch?v=3nPuj7aXORk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=20",
        },
        {
          name: "P block Elements-2",
          link: "https://www.youtube.com/watch?v=3nPuj7aXORk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=26",
        },
        {
          name: "P block Elements-3",
          link: "https://www.youtube.com/watch?v=3nPuj7aXORk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=27",
        },
        {
          name: "D,F block elements",
          link: "https://www.youtube.com/watch?v=DixuT3rXBU0&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=21",
        },
        {
          name: "Metallurgy",
          link: "https://www.youtube.com/watch?v=DixuT3rXBU0&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=21",
        },
        {
          name: "Coordination Compounds",
          link: "https://www.youtube.com/watch?v=PmhmKykMTw0&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=23",
        },
        {
          name: "Salt Analysis",
          link: "https://www.youtube.com/watch?v=ld5sFkLjFUk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=24",
        },
        {
          name: "States Of Matter",
          link: "https://www.youtube.com/watch?v=c3y8lsScDOk&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=28",
        },
        {
          name: "Thermodynamics and Thermochemistry",
          link: "https://www.youtube.com/watch?v=I12kZCiPzrA&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=29",
        },
        {
          name: "Equilibrium",
          link: "https://www.youtube.com/watch?v=52l1pIP_aoE&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=30",
        },
        {
          name: "Solid State",
          link: "https://www.youtube.com/watch?v=EpMsJhL3ocY&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=31",
        },
        {
          name: "Dilute Solutions",
          link: "https://www.youtube.com/watch?v=_2HP8UQHQpI&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=32",
        },
        {
          name: "Electrochemistry",
          link: "https://www.youtube.com/watch?v=O3-2bcBXbEQ&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=33",
        },
        {
          name: "Chemical Kinetics",
          link: "https://www.youtube.com/watch?v=KHqACr07Cz8&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=34",
        },
        {
          name: "Surface Chemistry",
          link: "https://www.youtube.com/watch?v=0u8U62K7UPQ&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=35",
        },
        {
          name: "Environmental Chemistry",
          link: "https://www.youtube.com/watch?v=xOaYbVC_i4c&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=36",
        },
        {
          name: "Redox Reactions",
          link: "https://www.youtube.com/watch?v=d1sQg1Cql_o&list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3&index=37",
        },
        {
          name: "IUPAC Nomenclature",
          link: "https://www.youtube.com/watch?v=THB1vVT0m_Y&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=1",
        },
        {
          name: "Isomerism",
          link: "https://www.youtube.com/watch?v=ATutrjMKDis&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=2",
        },
        {
          name: "GOC",
          link: "https://www.youtube.com/watch?v=AaaD_yBu5Ks&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=3",
        },
        {
          name: "Hydrocarbons",
          link: "https://www.youtube.com/watch?v=I2DkWbJ7A4g&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=4",
        },
        {
          name: "Grignard Reagent",
          link: "https://www.youtube.com/watch?v=QdnAJDLEnYU&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=6",
        },
        {
          name: "Alcohols Phenols and Ethers",
          link: "https://www.youtube.com/watch?v=peJpiS2_nr0&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=7",
        },
        {
          name: "Aldehydes and Ketones",
          link: "https://www.youtube.com/watch?v=peJpiS2_nr0&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=7",
        },
        {
          name: "Carboxylic Acids",
          link: "https://www.youtube.com/watch?v=ssRlZ21RW8o&list=PLJyab0VQDBGVVN1",
        },
        {
          name: "Diazonium Salts",
          link: "https://www.youtube.com/watch?v=sJ2-3pe_-2Y&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=10",
        },
        {
          name: "Amines",
          link: "https://www.youtube.com/watch?v=eBQ8J37A1Dw&list=PLJyab0VQDBGVVN1SglQtKjnWvVeEDrusM&index=11",
        },
        {
          name: "Complete Organic Chemistry",
          link: "https://www.youtube.com/watch?v=kEUlG3_Ouxs",
        },
        {
          name: "Named Reactions",
          link: "https://www.youtube.com/watch?v=kEUlG3_Ouxs",
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="d-flex"
        style={{ flexDirection: "column", margin: "3rem" }}
      >
        <div className="text">
          <h1>Road to crack an engineering entrance test</h1>
          <p></p>
          <p>
            <h2>Key Point</h2>
            Yes, the journey is tough, but remember: diamonds are created under
            pressure. The long hours of study, the repeated failures in mock
            tests, and the sacrifices you make today are shaping a stronger,
            sharper, and more resilient version of yourself. Your efforts are
            not just for an exam—they are for a life of confidence,
            independence, and limitless possibilities.
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardEng key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerEng;
