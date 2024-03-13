import Image from 'next/image'
import Link from 'next/link'


const EventsCategoryPage = ({ data, pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map(event => {

                    // document.title = event.city + " Events"
                    return (
                        <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref>
                            {/* <a> */}
                            <Image src={event.image} width={300} height={300} alt={event.title} />
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            {/* </a> */}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default EventsCategoryPage;


export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(cate => {
        return {
            params: {
                categories: cate.id.toString(),
            }
        }
    });
    // console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.categories;

    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter(event => event.city === id)

    return {
        props: { data: data, pageName: id },
    }
}