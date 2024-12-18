import Filter from "../components/Filter.jsx";
import Card from "../components/Card.jsx";
import Map from "../components/Map.jsx";

const ListPage = () => {
    return (
        <div name="root" className="flex flex-row max-w-screen-2xl mx-auto justify-between">
            <div name="listContainer" className="flex flex-col w-screen-md max-w-screen-xl">
                <div name="propertyList" className="flex flex-col gap-5 max-h-screen overflow-y-scroll scroll-m-4">
                    <div name="filter" className="mb-12">
                        <Filter />
                    </div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div name="mapContainer" className="w-full ml-20">
                <Map />
            </div>
        </div>
    );
}

export default ListPage;
