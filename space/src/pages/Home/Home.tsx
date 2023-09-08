import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import Progress from "../../components/Progress";
import classes from "./Home.module.css";
const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];
export const Home = () => {
    const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
    return (
        <>
        <section className={classes.home}>
            <Header />
            <div className={classes.container}>
                <div className="content">
                    <h2 className={classes.subtitle}>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className={classes.main_title}>SPACE</h1>
                    <p className={classes.description}>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p> 
                    {testData.map((item, idx) => (
        <Progress key={idx} bgcol={item.bgcolor} completed={completed} />
      ))}
                </div>
                <div className={classes.explore}>
                   <p className={classes.explore__text}>explore</p> 
                </div>
            </div>
           
        </section>
        
        </>
    )
}