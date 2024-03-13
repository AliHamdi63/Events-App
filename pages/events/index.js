import Image from 'next/image'
import Link from 'next/link'



const EventsPage = ({ data }) => {
    // document.title = "Events"

    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {data.map(e => (
                    <Link href={`/events/${e.id}`} key={e.id}>
                        <Image src={e.image} width={200} height={200} alt={e.title} />
                        <h2>{e.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');

    return {
        props: {
            data: events_categories
        }
    }
}