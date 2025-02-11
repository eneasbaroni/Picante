import Grill from "@/app/(index)/_components/grill/Grill";
import WorkCard from "./workCard/WorkCard";

const works = [
    {
        superficie: "Algodón peinado",
        tecnica: "Mix de tintas",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Algodón peinado",
        tecnica: "Mix de tintas + Intervención",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Algodón peinado",
        tecnica: "Plastisol",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Bolsa de friselina",
        tecnica: "Tinta al agua",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Cartulina encapada",
        tecnica: "Tinta vinilica",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Chapa",
        tecnica: "Tinta epoxi",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Eco cuero",
        tecnica: "Tinta vinilica",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Papel autoadhesivo",
        tecnica: "Tinta vinilica",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Papel obra",
        tecnica: "Tinta al agua",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Totebag",
        tecnica: "Tinta plastisol",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
    {
        superficie: "Vidrio",
        tecnica: "Tinta epoxi",
        link: "./works/1",
        src: "/Images/works/work-01.png",
    },
];

const page = () => {
    //const [user, setuser] = useState("second");
    return (
        <main className=" px-40 tablet:px-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <h2>
                TRABAJOS
                <span
                    className="font-anton text-6xl tablet:text-4xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    style={{
                        WebkitTextStroke: "1px black",
                        WebkitTextFillColor: "white",
                    }}
                >
                    SELECCIONADOS
                </span>
            </h2>
            <div className="flex flex-wrap gap-2">
                {works.map((work, index) => (
                    <WorkCard work={work} index={index} key={index} />
                ))}
            </div>
        </main>
    );
};
export default page;
