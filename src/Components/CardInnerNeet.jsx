import React from "react";
import "../App.css";
import MapCardEng from "./MapCardEng";
import MapCardNeet from "./MapCardNeet";

const CardInnerNeet = () => {
  const Info = [
    {
      name: "Biology",
      chapters: [
        {
          name: "Biological Classification",
          link: "https://youtube.com/playlist?list=PLWG6JtoAgJecOwqG9knUD9UMDTQTHVZpg&si=WmfM4bA55g3pD_sP",
        },
        {
          name: "Sexual Reproduction in flowering plants",
          link: "https://youtube.com/playlist?list=PLarfY24Wx4CXfOuNG9BSB6W6gkW2YXHt6&si=wZHsJYdgyvxiefpg",
        },
        {
          name: "Cell the unit of life",
          link: "https://youtube.com/playlist?list=PLZXNUZWlT9p0Gp3fyqDyaJSmKLxMMuUWL&si=CNxaP1JLvosnDBU-",
        },
        {
          name: "Photo Synthesis in higher plants",
          link: "https://youtube.com/playlist?list=PLH_XyHMZ3aH0nB-74zhLTp7Supkeq-aE-&si=LIVX2yVFyL9JRJM8",
        },
        {
          name: "Plant development",
          link: "https://youtube.com/playlist?list=PLZ6UVMcVLJYfJDCHWrsunh-1LP8S8hluX&si=tbVSvpB2A36ycVWO",
        },
        {
          name: "Animal tissues",
          link: "https://youtube.com/playlist?list=PLsgHooHkqhhOJFTeDuRaSLf1FdIUvm4oq&si=VobKSfrQ4wbCVG6G",
        },

        {
          name: "Plant growth and development",
          link: "https://youtube.com/playlist?list=PLZ6UVMcVLJYfJDCHWrsunh-1LP8S8hluX&si=ZNF1QYr5sQ4hMpYn",
        },
        {
          name: "Respiration Part - 1",
          link: "https://www.youtube.com/live/2XGewCWLPNM?si=wK6HCKqOazflCTwf",
        },
        {
          name: "Respiration Part - 2",
          link: "https://www.youtube.com/live/BQTDbyXPNKo?si=RyiS-lD_f_f_0YKa",
        },

        {
          name: "Respiration Part - 3",
          link: "https://www.youtube.com/live/b4wCP1L17D0?si=6pXlNP_bdKu_88sf",
        },
        {
          name: "Respiration Part - 4",
          link: "https://youtu.be/8pvIC9lLiaM?si=D_FyuXZCvX3B2ydf",
        },
        {
          name: "Transport in plant part - 1",
          link: "https://www.youtube.com/live/RY_czUkARss?si=2ctLKVSUpxQXjUDR",
        },
        {
          name: "Transport in plant part - 2",
          link: "https://www.youtube.com/live/D6fwOCaPcdM?si=Gez6BMiZ1WCRR2Ov",
        },
        {
          name: "Transport in plant part - 3",
          link: "https://www.youtube.com/live/48tqxY8nku4?si=8SiYQqQrATUP4D3x",
        },
        {
          name: "Transport in plant part - 4",
          link: "https://www.youtube.com/live/CwTgM15FE00?si=qErn7fnlUAMAVwsb",
        },
        {
          name: "Transport in plant part - 5",
          link: "https://www.youtube.com/live/m3SCvH6s7xM?si=PJ4ktwKtE1Xp8iv9",
        },
        {
          name: "Mineral Nutrition part - 1",
          link: "https://www.youtube.com/live/NOd7IRfbpJM?si=AlDlsdeQLggcEg4O",
        },
        {
          name: "Mineral Nutrition part - 2",
          link: "https://www.youtube.com/live/Xjdil5Wjy38?si=uYzYAmdP1CdikoD8",
        },
        {
          name: "Morphology of flowering plants part - 1",
          link: "https://www.youtube.com/live/6wtlBvcVD64?si=r62_c_FN2scNlHNn",
        },
        {
          name: "Morphology of flowering plants part - 2",
          link: "https://www.youtube.com/live/3yZT1hbRSTY?si=8Kdq5irIJRJ0L_Ie",
        },
        {
          name: "Morphology of flowering plants part - 3",
          link: "https://www.youtube.com/live/S0EJqESN8bU?si=_g9qOvlIUmgqBayg",
        },
        {
          name: "Anatomy part - 1",
          link: "https://www.youtube.com/live/fOv-sYPhDtY?si=NV-IvhuFb9_W7xio",
        },
        {
          name: "Anatomy part - 2",
          link: "https://www.youtube.com/live/wztYviBfZFI?si=Wogw23_f7imik7SU",
        },
        {
          name: "Anatomy part - 3",
          link: "https://www.youtube.com/live/FBQK977XTko?si=F7Ev07aupbATyus_",
        },
        {
          name: "Animal Kindom part - 1",
          link: "https://www.youtube.com/live/am2gmnWCqVM?si=M36UfKFyq2aDJ4hd",
        },
        {
          name: "Animal Kindom part - 2",
          link: "https://www.youtube.com/live/NjlT93Yqzxo?si=w65RFtqz-2ayHPQl",
        },
        {
          name: "Animal Kindom part - 3",
          link: "https://www.youtube.com/live/6yEuZOE0Xw0?si=oklrlfrlUruRrPG6",
        },
        {
          name: "Animal Kindom part - 4",
          link: "https://www.youtube.com/live/k8tHdJl_HpY?si=JDAJK4AlmkuKtohH",
        },
        {
          name: "Cockroach part - 1",
          link: "https://www.youtube.com/live/F69b7U9Uwjc?si=KZuZLk7yokB_fp8K",
        },
        {
          name: "Cockroach part - 2",
          link: "https://www.youtube.com/live/iSWTO8jG1tM?si=LeSLbfcT67KXYRC0",
        },
        {
          name: "Human Reproductive System",
          link: "https://youtube.com/playlist?list=PLJV4ZbVOUFSDL_FNi_SL-d7iViKMKhGp1&si=KnQgv0PxOi_ByJBPp",
        },
        {
          name: "",
          link: "https://youtube.com/playlist?list=PLsgHooHkqhhOlZkXvIXwXG4XljRq0tJit&si=UzUormmXStjv-C6n",
        },
        {
          name: "Applications of Biotechnology part - 1",
          link: "https://www.youtube.com/live/GWdjgk7xRSE?si=Z0665ypJCm9MYKVy",
        },
        {
          name: "Applications of Biotechnology part - 2",
          link: "https://www.youtube.com/live/ORExtmxq_4k?si=ViZh04hFnXykicCd",
        },
        {
          name: "Applications of Biotechnology part - 3",
          link: "https://www.youtube.com/live/unJxnlQfXsU?si=MlVIgjrJiUVoqNHV",
        },
        {
          name: "Applications of Biotechnology part - 4",
          link: "https://www.youtube.com/live/HxQVurDa0D0?si=mGwzLKDPX17kASOk",
        },
        {
          name: "Organism and population part - 1",
          link: "https://www.youtube.com/live/3LpnsXbQxOQ?si=CZh3WpHgDwuXmqal",
        },
        {
          name: "Organism and population part - 2",
          link: "https://www.youtube.com/live/RuPr3dxu2sM?si=eBZibXLwAzN5h7HZ",
        },
        {
          name: "Organism and population part - 3",
          link: "https://www.youtube.com/live/2GkMXmlEQ94?si=Le7T44z65qM7psPn",
        },
        {
          name: "Organism and population part - 4",
          link: "https://www.youtube.com/live/Q49s8uHjeXI?si=nbIeYL33159sobn_",
        },

        {
          name: "Organism and population part - 5",
          link: "https://www.youtube.com/live/QtP7oqHWkYc?si=uMII3yibcG6yPwOI",
        },
        {
          name: "Ecosystem part - 1",
          link: "https://www.youtube.com/live/UgV8Jfpa8ek?si=wud12URfCb_BmoyG",
        },
        {
          name: "Ecosystem part - 2",
          link: "https://www.youtube.com/live/DErB-tStheA?si=aMddiFaYbbyGz-ez",
        },
        {
          name: "Ecosystem part - 3",
          link: "https://www.youtube.com/live/FFkAiMS2E30?si=KRJPmQd65PXNN3wx",
        },
        {
          name: "Ecosystem part - 4",
          link: "https://www.youtube.com/live/rNmiADB0qnM?si=qaRBBur8EDXLT2nP",
        },
        {
          name: "Bio diversity and conversation part - 1",
          link: "https://www.youtube.com/live/Z1LbnT7bL6I?si=X8_ca67XzrCcQOr8",
        },
        {
          name: "Bio diversity and conversation part - 2",
          link: "https://www.youtube.com/live/3nXF2zZ6lWg?si=rM-DuqtcrYXXCoAj",
        },
        {
          name: "Cell cycle and cell division part - 1",
          link: "https://www.youtube.com/live/BcAJ4uaESxA?si=T23E-1m4WaWGYJII",
        },
        {
          name: "Cell cycle and cell division part - 2",
          link: "https://www.youtube.com/live/RnHD2LixauM?si=V5zrvaGwPYA_Tnul",
        },
        {
          name: "Chikungunya and Dengue",
          link: "https://www.youtube.com/live/wa3tfk0LY5k?si=ooD_e9N09CyVFJ9D",
        },
        {
          name: "Plant Families",
          link: "https://www.youtube.com/live/OLYzw0EXbXY?si=3eYOykuv53jlDog7",
        },
        {
          name: "Frog",
          link: "https://www.youtube.com/live/DcI7zimc0fY?si=U-u4-gAZ8t_7R0hb",
        },
        {
          name: "Basics of Genetics",
          link: "https://youtube.com/playlist?list=PLCFbYbAtcHqvjvoWQn_Mx1Girm0VP-CUu&si=a3FKscq_jh8Rj9g7",
        },
        {
          name: "Structure of DNA",
          link: "https://youtube.com/playlist?list=PLCFbYbAtcHqu882aIBxxXqQvEonAXpaWx&si=GdpVlwK8OlHMYBhe",
        },
        {
          name: "Microbes in Human Welfare",
          link: "https://www.youtube.com/live/TfHF2RZFqjY?si=CbQWuNOFhevfZR-Y",
        },
        {
          name: "Environmental issues",
          link: "https://www.youtube.com/live/S2Zzg7APjOI?si=DOlT_O6-v2NgNkW5",
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
        style={{ flexDirection: "column"}}
      >
        <div className="text">
          <h1>Road to crack Neet</h1>
          <p>
            Cracking NEET (National Eligibility cum Entrance Test) is a
            significant milestone for students aspiring to pursue a career in
            medicine. To motivate students, it's essential to emphasize the
            value of their goal. Becoming a doctor is not just about achieving
            personal success; it's about contributing to society by saving lives
            and improving healthcare.
          </p>
          <p>
            <h2>Key Point</h2>
            "Consistency and self-discipline are the keys to cracking NEET and
            achieving the dream of a medical career."
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardNeet key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerNeet;
