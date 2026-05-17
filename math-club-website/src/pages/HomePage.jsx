import SectionOne from "../sections/SectionOne";
import SectionOneHalf from "../sections/SectionOneHalf";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";

export default function HomePage() {
    return (
        <div>
            <SectionOne />
            <SectionOneHalf />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}