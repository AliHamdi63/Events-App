import Image from 'next/image'
import Link from 'next/link'

const AllEvents = ({ data }) => {

    return (
        <div className='events_page'>
            {data?.map(e => (
                <Link href={`/events/${e.id}`} key={e.id}>
                    <div className="card">
                        <Image src={e.image} width={400} height={400} alt={e.title} />
                        <h2>{e.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents