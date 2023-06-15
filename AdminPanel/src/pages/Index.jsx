import { Home } from "../assets/pages/home";
import { Leftbar } from "../hooks/Leftbar";
import { Top } from "../hooks/top";

export const Index = () => {


    return (
        <>
            <Top />
            <section className="container">
                <Leftbar />
                <Home/>
            </section>

        </>
    );
};