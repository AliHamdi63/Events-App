import Image from 'next/image'


const EventPage = ({ event }) => {

    return (
        <div>
            <h1>Single Page</h1>
            <div>
                <Image src={event.image} alt={event.title} width={600} height={300} />
                <h1>{event.title}</h1>
                {/* <h3>City: {event.city}</h3> */}
                <p>{event.description}</p>

            </div>
        </div>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const allPaths = allEvents.map(path => {
        return {
            params: {
                categories: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.id;

    const { allEvents } = await import('/data/data.json');
    const event = allEvents.find(event => event.id === id)


    return {
        props: {
            event: event
        }
    }
}