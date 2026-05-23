import SectionOne from "../sections/SectionOne";
import SectionOneHalf from "../sections/SectionOneHalf";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";
import Modal from "../components/modal";

export default function HomePage() {
    return (
        <div>
            <SectionOne />
            <SectionOneHalf />
            <SectionTwo />
            <SectionFour />
            <Modal />
        </div>
    )
}