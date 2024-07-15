import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useBook = () => {
    const queryClient = useQueryClient();

    const { mutate: book, isPending: isBooking } = useMutation({
        mutationFn: async ({placeId, input}) => {
            try {
                let {from, totalDays, totalPeople, price} = input;
                from = new Date(from).toISOString();
                const response = await fetch(`/api/bookings/create/${placeId}`, {
                    method:'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({placeId, from, totalDays, totalPeople, price})
                })
                const data = await response.json();

                if (!response.ok) throw new Error(data.error || 'Something went wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success('Booking confirmed');
            queryClient.invalidateQueries({queryKey:['bookings']});
            queryClient.invalidateQueries({queryKey:['authUser']});
        },
        onError: (error) =>{
            toast.error(error.message);
        }
    });

    return {book, isBooking};
}

export default useBook;