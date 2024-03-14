import CategoryEvent from '../../../src/components/events/categoryEvent';


const EventsCategoryPage = ({ data, pageName }) => {
    return (
        <>
            <CategoryEvent data={data} pageName={pageName} />
        </>
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