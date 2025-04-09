import { getCabin,getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
    const { cabinId } = params;
    console.log(params)


    try {
      const [cabin, bookedDates] = await Promise.all([getCabin(Number(cabinId)), getBookedDatesByCabinId(Number(cabinId))])
      
      return Response.json({cabin, bookedDates});
    }catch(error){
        return Response.json({message: "Cabin not found"})
    }
    
}

