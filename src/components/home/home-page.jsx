import Link from 'next/link'
import Image from 'next/image'


export const HomePage = ({ data }) => {

    return (
        <main>
            {data.map(cate => {
                return (
                    <Link href={`/events/${cate.id}`} key={cate.id}>
                        <Image src={cate.image} width={200} height={200} alt={cate.title} />
                        <h2>{cate.title}</h2>
                        <p>{cate.description}</p>
                    </Link>
                )
            })}
        </main>
    );
} 