import QuickStartStepCard from "./QuickStartStepCard";
import Step1Img from "../../assets/Step 1 img.png"
import Step2Img from "../../assets/Step 2 img.png"
import Step3Img from "../../assets/Seeds unto Rockwool.png"
import Step4Img from "../../assets/Fill water tub.png"
import Step5Img from "../../assets/Step 5 Img.png"
import Step6Img from "../../assets/Step 6 Img.png"

export default function QuickStartStep() {
    return (
        <ol className="space-y-8 list-none md:space-y-10">
            <QuickStartStepCard stepImg={Step1Img}
                imgAlt="cut rockwool into the size of 3 cm cubic"
                stepNumber="1"
                stepDescription="Use the cutter to cut the rockwool down to a size of 3 x 3 x 3 cm."
            />
            <QuickStartStepCard stepImg={Step2Img}
                imgAlt="tying fabric wicks into the netpot"
                stepNumber="2"
                stepDescription="Tie the fabric wick into the netpot. (Make sure the ends of the wick can came in contact with the water mixed nutrient solution)"
            />
            <QuickStartStepCard stepImg={Step3Img}
                imgAlt="planting seed unto rockwool"
                stepNumber="3"
                stepDescription="Dig holes on top of the rockwool (1 cm) and place seeds inside the holes."
            />
            <QuickStartStepCard stepImg={Step4Img}
                imgAlt="fill the water tub with a mixture of water and nutrient solution"
                stepNumber="4"
                stepDescription="Mix water and nutrient solution inside the water tub. (you can see the recommended mix ratio on the packaging of the nutrient solution)"
            />
            <QuickStartStepCard stepImg={Step5Img}
                imgAlt="prep the impraboard to support placed netpots atop the water tub"
                stepNumber="5"
                stepDescription="Drill a hole on the impraboard the size of the netpot's width. Place impraboard on top
of water tub."
            />
            <QuickStartStepCard stepImg={Step6Img}
                imgAlt="placed rockwools inside the netpot, proceed to place the netpots atop the impraboard"
                stepNumber="6"
                stepDescription="Put seeded rockwool inside the netpot, then put the netpot on the impraboard.
Congratulations, you've just mastered basic hydroponics!"
            />
        </ol>
    )
}