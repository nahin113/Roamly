import DestinationCard from "@/components/DestinationCard";


const DestinationsPage = async () => {
    const res = await fetch("http://localhost:1003/destination");
    const destinationsData = await res.json()
    return (
        <div className="container mx-auto">
            <h1>All Destinations</h1>
            <div className="grid grid-cols-3 gap-6">
                {destinationsData.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)}
            </div>
        </div>
    );
};

export default DestinationsPage;