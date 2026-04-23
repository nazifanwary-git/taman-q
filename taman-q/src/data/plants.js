import LettuceImg from "../assets/lettuce1.png"
import BokChoyImg from "../assets/bokchoy2.png"
import CeleryImg from "../assets/cellery3.png"

const plants = [
    {
        id: "lettuce",
        name: "Lettuce",
        latinName: "Lactuca sativa L.",
        familyName: "Asteraceae",
        commonName: "Garden Lettuce",
        image: LettuceImg,
        imageAlt: "it's lettuce!",
        description: "Lorem ipsum dolor sit amet consectetur. Pharetra massa tincidunt aliquam varius tellus blandit aliquam vel. Aliquet aliquet adipiscing turpis pulvinar ultrices nulla placerat amet. Non ullamcorper ultricies enim habitant in quis. Nunc lorem amet pellentesque mauris volutpat leo turpis risus vitae. Morbi elit proin mi sapien neque morbi sed. Pretium nulla blandit cursus non scelerisque lorem tortor. Massa egestas pellentesque integer at purus neque viverra."
    },
    {
        id: "bokchoy",
        name: "Bok Choy",
        latinName: "Brassica rapa L.",
        familyName: "Brassicaceae",
        commonName: "Chinese Cabbage, Pak Choi",
        image: BokChoyImg,
        imageAlt: "it's bokchoy!",
        description: "Lorem ipsum dolor sit amet consectetur. Pharetra massa tincidunt aliquam varius tellus blandit aliquam vel. Aliquet aliquet adipiscing turpis pulvinar ultrices nulla placerat amet. Non ullamcorper ultricies enim habitant in quis. Nunc lorem amet pellentesque mauris volutpat leo turpis risus vitae. Morbi elit proin mi sapien neque morbi sed. Pretium nulla blandit cursus non scelerisque lorem tortor. Massa egestas pellentesque integer at purus neque viverra."
    },
    {
        id: "celery",
        name: "Celery",
        latinName: "Lactuca sativa L.",
        familyName: "Apiaceae",
        commonName: "Celery, Wild Celery",
        image: CeleryImg,
        imageAlt: "it's celery!",
        description: "Lorem ipsum dolor sit amet consectetur. Pharetra massa tincidunt aliquam varius tellus blandit aliquam vel. Aliquet aliquet adipiscing turpis pulvinar ultrices nulla placerat amet. Non ullamcorper ultricies enim habitant in quis. Nunc lorem amet pellentesque mauris volutpat leo turpis risus vitae. Morbi elit proin mi sapien neque morbi sed. Pretium nulla blandit cursus non scelerisque lorem tortor. Massa egestas pellentesque integer at purus neque viverra."
    }
]

export default plants