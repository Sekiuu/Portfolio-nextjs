import { Features } from "../datas/data";
import Image from "next/image";

function FeatureCard() {

    const featuresCard = (max_array_lenght = 3,
        sectionClass = ' grid grid-cols-3 max-sm:grid-cols-2',
        elementClass = "p-5 flex flex-col items-center justify-center rounded-md text-center bg-greenL space-y-4",
        img_class = "w-1/4", h1_class = "text-2xl max-sm:text-xl", p_class = "text-black/50 max-sm:text-[12px]"
    ) =>
    (<section className={sectionClass + ' lg:w-5/6 md:w-[90%] gap-5 mx-auto p-5 bg-greenN rounded-xl shadow-md shadow-greenL/50'}>
        {Features.map((item, index) => (
            index < max_array_lenght ?
                <div key={index}
                    className={elementClass}>
                    <Image
                        src={item.img ?? '/images/icon/no_img.svg'}
                        width={128}
                        height={128}
                        alt=""
                        className={img_class}
                    />
                    <h1 className={h1_class}>{item.title}</h1>
                    <p className={p_class}>{item.des}</p>
                </div> : ''
        ))
        }
    </section >
    )

    return (
        <>
            {/* features */}
            {featuresCard(6, 'max-sm:hidden grid grid-cols-3 max-sm:grid-cols-2 max-sm:hidden')}
            {featuresCard(4, 'max-sm:hidden grid grid-cols-2 sm:hidden')}
        </>
    )
}

export default FeatureCard