import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCancelBooking = () => {
    const queryClient = useQueryClient();
    const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
        mutationFn: async (bookingId) => {
            try {
                const response = await fetch(`/api/bookings/cancel/${bookingId}`, {
                    method: 'DELETE'
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || 'Something went wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success('Deleted Booking');
            queryClient.invalidateQueries({ queryKey: ['bookings'] });
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        }
    })

    return {deleteBooking, isDeleting};
}

export default useCancelBooking;