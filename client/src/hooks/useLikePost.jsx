import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

const likePost = () => {
    const queryClient = useQueryClient();

    const {mutate:like, isPending: isLiking} = useMutation({
        mutationFn: async (placeId) => {
            try {
                const response = await fetch(`/api/places/like/${placeId}`,{method:'POST'});
                const data = await response.json();

                if(!response.ok) throw new Error(data.error || 'Something Went Wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['places']});
            queryClient.invalidateQueries({queryKey:['authUser']});
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return {like, isLiking};
}

export default likePost;