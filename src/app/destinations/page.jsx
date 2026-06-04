import DestinationCard from "@/components/DestinationCard";


const DestinationsPage = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`
    );
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