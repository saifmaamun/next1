import image1 from "../../assets/ace.jpg"
import Image from "next/image";


const News = () => {
    return (
        <div>
            <h1>news</h1>
            <Image className="mx-auto" src={image1} alt="Ace pic" width={500} height={500} />
        </div>
    );
};

export default News;