import Link from "next/link";
import works from "../_DB/works";

import Grill from "@/app/(index)/_components/grill/Grill";

// Server action para obtener un work por id
export async function getWorkById(id: string) {
    ("use server");
    return works.find((work) => work.id === id) || null;
}

const WorkDetail = async ({ params }: { params: { id: string } }) => {
    const work = await getWorkById(params.id);

    return (
        <main className="px-40 tablet:px-20 pb-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <h2 className="mobile:mt-12">{work?.title.toUpperCase()} </h2>

            <div className="w-full flex flex-row mobile:flex-col gap-2 flex-wrap mt-8 text-center items-stretch">
                <div className="w-[calc(100%/2-0.25rem)] mobile:w-full flex flex-col justify-center items-center bg-black text-white p-4 tablet:text-lg mobile:text-sm">
                    <p className="text-white">Tinta: {work?.tint}</p>
                    <p className="text-white">Superficie: {work?.surface}</p>
                    <p className="text-base text-white tablet:text-lg mobile:text-sm">
                        {work?.description}
                    </p>
                </div>

                {work?.images.map((image, index) => (
                    <div
                        className="w-[calc(100%/2-0.25rem)] mobile:w-full bg-black aspect-[3/2] hover:p-2 transition-all duration-300 group"
                        key={index}
                    >
                        <img
                            src={`/Images/works/${work?.id}/${image}`}
                            alt={`${work?.title} - ${index + 1}`}
                            className="w-full  h-full object-cover group-hover:rounded-2xl transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
            <Link
                href="/works"
                className="w-1/4 mobile:w-1/2 h-12 m-auto border border-black p-4 mt-10 text-center relative group"
            >
                <p className="absolute w-full font-anton top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    VOLVER A OBRAS
                </p>
                <div className="absolute left-0 bottom-0 w-full h-[0%] bg-pinky group-hover:h-full group-hover:top-0 transition-all duration-300 z-0"></div>
            </Link>
            <Link
                href="/"
                className="w-1/4 mobile:w-1/2 h-12 m-auto border border-black p-4 mt-4 text-center relative group"
            >
                <p className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-anton">
                    BACK TO HOME
                </p>
                <div className="absolute left-0 bottom-0  w-full h-[0%] bg-pinky group-hover:h-full group-hover:top-0 transition-all duration-300 z-0"></div>
            </Link>
        </main>
    );
};
export default WorkDetail;
