import AllEvents from '../../src/components/events/events-page';
import Head from 'next/head'


const EventsPage = ({ data }) => {
    // document.title = "Events"

    return (
        <>
            <Head>
                <title>All Events</title>
            </Head>

            <AllEvents data={data} />
        </>
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