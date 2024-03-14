import SingleEvent from '../../../src/components/events/SingleEvent';


const EventPage = ({ event }) => {

    return (
        <>
            <SingleEvent event={event} />
        </>
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