import Image from 'next/image'
import Link from 'next/link'

const CategoryEvent = ({ data, pageName }) => {
    return (
        <div className='cate_events'>
            <h1>Events in {pageName}</h1>

            <div className="content">
                {data.map(event => {
                    // document.title = event.city + " Events"
                    return (
                        <Link key={event.id} href={`/events/${event.city}/${event.id}`} legacyBehavior>
                            <div className='card'>
                                <Image src={event.image} width={300} height={300} alt={event.title} />
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryEvent