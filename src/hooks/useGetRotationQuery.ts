import { getRotationRouteApi } from "../utils/clientApi";
import { useQuery } from "@tanstack/react-query";

const useGetRotationQuery = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: () => getRotationRouteApi(),
  });
};

export default useGetRotationQuery;