import works from "../_DB/works";

import Grill from "@/app/(index)/_components/grill/Grill";
import Container from "./components/container";

// Server action para obtener un work por id
async function getWorkById(id: string) {
    ("use server");
    return works.find((work) => work.id === id) || null;
}

const WorkDetail = async ({ params }: { params: { id: string } }) => {
    const work = await getWorkById(params.id);

    return (
        <main className="px-40 tablet:px-20 pb-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <Container work={work} />
        </main>
    );
};
export default WorkDetail;
